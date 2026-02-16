import { FadeIn } from '@/components/animations/fade-in'
import { GradientText } from '@/components/ui/gradient-text'
import { cn } from '@/lib/utils'

interface SectionHeaderProps {
    badge?: string
    title: string
    description?: string
    centered?: boolean
}

export function SectionHeader({
    badge,
    title,
    description,
    centered = false,
}: SectionHeaderProps) {
    return (
        <div className={cn('space-y-4', centered && 'text-center')}>
            {badge && (
                <FadeIn delay={0.1}>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400">
                        {badge}
                    </span>
                </FadeIn>
            )}
            <FadeIn delay={0.2}>
                <h2 className="heading-lg">
                    <GradientText>{title}</GradientText>
                </h2>
            </FadeIn>
            {description && (
                <FadeIn delay={0.3}>
                    <p
                        className={cn(
                            'text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl',
                            centered && 'mx-auto'
                        )}
                    >
                        {description}
                    </p>
                </FadeIn>
            )}
        </div>
    )
}
