'use client'

import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import {
    User,
    Mail,
    Phone,
    MessageSquare,
    Send,
    Loader2,
    CheckCircle,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { GlassCard } from '@/components/ui/glass-card'
import { toast } from 'sonner'

const contactSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email'),
    phone: z.string().min(10, 'Phone number must be at least 10 digits'),
    subject: z.string().min(3, 'Subject is required'),
    message: z.string().min(20, 'Message must be at least 20 characters'),
})

type ContactFormData = z.infer<typeof contactSchema>

export function ContactForm() {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSuccess, setIsSuccess] = useState(false)

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<ContactFormData>({
        resolver: zodResolver(contactSchema),
    })

    const onSubmit = async (data: ContactFormData) => {
        setIsSubmitting(true)

        // Simulate API call
        await new Promise((resolve) => setTimeout(resolve, 1500))

        console.log('Contact form submitted:', data)
        toast.success('Message sent successfully! We will get back to you soon.')

        setIsSubmitting(false)
        setIsSuccess(true)
        reset()

        setTimeout(() => setIsSuccess(false), 3000)
    }

    return (
        <GlassCard>
            <h2 className="text-2xl font-bold text-zinc-900 dark:text-zinc-100 mb-6">
                Send Us a Message
            </h2>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                        <Label htmlFor="name" className="mb-2 block">
                            Full Name
                        </Label>
                        <div className="relative">
                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                            <Input
                                id="name"
                                placeholder="Your full name"
                                className="pl-10 h-12"
                                {...register('name')}
                            />
                        </div>
                        {errors.name && (
                            <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
                        )}
                    </div>

                    <div>
                        <Label htmlFor="phone" className="mb-2 block">
                            Phone Number
                        </Label>
                        <div className="relative">
                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                            <Input
                                id="phone"
                                placeholder="Your phone number"
                                className="pl-10 h-12"
                                {...register('phone')}
                            />
                        </div>
                        {errors.phone && (
                            <p className="text-red-500 text-sm mt-1">
                                {errors.phone.message}
                            </p>
                        )}
                    </div>
                </div>

                <div>
                    <Label htmlFor="email" className="mb-2 block">
                        Email Address
                    </Label>
                    <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                        <Input
                            id="email"
                            type="email"
                            placeholder="Your email address"
                            className="pl-10 h-12"
                            {...register('email')}
                        />
                    </div>
                    {errors.email && (
                        <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                    )}
                </div>

                <div>
                    <Label htmlFor="subject" className="mb-2 block">
                        Subject
                    </Label>
                    <div className="relative">
                        <MessageSquare className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                        <Input
                            id="subject"
                            placeholder="What is this regarding?"
                            className="pl-10 h-12"
                            {...register('subject')}
                        />
                    </div>
                    {errors.subject && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.subject.message}
                        </p>
                    )}
                </div>

                <div>
                    <Label htmlFor="message" className="mb-2 block">
                        Your Message
                    </Label>
                    <textarea
                        id="message"
                        placeholder="Tell us how we can help you..."
                        className="w-full px-4 py-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none min-h-[150px]"
                        {...register('message')}
                    />
                    {errors.message && (
                        <p className="text-red-500 text-sm mt-1">
                            {errors.message.message}
                        </p>
                    )}
                </div>

                <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting || isSuccess}
                    className="w-full gap-2"
                >
                    {isSubmitting ? (
                        <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            Sending...
                        </>
                    ) : isSuccess ? (
                        <>
                            <CheckCircle className="w-5 h-5" />
                            Message Sent!
                        </>
                    ) : (
                        <>
                            <Send className="w-5 h-5" />
                            Send Message
                        </>
                    )}
                </Button>
            </form>
        </GlassCard>
    )
}
