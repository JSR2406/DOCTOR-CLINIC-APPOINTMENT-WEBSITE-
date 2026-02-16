'use client'

import { useEffect } from 'react'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { AlertTriangle, RefreshCw, Home } from 'lucide-react'
import { AnimatedButton } from '@/components/ui/animated-button'

export default function Error({
    error,
    reset,
}: {
    error: Error & { digest?: string }
    reset: () => void
}) {
    useEffect(() => {
        console.error(error)
    }, [error])

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-emerald-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-primary-950/20 p-4">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center max-w-md"
            >
                <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    className="w-24 h-24 bg-gradient-to-br from-red-500 to-orange-600 rounded-full flex items-center justify-center mx-auto mb-8"
                >
                    <AlertTriangle className="w-12 h-12 text-white" />
                </motion.div>

                <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                    Something Went Wrong
                </h1>

                <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                    We apologize for the inconvenience. An unexpected error occurred.
                    Please try again or return to the homepage.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <AnimatedButton onClick={reset} className="gap-2">
                        <RefreshCw className="w-5 h-5" />
                        Try Again
                    </AnimatedButton>

                    <Link href="/">
                        <AnimatedButton variant="outline" className="gap-2 w-full">
                            <Home className="w-5 h-5" />
                            Go Home
                        </AnimatedButton>
                    </Link>
                </div>
            </motion.div>
        </div>
    )
}
