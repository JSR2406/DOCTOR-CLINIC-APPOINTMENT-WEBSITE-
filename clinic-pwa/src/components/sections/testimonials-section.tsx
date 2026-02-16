'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react'
import { FadeIn } from '@/components/animations/fade-in'

const testimonials = [
    {
        id: 1,
        name: 'Priya Sharma',
        age: 34,
        location: 'Pune',
        condition: 'Thyroid Disorder',
        rating: 5,
        testimonial:
            'After struggling with hypothyroidism for 5 years and taking Thyronorm daily, I decided to try homeopathy. Dr. Anshita\'s treatment changed my life. Within 8 months, my TSH levels normalized, and I\'ve been off medication for 2 years now!',
    },
    {
        id: 2,
        name: 'Rahul Mehta',
        age: 42,
        location: 'Mumbai',
        condition: 'Rheumatoid Arthritis',
        rating: 5,
        testimonial:
            'I had severe joint pain and stiffness due to RA. Conventional medicine only provided temporary relief. Dr. Anshita\'s holistic approach not only reduced my pain but also addressed the root cause. I can now live pain-free without steroids.',
    },
    {
        id: 3,
        name: 'Anita Patel',
        age: 28,
        location: 'Pune',
        condition: 'PCOS & Infertility',
        rating: 5,
        testimonial:
            'Diagnosed with PCOS at 24, I had irregular periods and was told conceiving would be difficult. Dr. Anshita\'s treatment regulated my cycles within 6 months, and I\'m now blessed with a healthy baby girl. Forever grateful!',
    },
    {
        id: 4,
        name: 'Vikram Singh',
        age: 55,
        location: 'Mumbai',
        condition: 'Chronic Psoriasis',
        rating: 5,
        testimonial:
            'I suffered from psoriasis for 15 years. Tried everything from steroids to phototherapy. Dr. Anshita\'s homeopathic treatment cleared 90% of my lesions in one year. My confidence is back, and the skin feels healthy.',
    },
    {
        id: 5,
        name: 'Meera Joshi',
        age: 38,
        location: 'Pune',
        condition: 'IBS & Digestive Issues',
        rating: 5,
        testimonial:
            'Living with IBS was a nightmare - constant bloating, pain, and dietary restrictions. After 4 months of treatment with Dr. Anshita, my symptoms reduced by 80%. I can finally enjoy food without fear!',
    },
]

export function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState(0)

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 300 : -300,
            opacity: 0,
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 300 : -300,
            opacity: 0,
        }),
    }

    const paginate = (newDirection: number) => {
        setDirection(newDirection)
        setCurrentIndex((prev) => {
            if (newDirection === 1) {
                return prev === testimonials.length - 1 ? 0 : prev + 1
            }
            return prev === 0 ? testimonials.length - 1 : prev - 1
        })
    }

    const currentTestimonial = testimonials[currentIndex]

    return (
        <section className="py-20 bg-slate-50">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <FadeIn>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-emerald-100 text-emerald-700 mb-4">
                            Patient Stories
                        </span>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Real Stories of Healing & Recovery
                        </h2>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-lg text-slate-600">
                            Hear from patients who have experienced the transformative power
                            of homeopathic treatment
                        </p>
                    </FadeIn>
                </div>

                {/* Testimonial Carousel */}
                <div className="max-w-3xl mx-auto">
                    <div className="relative overflow-hidden">
                        <AnimatePresence initial={false} custom={direction} mode="wait">
                            <motion.div
                                key={currentIndex}
                                custom={direction}
                                variants={slideVariants}
                                initial="enter"
                                animate="center"
                                exit="exit"
                                transition={{
                                    x: { type: 'spring', stiffness: 300, damping: 30 },
                                    opacity: { duration: 0.2 },
                                }}
                            >
                                <div className="bg-white rounded-2xl shadow-lg border border-slate-200 p-8 relative">
                                    {/* Quote Icon */}
                                    <Quote className="absolute top-6 right-6 w-10 h-10 text-emerald-100" />

                                    <div className="flex flex-col md:flex-row gap-6">
                                        {/* Avatar */}
                                        <div className="flex-shrink-0">
                                            <div className="w-16 h-16 rounded-full bg-emerald-600 flex items-center justify-center text-white text-xl font-bold">
                                                {currentTestimonial.name.charAt(0)}
                                            </div>
                                        </div>

                                        {/* Content */}
                                        <div className="flex-1 space-y-4">
                                            {/* Rating */}
                                            <div className="flex gap-1">
                                                {Array.from({ length: 5 }).map((_, i) => (
                                                    <Star
                                                        key={i}
                                                        className={`w-4 h-4 ${i < currentTestimonial.rating
                                                            ? 'fill-amber-400 text-amber-400'
                                                            : 'text-slate-300'
                                                            }`}
                                                    />
                                                ))}
                                            </div>

                                            {/* Testimonial Text */}
                                            <p className="text-slate-700 leading-relaxed">
                                                &ldquo;{currentTestimonial.testimonial}&rdquo;
                                            </p>

                                            {/* Author Info */}
                                            <div className="pt-4 border-t border-slate-100">
                                                <p className="font-semibold text-slate-900">
                                                    {currentTestimonial.name}
                                                </p>
                                                <p className="text-sm text-slate-500">
                                                    {currentTestimonial.age} years •{' '}
                                                    {currentTestimonial.location}
                                                </p>
                                                <span className="inline-flex items-center px-2 py-1 mt-2 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                                                    {currentTestimonial.condition}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Navigation */}
                    <div className="flex items-center justify-between mt-8">
                        <div className="flex gap-2">
                            {testimonials.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        setDirection(index > currentIndex ? 1 : -1)
                                        setCurrentIndex(index)
                                    }}
                                    className={`w-3 h-3 rounded-full transition-all ${index === currentIndex
                                        ? 'bg-emerald-600 w-8'
                                        : 'bg-slate-300 hover:bg-emerald-300'
                                        }`}
                                />
                            ))}
                        </div>

                        <div className="flex gap-2">
                            <button
                                onClick={() => paginate(-1)}
                                className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-100 transition-colors"
                            >
                                <ChevronLeft className="w-5 h-5 text-slate-600" />
                            </button>
                            <button
                                onClick={() => paginate(1)}
                                className="w-10 h-10 rounded-full border border-slate-300 flex items-center justify-center hover:bg-slate-100 transition-colors"
                            >
                                <ChevronRight className="w-5 h-5 text-slate-600" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
