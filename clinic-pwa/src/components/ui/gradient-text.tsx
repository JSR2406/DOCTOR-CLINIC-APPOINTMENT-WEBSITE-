import { cn } from '@/lib/utils'

interface GradientTextProps {
    children: React.ReactNode
    className?: string
}

export function GradientText({
    children,
    className = '',
}: GradientTextProps) {
    return (
        <span
            className={cn(
                'text-emerald-600 font-bold',
                className
            )}
        >
            {children}
        </span>
    )
}
