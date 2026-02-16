export default function Loading() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 via-white to-emerald-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-primary-950/20">
            <div className="text-center">
                {/* Animated Logo */}
                <div className="relative w-20 h-20 mx-auto mb-6">
                    <div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary-500 to-emerald-600 animate-pulse" />
                    <div className="absolute inset-2 rounded-full bg-white dark:bg-zinc-950 flex items-center justify-center">
                        <span className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                            DA
                        </span>
                    </div>
                    {/* Spinning ring */}
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-primary-500 animate-spin" />
                </div>

                {/* Loading text */}
                <div className="flex items-center justify-center gap-1">
                    <span className="text-zinc-600 dark:text-zinc-400">Loading</span>
                    <span className="flex gap-1">
                        <span
                            className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-bounce"
                            style={{ animationDelay: '0ms' }}
                        />
                        <span
                            className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-bounce"
                            style={{ animationDelay: '150ms' }}
                        />
                        <span
                            className="w-1.5 h-1.5 bg-primary-500 rounded-full animate-bounce"
                            style={{ animationDelay: '300ms' }}
                        />
                    </span>
                </div>
            </div>
        </div>
    )
}
