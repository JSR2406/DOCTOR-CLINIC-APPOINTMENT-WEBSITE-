'use client'

import * as React from 'react'
import { motion } from 'framer-motion'
import { Button, buttonVariants } from './button'
import { cn } from '@/lib/utils'
import { type VariantProps } from 'class-variance-authority'

interface AnimatedButtonProps
    extends React.ComponentProps<'button'>,
    VariantProps<typeof buttonVariants> {
    pulseOnHover?: boolean
    scaleOnClick?: boolean
    asChild?: boolean
}

export function AnimatedButton({
    children,
    className,
    pulseOnHover = false,
    scaleOnClick = true,
    variant,
    size,
    asChild,
    ...props
}: AnimatedButtonProps) {
    return (
        <motion.div
            whileHover={pulseOnHover ? { scale: 1.05 } : {}}
            whileTap={scaleOnClick ? { scale: 0.95 } : {}}
            transition={{ type: 'spring', stiffness: 400, damping: 17 }}
            className="inline-block"
        >
            <Button
                className={cn('relative overflow-hidden', className)}
                variant={variant}
                size={size}
                asChild={asChild}
                {...props}
            >
                {children}
            </Button>
        </motion.div>
    )
}
