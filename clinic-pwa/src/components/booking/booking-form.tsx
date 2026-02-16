'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { format } from 'date-fns'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import {
    User,
    Mail,
    Phone,
    FileText,
    Calendar,
    Clock,
    MapPin,
    ArrowRight,
    ArrowLeft,
    CheckCircle,
    Loader2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { GlassCard } from '@/components/ui/glass-card'
import { GradientText } from '@/components/ui/gradient-text'
import { DatePicker } from './date-picker'
import { TimeSlots } from './time-slots'
import { ClinicSelector, clinics } from './clinic-selector'
import { toast } from 'sonner'

const bookingSchema = z.object({
    name: z.string().min(2, 'Name must be at least 2 characters'),
    email: z.string().email('Please enter a valid email'),
    phone: z
        .string()
        .min(10, 'Phone number must be at least 10 digits')
        .regex(/^[0-9]+$/, 'Phone number must contain only digits'),
    concern: z.string().min(10, 'Please describe your concern (min 10 characters)'),
})

type BookingFormData = z.infer<typeof bookingSchema>

const steps = [
    { id: 1, title: 'Clinic', icon: MapPin },
    { id: 2, title: 'Date & Time', icon: Calendar },
    { id: 3, title: 'Your Details', icon: User },
    { id: 4, title: 'Confirm', icon: CheckCircle },
]

export function BookingForm() {
    const [currentStep, setCurrentStep] = useState(1)
    const [selectedClinic, setSelectedClinic] = useState<string | undefined>()
    const [selectedDate, setSelectedDate] = useState<Date | undefined>()
    const [selectedTime, setSelectedTime] = useState<string | undefined>()
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isComplete, setIsComplete] = useState(false)

    const {
        register,
        handleSubmit,
        formState: { errors },
        getValues,
    } = useForm<BookingFormData>({
        resolver: zodResolver(bookingSchema),
    })

    const canProceed = () => {
        switch (currentStep) {
            case 1:
                return !!selectedClinic
            case 2:
                return !!selectedDate && !!selectedTime
            case 3:
                return true // Form validation will handle this
            default:
                return true
        }
    }

    const nextStep = () => {
        if (currentStep < 4 && canProceed()) {
            setCurrentStep(currentStep + 1)
        }
    }

    const prevStep = () => {
        if (currentStep > 1) {
            setCurrentStep(currentStep - 1)
        }
    }

    const onSubmit = async (data: BookingFormData) => {
        if (currentStep === 3) {
            nextStep()
            return
        }

        if (currentStep === 4) {
            setIsSubmitting(true)

            // Simulate API call
            await new Promise((resolve) => setTimeout(resolve, 2000))

            // Here you would normally send to your API
            console.log('Booking submitted:', {
                ...data,
                clinic: selectedClinic,
                date: selectedDate,
                time: selectedTime,
            })

            setIsSubmitting(false)
            setIsComplete(true)
            toast.success('Appointment booked successfully!')
        }
    }

    const selectedClinicData = clinics.find((c) => c.id === selectedClinic)

    if (isComplete) {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center py-12"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-24 h-24 bg-gradient-to-br from-primary-500 to-emerald-600 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                    <CheckCircle className="w-12 h-12 text-white" />
                </motion.div>

                <h2 className="heading-md mb-4">Appointment Confirmed!</h2>
                <p className="text-zinc-600 max-w-md mx-auto mb-8">
                    Your appointment has been booked successfully. You will receive a
                    confirmation email and SMS shortly.
                </p>

                <GlassCard className="max-w-md mx-auto text-left">
                    <div className="space-y-3">
                        <div className="flex items-center gap-3">
                            <MapPin className="w-5 h-5 text-primary-500" />
                            <span>{selectedClinicData?.name}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Calendar className="w-5 h-5 text-primary-500" />
                            <span>{selectedDate && format(selectedDate, 'PPP')}</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Clock className="w-5 h-5 text-primary-500" />
                            <span>{selectedTime}</span>
                        </div>
                    </div>
                </GlassCard>

                <Button
                    className="mt-8"
                    onClick={() => {
                        setIsComplete(false)
                        setCurrentStep(1)
                        setSelectedClinic(undefined)
                        setSelectedDate(undefined)
                        setSelectedTime(undefined)
                    }}
                >
                    Book Another Appointment
                </Button>
            </motion.div>
        )
    }

    return (
        <div className="max-w-3xl mx-auto">
            {/* Progress Steps */}
            <div className="mb-8">
                <div className="flex items-center justify-between">
                    {steps.map((step, index) => {
                        const Icon = step.icon
                        const isActive = currentStep === step.id
                        const isCompleted = currentStep > step.id

                        return (
                            <div key={step.id} className="flex items-center">
                                <div className="flex flex-col items-center">
                                    <motion.div
                                        className={`w-12 h-12 rounded-full flex items-center justify-center border-2 transition-all ${isActive
                                            ? 'border-primary-500 bg-primary-500 text-white'
                                            : isCompleted
                                                ? 'border-primary-500 bg-primary-100 text-primary-600'
                                                : 'border-zinc-300 text-zinc-400'
                                            }`}
                                        animate={isActive ? { scale: [1, 1.1, 1] } : {}}
                                        transition={{ duration: 0.3 }}
                                    >
                                        {isCompleted ? (
                                            <CheckCircle className="w-6 h-6" />
                                        ) : (
                                            <Icon className="w-6 h-6" />
                                        )}
                                    </motion.div>
                                    <span
                                        className={`text-xs mt-2 font-medium ${isActive || isCompleted
                                            ? 'text-primary-600'
                                            : 'text-zinc-400'
                                            }`}
                                    >
                                        {step.title}
                                    </span>
                                </div>
                                {index < steps.length - 1 && (
                                    <div
                                        className={`flex-1 h-0.5 mx-2 ${isCompleted
                                            ? 'bg-primary-500'
                                            : 'bg-zinc-200'
                                            }`}
                                        style={{ minWidth: '40px' }}
                                    />
                                )}
                            </div>
                        )
                    })}
                </div>
            </div>

            {/* Form Content */}
            <form onSubmit={handleSubmit(onSubmit)}>
                <GlassCard>
                    <AnimatePresence mode="wait">
                        {/* Step 1: Clinic Selection */}
                        {currentStep === 1 && (
                            <motion.div
                                key="step1"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                            >
                                <h2 className="heading-sm mb-6">
                                    Select a <GradientText>Clinic</GradientText>
                                </h2>
                                <ClinicSelector
                                    value={selectedClinic}
                                    onChange={setSelectedClinic}
                                />
                            </motion.div>
                        )}

                        {/* Step 2: Date & Time */}
                        {currentStep === 2 && (
                            <motion.div
                                key="step2"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h2 className="heading-sm mb-6">
                                    Choose <GradientText>Date & Time</GradientText>
                                </h2>

                                <div>
                                    <Label className="mb-2 block">Select Date</Label>
                                    <DatePicker value={selectedDate} onChange={setSelectedDate} />
                                </div>

                                {selectedDate && (
                                    <motion.div
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                    >
                                        <Label className="mb-4 block">Select Time Slot</Label>
                                        <TimeSlots
                                            value={selectedTime}
                                            onChange={setSelectedTime}
                                            bookedSlots={['11:00', '14:30', '16:00']} // Demo: some slots booked
                                        />
                                    </motion.div>
                                )}
                            </motion.div>
                        )}

                        {/* Step 3: Personal Details */}
                        {currentStep === 3 && (
                            <motion.div
                                key="step3"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h2 className="heading-sm mb-6">
                                    Your <GradientText>Details</GradientText>
                                </h2>

                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <Label htmlFor="name" className="mb-2 block">
                                            Full Name
                                        </Label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                                            <Input
                                                id="name"
                                                placeholder="Enter your full name"
                                                className="pl-10 h-12"
                                                {...register('name')}
                                            />
                                        </div>
                                        {errors.name && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.name.message}
                                            </p>
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
                                                placeholder="Enter your phone number"
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

                                    <div className="md:col-span-2">
                                        <Label htmlFor="email" className="mb-2 block">
                                            Email Address
                                        </Label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-400" />
                                            <Input
                                                id="email"
                                                type="email"
                                                placeholder="Enter your email"
                                                className="pl-10 h-12"
                                                {...register('email')}
                                            />
                                        </div>
                                        {errors.email && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.email.message}
                                            </p>
                                        )}
                                    </div>

                                    <div className="md:col-span-2">
                                        <Label htmlFor="concern" className="mb-2 block">
                                            Health Concern
                                        </Label>
                                        <div className="relative">
                                            <FileText className="absolute left-3 top-3 w-5 h-5 text-zinc-400" />
                                            <textarea
                                                id="concern"
                                                placeholder="Briefly describe your health concern..."
                                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-zinc-200 bg-white focus:ring-2 focus:ring-primary-500 focus:border-transparent resize-none min-h-[100px]"
                                                {...register('concern')}
                                            />
                                        </div>
                                        {errors.concern && (
                                            <p className="text-red-500 text-sm mt-1">
                                                {errors.concern.message}
                                            </p>
                                        )}
                                    </div>
                                </div>
                            </motion.div>
                        )}

                        {/* Step 4: Confirmation */}
                        {currentStep === 4 && (
                            <motion.div
                                key="step4"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                className="space-y-6"
                            >
                                <h2 className="heading-sm mb-6">
                                    Confirm <GradientText>Appointment</GradientText>
                                </h2>

                                <div className="space-y-4">
                                    <div className="p-4 rounded-lg bg-zinc-50 space-y-3">
                                        <h3 className="font-semibold text-zinc-900">
                                            Appointment Details
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                            <div className="flex items-center gap-2">
                                                <MapPin className="w-4 h-4 text-primary-500" />
                                                <span>{selectedClinicData?.name}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4 text-primary-500" />
                                                <span>
                                                    {selectedDate && format(selectedDate, 'PPP')}
                                                </span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Clock className="w-4 h-4 text-primary-500" />
                                                <span>{selectedTime}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="p-4 rounded-lg bg-zinc-50 space-y-3">
                                        <h3 className="font-semibold text-zinc-900">
                                            Patient Details
                                        </h3>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                                            <div className="flex items-center gap-2">
                                                <User className="w-4 h-4 text-primary-500" />
                                                <span>{getValues('name')}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Phone className="w-4 h-4 text-primary-500" />
                                                <span>{getValues('phone')}</span>
                                            </div>
                                            <div className="flex items-center gap-2 md:col-span-2">
                                                <Mail className="w-4 h-4 text-primary-500" />
                                                <span>{getValues('email')}</span>
                                            </div>
                                            <div className="flex items-start gap-2 md:col-span-2">
                                                <FileText className="w-4 h-4 text-primary-500 mt-0.5" />
                                                <span>{getValues('concern')}</span>
                                            </div>
                                        </div>
                                    </div>

                                    <p className="text-sm text-zinc-500">
                                        By confirming, you agree to our cancellation policy. You can
                                        reschedule up to 2 hours before your appointment.
                                    </p>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="flex justify-between mt-8 pt-6 border-t border-zinc-200">
                        <Button
                            type="button"
                            variant="outline"
                            onClick={prevStep}
                            disabled={currentStep === 1}
                            className="gap-2"
                        >
                            <ArrowLeft className="w-4 h-4" />
                            Back
                        </Button>

                        {currentStep < 4 ? (
                            <Button
                                type={currentStep === 3 ? 'submit' : 'button'}
                                onClick={currentStep !== 3 ? nextStep : undefined}
                                disabled={!canProceed()}
                                className="gap-2"
                            >
                                Next
                                <ArrowRight className="w-4 h-4" />
                            </Button>
                        ) : (
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="gap-2 bg-gradient-to-r from-primary-500 to-emerald-600"
                            >
                                {isSubmitting ? (
                                    <>
                                        <Loader2 className="w-4 h-4 animate-spin" />
                                        Booking...
                                    </>
                                ) : (
                                    <>
                                        <CheckCircle className="w-4 h-4" />
                                        Confirm Booking
                                    </>
                                )}
                            </Button>
                        )}
                    </div>
                </GlassCard>
            </form>
        </div>
    )
}
