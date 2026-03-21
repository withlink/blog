import './globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';

const geist = Geist({ subsets: ['latin'], variable: '--font-sans' });
const geistMono = Geist_Mono({ subsets: ['latin'], variable: '--font-mono' });

export const metadata: Metadata = {
  metadataBase: new URL('https://blog.somethings.com'),
  title: {
    default: 'Somethings Engineering',
    template: '%s | Somethings Engineering',
  },
  description:
    'Engineering blog from the team building Somethings — a mentorship platform connecting teens with mentors.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${geist.variable} ${geistMono.variable}`}>
      <body className="antialiased tracking-tight">
        <div className="min-h-screen flex flex-col justify-between pt-0 md:pt-8 p-8 dark:bg-zinc-950 bg-white text-gray-900 dark:text-zinc-200">
          <main className="max-w-[65ch] mx-auto w-full space-y-6">
            <header className="mb-8">
              <Link
                href="/"
                className="text-sm text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-zinc-200 transition-colors"
              >
                Somethings Engineering
              </Link>
            </header>
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="mt-16 max-w-[65ch] mx-auto w-full py-8">
      <div className="flex gap-4 text-sm tracking-tight text-gray-400 dark:text-zinc-500">
        <a
          href="https://somethings.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600 dark:hover:text-zinc-300 transition-colors"
        >
          somethings.com
        </a>
        <a
          href="https://github.com/withlink"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-gray-600 dark:hover:text-zinc-300 transition-colors"
        >
          github
        </a>
      </div>
    </footer>
  );
}
