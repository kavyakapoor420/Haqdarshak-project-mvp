"use client"

import { useState, useRef } from "react"
import { Bold, Italic, Link, Quote, Code, ImageIcon, List, ListOrdered, AlignLeft, Eye, EyeOff } from "lucide-react"
import { Button } from '../ui/button'
import { Textarea } from '../ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs'


interface RichTextEditorProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function RichTextEditor({ value, onChange, placeholder }: RichTextEditorProps) {
  const [showPreview, setShowPreview] = useState(false)
  const textareaRef = useRef<HTMLTextAreaElement>(null)

  const insertText = (before: string, after = "") => {
    const textarea = textareaRef.current
    if (!textarea) return

    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = value.substring(start, end)
    const newText = value.substring(0, start) + before + selectedText + after + value.substring(end)

    onChange(newText)

    // Set cursor position after insertion
    setTimeout(() => {
      textarea.focus()
      textarea.setSelectionRange(start + before.length, start + before.length + selectedText.length)
    }, 0)
  }

  const toolbarButtons = [
    { icon: Bold, action: () => insertText("**", "**"), tooltip: "Bold" },
    { icon: Italic, action: () => insertText("*", "*"), tooltip: "Italic" },
    { icon: Link, action: () => insertText("[", "](url)"), tooltip: "Link" },
    { icon: Quote, action: () => insertText("> "), tooltip: "Quote" },
    { icon: Code, action: () => insertText("`", "`"), tooltip: "Code" },
    { icon: ImageIcon, action: () => insertText("![alt text](", ")"), tooltip: "Image" },
    { icon: List, action: () => insertText("- "), tooltip: "Bullet List" },
    { icon: ListOrdered, action: () => insertText("1. "), tooltip: "Numbered List" },
    { icon: AlignLeft, action: () => insertText("\n---\n"), tooltip: "Horizontal Rule" },
  ]

  return (
    <div className="border border-gray-600 rounded-md bg-gray-900">
      {/* Toolbar */}
      <div className="flex items-center gap-1 p-2 border-b border-gray-600 bg-gray-800">
        {toolbarButtons.map((button, index) => (
          <Button
            key={index}
            variant="ghost"
            size="sm"
            onClick={button.action}
            className="h-8 w-8 p-0 text-gray-300 hover:text-white hover:bg-gray-700"
            title={button.tooltip}
          >
            <button.icon className="h-4 w-4" />
          </Button>
        ))}

        <div className="ml-auto flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setShowPreview(!showPreview)}
            className="text-gray-300 hover:text-white hover:bg-gray-700"
          >
            {showPreview ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            {showPreview ? "Hide" : "Preview"}
          </Button>
        </div>
      </div>

      {/* Tabs */}
      <Tabs defaultValue="editor" className="w-full">
        <TabsList className="grid w-full grid-cols-8 bg-gray-800 border-b border-gray-600 rounded-none h-auto p-0">
          <TabsTrigger value="links" className="text-xs py-2 text-white data-[state=active]:bg-gray-700">
            Links
          </TabsTrigger>
          <TabsTrigger value="images" className="text-xs py-2 text-white data-[state=active]:bg-gray-700">
            Images
          </TabsTrigger>
          <TabsTrigger value="styling" className="text-xs py-2 text-white data-[state=active]:bg-gray-700">
            Styling
          </TabsTrigger>
          <TabsTrigger value="lists" className="text-xs py-2 text-white data-[state=active]:bg-gray-700">
            Lists
          </TabsTrigger>
          <TabsTrigger value="blockquotes" className="text-xs text-white py-2 data-[state=active]:bg-gray-700">
            Blockquotes
          </TabsTrigger>
          <TabsTrigger value="code" className="text-xs py-2 text-white data-[state=active]:bg-gray-700">
            Code
          </TabsTrigger>
          <TabsTrigger value="html" className="text-xs py-2 text-white data-[state=active]:bg-gray-700">
            HTML
          </TabsTrigger>
          <TabsTrigger value="tables" className="text-xs py-2 text-white data-[state=active]:bg-gray-700">
            Tables
          </TabsTrigger>
        </TabsList>

        <TabsContent value="images" className="mt-0 p-3 bg-gray-900">
          <div className="text-sm text-gray-300">
            <p className="font-medium mb-2">Add inline images</p>
            <code className="text-xs bg-gray-800 px-2 py-1 rounded">![Text](https://stackoverflow.com/image.jpg)</code>
          </div>
        </TabsContent>
      </Tabs>

      {/* Editor/Preview */}
      <div className="relative">
        {showPreview ? (
          <div className="min-h-[300px] p-4 bg-gray-900 text-gray-300 whitespace-pre-wrap">
            {value || "Nothing to preview"}
          </div>
        ) : (
          <Textarea
            ref={textareaRef}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            placeholder={placeholder}
            className="min-h-[300px] border-0 bg-gray-900 text-gray-300 resize-none focus:ring-0 focus:ring-offset-0 rounded-none"
          />
        )}
      </div>

      {/* Footer */}
    </div>
  )
}
