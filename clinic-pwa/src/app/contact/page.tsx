import { Metadata } from 'next'
import { Phone, Mail, Clock, MessageCircle } from 'lucide-react'
import { ContactForm, ClinicLocations } from '@/components/contact'
import { FadeIn } from '@/components/animations/fade-in'
import { GradientText } from '@/components/ui/gradient-text'
import { GlassCard } from '@/components/ui/glass-card'

export const metadata: Metadata = {
    title: 'Contact Us',
    description:
        'Get in touch with Dr. Anshita Singh Rathore. Find our clinic locations, phone numbers, and contact form.',
}

const quickContactInfo = [
    {
        icon: Phone,
        label: 'Phone',
        value: '+91 76973 47683',
        href: 'tel:+917697347683',
    },
    {
        icon: Mail,
        label: 'Email',
        value: 'info@dranshita.com',
        href: 'mailto:info@dranshita.com',
    },
    {
        icon: Clock,
        label: 'Working Hours',
        value: 'Mon-Sat: 10 AM - 7 PM',
        href: null,
    },
    {
        icon: MessageCircle,
        label: 'WhatsApp',
        value: 'Chat with us',
        href: 'https://wa.me/917697347683',
    },
]

export default function ContactPage() {
    return (
        <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-emerald-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-primary-950/20 min-h-screen">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <FadeIn>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400 mb-4">
                            📞 Get in Touch
                        </span>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1 className="heading-lg mb-4">
                            Contact <GradientText>Us</GradientText>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400">
                            Have questions about our treatments or want to schedule a
                            consultation? We&apos;re here to help you on your healing journey.
                        </p>
                    </FadeIn>
                </div>

                {/* Quick Contact Info */}
                <FadeIn delay={0.3}>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
                        {quickContactInfo.map((item) => {
                            const Icon = item.icon
                            const content = (
                                <GlassCard className="text-center hover:scale-105 transition-transform cursor-pointer">
                                    <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center mx-auto mb-3">
                                        <Icon className="w-6 h-6 text-primary-600 dark:text-primary-400" />
                                    </div>
                                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mb-1">
                                        {item.label}
                                    </p>
                                    <p className="font-semibold text-zinc-900 dark:text-zinc-100 text-sm">
                                        {item.value}
                                    </p>
                                </GlassCard>
                            )

                            return item.href ? (
                                <a
                                    key={item.label}
                                    href={item.href}
                                    target={item.href.startsWith('http') ? '_blank' : undefined}
                                    rel={
                                        item.href.startsWith('http')
                                            ? 'noopener noreferrer'
                                            : undefined
                                    }
                                >
                                    {content}
                                </a>
                            ) : (
                                <div key={item.label}>{content}</div>
                            )
                        })}
                    </div>
                </FadeIn>

                {/* Main Content */}
                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <FadeIn delay={0.4}>
                        <ContactForm />
                    </FadeIn>

                    {/* Clinic Locations */}
                    <FadeIn delay={0.5} direction="left">
                        <ClinicLocations />
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}
