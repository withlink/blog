---
name: write-blog
description: Write and publish blog posts for the Somethings engineering blog. Use when the user wants to write a new blog post, draft an article, convert a topic into a blog post, or publish content to the blog. Covers drafting, humanizing AI writing patterns, converting to MDX, and publishing.
---

# Somethings Blog Writer

## About the blog

Somethings engineering blog at `/Users/arman/Development/Somethings/blog`. Next.js + MDX, deployed on Vercel. Posts are `.mdx` files in `app/blog/[slug]/page.mdx`.

## Writing style

Inspired by Vercel, Railway, and Cloudflare engineering blogs.

**Voice:** First person plural ("we"), personal, opinionated. Use "I" when it fits. The author is a real person sharing what they built and learned.

**Structure:** Problem first, then solution. Open with the pain point in 2-3 sentences. No "this post will cover..." framing. Show code only when it reveals something interesting -- not full file dumps.

**Tone:** Direct, no fluff. Short paragraphs. Vary sentence length. Have opinions -- don't just report. Acknowledge tradeoffs and things that didn't work.

**Length:** 1000-2000 words. 5-8 minute read. Shorter is better.

## Anti-patterns to avoid

Run the humanizer skill after drafting. Key patterns to catch:

- No bold inline-header lists ("**Feature:** Description"). Convert to prose.
- No "This post walks through..." or "Let's dive in" framing
- No generic positive conclusions ("The future looks bright")
- No overly neat parallel slogans ("From X to Y. From A to B.")
- No rule-of-three unless natural
- No filler ("In order to", "It's important to note")
- No significance inflation ("pivotal", "transformative", "game-changing")
- No `--` em dash overuse
- Headings in sentence case, not Title Case (except the h1 title)

## Post structure

```
1. Title (h1) -- direct, specific, can be opinionated
2. PostMeta -- author and date
3. Opening -- 2-3 paragraphs stating the problem from experience
4. Horizontal rule
5. Sections (h2) -- each section covers one concept
   - Code snippets where they reveal something non-obvious
   - Tables for structured comparisons
6. "What we learned" or equivalent -- honest reflections, not a listicle
7. "What's next" -- what you're building next, briefly
8. AuthorCard
```

## MDX file format

Every post lives at `app/blog/[slug]/page.mdx`:

```mdx
export const metadata = {
  title: 'Your Post Title',
  description: 'One sentence description for the listing page and SEO.',
  date: 'YYYY-MM-DD',
  author: 'Arman Khan',
  alternates: {
    canonical: '/blog/[slug]',
  },
};

# Your Post Title

<PostMeta author="Arman Khan" date="YYYY-MM-DD" />

Content here...

<AuthorCard id="arman" />
```

## Available MDX components

- `<PostMeta author="Name" date="YYYY-MM-DD" updated="YYYY-MM-DD" />` -- author, date, optional updated date
- `<AuthorCard id="arman" />` -- author bio card with social links at bottom of post

## Authors

Defined in `app/blog/authors.ts`. Current authors:

- `arman` -- Arman Khan, Founding Principal Engineer

To add an author, add an entry to the `authors` object with `name`, `bio`, `avatar`, `twitter`, `github`.

## Workflow

1. **Gather context** -- understand the topic, ask clarifying questions if needed
2. **Draft** -- write the post in markdown following the style guide above
3. **Humanize** -- apply the humanizer skill to remove AI writing patterns
4. **Review with user** -- get feedback, iterate
5. **Convert to MDX** -- create `app/blog/[slug]/page.mdx` with metadata export
6. **Build** -- run `npx next build` from the blog directory to verify
7. **Push** -- commit and push, Vercel auto-deploys

## CSS utility classes

Available for use anywhere:
- `.text-balance` -- `text-wrap: balance` (for headings)
- `.text-pretty` -- `text-wrap: pretty` (for body text)

These are already applied to all MDX headings and paragraphs automatically.
