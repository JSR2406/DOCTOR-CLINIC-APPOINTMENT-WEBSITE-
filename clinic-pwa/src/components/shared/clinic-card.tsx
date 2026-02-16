'use client'

import { MapPin, Phone, Clock, Navigation } from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'
import { AnimatedButton } from '@/components/ui/animated-button'
import { Badge } from '@/components/ui/badge'
import Link from 'next/link'

interface ClinicCardProps {
    name: string
    address: string
    phone: string
    workingHours: string
    nextAvailable: string
    mapUrl: string
    slug: string
    isActive: boolean
}

export function ClinicCard({
    name,
    address,
    phone,
    workingHours,
    nextAvailable,
    mapUrl,
    slug,
    isActive,
}: ClinicCardProps) {
    return (
        <GlassCard>
            <div className="space-y-4">
                {/* Header */}
                <div className="flex items-start justify-between">
                    <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                        {name}
                    </h3>
                    {isActive && (
                        <Badge
                            variant="outline"
                            className="bg-green-100 text-green-700 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800"
                        >
                            Open
                        </Badge>
                    )}
                </div>

                {/* Details */}
                <div className="space-y-3">
                    <div className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                        <MapPin className="w-5 h-5 flex-shrink-0 text-primary-500" />
                        <span>{address}</span>
                    </div>

                    <div className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                        <Phone className="w-5 h-5 flex-shrink-0 text-primary-500" />
                        <a href={`tel:${phone}`} className="hover:text-primary-600 transition-colors">
                            {phone}
                        </a>
                    </div>

                    <div className="flex gap-3 text-sm text-zinc-600 dark:text-zinc-400">
                        <Clock className="w-5 h-5 flex-shrink-0 text-primary-500" />
                        <span>{workingHours}</span>
                    </div>
                </div>

                {/* Next Available */}
                <div className="p-3 rounded-lg bg-primary-50 dark:bg-primary-900/20 border border-primary-200 dark:border-primary-800">
                    <p className="text-sm font-medium text-primary-900 dark:text-primary-100">
                        Next Available: <span className="font-semibold">{nextAvailable}</span>
                    </p>
                </div>

                {/* Actions */}
                <div className="flex gap-2">
                    <Link href={`/book?clinic=${slug}`} className="flex-1">
                        <AnimatedButton className="w-full" size="lg">
                            Book Appointment
                        </AnimatedButton>
                    </Link>
                    <AnimatedButton
                        variant="outline"
                        size="lg"
                        onClick={() => window.open(mapUrl, '_blank')}
                    >
                        <Navigation className="w-5 h-5" />
                    </AnimatedButton>
                </div>
            </div>
        </GlassCard>
    )
}
