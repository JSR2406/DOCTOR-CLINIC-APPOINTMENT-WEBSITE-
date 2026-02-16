import Link from 'next/link'
import { Home, ArrowLeft, Search } from 'lucide-react'
import { AnimatedButton } from '@/components/ui/animated-button'
import { GradientText } from '@/components/ui/gradient-text'

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-emerald-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-primary-950/20 p-4">
            <div className="text-center max-w-lg">
                <div className="mb-8">
                    <span className="text-[150px] font-bold leading-none bg-gradient-to-r from-primary-500 to-emerald-600 bg-clip-text text-transparent">
                        404
                    </span>
                </div>

                <h1 className="text-3xl font-bold text-zinc-900 dark:text-zinc-100 mb-4">
                    Page <GradientText>Not Found</GradientText>
                </h1>

                <p className="text-zinc-600 dark:text-zinc-400 mb-8">
                    Oops! The page you&apos;re looking for doesn&apos;t exist or has been
                    moved. Let&apos;s get you back on track.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/">
                        <AnimatedButton size="lg" className="gap-2 w-full">
                            <Home className="w-5 h-5" />
                            Go to Homepage
                        </AnimatedButton>
                    </Link>

                    <Link href="/services">
                        <AnimatedButton
                            variant="outline"
                            size="lg"
                            className="gap-2 w-full"
                        >
                            <Search className="w-5 h-5" />
                            Browse Services
                        </AnimatedButton>
                    </Link>
                </div>

                <div className="mt-12 text-sm text-zinc-500 dark:text-zinc-500">
                    <p>Need help? Contact us:</p>
                    <a
                        href="tel:+917697347683"
                        className="text-primary-600 dark:text-primary-400 hover:underline"
                    >
                        +91 76973 47683
                    </a>
                </div>
            </div>
        </div>
    )
}
