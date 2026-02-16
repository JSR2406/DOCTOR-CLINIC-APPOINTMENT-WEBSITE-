'use client'

import { Star, Quote } from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'
import { cn } from '@/lib/utils'
import Image from 'next/image'

interface TestimonialCardProps {
    name: string
    age?: number
    condition: string
    testimonial: string
    rating: number
    image?: string
}

export function TestimonialCard({
    name,
    age,
    condition,
    testimonial,
    rating,
    image,
}: TestimonialCardProps) {
    return (
        <GlassCard className="h-full">
            <div className="flex flex-col h-full space-y-4">
                {/* Quote Icon */}
                <Quote className="w-10 h-10 text-primary-500/20" />

                {/* Rating */}
                <div className="flex gap-1">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                            key={i}
                            className={cn(
                                'w-5 h-5',
                                i < rating
                                    ? 'fill-amber-400 text-amber-400'
                                    : 'text-zinc-300 dark:text-zinc-700'
                            )}
                        />
                    ))}
                </div>

                {/* Testimonial */}
                <p className="text-zinc-700 dark:text-zinc-300 flex-grow line-clamp-6">
                    &ldquo;{testimonial}&rdquo;
                </p>

                {/* Patient Info */}
                <div className="flex items-center gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                    {image ? (
                        <div className="relative w-12 h-12 rounded-full overflow-hidden">
                            <Image src={image} alt={name} fill className="object-cover" />
                        </div>
                    ) : (
                        <div className="w-12 h-12 rounded-full bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
                            <span className="text-primary-700 dark:text-primary-400 font-semibold text-lg">
                                {name.charAt(0)}
                            </span>
                        </div>
                    )}
                    <div>
                        <p className="font-semibold text-zinc-900 dark:text-zinc-100">
                            {name}
                            {age && `, ${age}`}
                        </p>
                        <p className="text-sm text-zinc-600 dark:text-zinc-400">{condition}</p>
                    </div>
                </div>
            </div>
        </GlassCard>
    )
}
