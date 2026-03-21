import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import { highlight } from "sugar-high";
import { authors } from "./app/blog/authors";

type HeadingProps = ComponentPropsWithoutRef<"h1">;
type ParagraphProps = ComponentPropsWithoutRef<"p">;
type ListProps = ComponentPropsWithoutRef<"ul">;
type ListItemProps = ComponentPropsWithoutRef<"li">;
type AnchorProps = ComponentPropsWithoutRef<"a">;
type BlockquoteProps = ComponentPropsWithoutRef<"blockquote">;

function PostMeta({
  author,
  date,
  updated,
}: {
  author?: string;
  date?: string;
  updated?: string;
}) {
  const formatDate = (d: string) => {
    const dt = new Date(d + "T00:00:00");
    return dt.toLocaleDateString("en-US", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <div className="flex flex-wrap gap-x-4 gap-y-1 text-sm text-gray-500 dark:text-zinc-500 mt-3 mb-10">
      {author && <span>{author}</span>}
      {date && <span>{formatDate(date)}</span>}
      {updated && (
        <span className="text-gray-400 dark:text-zinc-600">
          Updated {formatDate(updated)}
        </span>
      )}
    </div>
  );
}

function AuthorCard({ id }: { id: string }) {
  const author = authors[id];
  if (!author) return null;

  const links = [
    author.twitter && {
      label: `@${author.twitter}`,
      href: `https://x.com/${author.twitter}`,
    },
    author.github && {
      label: "GitHub",
      href: `https://github.com/${author.github}`,
    },
    author.website && {
      label: "Website",
      href: author.website,
    },
  ].filter(Boolean) as { label: string; href: string }[];

  return (
    <div className="mt-16 pt-8 border-t border-gray-200 dark:border-zinc-800">
      <div className="flex gap-4 items-start">
        {author.avatar ? (
          <img
            src={author.avatar}
            alt={author.name}
            className="w-12 h-12 rounded-full shrink-0"
          />
        ) : (
          <div className="w-12 h-12 rounded-full bg-gray-100 dark:bg-zinc-800 flex items-center justify-center text-gray-500 dark:text-zinc-400 font-medium text-lg shrink-0">
            {author.name
              .split(" ")
              .map((n) => n[0])
              .join("")}
          </div>
        )}
        <div>
          <p className="font-medium text-gray-900 dark:text-zinc-100 !my-0">
            {author.name}
          </p>
          <p className="text-sm text-gray-600 dark:text-zinc-400 !my-1">
            {author.bio}
          </p>
          <div className="flex gap-3 mt-2">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-gray-500 dark:text-zinc-500 hover:text-gray-900 dark:hover:text-zinc-200 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

const components = {
  PostMeta,
  AuthorCard,
  h1: (props: HeadingProps) => (
    <h1
      className="font-semibold text-3xl tracking-tight pt-8 mb-0 text-gray-950 dark:text-zinc-50 text-balance"
      {...props}
    />
  ),
  h2: (props: HeadingProps) => (
    <h2
      className="text-gray-800 dark:text-zinc-200 font-medium text-xl mt-12 mb-4 text-balance"
      {...props}
    />
  ),
  h3: (props: HeadingProps) => (
    <h3
      className="text-gray-800 dark:text-zinc-200 font-medium text-base mt-10 mb-3 text-balance"
      {...props}
    />
  ),
  h4: (props: HeadingProps) => (
    <h4 className="font-medium text-balance" {...props} />
  ),
  p: (props: ParagraphProps) => (
    <p
      className="text-gray-800 dark:text-zinc-300 leading-7 my-5 text-pretty"
      {...props}
    />
  ),
  ol: (props: ListProps) => (
    <ol
      className="text-gray-800 dark:text-zinc-300 list-decimal pl-5 space-y-2 my-5"
      {...props}
    />
  ),
  ul: (props: ListProps) => (
    <ul
      className="text-gray-800 dark:text-zinc-300 list-disc pl-5 space-y-2 my-5"
      {...props}
    />
  ),
  li: (props: ListItemProps) => <li className="pl-1 leading-7" {...props} />,
  em: (props: ComponentPropsWithoutRef<"em">) => (
    <em className="font-medium" {...props} />
  ),
  strong: (props: ComponentPropsWithoutRef<"strong">) => (
    <strong className="font-medium" {...props} />
  ),
  a: ({ href, children, ...props }: AnchorProps) => {
    const className =
      "text-blue-500 hover:text-blue-700 dark:text-gray-400 hover:dark:text-gray-300 dark:underline dark:underline-offset-2 dark:decoration-gray-700";
    if (href?.startsWith("/")) {
      return (
        <Link href={href} className={className} {...props}>
          {children}
        </Link>
      );
    }
    if (href?.startsWith("#")) {
      return (
        <a href={href} className={className} {...props}>
          {children}
        </a>
      );
    }
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        {...props}
      >
        {children}
      </a>
    );
  },
  pre: ({ children, ...props }: ComponentPropsWithoutRef<"pre">) => {
    return <pre {...props}>{children}</pre>;
  },
  code: ({
    children,
    className,
    ...props
  }: ComponentPropsWithoutRef<"code">) => {
    const isBlock =
      typeof className === "string" && className.startsWith("language-");
    if (isBlock || (typeof children === "string" && children.includes("\n"))) {
      const codeHTML = highlight(children as string);
      return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
    }
    return <code {...props}>{children}</code>;
  },
  blockquote: (props: BlockquoteProps) => (
    <blockquote
      className="ml-[0.075em] border-l-3 border-gray-300 pl-4 text-gray-700 dark:border-zinc-600 dark:text-zinc-300"
      {...props}
    />
  ),
};

declare global {
  type MDXProvidedComponents = typeof components;
}

export function useMDXComponents(): MDXProvidedComponents {
  return components;
}
