'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import {
    Heart,
    Brain,
    Flower2,
    Activity,
    Sparkles,
    Leaf,
    ArrowRight,
} from 'lucide-react'
import { FadeIn } from '@/components/animations/fade-in'

const services = [
    {
        icon: Brain,
        title: 'Autoimmune Diseases',
        description: 'Expert treatment for Rheumatoid Arthritis, Lupus, Multiple Sclerosis, and other autoimmune conditions.',
        link: '/services/autoimmune',
    },
    {
        icon: Activity,
        title: 'Thyroid Disorders',
        description: 'Comprehensive care for Hypothyroidism, Hyperthyroidism, Hashimoto\'s, and thyroid nodules.',
        link: '/services/thyroid',
    },
    {
        icon: Flower2,
        title: 'PCOS & Infertility',
        description: 'Natural solutions for hormonal imbalances, irregular periods, and fertility enhancement.',
        link: '/services/pcos',
    },
    {
        icon: Heart,
        title: 'Lifestyle Disorders',
        description: 'Holistic management of Diabetes, Hypertension, Obesity, and metabolic syndrome.',
        link: '/services/lifestyle',
    },
    {
        icon: Sparkles,
        title: 'Skin Conditions',
        description: 'Effective treatment for Eczema, Psoriasis, Acne, Vitiligo, and chronic skin issues.',
        link: '/services/skin',
    },
    {
        icon: Leaf,
        title: 'Digestive Issues',
        description: 'Relief from IBS, Acid Reflux, Ulcers, and other digestive problems.',
        link: '/services/digestive',
    },
]

export function ServicesSection() {
    return (
        <section className="py-20 bg-white">
            <div className="container-custom">
                {/* Section Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <FadeIn>
                        <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium mb-4">
                            Our Specializations
                        </span>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Comprehensive Homeopathic Treatment
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p className="text-lg text-slate-600">
                            Personalized treatment plans focusing on root cause healing with
                            natural, side-effect-free remedies.
                        </p>
                    </FadeIn>
                </div>

                {/* Services Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {services.map((service, index) => {
                        const Icon = service.icon
                        return (
                            <motion.div
                                key={service.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-50px' }}
                                transition={{ duration: 0.4, delay: index * 0.1 }}
                            >
                                <Link href={service.link} className="block h-full group">
                                    <div className="h-full p-6 rounded-xl bg-slate-50 border border-slate-200 hover:border-emerald-300 hover:shadow-lg transition-all duration-300">
                                        {/* Icon */}
                                        <div className="w-12 h-12 rounded-lg bg-emerald-100 flex items-center justify-center mb-4 group-hover:bg-emerald-600 transition-colors">
                                            <Icon className="w-6 h-6 text-emerald-600 group-hover:text-white transition-colors" />
                                        </div>

                                        {/* Content */}
                                        <h3 className="text-lg font-semibold text-slate-900 mb-2">
                                            {service.title}
                                        </h3>

                                        <p className="text-slate-600 text-sm leading-relaxed mb-4">
                                            {service.description}
                                        </p>

                                        {/* Learn more link */}
                                        <span className="inline-flex items-center gap-2 text-sm font-medium text-emerald-600 group-hover:gap-3 transition-all">
                                            Learn more
                                            <ArrowRight className="w-4 h-4" />
                                        </span>
                                    </div>
                                </Link>
                            </motion.div>
                        )
                    })}
                </div>

                {/* Bottom CTA */}
                <FadeIn delay={0.4}>
                    <div className="text-center mt-12">
                        <p className="text-slate-600 mb-4">
                            Not sure which treatment you need?
                        </p>
                        <Link href="/book">
                            <button className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-md transition-colors">
                                Book a Free Consultation
                                <ArrowRight className="w-5 h-5" />
                            </button>
                        </Link>
                    </div>
                </FadeIn>
            </div>
        </section>
    )
}
