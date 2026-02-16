import { Metadata } from 'next'
import Link from 'next/link'
import { format } from 'date-fns'
import { Clock, Calendar, ArrowRight, Tag } from 'lucide-react'
import { blogPosts, getFeaturedPosts } from '@/lib/data/blog'
import { FadeIn } from '@/components/animations/fade-in'
import { GradientText } from '@/components/ui/gradient-text'
import { GlassCard } from '@/components/ui/glass-card'
import {
    StaggerContainer,
    StaggerItem,
} from '@/components/animations/stagger-container'

export const metadata: Metadata = {
    title: 'Health Blog',
    description:
        'Expert insights on homeopathy, natural healing, and holistic health from Dr. Anshita Singh Rathore.',
}

export default function BlogPage() {
    const featuredPosts = getFeaturedPosts()
    const regularPosts = blogPosts.filter((post) => !post.featured)

    return (
        <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-emerald-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-primary-950/20 min-h-screen">
            <div className="container-custom">
                {/* Header */}
                <div className="text-center max-w-2xl mx-auto mb-16">
                    <FadeIn>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400 mb-4">
                            📚 Health Insights
                        </span>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <h1 className="heading-lg mb-4">
                            Our <GradientText>Health Blog</GradientText>
                        </h1>
                    </FadeIn>
                    <FadeIn delay={0.2}>
                        <p className="text-lg text-zinc-600 dark:text-zinc-400">
                            Expert insights on homeopathy, natural healing, and holistic
                            health to support your wellness journey.
                        </p>
                    </FadeIn>
                </div>

                {/* Featured Posts */}
                {featuredPosts.length > 0 && (
                    <div className="mb-16">
                        <FadeIn>
                            <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
                                Featured Articles
                            </h2>
                        </FadeIn>
                        <div className="grid md:grid-cols-2 gap-6">
                            {featuredPosts.map((post, index) => (
                                <FadeIn key={post.slug} delay={index * 0.1}>
                                    <Link href={`/blog/${post.slug}`} className="block h-full">
                                        <GlassCard
                                            className="h-full group cursor-pointer relative overflow-hidden"
                                            hoverEffect
                                        >
                                            <div className="absolute top-4 right-4">
                                                <span className="px-2 py-1 text-xs font-medium bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-400 rounded-full">
                                                    Featured
                                                </span>
                                            </div>

                                            <div className="space-y-4">
                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400">
                                                    {post.category}
                                                </span>

                                                <h3 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                                    {post.title}
                                                </h3>

                                                <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed">
                                                    {post.excerpt}
                                                </p>

                                                <div className="flex items-center gap-4 text-sm text-zinc-500 dark:text-zinc-500">
                                                    <span className="flex items-center gap-1">
                                                        <Calendar className="w-4 h-4" />
                                                        {format(new Date(post.date), 'MMM d, yyyy')}
                                                    </span>
                                                    <span className="flex items-center gap-1">
                                                        <Clock className="w-4 h-4" />
                                                        {post.readTime}
                                                    </span>
                                                </div>

                                                <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium text-sm group-hover:gap-3 transition-all">
                                                    Read Article
                                                    <ArrowRight className="w-4 h-4" />
                                                </div>
                                            </div>
                                        </GlassCard>
                                    </Link>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                )}

                {/* All Posts */}
                <div>
                    <FadeIn>
                        <h2 className="text-xl font-semibold text-zinc-900 dark:text-zinc-100 mb-6">
                            All Articles
                        </h2>
                    </FadeIn>

                    <StaggerContainer className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {regularPosts.map((post) => (
                            <StaggerItem key={post.slug}>
                                <Link href={`/blog/${post.slug}`} className="block h-full">
                                    <GlassCard
                                        className="h-full group cursor-pointer"
                                        hoverEffect
                                    >
                                        <div className="space-y-4">
                                            <div className="flex items-center justify-between">
                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400">
                                                    {post.category}
                                                </span>
                                                <span className="text-xs text-zinc-500">
                                                    {post.readTime}
                                                </span>
                                            </div>

                                            <h3 className="text-lg font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                                                {post.title}
                                            </h3>

                                            <p className="text-zinc-600 dark:text-zinc-400 text-sm leading-relaxed line-clamp-3">
                                                {post.excerpt}
                                            </p>

                                            <div className="flex items-center gap-2 text-xs text-zinc-500">
                                                <Calendar className="w-3 h-3" />
                                                {format(new Date(post.date), 'MMM d, yyyy')}
                                            </div>

                                            <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400 font-medium text-sm group-hover:gap-3 transition-all">
                                                Read More
                                                <ArrowRight className="w-4 h-4" />
                                            </div>
                                        </div>
                                    </GlassCard>
                                </Link>
                            </StaggerItem>
                        ))}
                    </StaggerContainer>
                </div>
            </div>
        </section>
    )
}
