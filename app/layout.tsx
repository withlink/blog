import './globals.css';
import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import Link from 'next/link';
import { ThemeProvider } from './theme-provider';
import { ThemeToggle } from './theme-toggle';

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
    <html
      lang="en"
      className={`${geist.variable} ${geistMono.variable}`}
      suppressHydrationWarning
    >
      <body className="antialiased tracking-tight">
        <ThemeProvider>
          <div className="min-h-screen flex flex-col justify-between pt-6 md:pt-16 px-6 md:px-8 pb-8 dark:bg-zinc-950 bg-white text-gray-900 dark:text-zinc-200">
            <main className="max-w-[65ch] mx-auto w-full">
              <header className="flex items-center justify-between mb-12">
                <Link
                  href="/"
                  className="flex items-center gap-2 text-sm text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-zinc-200 transition-colors"
                >
                  <img
                    src="/logo.png"
                    alt="Somethings"
                    className="w-6 h-6 rounded"
                  />
                  Somethings Engineering
                </Link>
                <ThemeToggle />
              </header>
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}

function Footer() {
  return (
    <footer className="mt-20 max-w-[65ch] mx-auto w-full py-8 border-t border-gray-100 dark:border-zinc-800">
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
