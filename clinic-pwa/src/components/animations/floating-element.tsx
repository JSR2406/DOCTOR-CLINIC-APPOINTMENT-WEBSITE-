'use client'

import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface FloatingElementProps {
    children: ReactNode
    delay?: number
    duration?: number
    yOffset?: number
}

export function FloatingElement({
    children,
    delay = 0,
    duration = 3,
    yOffset = 10,
}: FloatingElementProps) {
    return (
        <motion.div
            animate={{
                y: [-yOffset, yOffset, -yOffset],
            }}
            transition={{
                duration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay,
            }}
        >
            {children}
        </motion.div>
    )
}
