'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'
import { cn } from '@/lib/utils'

interface GlassCardProps {
    children: ReactNode
    className?: string
    hoverEffect?: boolean
    gradient?: boolean
}

export function GlassCard({
    children,
    className = '',
    hoverEffect = true,
    gradient = false,
}: GlassCardProps) {
    return (
        <motion.div
            whileHover={hoverEffect ? { y: -8, scale: 1.02 } : {}}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            className={cn(
                'relative rounded-2xl p-6',
                'bg-white/80',
                'backdrop-blur-lg',
                'border border-zinc-200/50',
                'shadow-xl shadow-zinc-200/20',
                gradient &&
                'bg-gradient-to-br from-white/90 to-primary-50/50',
                className
            )}
        >
            {gradient && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary-500/5 to-secondary-500/5 pointer-events-none" />
            )}
            <div className="relative z-10">{children}</div>
        </motion.div>
    )
}
