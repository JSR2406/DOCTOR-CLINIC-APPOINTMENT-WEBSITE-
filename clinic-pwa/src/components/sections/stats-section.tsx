'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { Users, Calendar, Award, MapPin } from 'lucide-react'
import { FadeIn } from '@/components/animations/fade-in'
import { StatsCounter } from '@/components/ui/stats-counter'

const stats = [
    {
        icon: Users,
        value: 10000,
        suffix: '+',
        label: 'Happy Patients',
        description: 'Successfully treated',
    },
    {
        icon: Calendar,
        value: 15,
        suffix: '+',
        label: 'Years Experience',
        description: 'Of dedicated practice',
    },
    {
        icon: Award,
        value: 98,
        suffix: '%',
        label: 'Success Rate',
        description: 'Patient satisfaction',
    },
    {
        icon: MapPin,
        value: 3,
        suffix: '',
        label: 'Clinic Locations',
        description: 'Pune & Mumbai',
    },
]

export function StatsSection() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: '-100px' })

    return (
        <section
            ref={ref}
            className="py-20 bg-emerald-600"
        >
            <div className="container-custom">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <FadeIn>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-white/20 text-white mb-4">
                            Our Track Record
                        </span>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                            Numbers That Speak for Excellence
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-lg text-emerald-100">
                            Our commitment to holistic healing has helped thousands achieve
                            lasting health improvements
                        </p>
                    </FadeIn>
                </div>

                {/* Stats Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon
                        return (
                            <motion.div
                                key={stat.label}
                                initial={{ opacity: 0, y: 20 }}
                                animate={isInView ? { opacity: 1, y: 0 } : {}}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                            >
                                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center border border-white/20">
                                    {/* Icon */}
                                    <div className="w-14 h-14 rounded-xl bg-white/20 flex items-center justify-center mx-auto mb-4">
                                        <Icon className="w-7 h-7 text-white" />
                                    </div>

                                    {/* Value */}
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="text-4xl font-bold text-white">
                                            <StatsCounter value={stat.value} />
                                        </span>
                                        <span className="text-2xl font-bold text-emerald-200">
                                            {stat.suffix}
                                        </span>
                                    </div>

                                    {/* Label */}
                                    <h3 className="text-lg font-semibold text-white mt-2">
                                        {stat.label}
                                    </h3>
                                    <p className="text-sm text-emerald-200 mt-1">
                                        {stat.description}
                                    </p>
                                </div>
                            </motion.div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
