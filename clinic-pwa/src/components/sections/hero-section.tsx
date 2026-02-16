'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, ArrowRight, Star, CheckCircle, Clock, Users, Phone } from 'lucide-react'
import { AnimatedButton } from '@/components/ui/animated-button'
import { FadeIn } from '@/components/animations/fade-in'

const features = [
    { icon: CheckCircle, text: 'No Side Effects' },
    { icon: CheckCircle, text: 'Personalized Care' },
    { icon: CheckCircle, text: 'Holistic Approach' },
]

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
            {/* Subtle background pattern */}
            <div
                className="absolute inset-0 opacity-[0.02]"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}
            />

            <div className="container-custom relative z-10 py-16 lg:py-20">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="space-y-8 text-center lg:text-left">
                        {/* Badge */}
                        <FadeIn delay={0.1}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-100 text-emerald-700 text-sm font-medium">
                                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                                Trusted Homeopathic Care Since 2009
                            </div>
                        </FadeIn>

                        {/* Main Heading */}
                        <FadeIn delay={0.2}>
                            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900">
                                Heal Naturally with
                                <span className="block text-emerald-600 mt-2">
                                    Dr. Anshita Singh Rathore
                                </span>
                            </h1>
                        </FadeIn>

                        {/* Description */}
                        <FadeIn delay={0.3}>
                            <p className="text-lg md:text-xl text-slate-600 max-w-xl mx-auto lg:mx-0 leading-relaxed">
                                Expert homeopathic treatment for autoimmune disorders, thyroid, PCOS,
                                and lifestyle diseases. Experience gentle, lasting healing across our
                                clinics in Pune and Mumbai.
                            </p>
                        </FadeIn>

                        {/* Feature List */}
                        <FadeIn delay={0.35}>
                            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                                {features.map((feature) => {
                                    const Icon = feature.icon
                                    return (
                                        <div
                                            key={feature.text}
                                            className="flex items-center gap-2 text-slate-700"
                                        >
                                            <Icon className="w-5 h-5 text-emerald-600" />
                                            <span className="text-sm font-medium">{feature.text}</span>
                                        </div>
                                    )
                                })}
                            </div>
                        </FadeIn>

                        {/* CTA Buttons */}
                        <FadeIn delay={0.4}>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                                <Link href="/book">
                                    <AnimatedButton size="lg" className="w-full sm:w-auto gap-2 px-8 py-4 text-base bg-emerald-600 hover:bg-emerald-700 shadow-lg shadow-emerald-600/20">
                                        <Calendar className="w-5 h-5" />
                                        Book Appointment
                                        <ArrowRight className="w-5 h-5" />
                                    </AnimatedButton>
                                </Link>
                                <a href="tel:+917756860444">
                                    <AnimatedButton
                                        variant="outline"
                                        size="lg"
                                        className="w-full sm:w-auto gap-2 px-8 py-4 text-base border-2 border-slate-300 text-slate-700 hover:bg-slate-100"
                                    >
                                        <Phone className="w-5 h-5" />
                                        Call: +91 77568 60444
                                    </AnimatedButton>
                                </a>
                            </div>
                        </FadeIn>

                        {/* Trust Indicators */}
                        <FadeIn delay={0.5}>
                            <div className="flex flex-wrap gap-8 lg:gap-12 pt-8 justify-center lg:justify-start border-t border-slate-200">
                                <div className="text-center lg:text-left">
                                    <div className="flex items-center gap-2 justify-center lg:justify-start">
                                        <Users className="w-5 h-5 text-emerald-600" />
                                        <span className="text-2xl md:text-3xl font-bold text-slate-900">10,000+</span>
                                    </div>
                                    <p className="text-sm text-slate-500 mt-1">Happy Patients</p>
                                </div>
                                <div className="text-center lg:text-left">
                                    <div className="flex items-center gap-2 justify-center lg:justify-start">
                                        <Clock className="w-5 h-5 text-emerald-600" />
                                        <span className="text-2xl md:text-3xl font-bold text-slate-900">15+</span>
                                    </div>
                                    <p className="text-sm text-slate-500 mt-1">Years Experience</p>
                                </div>
                                <div className="text-center lg:text-left">
                                    <div className="flex items-center gap-2 justify-center lg:justify-start">
                                        <Star className="w-5 h-5 text-amber-500 fill-amber-500" />
                                        <span className="text-2xl md:text-3xl font-bold text-slate-900">4.9</span>
                                    </div>
                                    <p className="text-sm text-slate-500 mt-1">Patient Rating</p>
                                </div>
                            </div>
                        </FadeIn>
                    </div>

                    {/* Right Content - Doctor Card */}
                    <FadeIn delay={0.3} direction="left">
                        <div className="flex justify-center lg:justify-end">
                            <div className="w-full max-w-md">
                                {/* Main card */}
                                <div className="bg-white rounded-2xl shadow-xl border border-slate-200 overflow-hidden">
                                    {/* Top gradient bar */}
                                    <div className="h-1.5 bg-gradient-to-r from-emerald-500 to-teal-500" />

                                    <div className="p-8">
                                        {/* Doctor avatar */}
                                        <div className="w-28 h-28 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 flex items-center justify-center shadow-lg">
                                            <span className="text-white text-3xl font-bold">DA</span>
                                        </div>

                                        {/* Doctor info */}
                                        <div className="text-center space-y-2">
                                            <h3 className="text-xl font-bold text-slate-900">
                                                Dr. Anshita Singh Rathore
                                            </h3>
                                            <p className="text-emerald-600 font-medium">
                                                BHMS, MD (Homeopathy)
                                            </p>
                                            <p className="text-sm text-slate-500">
                                                Expert Homeopathic Consultant
                                            </p>

                                            {/* Rating */}
                                            <div className="flex items-center justify-center gap-2 pt-3">
                                                <div className="flex">
                                                    {[...Array(5)].map((_, i) => (
                                                        <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                                                    ))}
                                                </div>
                                                <span className="text-sm text-slate-600">
                                                    4.9/5 (500+ reviews)
                                                </span>
                                            </div>
                                        </div>

                                        {/* Quick stats */}
                                        <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-slate-100">
                                            <div className="text-center">
                                                <p className="text-lg font-bold text-emerald-600">15+</p>
                                                <p className="text-xs text-slate-500">Years Exp.</p>
                                            </div>
                                            <div className="text-center">
                                                <p className="text-lg font-bold text-emerald-600">10K+</p>
                                                <p className="text-xs text-slate-500">Patients</p>
                                            </div>
                                            <div className="text-center">
                                                <p className="text-lg font-bold text-emerald-600">3</p>
                                                <p className="text-xs text-slate-500">Clinics</p>
                                            </div>
                                        </div>

                                        {/* Availability */}
                                        <div className="mt-6 p-3 bg-emerald-50 rounded-lg text-center">
                                            <p className="text-sm text-emerald-700 font-medium flex items-center justify-center gap-2">
                                                <span className="w-2 h-2 bg-emerald-500 rounded-full"></span>
                                                Available for Consultations
                                            </p>
                                        </div>

                                        {/* Book button */}
                                        <Link href="/book" className="block mt-6">
                                            <button className="w-full py-3 px-6 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl shadow-md transition-colors flex items-center justify-center gap-2">
                                                <Calendar className="w-5 h-5" />
                                                Book Consultation
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:block"
                animate={{ y: [0, 8, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
            >
                <div className="w-6 h-10 rounded-full border-2 border-slate-300 flex items-start justify-center p-2">
                    <motion.div
                        className="w-1.5 h-1.5 bg-emerald-500 rounded-full"
                        animate={{ y: [0, 12, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                    />
                </div>
            </motion.div>
        </section>
    )
}
