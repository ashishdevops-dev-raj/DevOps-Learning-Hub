'use client'

import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

interface BackButtonProps {
  href?: string
  label?: string
}

export default function BackButton({ href = '/topics', label = 'Back to Topics' }: BackButtonProps) {
  return (
    <Link
      href={href}
      className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-700 font-medium mb-6 transition-colors"
    >
      <ArrowLeft size={20} />
      <span>{label}</span>
    </Link>
  )
}

