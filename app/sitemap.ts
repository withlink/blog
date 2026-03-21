import { getBlogPosts } from './blog/utils';

export default async function sitemap() {
  const posts = await getBlogPosts();
  const baseUrl = 'https://blog.somethings.com';

  const blogUrls = posts.map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.date,
  }));

  return [
    { url: baseUrl, lastModified: new Date().toISOString().split('T')[0] },
    ...blogUrls,
  ];
}
