'use client'

import { Share2 } from 'lucide-react'

interface ShareButtonProps {
    title: string
}

export function ShareButton({ title }: ShareButtonProps) {
    const handleShare = () => {
        if (typeof window !== 'undefined' && navigator.share) {
            navigator.share({
                title,
                url: window.location.href,
            })
        }
    }

    return (
        <button
            onClick={handleShare}
            className="p-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Share this article"
        >
            <Share2 className="w-5 h-5" />
        </button>
    )
}
