export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <article className="prose-custom">{children}</article>;
}
