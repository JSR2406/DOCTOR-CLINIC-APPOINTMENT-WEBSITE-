'use client'

import { motion, useMotionValue, useTransform, animate, useInView } from 'framer-motion'
import { useEffect, useRef } from 'react'

interface StatsCounterProps {
    value: number
    suffix?: string
    prefix?: string
    duration?: number
}

export function StatsCounter({
    value,
    suffix = '',
    prefix = '',
    duration = 2,
}: StatsCounterProps) {
    const count = useMotionValue(0)
    const rounded = useTransform(count, (latest) => Math.round(latest))
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, value, { duration })
            return controls.stop
        }
    }, [isInView, value, duration, count])

    return (
        <span ref={ref}>
            {prefix}
            <motion.span>{rounded}</motion.span>
            {suffix}
        </span>
    )
}
