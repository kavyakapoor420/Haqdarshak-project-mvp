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


// "use client"

// import type React from "react"

// import { useState } from "react"
// import { Button } from '../ui/button'
// import { Input } from '../ui/input'
// import { Label } from '../ui/label'
// import { RichTextEditor } from '../ui/rich-text-editor'
// import { TagInput } from '../ui/tag-input'

// interface PostQuestionFormProps {
//   onSubmit: (data: {
//     title: string
//     body: string
//     tags: string[]
//   }) => void
// }

// export function PostQuestionForm({ onSubmit }: PostQuestionFormProps) {
//   const [title, setTitle] = useState("")
//   const [body, setBody] = useState("")
//   const [tags, setTags] = useState<string[]>([])
//   const [errors, setErrors] = useState<{
//     title?: string
//     body?: string
//     tags?: string
//   }>({})

//   const validateForm = () => {
//     const newErrors: typeof errors = {}

//     if (!title.trim()) {
//       newErrors.title = "Title is required"
//     } else if (title.trim().length < 10) {
//       newErrors.title = "Title must be at least 10 characters"
//     }

//     if (!body.trim()) {
//       newErrors.body = "Body is required"
//     } else if (body.trim().length < 20) {
//       newErrors.body = "Body must be at least 20 characters"
//     }

//     if (tags.length === 0) {
//       newErrors.tags = "At least one tag is required"
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()

//     if (validateForm()) {
//       onSubmit({
//         title: title.trim(),
//         body: body.trim(),
//         tags,
//       })
//     }
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6 bg-gray-900 text-white">
//       <form onSubmit={handleSubmit} className="space-y-6">
//         {/* Title */}
//         <div className="space-y-2">
//           <Label htmlFor="title" className="text-sm font-medium text-gray-300">
//             Title<span className="text-red-400">*</span>
//           </Label>
//           <p className="text-sm text-gray-400">Be specific and imagine you're asking a question to another person</p>
//           <Input
//             id="title"
//             value={title}
//             onChange={(e) => setTitle(e.target.value)}
//             placeholder="e.g. Is there an R function for finding the index of an element in a vector?"
//             className="bg-gray-800 border-gray-600 text-gray-300 focus:border-blue-500"
//           />
//           {errors.title && <p className="text-sm text-red-400">{errors.title}</p>}
//         </div>

//         {/* Body */}
//         <div className="space-y-2">
//           <Label className="text-sm font-medium text-gray-300">
//             Body<span className="text-red-400">*</span>
//           </Label>
//           <p className="text-sm text-gray-400">
//             Include all the information someone would need to answer your question
//           </p>
//           <RichTextEditor value={body} onChange={setBody} placeholder="Enter your question details here..." />
//           {errors.body && <p className="text-sm text-red-400">{errors.body}</p>}
//         </div>

//         {/* Tags */}
//         <div>
//           <TagInput tags={tags} onChange={setTags} placeholder="e.g. (c jquery wordpress)" />
//           {errors.tags && <p className="text-sm text-red-400 mt-1">{errors.tags}</p>}
//         </div>

//         {/* Submit Button */}
//         <div className="flex gap-3">
//           <Button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white px-6">
//             Review your question
//           </Button>
//           <Button type="button" variant="outline" className="border-gray-600 text-gray-300 hover:bg-gray-800">
//             Save draft
//           </Button>
//         </div>
//       </form>
//     </div>
//   )
// }





//final version 




// "use client"

// import type React from "react"
// import { useState } from "react"
// import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
// import { CheckCircle, AlertCircle, Lightbulb, ArrowLeft } from "lucide-react"
// import { Alert, AlertDescription } from "../ui/alert"
// import { Button } from '../ui/button'
// import { Input } from '../ui/input'
// // import { Label } from '../ui/label'
// import { RichTextEditor } from '../ui/rich-text-editor'
// import { TagInput } from '../ui/tag-input'


// interface PostQuestionFormProps {
//   onSubmit: (data: {
//     title: string
//     body: string
//     tags: string[]
//   }) => void
//   onBack?: () => void
// }

// export function PostQuestionForm({ onSubmit, onBack }: PostQuestionFormProps) {
//   const [title, setTitle] = useState("")
//   const [body, setBody] = useState("")
//   const [tags, setTags] = useState<string[]>([])
//   const [errors, setErrors] = useState<{
//     title?: string
//     body?: string
//     tags?: string
//   }>({})
//   const [currentStep, setCurrentStep] = useState(1)

//   const validateForm = () => {
//     const newErrors: typeof errors = {}

//     if (!title.trim()) {
//       newErrors.title = "Title is required"
//     } else if (title.trim().length < 10) {
//       newErrors.title = "Title must be at least 10 characters"
//     }

//     if (!body.trim()) {
//       newErrors.body = "Body is required"
//     } else if (body.trim().length < 20) {
//       newErrors.body = "Body must be at least 20 characters"
//     }

//     if (tags.length === 0) {
//       newErrors.tags = "At least one tag is required"
//     }

//     setErrors(newErrors)
//     return Object.keys(newErrors).length === 0
//   }

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault()

//     if (validateForm()) {
//       onSubmit({
//         title: title.trim(),
//         body: body.trim(),
//         tags,
//       })
//     }
//   }

//   const getCompletionPercentage = () => {
//     let completed = 0
//     if (title.trim().length >= 10) completed += 33
//     if (body.trim().length >= 20) completed += 33
//     if (tags.length > 0) completed += 34
//     return completed
//   }

//   const isFormValid = title.trim().length >= 10 && body.trim().length >= 20 && tags.length > 0

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-orange-25 via-amber-25 to-yellow-25 py-8">
//       <div className="max-w-5xl mx-auto px-6">
//         {/* Header */}
//         <div className="mb-8">
//           {onBack && (
//             <Button
//               variant="ghost"
//               onClick={onBack}
//               className="mb-4 text-orange-600 hover:text-orange-700 hover:bg-orange-50 rounded-full px-4"
//             >
//               <ArrowLeft className="h-4 w-4 mr-2" />
//               Back to Questions
//             </Button>
//           )}

//           <div className="text-center mb-6">
//             <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
//               Ask a Question
//             </h1>
//             <p className="text-gray-600 max-w-2xl mx-auto">
//               Share your knowledge and help the community by asking a detailed question
//             </p>
//           </div>

//           {/* Progress Bar */}
//           <div className="bg-white rounded-full p-1 shadow-sm border border-orange-100">
//             <div className="flex items-center justify-between text-xs text-gray-600 px-4 py-2">
//               <span>Progress</span>
//               <span>{getCompletionPercentage()}% complete</span>
//             </div>
//             <div className="bg-gray-200 rounded-full h-2">
//               <div
//                 className="bg-gradient-to-r from-orange-500 to-orange-600 h-2 rounded-full transition-all duration-300"
//                 style={{ width: `${getCompletionPercentage()}%` }}
//               />
//             </div>
//           </div>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
//           {/* Main Form */}
//           <div className="lg:col-span-2">
//             <form onSubmit={handleSubmit} className="space-y-6">
//               {/* Title Section */}
//               <Card className="border-orange-100 shadow-sm">
//                 <CardHeader className="pb-4">
//                   <CardTitle className="flex items-center gap-2 text-lg text-gray-800">
//                     <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-sm font-bold">
//                       1
//                     </div>
//                     Title
//                     <span className="text-red-500">*</span>
//                     {title.trim().length >= 10 && <CheckCircle className="h-5 w-5 text-green-500" />}
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-3">
//                   <p className="text-sm text-gray-600">
//                     Be specific and imagine you're asking a question to another person
//                   </p>
//                   <Input
//                     id="title"
//                     value={title}
//                     onChange={(e) => setTitle(e.target.value)}
//                     placeholder="e.g. How to apply for PM-KISAN scheme with Aadhaar verification?"
//                     className={`transition-all duration-200 ${
//                       errors.title
//                         ? "border-red-300 focus:border-red-500"
//                         : title.trim().length >= 10
//                           ? "border-green-300 focus:border-green-500"
//                           : "border-gray-300 focus:border-orange-500"
//                     }`}
//                   />
//                   <div className="flex justify-between text-xs">
//                     <span className={errors.title ? "text-red-500" : "text-gray-500"}>
//                       {errors.title || `${title.length}/150 characters`}
//                     </span>
//                     {title.trim().length >= 10 && (
//                       <span className="text-green-600 flex items-center gap-1">
//                         <CheckCircle className="h-3 w-3" />
//                         Good title!
//                       </span>
//                     )}
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Body Section */}
//               <Card className="border-orange-100 shadow-sm">
//                 <CardHeader className="pb-4">
//                   <CardTitle className="flex items-center gap-2 text-lg text-gray-800">
//                     <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-sm font-bold">
//                       2
//                     </div>
//                     Body
//                     <span className="text-red-500">*</span>
//                     {body.trim().length >= 20 && <CheckCircle className="h-5 w-5 text-green-500" />}
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent className="space-y-3">
//                   <p className="text-sm text-gray-600">
//                     Include all the information someone would need to answer your question
//                   </p>
//                   <RichTextEditor
//                     value={body}
//                     onChange={setBody}
//                     placeholder="Describe your question in detail. Include what you've tried, what you expected to happen, and what actually happened..."
//                   />
//                   <div className="flex justify-between text-xs">
//                     <span className={errors.body ? "text-red-500" : "text-gray-500"}>
//                       {errors.body || `${body.length} characters`}
//                     </span>
//                     {body.trim().length >= 20 && (
//                       <span className="text-green-600 flex items-center gap-1">
//                         <CheckCircle className="h-3 w-3" />
//                         Detailed description!
//                       </span>
//                     )}
//                   </div>
//                 </CardContent>
//               </Card>

//               {/* Tags Section */}
//               <Card className="border-orange-100 shadow-sm">
//                 <CardHeader className="pb-4">
//                   <CardTitle className="flex items-center gap-2 text-lg text-gray-800">
//                     <div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600 text-sm font-bold">
//                       3
//                     </div>
//                     Tags
//                     <span className="text-red-500">*</span>
//                     {tags.length > 0 && <CheckCircle className="h-5 w-5 text-green-500" />}
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <TagInput tags={tags} onChange={setTags} placeholder="e.g. pm-kisan aadhaar agriculture subsidy" />
//                   {errors.tags && <p className="text-sm text-red-500 mt-2">{errors.tags}</p>}
//                   {tags.length > 0 && (
//                     <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
//                       <CheckCircle className="h-3 w-3" />
//                       Great! Tags help others find your question
//                     </p>
//                   )}
//                 </CardContent>
//               </Card>

//               {/* Submit Section */}
//               <Card className="border-orange-100 shadow-sm">
//                 <CardContent className="pt-6">
//                   <div className="flex flex-col sm:flex-row gap-3">
//                     <Button
//                       type="submit"
//                       disabled={!isFormValid}
//                       className={`flex-1 py-3 rounded-full font-medium transition-all duration-200 ${
//                         isFormValid
//                           ? "bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl"
//                           : "bg-gray-300 text-gray-500 cursor-not-allowed"
//                       }`}
//                     >
//                       Review Your Question
//                     </Button>
//                     <Button
//                       type="button"
//                       variant="outline"
//                       className="border-orange-300 text-orange-600 hover:bg-orange-50 px-6 py-3 rounded-full font-medium"
//                     >
//                       Save Draft
//                     </Button>
//                   </div>
//                 </CardContent>
//               </Card>
//             </form>
//           </div>

//           {/* Sidebar */}
//           <div className="space-y-6">
//             {/* Tips Card */}
//             <Card className="border-blue-100 bg-blue-50">
//               <CardHeader className="pb-4">
//                 <CardTitle className="flex items-center gap-2 text-blue-800">
//                   <Lightbulb className="h-5 w-5" />
//                   Writing Tips
//                 </CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-3 text-sm text-blue-700">
//                 <div className="space-y-2">
//                   <p className="font-medium">1. Summarize the problem</p>
//                   <p className="text-blue-600">Include details about your specific situation</p>
//                 </div>
//                 <div className="space-y-2">
//                   <p className="font-medium">2. Describe what you've tried</p>
//                   <p className="text-blue-600">Show your research effort and attempted solutions</p>
//                 </div>
//                 <div className="space-y-2">
//                   <p className="font-medium">3. Show some examples</p>
//                   <p className="text-blue-600">Include relevant documents or screenshots if helpful</p>
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Progress Card */}
//             <Card className="border-green-100 bg-green-50">
//               <CardHeader className="pb-4">
//                 <CardTitle className="text-green-800">Question Checklist</CardTitle>
//               </CardHeader>
//               <CardContent className="space-y-3">
//                 <div
//                   className={`flex items-center gap-2 text-sm ${title.trim().length >= 10 ? "text-green-700" : "text-gray-600"}`}
//                 >
//                   <CheckCircle
//                     className={`h-4 w-4 ${title.trim().length >= 10 ? "text-green-500" : "text-gray-400"}`}
//                   />
//                   Clear, descriptive title
//                 </div>
//                 <div
//                   className={`flex items-center gap-2 text-sm ${body.trim().length >= 20 ? "text-green-700" : "text-gray-600"}`}
//                 >
//                   <CheckCircle className={`h-4 w-4 ${body.trim().length >= 20 ? "text-green-500" : "text-gray-400"}`} />
//                   Detailed problem description
//                 </div>
//                 <div
//                   className={`flex items-center gap-2 text-sm ${tags.length > 0 ? "text-green-700" : "text-gray-600"}`}
//                 >
//                   <CheckCircle className={`h-4 w-4 ${tags.length > 0 ? "text-green-500" : "text-gray-400"}`} />
//                   Relevant tags added
//                 </div>
//               </CardContent>
//             </Card>

//             {/* Community Guidelines */}
//             <Alert className="border-orange-200 bg-orange-50">
//               <AlertCircle className="h-4 w-4 text-orange-600" />
//               <AlertDescription className="text-orange-800">
//                 <strong>Community Guidelines:</strong> Please ensure your question is related to government schemes,
//                 policies, or welfare programs. Be respectful and provide accurate information.
//               </AlertDescription>
//             </Alert>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }









// import type React from "react"
// import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card"
// import { CheckCircle, AlertCircle, Lightbulb, ArrowLeft } from "lucide-react"
import { Alert, AlertDescription } from "../ui/alert"
import { Button } from '../ui/button'
import { Input } from '../ui/input'
// // import { Label } from '../ui/label'
import { RichTextEditor } from '../ui/rich-text-editor'
import { TagInput } from '../ui/tag-input'

import type React from "react"
import { useState } from "react"
import { CheckCircle, AlertCircle, Lightbulb, ArrowLeft } from "lucide-react"

interface PostQuestionFormProps {
  onSubmit: (data: {
    title: string
    body: string
    tags: string[]
  }) => void
  onBack?: () => void
}

export function PostQuestionForm({ onSubmit, onBack }: PostQuestionFormProps) {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState<string[]>([])
  const [errors, setErrors] = useState<{
    title?: string
    body?: string
    tags?: string
  }>({})
  const [currentStep, setCurrentStep] = useState(1)

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

  const getCompletionPercentage = () => {
    let completed = 0
    if (title.trim().length >= 10) completed += 33
    if (body.trim().length >= 20) completed += 33
    if (tags.length > 0) completed += 34
    return completed
  }

  const isFormValid = title.trim().length >= 10 && body.trim().length >= 20 && tags.length > 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50 py-12">
      <div className="max-w-6xl mx-auto px-8">
        {/* Header */}
        <div className="mb-8">
          {onBack && (
            <Button
              variant="ghost"
              onClick={onBack}
              className="mb-4 text-orange-600 hover:text-orange-700 hover:bg-orange-50 rounded-full px-4"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Questions
            </Button>
          )}

          <div className="text-center mb-10">
            <h1 className="text-5xl font-bold bg-gradient-to-r from-orange-600 via-red-500 to-pink-600 bg-clip-text text-transparent mb-4 tracking-tight">
              Ask a Question
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed font-medium">
              Share your knowledge and help the community by asking a detailed question
            </p>
          </div>

          {/* Progress Bar */}
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-orange-200 backdrop-blur-sm">
            <div className="flex items-center justify-between text-lg text-gray-700 px-2 py-3 font-medium">
              <span>Progress</span>
              <span className="text-orange-600 font-bold">{getCompletionPercentage()}% complete</span>
            </div>
            <div className="bg-gradient-to-r from-gray-200 to-gray-300 rounded-full h-4 shadow-inner">
              <div
                className="bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 h-4 rounded-full transition-all duration-500 ease-out shadow-lg"
                style={{ width: `${getCompletionPercentage()}%` }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Title Section */}
              <Card className="border-orange-200 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-2xl text-gray-800 font-bold">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white text-lg font-bold shadow-lg">
                      1
                    </div>
                    Title
                    <span className="text-red-500 text-xl">*</span>
                    {title.trim().length >= 10 && <CheckCircle className="h-6 w-6 text-green-500" />}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-8">
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    Be specific and imagine you're asking a question to another person
                  </p>
                  <Input
                    id="title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="e.g. How to apply for PM-KISAN scheme with Aadhaar verification?"
                    className={`text-lg py-4 px-6 rounded-xl transition-all duration-300 font-medium ${
                      errors.title
                        ? "border-red-400 focus:border-red-500 bg-red-50"
                        : title.trim().length >= 10
                          ? "border-green-400 focus:border-green-500 bg-green-50"
                          : "border-orange-300 focus:border-orange-500 bg-white hover:bg-orange-50"
                    }`}
                  />
                  <div className="flex justify-between text-base font-medium">
                    <span className={errors.title ? "text-red-600" : "text-gray-600"}>
                      {errors.title || `${title.length}/150 characters`}
                    </span>
                    {title.trim().length >= 10 && (
                      <span className="text-green-700 flex items-center gap-2 font-semibold">
                        <CheckCircle className="h-4 w-4" />
                        Good title!
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Body Section */}
              <Card className="border-orange-200 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-2xl text-gray-800 font-bold">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white text-lg font-bold shadow-lg">
                      2
                    </div>
                    Body
                    <span className="text-red-500 text-xl">*</span>
                    {body.trim().length >= 20 && <CheckCircle className="h-6 w-6 text-green-500" />}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4 p-8">
                  <p className="text-lg text-gray-700 leading-relaxed font-medium">
                    Include all the information someone would need to answer your question
                  </p>
                  <RichTextEditor
                    value={body}
                    onChange={setBody}
                    placeholder="Describe your question in detail. Include what you've tried, what you expected to happen, and what actually happened..."
                  />
                  <div className="flex justify-between text-base font-medium">
                    <span className={errors.body ? "text-red-600" : "text-gray-600"}>
                      {errors.body || `${body.length} characters`}
                    </span>
                    {body.trim().length >= 20 && (
                      <span className="text-green-700 flex items-center gap-2 font-semibold">
                        <CheckCircle className="h-4 w-4" />
                        Detailed description!
                      </span>
                    )}
                  </div>
                </CardContent>
              </Card>

              {/* Tags Section */}
              <Card className="border-orange-200 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-3 text-2xl text-gray-800 font-bold">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-red-500 flex items-center justify-center text-white text-lg font-bold shadow-lg">
                      3
                    </div>
                    Tags
                    <span className="text-red-500 text-xl">*</span>
                    {tags.length > 0 && <CheckCircle className="h-6 w-6 text-green-500" />}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <TagInput tags={tags} onChange={setTags} placeholder="e.g. pm-kisan aadhaar agriculture subsidy" />
                  {errors.tags && <p className="text-sm text-red-500 mt-2">{errors.tags}</p>}
                  {tags.length > 0 && (
                    <p className="text-xs text-green-600 mt-2 flex items-center gap-1">
                      <CheckCircle className="h-3 w-3" />
                      Great! Tags help others find your question
                    </p>
                  )}
                </CardContent>
              </Card>

              {/* Submit Section */}
              <Card className="border-orange-200 shadow-xl bg-white/80 backdrop-blur-sm hover:shadow-2xl transition-all duration-300">
                <CardContent className="pt-6">
                  <div className="flex flex-col sm:flex-row gap-3">
                    <Button
                      type="submit"
                      disabled={!isFormValid}
                      className={`flex-1 py-4 px-8 rounded-2xl font-bold text-lg transition-all duration-300 transform ${
                        isFormValid
                          ? "bg-gradient-to-r from-orange-500 via-orange-600 to-red-500 hover:from-orange-600 hover:via-orange-700 hover:to-red-600 text-white shadow-2xl hover:shadow-3xl hover:scale-105"
                          : "bg-gray-400 text-gray-600 cursor-not-allowed shadow-lg"
                      }`}
                    >
                      Review Your Question
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      className="border-2 border-orange-400 text-orange-700 hover:bg-orange-100 px-8 py-4 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105"
                    >
                      Save Draft
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </form>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Tips Card */}
            <Card className="border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-100 shadow-xl">
              <CardHeader className="pb-6">
                <CardTitle className="flex items-center gap-3 text-blue-900 text-xl font-bold">
                  <Lightbulb className="h-6 w-6" />
                  Writing Tips
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4 text-base text-blue-800">
                <div className="space-y-3">
                  <p className="font-bold text-lg">1. Summarize the problem</p>
                  <p className="text-blue-700 leading-relaxed">Include details about your specific situation</p>
                </div>
                <div className="space-y-3">
                  <p className="font-bold text-lg">2. Describe what you've tried</p>
                  <p className="text-blue-700 leading-relaxed">Show your research effort and attempted solutions</p>
                </div>
                <div className="space-y-3">
                  <p className="font-bold text-lg">3. Show some examples</p>
                  <p className="text-blue-700 leading-relaxed">Include relevant documents or screenshots if helpful</p>
                </div>
              </CardContent>
            </Card>

            {/* Progress Card */}
            <Card className="border-green-200 bg-gradient-to-br from-green-50 to-emerald-100 shadow-xl">
              <CardHeader className="pb-6">
                <CardTitle className="text-green-900 text-xl font-bold">Question Checklist</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div
                  className={`flex items-center gap-3 text-base font-medium ${title.trim().length >= 10 ? "text-green-800" : "text-gray-600"}`}
                >
                  <CheckCircle
                    className={`h-5 w-5 ${title.trim().length >= 10 ? "text-green-600" : "text-gray-400"}`}
                  />
                  Clear, descriptive title
                </div>
                <div
                  className={`flex items-center gap-3 text-base font-medium ${body.trim().length >= 20 ? "text-green-800" : "text-gray-600"}`}
                >
                  <CheckCircle className={`h-5 w-5 ${body.trim().length >= 20 ? "text-green-600" : "text-gray-400"}`} />
                  Detailed problem description
                </div>
                <div
                  className={`flex items-center gap-3 text-base font-medium ${tags.length > 0 ? "text-green-800" : "text-gray-600"}`}
                >
                  <CheckCircle className={`h-5 w-5 ${tags.length > 0 ? "text-green-600" : "text-gray-400"}`} />
                  Relevant tags added
                </div>
              </CardContent>
            </Card>

            {/* Community Guidelines */}
            <Alert className="border-orange-300 bg-gradient-to-r from-orange-100 to-amber-100 shadow-lg">
              <AlertCircle className="h-5 w-5 text-orange-700" />
              <AlertDescription className="text-orange-900 font-medium text-base leading-relaxed">
                <strong className="text-lg">Community Guidelines:</strong> Please ensure your question is related to
                government schemes, policies, or welfare programs. Be respectful and provide accurate information.
              </AlertDescription>
            </Alert>
          </div>
        </div>
      </div>
    </div>
  )
}
