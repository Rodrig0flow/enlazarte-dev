import fs from "fs"
import path from "path"
import matter from "gray-matter"

const postsDirectory = path.join(process.cwd(), "content/blog")

export type BlogPost = {
  slug: string
  title: string
  date: string
  category: string
  excerpt: string
  content: string
}

export function getAllPosts(): BlogPost[] {
  const fileNames = fs.readdirSync(postsDirectory)
  const posts = fileNames.map((fileName) => {
    const slug = fileName.replace(/\.mdx$/, "")
    const filePath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(filePath, "utf8")
    const { data, content } = matter(fileContents)

    return {
      slug,
      title: data.title,
      date: data.date,
      category: data.category,
      excerpt: data.excerpt,
      content,
    }
  })

  return posts.sort((a, b) => (new Date(b.date) > new Date(a.date) ? 1 : -1))
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  const filePath = path.join(postsDirectory, `${slug}.mdx`)
  if (!fs.existsSync(filePath)) return undefined

  const fileContents = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(fileContents)

  return {
    slug,
    title: data.title,
    date: data.date,
    category: data.category,
    excerpt: data.excerpt,
    content,
  }
}
