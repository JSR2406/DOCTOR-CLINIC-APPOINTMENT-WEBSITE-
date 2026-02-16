import { Metadata } from 'next'
import { BookingForm } from '@/components/booking'
import { FadeIn } from '@/components/animations/fade-in'
import { GradientText } from '@/components/ui/gradient-text'

export const metadata: Metadata = {
    title: 'Book Appointment',
    description:
        'Book your consultation with Dr. Anshita Singh Rathore. Choose from our clinics in Pune and Mumbai.',
}

export default function BookPage() {
    return (
        <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-emerald-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-primary-950/20 min-h-screen">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-12">
                    <FadeIn>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400 mb-4">
                            📅 Easy Online Booking
                        </span>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1 className="heading-lg mb-4">
                            Book Your <GradientText>Appointment</GradientText>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400">
                            Choose a convenient time slot and clinic location. Your healing
                            journey starts with a single step.
                        </p>
                    </FadeIn>
                </div>

                {/* Booking Form */}
                <FadeIn delay={0.3}>
                    <BookingForm />
                </FadeIn>
            </div>
        </section>
    )
}
