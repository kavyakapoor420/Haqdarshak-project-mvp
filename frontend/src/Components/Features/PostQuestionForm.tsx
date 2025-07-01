// import React, { useState } from 'react';

// const PostQuestionForm = ({ onSubmit }) => {
//   const [title, setTitle] = useState('');
//   const [body, setBody] = useState('');
//   const [tags, setTags] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({ title, body, tags });
//   };

//   return (
//     <div className="bg-gray-900 text-white p-6 rounded-lg w-full max-w-4xl mx-auto">
//       <h2 className="text-xl font-bold mb-4">Ask a public question</h2>
//       <form onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="title">
//             Title
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="title"
//             type="text"
//             placeholder="Be specific and imagine you're asking a question to another person"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="body">
//             Body
//           </label>
//           <textarea
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-48"
//             id="body"
//             placeholder="Include all the information someone would need to answer your question"
//             value={body}
//             onChange={(e) => setBody(e.target.value)}
//             required
//           ></textarea>
//           <div className="flex justify-between mt-2">
//             <div className="flex space-x-2">
//               <button type="button" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-1 px-2 rounded">
//                 Links
//               </button>
//               <button type="button" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-1 px-2 rounded">
//                 Images
//               </button>
//               <button type="button" className="bg-gray-700 hover:bg-gray-600 text-white font-bold py-1 px-2 rounded">
//                 Code
//               </button>
//             </div>
//             <button type="button" className="text-blue-400 text-sm">
//               Hide formatting tips
//             </button>
//           </div>
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-400 text-sm font-bold mb-2" htmlFor="tags">
//             Tags
//           </label>
//           <input
//             className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
//             id="tags"
//             type="text"
//             placeholder="Add up to 5 tags to describe what your question is about"
//             value={tags}
//             onChange={(e) => setTags(e.target.value)}
//             required
//           />
//         </div>
//         <button
//           type="submit"
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Post your question
//         </button>
//       </form>
//     </div>
//   );
// };

// export default PostQuestionForm;


"use client"

import type React from "react"

import { useState } from "react"
import { Button } from '../ui/button'
import { Input } from '../ui/input'
import { Label } from '../ui/label'
import { RichTextEditor } from '../ui/rich-text-editor'
import { TagInput } from '../ui/tag-input'

interface PostQuestionFormProps {
  onSubmit: (data: {
    title: string
    body: string
    tags: string[]
  }) => void
}

export function PostQuestionForm({ onSubmit }: PostQuestionFormProps) {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [errors, setErrors] = useState<{
    title?: string
    body?: string
    tags?: string
  }>({})

  const validateForm = () => {
    const newErrors: typeof errors = {}

    if (!title.trim()) {
      newErrors.title = "Title is required"
    } else if (title.trim().length < 10) {
      newErrors.title = "Title must be at least 10 characters"
    }

    if (!body.trim()) {
      newErrors.body = "Body is required"
    } else if (body.trim().length < 20) {
      newErrors.body = "Body must be at least 20 characters"
    }

    if (tags.length === 0) {
      newErrors.tags = "At least one tag is required"
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      onSubmit({
        title: title.trim(),
        body: body.trim(),
        tags,
      })
    }
  }

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-white">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Title */}
        <div className="space-y-2">
          <Label htmlFor="title" className="text-sm font-medium text-gray-300">
            Title<span className="text-red-400">*</span>
          </Label>
          <p className="text-sm text-gray-400">Be specific and imagine you're asking a question to another person</p>
          <Input
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
            className="bg-gray-800 border-gray-600 text-gray-300 focus:border-blue-500"
          />
          {errors.title && <p className="text-sm text-red-400">{errors.title}</p>}
        </div>

        {/* Body */}
        <div className="space-y-2">
          <Label className="text-sm font-medium text-gray-300">
            Body<span className="text-red-400">*</span>
          </Label>
          <p className="text-sm text-gray-400">
            Include all the information someone would need to answer your question
          </p>
          <RichTextEditor value={body} onChange={setBody} placeholder="Enter your question details here..." />
          {errors.body && <p className="text-sm text-red-400">{errors.body}</p>}
        </div>

        {/* Tags */}
        <div>
          <TagInput tags={tags} onChange={setTags} placeholder="e.g. (c jquery wordpress)" />
          {errors.tags && <p className="text-sm text-red-400 mt-1">{errors.tags}</p>}
        </div>

        {/* Submit Button */}
        <div className="flex gap-3">
          <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6">
            Review your question
          </Button>
          <Button type="button" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
            Save draft
          </Button>
        </div>
      </form>
    </div>
  )
}
