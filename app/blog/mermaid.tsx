'use client';

import { useEffect, useRef, useState } from 'react';
import mermaid from 'mermaid';
import { useTheme } from 'next-themes';

let idCounter = 0;

export function Mermaid({ chart }: { chart: string }) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [svg, setSvg] = useState('');
  const { resolvedTheme } = useTheme();
  const idRef = useRef(`mermaid-${idCounter++}`);

  useEffect(() => {
    if (!chart) return;

    mermaid.initialize({
      startOnLoad: false,
      theme: resolvedTheme === 'dark' ? 'dark' : 'default',
      fontFamily: 'var(--font-sans)',
    });

    mermaid
      .render(idRef.current, chart.trim())
      .then(({ svg }) => setSvg(svg))
      .catch(console.error);
  }, [chart, resolvedTheme]);

  return (
    <div
      ref={containerRef}
      className="my-8 flex justify-center overflow-x-auto rounded-lg border border-gray-200 bg-gray-50 p-4 dark:border-zinc-700 dark:bg-zinc-900"
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}
