// import React from 'react';

// const PostQuestionGuideCard = ({ onClose }) => {
//   return (
//     <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
//       <div className="bg-gray-800 text-white p-6 rounded-lg w-11/12 md:w-1/2 lg:w-1/3">
//         <div className="flex justify-between items-center mb-4">
//           <h2 className="text-xl font-bold">Asking a good question</h2>
//           <button onClick={onClose} className="text-gray-400 hover:text-gray-200">
//             &times;
//           </button>
//         </div>
//         <p className="mb-4">
//           You're ready to ask a programming-related question and the community is here to help! To get the best answers, we've provided some guidance:
//         </p>
//         <ul className="list-decimal pl-5 mb-4">
//           <li>Summarize the problem</li>
//           <li>Describe what you've tried</li>
//           <li>When appropriate, show some code</li>
//         </ul>
//         <p className="mb-4">You'll find more tips in the sidebar.</p>
//         <button
//           onClick={onClose}
//           className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
//         >
//           Start writing
//         </button>
//       </div>
//     </div>
//   );
// };

// export default PostQuestionGuideCard;




"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from '../ui/button'
import { Dialog, DialogContent, DialogHeader } from '../ui/dialog'

interface QuestionGuidanceModalProps {
  isOpen: boolean
  onClose: () => void
  onStartWriting: () => void
}

export function PostQuestionGuideCard({ isOpen, onClose, onStartWriting }: QuestionGuidanceModalProps) {
  const [dontShowAgain, setDontShowAgain] = useState(false)

  const handleStartWriting = () => {
    if (dontShowAgain) {
      localStorage.setItem("hideQuestionGuidance", "true")
    }
    onStartWriting()
    onClose()
  }

  const handleDontShowAgain = () => {
    localStorage.setItem("hideQuestionGuidance", "true")
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] bg-gray-800 border-gray-700 text-white">
        <DialogHeader className="flex flex-row items-center justify-between space-y-0 pb-4">
          <h2 className="text-2xl font-bold text-white">Asking a good question</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={onClose}
            className="text-gray-400 hover:text-white hover:bg-gray-700"
          >
            <X className="h-4 w-4" />
          </Button>
        </DialogHeader>

        <div className="space-y-6">
          <p className="text-gray-300 leading-relaxed">
            You're ready to ask your first programming-related question and the community is here to help! To get you
            the best answers, we've provided some guidance:
          </p>

          <div className="space-y-4">
            <p className="text-gray-300">
              Before you post, <span className="text-blue-400 underline cursor-pointer">search the site</span> to make
              sure your question hasn't been answered.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <span className="text-blue-400 font-bold text-lg">1.</span>
                <span className="text-gray-300">Summarize the problem</span>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-blue-400 font-bold text-lg">2.</span>
                <span className="text-gray-300">Describe what you've tried</span>
              </div>

              <div className="flex items-start gap-3">
                <span className="text-blue-400 font-bold text-lg">3.</span>
                <span className="text-gray-300">When appropriate, show some code</span>
              </div>
            </div>

            <p className="text-gray-400 text-sm">You'll find more tips in the sidebar.</p>
          </div>

          <div className="flex gap-3 pt-4">
            <Button onClick={handleStartWriting} className="bg-blue-600 hover:bg-blue-700 text-white px-6">
              Start writing
            </Button>
            <Button
              variant="ghost"
              onClick={handleDontShowAgain}
              className="text-blue-400 hover:text-blue-300 hover:bg-gray-700"
            >
              Don't show me this again
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
