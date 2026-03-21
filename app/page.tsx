import Link from 'next/link';
import { getBlogPosts } from './blog/utils';

function formatDate(d: string) {
  const dt = new Date(d + 'T00:00:00');
  return dt.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default async function Home() {
  const posts = await getBlogPosts();

  return (
    <div>
      <h1 className="font-medium text-2xl mb-2">Somethings Engineering</h1>
      <p className="text-gray-600 dark:text-zinc-400 mb-14">
        How we build a mentorship platform connecting teens with mentors.
      </p>
      <div className="space-y-12">
        {posts.map((post) => (
          <article key={post.slug}>
            <Link href={`/blog/${post.slug}`} className="group block">
              <h2 className="font-medium text-lg text-gray-900 dark:text-zinc-100 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors">
                {post.title}
              </h2>
              <p className="text-gray-600 dark:text-zinc-400 text-sm mt-2 leading-relaxed">
                {post.description}
              </p>
              <p className="text-gray-400 dark:text-zinc-500 text-sm mt-3">
                {post.author && `${post.author} · `}
                {formatDate(post.date)}
              </p>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
