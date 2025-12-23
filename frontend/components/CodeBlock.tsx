'use client'

import { useState, useEffect } from 'react'
import { Copy, Check } from 'lucide-react'

interface CodeBlockProps {
  code: string
  language: string
  title?: string
}

export default function CodeBlock({ code, language, title }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)
  const [SyntaxHighlighter, setSyntaxHighlighter] = useState<any>(null)
  const [style, setStyle] = useState<any>(null)

  useEffect(() => {
    // Dynamically import to avoid SSR issues
    import('react-syntax-highlighter').then((mod) => {
      setSyntaxHighlighter(() => mod.Prism)
    })
    import('react-syntax-highlighter/dist/cjs/styles/prism').then((mod) => {
      setStyle(mod.oneDark)
    })
  }, [])

  const copyToClipboard = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }
  }

  if (!SyntaxHighlighter || !style) {
    // Fallback while loading
    return (
      <div className="my-4 rounded-lg overflow-hidden border border-gray-300">
        {title && (
          <div className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
            <span className="text-sm font-medium">{title}</span>
          </div>
        )}
        <pre className="bg-gray-900 text-gray-100 p-4 overflow-x-auto m-0">
          <code>{code}</code>
        </pre>
      </div>
    )
  }

  return (
    <div className="my-4 rounded-lg overflow-hidden border border-gray-300">
      {title && (
        <div className="bg-gray-800 text-white px-4 py-2 flex justify-between items-center">
          <span className="text-sm font-medium">{title}</span>
          <button
            onClick={copyToClipboard}
            className="flex items-center gap-2 text-sm hover:text-gray-300 transition"
          >
            {copied ? (
              <>
                <Check size={16} />
                Copied!
              </>
            ) : (
              <>
                <Copy size={16} />
                Copy
              </>
            )}
          </button>
        </div>
      )}
      <SyntaxHighlighter
        language={language}
        style={style}
        customStyle={{
          margin: 0,
          padding: '1rem',
          borderRadius: title ? '0 0 0.5rem 0.5rem' : '0.5rem',
        }}
        PreTag="div"
      >
        {code}
      </SyntaxHighlighter>
    </div>
  )
}

