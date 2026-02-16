'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Download, X } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { GlassCard } from '@/components/ui/glass-card'

interface BeforeInstallPromptEvent extends Event {
    prompt: () => Promise<void>
    userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>
}

export function PWAInstallPrompt() {
    const [deferredPrompt, setDeferredPrompt] =
        useState<BeforeInstallPromptEvent | null>(null)
    const [showPrompt, setShowPrompt] = useState(false)
    const [isIOS, setIsIOS] = useState(false)

    useEffect(() => {
        // Check if iOS
        const isIOSDevice = /iPad|iPhone|iPod/.test(navigator.userAgent)
        setIsIOS(isIOSDevice)

        // Check if already installed
        const isStandalone = window.matchMedia(
            '(display-mode: standalone)'
        ).matches
        const hasPromptedBefore = localStorage.getItem('pwa-install-prompted')

        if (!isStandalone && !hasPromptedBefore) {
            if (isIOSDevice) {
                // Show iOS instructions after 5 seconds
                setTimeout(() => setShowPrompt(true), 5000)
            } else {
                // Listen for beforeinstallprompt event (Android/Desktop)
                const handler = (e: Event) => {
                    e.preventDefault()
                    setDeferredPrompt(e as BeforeInstallPromptEvent)
                    setTimeout(() => setShowPrompt(true), 3000)
                }
                window.addEventListener('beforeinstallprompt', handler)
                return () => window.removeEventListener('beforeinstallprompt', handler)
            }
        }
    }, [])

    const handleInstall = async () => {
        if (!deferredPrompt) return

        await deferredPrompt.prompt()
        const { outcome } = await deferredPrompt.userChoice

        if (outcome === 'accepted') {
            setShowPrompt(false)
            localStorage.setItem('pwa-install-prompted', 'true')
        }

        setDeferredPrompt(null)
    }

    const handleDismiss = () => {
        setShowPrompt(false)
        localStorage.setItem('pwa-install-prompted', 'true')
    }

    return (
        <AnimatePresence>
            {showPrompt && (
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 50 }}
                    className="fixed bottom-6 left-6 right-6 md:left-auto md:right-6 md:w-[400px] z-50"
                >
                    <GlassCard>
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-emerald-600 flex items-center justify-center">
                                <Download className="w-6 h-6 text-white" />
                            </div>

                            <div className="flex-1 space-y-2">
                                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100">
                                    Install Our App
                                </h3>
                                {isIOS ? (
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                        Tap the share button in Safari and select &quot;Add to Home
                                        Screen&quot;
                                    </p>
                                ) : (
                                    <p className="text-sm text-zinc-600 dark:text-zinc-400">
                                        Get quick access to book appointments and receive
                                        notifications
                                    </p>
                                )}

                                {!isIOS && (
                                    <Button onClick={handleInstall} className="w-full mt-3">
                                        Install App
                                    </Button>
                                )}
                            </div>

                            <button
                                onClick={handleDismiss}
                                className="flex-shrink-0 p-1 rounded-full hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
                            >
                                <X className="w-5 h-5" />
                            </button>
                        </div>
                    </GlassCard>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
