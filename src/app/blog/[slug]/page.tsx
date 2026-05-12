import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { Footer } from "@/components/layout/Footer"
import { getAllPosts, getPostBySlug } from "@/lib/blog"
import { MDXRemote } from "next-mdx-remote/rsc"
import remarkGfm from "remark-gfm"
import rehypeSlug from "rehype-slug"

interface BlogPostPageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: BlogPostPageProps): Promise<Metadata> {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) return {}

  return {
    title: `${post.title} | Enlazarte Blog`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      type: "article",
      publishedTime: post.date,
    },
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { slug } = await params
  const post = getPostBySlug(slug)

  if (!post) notFound()

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date,
    author: {
      name: "Rodrigo Flores",
    },
    ...(post.category === "Narrativa Digital" && {
      mentions: {
        "@type": "SoftwareApplication",
        name: "Enlazarte App",
        url: "https://enlazarte.app",
      },
    }),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="min-h-screen bg-black pt-20 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <Link
            href="/blog"
            className="text-[#00B4D8] text-sm hover:underline mb-8 inline-block"
          >
            ← Volver al blog
          </Link>

          <article>
            <header className="mb-12">
              <span className="text-[#00B4D8] text-xs font-medium uppercase tracking-wider">
                {post.category}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold text-white mt-4 mb-6">
                {post.title}
              </h1>
              <time className="text-gray-400 text-sm">{post.date}</time>
            </header>

            <div className="prose prose-invert prose-lg max-w-none prose-headings:text-white prose-p:text-gray-300 prose-a:text-[#00B4D8] prose-a:no-underline hover:prose-a:underline prose-strong:text-white">
              <MDXRemote source={post.content} options={{ mdxOptions: { remarkPlugins: [remarkGfm], rehypePlugins: [rehypeSlug] } }} />
            </div>
          </article>
        </div>
      </main>
      <Footer />
    </>
  )
}
