import { Metadata } from 'next'
import Link from 'next/link'
import {
    GraduationCap,
    Award,
    Heart,
    Users,
    Calendar,
    BookOpen,
    Star,
    CheckCircle,
    ArrowRight,
} from 'lucide-react'
import { FadeIn } from '@/components/animations/fade-in'
import { GradientText } from '@/components/ui/gradient-text'
import { GlassCard } from '@/components/ui/glass-card'
import { AnimatedButton } from '@/components/ui/animated-button'
import {
    StaggerContainer,
    StaggerItem,
} from '@/components/animations/stagger-container'

export const metadata: Metadata = {
    title: 'About Dr. Anshita Singh Rathore',
    description:
        'Learn about Dr. Anshita Singh Rathore, a renowned homeopathic consultant with 15+ years of experience in treating autoimmune disorders, thyroid, and lifestyle diseases.',
}

const qualifications = [
    'BHMS (Bachelor of Homeopathic Medicine and Surgery)',
    'MD (Homeopathy) - Specialization in Chronic Diseases',
    'Advanced Certification in Autoimmune Disorders',
    'Member - Maharashtra Council of Homeopathy',
    'Member - Indian Homeopathic Medical Association',
]

const achievements = [
    { icon: Users, value: '10,000+', label: 'Patients Treated' },
    { icon: Calendar, value: '15+', label: 'Years Experience' },
    { icon: Star, value: '4.9/5', label: 'Patient Rating' },
    { icon: Award, value: '5+', label: 'Awards' },
]

const philosophy = [
    {
        title: 'Holistic Healing',
        description:
            'Treating the whole person - mind, body, and spirit - not just the symptoms.',
    },
    {
        title: 'Personalized Care',
        description:
            'Every patient is unique. Treatment plans are customized to individual needs.',
    },
    {
        title: 'Natural Medicine',
        description:
            'Using safe, natural remedies that work with your body&apos;s healing abilities.',
    },
    {
        title: 'Root Cause Focus',
        description:
            'Addressing the underlying causes of illness, not just masking symptoms.',
    },
]

const timeline = [
    {
        year: '2008',
        title: 'Medical Education',
        description: 'Completed BHMS from prestigious medical college in Pune.',
    },
    {
        year: '2011',
        title: 'Specialization',
        description:
            'Earned MD in Homeopathy with focus on chronic and autoimmune diseases.',
    },
    {
        year: '2012',
        title: 'Private Practice',
        description: 'Established first clinic in Pune, focusing on holistic care.',
    },
    {
        year: '2016',
        title: 'Expansion',
        description:
            'Opened second clinic in Kothrud to serve growing patient base.',
    },
    {
        year: '2020',
        title: 'Mumbai Clinic',
        description: 'Extended services to Mumbai with Andheri West location.',
    },
    {
        year: '2024',
        title: 'Digital Health',
        description:
            'Launched online consultations reaching patients across India.',
    },
]

export default function AboutPage() {
    return (
        <>
            {/* Hero Section */}
            <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-emerald-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-primary-950/20">
                <div className="container-custom">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left: Doctor Image/Avatar */}
                        <FadeIn>
                            <div className="relative">
                                <div className="w-full max-w-md mx-auto aspect-[4/5] rounded-2xl bg-gradient-to-br from-primary-100 to-emerald-100 dark:from-primary-900/50 dark:to-emerald-900/50 overflow-hidden shadow-2xl">
                                    <div className="absolute inset-0 flex items-center justify-center">
                                        <div className="text-center p-8">
                                            <div className="w-40 h-40 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary-500 to-emerald-600 flex items-center justify-center shadow-xl">
                                                <span className="text-white text-6xl font-bold">DA</span>
                                            </div>
                                            <h2 className="text-2xl font-bold text-primary-700 dark:text-primary-300">
                                                Dr. Anshita Singh Rathore
                                            </h2>
                                            <p className="text-zinc-600 dark:text-zinc-400 mt-2">
                                                BHMS, MD (Homeopathy)
                                            </p>
                                            <div className="flex items-center justify-center gap-1 mt-4">
                                                {[1, 2, 3, 4, 5].map((i) => (
                                                    <Star
                                                        key={i}
                                                        className="w-5 h-5 fill-amber-400 text-amber-400"
                                                    />
                                                ))}
                                                <span className="ml-2 text-sm text-zinc-600">4.9/5</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating badges */}
                                <div className="absolute -top-4 -right-4 glass-card p-3 rounded-xl shadow-lg">
                                    <div className="flex items-center gap-2">
                                        <Award className="w-5 h-5 text-amber-500" />
                                        <span className="text-sm font-medium">Top Rated</span>
                                    </div>
                                </div>
                                <div className="absolute -bottom-4 -left-4 glass-card p-3 rounded-xl shadow-lg">
                                    <div className="flex items-center gap-2">
                                        <CheckCircle className="w-5 h-5 text-green-500" />
                                        <span className="text-sm font-medium">Verified Doctor</span>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        {/* Right: Info */}
                        <FadeIn delay={0.2} direction="left">
                            <div className="space-y-6">
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400">
                                    About the Doctor
                                </span>

                                <h1 className="heading-lg">
                                    Meet <GradientText>Dr. Anshita Singh Rathore</GradientText>
                                </h1>

                                <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    With over 15 years of dedicated practice in homeopathic
                                    medicine, Dr. Anshita Singh Rathore has established herself as
                                    a leading expert in treating chronic and autoimmune disorders
                                    through holistic approaches.
                                </p>

                                <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
                                    Her passion for natural healing and patient-centered care has
                                    helped thousands of patients across Pune and Mumbai find
                                    lasting relief from conditions that conventional medicine
                                    often struggles to address.
                                </p>

                                <div className="grid grid-cols-2 gap-4">
                                    {achievements.map((item) => {
                                        const Icon = item.icon
                                        return (
                                            <div
                                                key={item.label}
                                                className="p-4 rounded-lg bg-white/50 dark:bg-zinc-800/50"
                                            >
                                                <Icon className="w-6 h-6 text-primary-500 mb-2" />
                                                <p className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                                                    {item.value}
                                                </p>
                                                <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                                    {item.label}
                                                </p>
                                            </div>
                                        )
                                    })}
                                </div>

                                <Link href="/book">
                                    <AnimatedButton size="lg" className="gap-2">
                                        <Calendar className="w-5 h-5" />
                                        Book Consultation
                                        <ArrowRight className="w-5 h-5" />
                                    </AnimatedButton>
                                </Link>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* Qualifications */}
            <section className="section-padding bg-white dark:bg-zinc-950">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <FadeIn>
                            <h2 className="heading-md mb-4">
                                Qualifications & <GradientText>Credentials</GradientText>
                            </h2>
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.2}>
                        <GlassCard className="max-w-2xl mx-auto">
                            <div className="space-y-4">
                                {qualifications.map((qual, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <div className="w-8 h-8 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center flex-shrink-0">
                                            <GraduationCap className="w-4 h-4 text-primary-600 dark:text-primary-400" />
                                        </div>
                                        <p className="text-zinc-700 dark:text-zinc-300 pt-1">
                                            {qual}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </GlassCard>
                    </FadeIn>
                </div>
            </section>

            {/* Treatment Philosophy */}
            <section className="section-padding bg-zinc-50 dark:bg-zinc-900">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <FadeIn>
                            <h2 className="heading-md mb-4">
                                Treatment <GradientText>Philosophy</GradientText>
                            </h2>
                            <p className="text-zinc-600 dark:text-zinc-400">
                                Our approach to healing is rooted in centuries-old homeopathic
                                principles, combined with modern medical understanding.
                            </p>
                        </FadeIn>
                    </div>

                    <StaggerContainer className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
                        {philosophy.map((item, index) => (
                            <StaggerItem key={index}>
                                <GlassCard className="h-full">
                                    <div className="flex items-start gap-4">
                                        <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary-500 to-emerald-600 flex items-center justify-center flex-shrink-0">
                                            <Heart className="w-5 h-5 text-white" />
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 mb-2">
                                                {item.title}
                                            </h3>
                                            <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                                {item.description}
                                            </p>
                                        </div>
                                    </div>
                                </GlassCard>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </section>

            {/* Journey Timeline */}
            <section className="section-padding bg-white dark:bg-zinc-950">
                <div className="container-custom">
                    <div className="text-center max-w-2xl mx-auto mb-12">
                        <FadeIn>
                            <h2 className="heading-md mb-4">
                                Professional <GradientText>Journey</GradientText>
                            </h2>
                        </FadeIn>
                    </div>

                    <div className="max-w-3xl mx-auto">
                        {timeline.map((item, index) => (
                            <FadeIn key={index} delay={index * 0.1}>
                                <div className="flex gap-6 pb-8 last:pb-0">
                                    {/* Timeline line */}
                                    <div className="flex flex-col items-center">
                                        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-emerald-600 flex items-center justify-center text-white font-bold text-sm">
                                            {item.year.slice(-2)}
                                        </div>
                                        {index < timeline.length - 1 && (
                                            <div className="w-0.5 flex-1 bg-primary-200 dark:bg-primary-800 mt-2" />
                                        )}
                                    </div>

                                    {/* Content */}
                                    <div className="flex-1 pb-8">
                                        <span className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                                            {item.year}
                                        </span>
                                        <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 mt-1">
                                            {item.title}
                                        </h3>
                                        <p className="text-zinc-600 dark:text-zinc-400 mt-1">
                                            {item.description}
                                        </p>
                                    </div>
                                </div>
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
                            Book a consultation with Dr. Anshita and experience the
                            transformative power of holistic homeopathic treatment.
                        </p>
                        <Link href="/book">
                            <AnimatedButton
                                size="lg"
                                className="bg-white text-primary-600 hover:bg-zinc-100 gap-2"
                            >
                                <Calendar className="w-5 h-5" />
                                Book Your Appointment
                                <ArrowRight className="w-5 h-5" />
                            </AnimatedButton>
                        </Link>
                    </FadeIn>
                </div>
            </section>
        </>
    )
}
