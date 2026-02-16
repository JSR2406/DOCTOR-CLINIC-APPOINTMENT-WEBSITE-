'use client'

import { motion } from 'framer-motion'
import { LucideIcon, ArrowRight } from 'lucide-react'
import { GlassCard } from '@/components/ui/glass-card'
import Link from 'next/link'

interface ServiceCardProps {
    icon: LucideIcon
    title: string
    description: string
    href: string
}

export function ServiceCard({ icon: Icon, title, description, href }: ServiceCardProps) {
    return (
        <Link href={href}>
            <GlassCard className="group cursor-pointer h-full" gradient>
                <div className="space-y-4">
                    {/* Icon with gradient background */}
                    <div className="relative w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-emerald-600 flex items-center justify-center">
                        <Icon className="w-7 h-7 text-white" />
                        <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-400/50 to-emerald-500/50 blur-xl opacity-50 group-hover:opacity-100 transition-opacity" />
                    </div>

                    {/* Content */}
                    <div className="space-y-2">
                        <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100">
                            {title}
                        </h3>
                        <p className="text-zinc-600 dark:text-zinc-400 line-clamp-3">{description}</p>
                    </div>

                    {/* Learn More Link */}
                    <motion.div
                        className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium group-hover:gap-3 transition-all"
                        whileHover={{ x: 5 }}
                    >
                        Learn More
                        <ArrowRight className="w-4 h-4" />
                    </motion.div>
                </div>
            </GlassCard>
        </Link>
    )
}
