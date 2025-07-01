// import  { useState } from 'react';
// import {PostQuestionForm} from '@/Components/Features/PostQuestionForm';
// import {PostQuestionGuideCard} from '@/Components/Features/PostQuestionGuideCard';

// const PostQuestionPage = () => {
//   const [showGuidanceModal, setShowGuidanceModal] = useState(false);

//   const handlePostQuestionClick = () => {
//     setShowGuidanceModal(true);
//   };

//   const handleCloseGuidanceModal = () => {
//     setShowGuidanceModal(false);
//   };

//   const handleQuestionSubmit = (question) => {
//     console.log('Question submitted:', question);
//     // Handle the question submission logic here
//   };

//   return (
//     <div>
//       <button
//         onClick={handlePostQuestionClick}
//         className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//       >
//         Post Question
//       </button>

//       {showGuidanceModal && <PostQuestionGuideCard onClose={handleCloseGuidanceModal} />}

//       <PostQuestionForm onSubmit={handleQuestionSubmit} />
//     </div>
//   );
// };

// export default PostQuestionPage;





"use client"

import { useState, useEffect } from "react"
import { Button } from '../Components/ui/button'
//import { QuestionGuidanceModal } from "@/components/question-guidance-modal"
import {PostQuestionForm} from '@/Components/Features/PostQuestionForm';
//import { PostQuestionForm } from "@/components/post-question-form"
 import {PostQuestionGuideCard} from '@/Components/Features/PostQuestionGuideCard';

export default function PostQuestionPage() {
  const [showGuidanceModal, setShowGuidanceModal] = useState(false)
  const [showQuestionForm, setShowQuestionForm] = useState(false)

  useEffect(() => {
    // Check if user has seen the guidance before
    const hasSeenGuidance = localStorage.getItem("hideQuestionGuidance")
    if (!hasSeenGuidance) {
      // Show guidance modal after a short delay for better UX
      setTimeout(() => setShowGuidanceModal(true), 500)
    }
  }, [])

  const handlePostQuestion = () => {
    const hasSeenGuidance = localStorage.getItem("hideQuestionGuidance")
    if (!hasSeenGuidance) {
      setShowGuidanceModal(true)
    } else {
      setShowQuestionForm(true)
    }
  }

  const handleStartWriting = () => {
    setShowQuestionForm(true)
  }

  const handleQuestionSubmit = (data: {
    title: string
    body: string
    tags: string[]
  }) => {
    console.log("Question submitted:", data)
    // Here you would typically send the data to your backend
    alert("Question submitted successfully!")
    setShowQuestionForm(false)
  }

  if (showQuestionForm) {
    return <PostQuestionForm onSubmit={handleQuestionSubmit} />
  }

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Header */}
      {/* <header className="border-b border-gray-700 bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold">Stack Overflow Clone</h1>
            <Button onClick={handlePostQuestion} className="bg-blue-600 hover:bg-blue-700">
              Ask Question
            </Button>
          </div>
        </div>
      </header> */}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        {/* <div className="text-center space-y-4">
          <h2 className="text-3xl font-bold">Welcome to Stack Overflow Clone</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Get help from the community by asking programming questions. Our platform helps developers learn and share
            knowledge.
          </p> */}
          <Button onClick={handlePostQuestion} size="lg" className="bg-blue-600 hover:bg-blue-700">
            Post Your First Question
          </Button>
        {/* </div> */}

        {/* Sample Questions */}
        <div className="mt-12 space-y-4">
          <h3 className="text-xl font-semibold">Recent Questions</h3>
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="border border-gray-700 rounded-lg p-4 bg-gray-800">
                <h4 className="font-medium text-blue-400 hover:text-blue-300 cursor-pointer">
                How to apply for widow pension scheme in rural Maharashtra?
                </h4>
                <p className="text-sm text-gray-400 mt-2">
                I'm helping a widow apply for the pension scheme. She has Aadhar and Ration card but no bank passbook. Is it mandatory? Also, what if her application gets rejected?
                </p>
                <div className="flex items-center gap-4 mt-3 text-xs text-gray-500">
                  <span>pension</span>
                  <span>grievance</span>
                  <span>maharashtra</span>
                  <span className="ml-auto">2 hours ago</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      {/* Guidance Modal */}
      <PostQuestionGuideCard
        isOpen={showGuidanceModal}
        onClose={() => setShowGuidanceModal(false)}
        onStartWriting={handleStartWriting}
      />
    </div>
  )
}
