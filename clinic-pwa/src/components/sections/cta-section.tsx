'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Calendar, Phone, MessageCircle, ArrowRight } from 'lucide-react'
import { FadeIn } from '@/components/animations/fade-in'

export function CTASection() {
    return (
        <section className="py-20 bg-slate-900">
            <div className="container-custom">
                <div className="max-w-3xl mx-auto text-center">
                    <FadeIn>
                        <span className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-white/10 text-white mb-6">
                            ✨ Start Your Healing Journey Today
                        </span>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Ready to Experience Natural Healing?
                        </h2>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <p className="text-lg text-slate-400 mb-10 max-w-xl mx-auto">
                            Take the first step towards holistic wellness. Book your
                            consultation with Dr. Anshita Singh Rathore and discover the
                            power of homeopathy.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.3}>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
                            <Link href="/book">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold rounded-xl transition-colors"
                                >
                                    <Calendar className="w-5 h-5" />
                                    Book Appointment
                                    <ArrowRight className="w-5 h-5" />
                                </motion.button>
                            </Link>

                            <a href="tel:+917756860444">
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 border border-white/20 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors"
                                >
                                    <Phone className="w-5 h-5" />
                                    Call Now
                                </motion.button>
                            </a>

                            <a
                                href={`https://wa.me/917756860444?text=${encodeURIComponent(
                                    'Hello Dr. Anshita, I would like to book an appointment.'
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <motion.button
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 border border-green-500/30 text-green-400 font-semibold rounded-xl hover:bg-green-500/10 transition-colors"
                                >
                                    <MessageCircle className="w-5 h-5" />
                                    WhatsApp
                                </motion.button>
                            </a>
                        </div>
                    </FadeIn>

                    {/* Features */}
                    <FadeIn delay={0.4}>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                            <div className="p-4">
                                <p className="text-2xl font-bold text-white mb-1">Free</p>
                                <p className="text-sm text-slate-500">Initial Consultation</p>
                            </div>
                            <div className="p-4">
                                <p className="text-2xl font-bold text-white mb-1">15 min</p>
                                <p className="text-sm text-slate-500">Response Time</p>
                            </div>
                            <div className="p-4">
                                <p className="text-2xl font-bold text-white mb-1">Online</p>
                                <p className="text-sm text-slate-500">Appointments Available</p>
                            </div>
                            <div className="p-4">
                                <p className="text-2xl font-bold text-white mb-1">100%</p>
                                <p className="text-sm text-slate-500">Natural Treatment</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    )
}
