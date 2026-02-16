import { Metadata } from 'next'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { services } from '@/lib/data/services'
import { FadeIn } from '@/components/animations/fade-in'
import { GradientText } from '@/components/ui/gradient-text'
import { GlassCard } from '@/components/ui/glass-card'
import {
    StaggerContainer,
    StaggerItem,
} from '@/components/animations/stagger-container'

export const metadata: Metadata = {
    title: 'Our Services',
    description:
        'Comprehensive homeopathic treatment services for autoimmune diseases, thyroid disorders, PCOS, lifestyle disorders, skin conditions, and digestive issues.',
}

export default function ServicesPage() {
    return (
        <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-emerald-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-primary-950/20 min-h-screen">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <FadeIn>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400 mb-4">
                            🩺 Our Specializations
                        </span>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1 className="heading-lg mb-4">
                            Comprehensive <GradientText>Treatment Services</GradientText>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400">
                            Expert homeopathic care for a wide range of chronic and acute
                            conditions. Each treatment is personalized to your unique health
                            needs.
                        </p>
                    </FadeIn>
                </div>

                {/* Services Grid */}
                <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => {
                        const Icon = service.icon
                        return (
                            <StaggerItem key={service.slug}>
                                <Link href={`/services/${service.slug}`} className="block h-full">
                                    <GlassCard className="h-full group cursor-pointer" hoverEffect>
                                        <div className="space-y-4">
                                            {/* Icon */}
                                            <div
                                                className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform`}
                                            >
                                                <Icon className="w-8 h-8 text-white" />
                                            </div>

                                            {/* Content */}
                                            <div>
                                                <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-2 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                                    {service.title}
                                                </h2>
                                                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed mb-4">
                                                    {service.shortDescription}
                                                </p>

                                                {/* Conditions preview */}
                                                <div className="flex flex-wrap gap-2 mb-4">
                                                    {service.conditions.slice(0, 3).map((condition) => (
                                                        <span
                                                            key={condition}
                                                            className="text-xs px-2 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                                                        >
                                                            {condition}
                                                        </span>
                                                    ))}
                                                    {service.conditions.length > 3 && (
                                                        <span className="text-xs px-2 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400">
                                                            +{service.conditions.length - 3} more
                                                        </span>
                                                    )}
                                                </div>
                                            </div>

                                            {/* Link */}
                                            <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium text-sm group-hover:gap-3 transition-all">
                                                Learn More
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </GlassCard>
                                </Link>
                            </StaggerItem>
                        )
                    })}
                </StaggerContainer>
            </div>
        </section>
    )
}
