import { Metadata } from 'next'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import ReactMarkdown from 'react-markdown'
import {
    ChevronRight,
    Calendar,
    Clock,
    Tag,
    ArrowLeft,
} from 'lucide-react'
import { blogPosts, getBlogPost, getRecentPosts } from '@/lib/data/blog'
import { FadeIn } from '@/components/animations/fade-in'
import { GradientText } from '@/components/ui/gradient-text'
import { GlassCard } from '@/components/ui/glass-card'
import { AnimatedButton } from '@/components/ui/animated-button'
import { ShareButton } from '@/components/shared/share-button'

interface Props {
    params: Promise<{ slug: string }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params
    const post = getBlogPost(slug)

    if (!post) {
        return { title: 'Post Not Found' }
    }

    return {
        title: post.title,
        description: post.excerpt,
    }
}

export async function generateStaticParams() {
    return blogPosts.map((post) => ({
        slug: post.slug,
    }))
}

export default async function BlogPostPage({ params }: Props) {
    const { slug } = await params
    const post = getBlogPost(slug)

    if (!post) {
        notFound()
    }

    const recentPosts = getRecentPosts(3).filter((p) => p.slug !== post.slug)

    return (
        <article className="min-h-screen">
            {/* Hero */}
            <section className="section-padding bg-gradient-to-br from-primary-50 via-white to-emerald-50 dark:from-zinc-950 dark:via-zinc-900 dark:to-primary-950/20">
                <div className="container-custom max-w-4xl">
                    {/* Breadcrumb */}
                    <FadeIn>
                        <nav className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-8">
                            <Link
                                href="/"
                                className="hover:text-primary-600 transition-colors"
                            >
                                Home
                            </Link>
                            <ChevronRight className="w-4 h-4" />
                            <Link
                                href="/blog"
                                className="hover:text-primary-600 transition-colors"
                            >
                                Blog
                            </Link>
                            <ChevronRight className="w-4 h-4" />
                            <span className="text-zinc-900 dark:text-zinc-100 truncate max-w-[200px]">
                                {post.title}
                            </span>
                        </nav>
                    </FadeIn>

                    {/* Category */}
                    <FadeIn>
                        <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400 mb-4">
                            {post.category}
                        </span>
                    </FadeIn>

                    {/* Title */}
                    <FadeIn delay={0.1}>
                        <h1 className="heading-lg mb-6">
                            <GradientText>{post.title}</GradientText>
                        </h1>
                    </FadeIn>

                    {/* Meta */}
                    <FadeIn delay={0.2}>
                        <div className="flex flex-wrap items-center gap-6 text-sm text-zinc-600 dark:text-zinc-400 mb-8">
                            <div className="flex items-center gap-2">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-emerald-600 flex items-center justify-center text-white font-bold">
                                    {post.author.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-medium text-zinc-900 dark:text-zinc-100">
                                        {post.author}
                                    </p>
                                    <p className="text-xs">{post.authorRole}</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <Calendar className="w-4 h-4" />
                                {format(new Date(post.date), 'MMMM d, yyyy')}
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="w-4 h-4" />
                                {post.readTime}
                            </div>
                        </div>
                    </FadeIn>

                    {/* Tags */}
                    <FadeIn delay={0.3}>
                        <div className="flex flex-wrap gap-2">
                            {post.tags.map((tag) => (
                                <span
                                    key={tag}
                                    className="inline-flex items-center gap-1 px-2 py-1 rounded-full text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400"
                                >
                                    <Tag className="w-3 h-3" />
                                    {tag}
                                </span>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Content */}
            <section className="py-12 bg-white dark:bg-zinc-950">
                <div className="container-custom max-w-4xl">
                    <FadeIn>
                        <div className="prose prose-lg dark:prose-invert max-w-none prose-headings:font-heading prose-headings:font-semibold prose-a:text-primary-600 prose-a:no-underline hover:prose-a:underline">
                            <ReactMarkdown>{post.content}</ReactMarkdown>
                        </div>
                    </FadeIn>

                    {/* Share & Back */}
                    <FadeIn delay={0.2}>
                        <div className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                            <Link href="/blog">
                                <AnimatedButton variant="outline" className="gap-2">
                                    <ArrowLeft className="w-4 h-4" />
                                    Back to Blog
                                </AnimatedButton>
                            </Link>

                            <div className="flex items-center gap-2">
                                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                                    Share:
                                </span>
                                <ShareButton title={post.title} />
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* Related Posts */}
            {recentPosts.length > 0 && (
                <section className="section-padding bg-zinc-50 dark:bg-zinc-900">
                    <div className="container-custom">
                        <FadeIn>
                            <h2 className="heading-sm mb-8 text-center">
                                More <GradientText>Articles</GradientText>
                            </h2>
                        </FadeIn>

                        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                            {recentPosts.map((relatedPost, index) => (
                                <FadeIn key={relatedPost.slug} delay={index * 0.1}>
                                    <Link
                                        href={`/blog/${relatedPost.slug}`}
                                        className="block h-full"
                                    >
                                        <GlassCard
                                            className="h-full group cursor-pointer"
                                            hoverEffect
                                        >
                                            <div className="space-y-3">
                                                <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-400">
                                                    {relatedPost.category}
                                                </span>

                                                <h3 className="font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-2">
                                                    {relatedPost.title}
                                                </h3>

                                                <p className="text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2">
                                                    {relatedPost.excerpt}
                                                </p>

                                                <div className="text-xs text-zinc-500">
                                                    {relatedPost.readTime}
                                                </div>
                                            </div>
                                        </GlassCard>
                                    </Link>
                                </FadeIn>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </article>
    )
}
