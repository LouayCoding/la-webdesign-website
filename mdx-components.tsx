import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold mb-6 text-foreground">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-3xl font-semibold mb-4 text-foreground">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-2xl font-medium mb-3 text-foreground">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="mb-4 text-secondary-300 leading-relaxed">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="mb-4 ml-6 list-disc text-secondary-300">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="mb-4 ml-6 list-decimal text-secondary-300">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="mb-1">{children}</li>
    ),
    code: ({ children }) => (
      <code className="bg-secondary-800 px-2 py-1 rounded text-sm font-mono text-primary-400">
        {children}
      </code>
    ),
    pre: ({ children }) => (
      <pre className="bg-secondary-900 p-4 rounded-lg mb-4 overflow-x-auto">
        {children}
      </pre>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-primary-500 pl-4 mb-4 italic text-secondary-300">
        {children}
      </blockquote>
    ),
    a: ({ href, children }) => (
      <a 
        href={href} 
        className="text-primary-400 hover:text-primary-300 underline transition-colors"
        target={href?.startsWith('http') ? '_blank' : undefined}
        rel={href?.startsWith('http') ? 'noopener noreferrer' : undefined}
      >
        {children}
      </a>
    ),
    ...components,
  };
}
