'use client'

import { useEffect } from 'react'
import Link from 'next/link'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h2 className="text-2xl font-semibold text-gray-900 mb-4">Something went wrong!</h2>
      <p className="text-gray-600 mb-8">
        {error.message || 'An unexpected error occurred'}
      </p>
      <div className="flex gap-4">
        <button
          onClick={reset}
          className="bg-primary-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-primary-700 transition"
        >
          Try again
        </button>
        <Link
          href="/"
          className="bg-gray-200 text-gray-800 px-6 py-3 rounded-lg font-semibold hover:bg-gray-300 transition"
        >
          Go Home
        </Link>
      </div>
    </div>
  )
}

