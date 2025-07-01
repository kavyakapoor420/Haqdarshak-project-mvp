"use client"

import { useState } from "react"
import { Button } from '../Components/ui/button'
import { Copy, Check } from "lucide-react"
import { cn } from "@/lib/utils"

interface CodeBlockProps {
  language: string
  code: string
  className?: string
}

export function CodeBlock({ language, code, className }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className={cn("relative group", className)}>
      <div className="flex items-center justify-between px-4 py-2 bg-slate-800 text-slate-200 text-sm rounded-t-lg">
        <span className="font-mono">{language}</span>
        <Button
          size="sm"
          variant="ghost"
          onClick={copyToClipboard}
          className="h-6 w-6 p-0 text-slate-400 hover:text-slate-200 hover:bg-slate-700"
        >
          {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
        </Button>
      </div>
      <pre className="bg-slate-900 text-slate-100 p-4 rounded-b-lg overflow-x-auto text-sm">
        <code className="font-mono">{code}</code>
      </pre>
    </div>
  )
}
