# Somethings Engineering Blog

A modern blog platform built with Next.js and MDX, showcasing the engineering behind [Somethings](https://somethings.com) — a mentorship platform connecting teens with mentors.

## Features

- 📝 **MDX Support** - Write blog posts with embedded React components
- 🎨 **Dark Mode** - Beautiful theme switching with `next-themes`
- 📊 **Mermaid Diagrams** - Embed flowcharts and diagrams directly in posts
- 👥 **Multi-Author Support** - Configurable author profiles with avatars and social links
- 🚀 **Fast & Modern** - Built on Next.js 15 with React 19 and TailwindCSS 4
- 📈 **Analytics** - Integrated with Vercel Analytics
- 🎯 **Syntax Highlighting** - Code blocks with `sugar-high`

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/withlink/blog.git
cd blog

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the blog.

## Project Structure

```
blog/
├── app/
│   ├── blog/
│   │   ├── [slug]/           # Blog post routes
│   │   ├── authors.ts         # Author profiles
│   │   ├── layout.tsx         # Blog layout wrapper
│   │   ├── mermaid.tsx        # Mermaid diagram component
│   │   └── utils.ts           # Blog utilities
│   ├── layout.tsx             # Root layout
│   ├── page.tsx               # Homepage (blog list)
│   └── theme-provider.tsx     # Dark mode provider
├── public/                    # Static assets
├── mdx-components.tsx         # Custom MDX components
└── package.json
```

## Writing Blog Posts

Blog posts are MDX files located in `app/blog/[slug]/page.mdx`. Each post includes metadata and content:

```mdx
export const metadata = {
  title: 'Your Post Title',
  description: 'A brief description of your post',
  date: '2024-03-21',
  author: 'Arman Khan',
  alternates: {
    canonical: '/blog/your-post-slug',
  },
};

# Your Post Title

<PostMeta author="Arman Khan" date="2024-03-21" />

Your content here...
```

### Adding Mermaid Diagrams

Use the `<Mermaid />` component to embed diagrams:

```mdx
<Mermaid chart={`
flowchart TD
  A[Start] --> B[Process]
  B --> C[End]
`} />
```

## Adding Authors

Edit `app/blog/authors.ts` to add new author profiles:

```typescript
export const authors: Record<string, Author> = {
  yourhandle: {
    name: 'Your Name',
    bio: 'Your bio here',
    avatar: 'https://github.com/yourusername.png',
    twitter: 'yourhandle',
    github: 'yourusername',
  },
};
```

## Available Scripts

```bash
# Start development server with Turbopack
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

## Tech Stack

- **Framework**: [Next.js 15](https://nextjs.org/)
- **UI**: [React 19](https://react.dev/)
- **Styling**: [TailwindCSS 4](https://tailwindcss.com/)
- **Content**: [MDX](https://mdxjs.com/)
- **Diagrams**: [Mermaid](https://mermaid.js.org/)
- **Theme**: [next-themes](https://github.com/pacocoursey/next-themes)
- **Syntax Highlighting**: [sugar-high](https://github.com/huozhi/sugar-high)
- **Analytics**: [Vercel Analytics](https://vercel.com/analytics)

## Deployment

This blog is optimized for deployment on [Vercel](https://vercel.com):

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/withlink/blog)

## License

Private repository - All rights reserved.

## About Somethings

We're building a mentorship platform connecting teens with mentors. This blog shares our engineering journey, technical decisions, and lessons learned along the way.

---

Built with ❤️ by the Somethings team
