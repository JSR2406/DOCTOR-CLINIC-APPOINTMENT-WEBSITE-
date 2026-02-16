import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import {
    ChevronRight,
    CheckCircle,
    HelpCircle,
    Calendar,
    ArrowRight,
    ArrowLeft,
} from 'lucide-react'
import { services, getService } from '@/lib/data/services'
import { FadeIn } from '@/components/animations/fade-in'
import { GradientText } from '@/components/ui/gradient-text'
import { GlassCard } from '@/components/ui/glass-card'
import { AnimatedButton } from '@/components/ui/animated-button'
import {
    StaggerContainer,
    StaggerItem,
} from '@/components/animations/stagger-container'

interface Props {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const service = getService(slug)

    if (!service) {
        return { title: 'Service Not Found' }
    }

    return {
        title: service.title,
        description: service.shortDescription,
    }
}

export async function generateStaticParams() {
    return services.map((service) => ({
        slug: service.slug,
    }))
}

export default async function ServicePage({ params }: Props) {
    const { slug } = await params
    const service = getService(slug)

    if (!service) {
        notFound()
    }

    const Icon = service.icon

    return (
        <>
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-emerald-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-primary-950/20">
                <div className="container-custom">
                    {/* Breadcrumb */}
                    <FadeIn>
                        <nav className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-8">
                            <Link
                                href="/"
                                className="hover:text-primary-600 transition-colors"
                            >
                                Home
                            </Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link
                                href="/services"
                                className="hover:text-primary-600 transition-colors"
                            >
                                Services
                            </Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-zinc-900 dark:text-zinc-100">
                                {service.title}
                            </span>
                        </nav>
                    </FadeIn>

                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <FadeIn>
                                <div
                                    className={`w-20 h-20 rounded-2xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-xl`}
                                >
                                    <Icon className="w-10 h-10 text-white" />
                                </div>
                            </FadeIn>

                            <FadeIn delay={0.1}>
                                <h1 className="heading-lg">
                                    <GradientText>{service.title}</GradientText>
                                </h1>
                            </FadeIn>

                            <FadeIn delay={0.2}>
                                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    {service.description}
                                </p>
                            </FadeIn>

                            <FadeIn delay={0.3}>
                                <Link href="/book">
                                    <AnimatedButton size="lg" className="gap-2">
                                        <Calendar className="w-5 h-5" />
                                        Book Consultation
                                        <ArrowRight className="w-5 h-5" />
                                    </AnimatedButton>
                                </Link>
                            </FadeIn>
                        </div>

                        {/* Right - Benefits */}
                        <FadeIn delay={0.3} direction="left">
                            <GlassCard>
                                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
                                    Treatment Benefits
                                </h2>
                                <div className="space-y-4">
                                    {service.benefits.map((benefit, index) => (
                                        <div key={index} className="flex items-start gap-3">
                                            <div className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                                                <CheckCircle className="w-4 h-4 text-green-600 dark:text-green-400" />
                                            </div>
                                            <p className="text-zinc-700 dark:text-zinc-300">{benefit}</p>
                                        </div>
                                    ))}
                                </div>
                            </GlassCard>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Conditions Treated */}
            <section className="section-padding bg-white dark:bg-zinc-950">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <FadeIn>
                            <h2 className="heading-md mb-4">
                                Conditions We <GradientText>Treat</GradientText>
                            </h2>
                            <p className="text-zinc-600 dark:text-zinc-400">
                                Our specialized treatment covers a wide range of conditions
                                within this category.
                            </p>
                        </FadeIn>
                    </div>

                    <StaggerContainer className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
                        {service.conditions.map((condition) => (
                            <StaggerItem key={condition}>
                                <div className="p-4 rounded-lg bg-zinc-50 dark:bg-zinc-900 text-center hover:bg-primary-50 dark:hover:bg-primary-900/20 transition-colors">
                                    <p className="text-sm font-medium text-zinc-700 dark:text-zinc-300">
                                        {condition}
                                    </p>
                                </div>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* FAQs */}
            <section className="section-padding bg-zinc-50 dark:bg-zinc-900">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <FadeIn>
                            <h2 className="heading-md mb-4">
                                Frequently Asked <GradientText>Questions</GradientText>
                            </h2>
                        </FadeIn>
                    </div>

                    <div className="max-w-3xl mx-auto space-y-4">
                        {service.faqs.map((faq, index) => (
                            <FadeIn key={index} delay={index * 0.1}>
                                <GlassCard>
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                                            <HelpCircle className="w-5 h-5 text-primary-600 dark:text-primary-400" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                                                {faq.question}
                                            </h3>
                                            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </div>
                                </GlassCard>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section-padding bg-gradient-to-r from-primary-600 to-emerald-600">
                <div className="container-custom text-center">
                    <FadeIn>
                        <h2 className="heading-md text-white mb-4">
                            Ready to Start Your Healing Journey?
                        </h2>
                        <p className="text-white/80 max-w-2xl mx-auto mb-8">
                            Book a consultation to discuss your {service.title.toLowerCase()}{' '}
                            treatment with Dr. Anshita.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link href="/book">
                                <AnimatedButton
                                    size="lg"
                                    className="bg-white text-primary-600 hover:bg-zinc-100 gap-2"
                                >
                                    <Calendar className="w-5 h-5" />
                                    Book Appointment
                                </AnimatedButton>
                            </Link>
                            <Link href="/services">
                                <AnimatedButton
                                    size="lg"
                                    variant="outline"
                                    className="border-white/30 text-white hover:bg-white/10 gap-2"
                                >
                                    <ArrowLeft className="w-5 h-5" />
                                    View All Services
                                </AnimatedButton>
                            </Link>
                        </div>
                    </FadeIn>
                </div>
            </section>
        </>
    )
}
