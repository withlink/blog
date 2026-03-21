import fs from 'fs';
import path from 'path';

export interface BlogPost {
  slug: string;
  title: string;
  date: string;
  description: string;
  author?: string;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const blogDir = path.join(process.cwd(), 'app', 'blog');
  const entries = fs.readdirSync(blogDir, { withFileTypes: true });

  const posts: BlogPost[] = [];

  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const mdxPath = path.join(blogDir, entry.name, 'page.mdx');
    if (!fs.existsSync(mdxPath)) continue;

    try {
      const mod = await import(`./${entry.name}/page.mdx`);
      const meta = mod.metadata;
      if (meta?.title) {
        posts.push({
          slug: entry.name,
          title: meta.title,
          date: meta.date || '',
          description: meta.description || '',
          author: meta.author,
        });
      }
    } catch {
      // skip posts that fail to import
    }
  }

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}
