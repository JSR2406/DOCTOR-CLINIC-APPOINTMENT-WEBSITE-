import { Skeleton } from '@/components/ui/skeleton'

export function ServiceCardSkeleton() {
    return (
        <div className="space-y-4 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <Skeleton className="w-14 h-14 rounded-xl" />
            <div className="space-y-2">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
            </div>
            <Skeleton className="h-10 w-24" />
        </div>
    )
}

export function TestimonialCardSkeleton() {
    return (
        <div className="space-y-4 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <Skeleton className="w-10 h-10 rounded-lg" />
            <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                    <Skeleton key={i} className="w-5 h-5 rounded" />
                ))}
            </div>
            <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-3/4" />
            </div>
            <div className="flex items-center gap-3 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <Skeleton className="w-12 h-12 rounded-full" />
                <div className="space-y-1">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-3 w-20" />
                </div>
            </div>
        </div>
    )
}

export function ClinicCardSkeleton() {
    return (
        <div className="space-y-4 p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <div className="flex items-start justify-between">
                <Skeleton className="h-6 w-40" />
                <Skeleton className="h-5 w-12 rounded-full" />
            </div>
            <div className="space-y-3">
                <div className="flex gap-3">
                    <Skeleton className="w-5 h-5 rounded" />
                    <Skeleton className="h-4 w-48" />
                </div>
                <div className="flex gap-3">
                    <Skeleton className="w-5 h-5 rounded" />
                    <Skeleton className="h-4 w-32" />
                </div>
                <div className="flex gap-3">
                    <Skeleton className="w-5 h-5 rounded" />
                    <Skeleton className="h-4 w-36" />
                </div>
            </div>
            <Skeleton className="h-12 w-full rounded-lg" />
            <div className="flex gap-2">
                <Skeleton className="h-12 flex-1 rounded-xl" />
                <Skeleton className="h-12 w-12 rounded-xl" />
            </div>
        </div>
    )
}

export function BlogCardSkeleton() {
    return (
        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden">
            <Skeleton className="w-full h-48" />
            <div className="p-6 space-y-3">
                <div className="flex gap-2">
                    <Skeleton className="h-5 w-20 rounded-full" />
                    <Skeleton className="h-5 w-16 rounded-full" />
                </div>
                <Skeleton className="h-6 w-full" />
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-2/3" />
                <div className="flex items-center justify-between pt-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-4 w-16" />
                </div>
            </div>
        </div>
    )
}
