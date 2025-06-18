// "use client"

// import { useState } from "react"
// import { ArrowLeft, CheckCircle } from "lucide-react"
// import { Button } from '../ui/button'
// import { Textarea } from '../ui/textarea'
// import { Badge } from '../ui/badge'
// import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
// import { VoteButtons } from '../ui/voteButtons'
// import { getTimeAgo } from '../../utils/time-utils'
// import type { Question } from '../../types/question'

// interface QuestionDetailProps {
//   question: Question
//   onBack: () => void
//   onVote: (questionId: string, answerId: string | undefined, type: "up" | "down") => void
//   onSubmitAnswer: (questionId: string, answer: string) => void
// }

// export function QuestionDetail({ question, onBack, onVote, onSubmitAnswer }: QuestionDetailProps) {
//   const [newAnswer, setNewAnswer] = useState("")
//   const [isSubmitting, setIsSubmitting] = useState(false)

//   const handleSubmitAnswer = async () => {
//     if (!newAnswer.trim()) return

//     setIsSubmitting(true)
//     await new Promise((resolve) => setTimeout(resolve, 1000)) // Simulate API call
//     onSubmitAnswer(question.id, newAnswer.trim())
//     setNewAnswer("")
//     setIsSubmitting(false)
//   }

//   return (
//     <div className="max-w-4xl mx-auto p-6">
//       {/* Back Button */}
//       <Button
//         variant="ghost"
//         onClick={onBack}
//         className="mb-4 text-orange-600 hover:text-orange-700 hover:bg-orange-50"
//       >
//         <ArrowLeft className="h-4 w-4 mr-2" />
//         Back to Questions
//       </Button>

//       {/* Question */}
//       <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6">
//         <div className="flex gap-6">
//           <VoteButtons votes={question.votes} questionId={question.id} onVote={onVote} />

//           <div className="flex-1">
//             <div className="flex items-start justify-between mb-4">
//               <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
//                 {question.title}
//                 {question.hasAcceptedAnswer && <CheckCircle className="h-6 w-6 text-green-500" />}
//               </h1>
//               <Badge
//                 variant={question.status === "open" ? "default" : "secondary"}
//                 className={question.status === "open" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}
//               >
//                 {question.status}
//               </Badge>
//             </div>

//             <div className="prose max-w-none mb-4">
//               <div className="whitespace-pre-wrap text-gray-700">{question.body}</div>
//             </div>

//             <div className="flex flex-wrap gap-2 mb-4">
//               {question.tags.map((tag) => (
//                 <Badge key={tag} variant="secondary" className="bg-blue-100 text-blue-800">
//                   {tag}
//                 </Badge>
//               ))}
//             </div>

//             <div className="flex items-center justify-between text-sm text-gray-600">
//               <div>
//                 Asked {getTimeAgo(question.createdAt)} • {question.views} views
//               </div>
//               <div className="flex items-center gap-2">
//                 <Avatar className="h-6 w-6">
//                   <AvatarImage src={question.author.avatar || "/placeholder.svg"} />
//                   <AvatarFallback>{question.author.name.charAt(0)}</AvatarFallback>
//                 </Avatar>
//                 <span className="font-medium">{question.author.name}</span>
//                 <span>({question.author.reputation.toLocaleString()} rep)</span>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Answers */}
//       <div className="space-y-6">
//         <h2 className="text-xl font-bold text-gray-900">
//           {question.answers.length} Answer{question.answers.length !== 1 ? "s" : ""}
//         </h2>

//         {question.answers.map((answer) => (
//           <div key={answer.id} className="bg-white border border-gray-200 rounded-lg p-6">
//             <div className="flex gap-6">
//               <VoteButtons votes={answer.votes} questionId={question.id} answerId={answer.id} onVote={onVote} />

//               <div className="flex-1">
//                 {answer.isAccepted && (
//                   <div className="flex items-center gap-2 mb-3">
//                     <CheckCircle className="h-5 w-5 text-green-500" />
//                     <span className="text-sm font-medium text-green-700">Accepted Answer</span>
//                   </div>
//                 )}

//                 <div className="prose max-w-none mb-4">
//                   <div className="whitespace-pre-wrap text-gray-700">{answer.body}</div>
//                 </div>

//                 <div className="flex items-center justify-end text-sm text-gray-600">
//                   <div className="flex items-center gap-2">
//                     <span>Answered {getTimeAgo(answer.createdAt)}</span>
//                     <Avatar className="h-6 w-6">
//                       <AvatarImage src={answer.author.avatar || "/placeholder.svg"} />
//                       <AvatarFallback>{answer.author.name.charAt(0)}</AvatarFallback>
//                     </Avatar>
//                     <span className="font-medium">{answer.author.name}</span>
//                     <span>({answer.author.reputation.toLocaleString()} rep)</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         ))}

//         {/* Add Answer */}
//         <div className="bg-white border border-gray-200 rounded-lg p-6">
//           <h3 className="text-lg font-semibold mb-4">Your Answer</h3>
//           <Textarea
//             value={newAnswer}
//             onChange={(e) => setNewAnswer(e.target.value)}
//             placeholder="Write your answer here..."
//             className="min-h-[150px] mb-4"
//           />
//           <Button
//             onClick={handleSubmitAnswer}
//             disabled={!newAnswer.trim() || isSubmitting}
//             className="bg-orange-600 hover:bg-orange-700"
//           >
//             {isSubmitting ? "Submitting..." : "Post Your Answer"}
//           </Button>
//         </div>
//       </div>
//     </div>
//   )
// }




import { useState } from "react";
import { ArrowLeft, CheckCircle } from "lucide-react";
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Badge } from '../ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { VoteButtons } from '../ui/voteButtons';
import { getTimeAgo } from '../../utils/time-utils';
import type { Question } from '../../types/question';

interface QuestionDetailProps {
  question: Question;
  onBack: () => void;
  onVote: (questionId: string, answerId: string | undefined, type: "up" | "down") => void;
  onSubmitAnswer: (questionId: string, answer: string) => void;
}

export function QuestionDetail({ question, onBack, onVote, onSubmitAnswer }: QuestionDetailProps) {
  const [newAnswer, setNewAnswer] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmitAnswer = async () => {
    if (!newAnswer.trim()) return;

    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    onSubmitAnswer(question.id, newAnswer.trim());
    setNewAnswer("");
    setIsSubmitting(false);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gradient-to-br from-orange-50 to-white">
      <Button
        variant="ghost"
        onClick={onBack}
        className="mb-4 text-orange-600 hover:text-orange-700 hover:bg-orange-50"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Back to Questions
      </Button>

      <div className="bg-white border border-gray-200 rounded-lg p-6 mb-6 shadow-sm">
        <div className="flex gap-6">
          <VoteButtons votes={question.votes} questionId={question.id} onVote={onVote} />

          <div className="flex-1">
            <div className="flex items-start justify-between mb-4">
              <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                {question.title}
                {question.hasAcceptedAnswer && <CheckCircle className="h-6 w-6 text-green-500" />}
              </h1>
              <Badge
                variant={question.status === "open" ? "default" : "secondary"}
                className={question.status === "open" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}
              >
                {question.status}
              </Badge>
            </div>

            <div className="prose max-w-none mb-4">
              <div className="whitespace-pre-wrap text-gray-700">{question.body}</div>
            </div>

            <div className="flex flex-wrap gap-2 mb-4">
              {question.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="bg-orange-100 text-orange-800">
                  {tag}
                </Badge>
              ))}
            </div>

            <div className="flex items-center justify-between text-sm text-gray-600">
              <div>
                Asked {getTimeAgo(question.createdAt)} • {question.views} views
              </div>
              <div className="flex items-center gap-2">
                <Avatar className="h-6 w-6">
                  <AvatarImage src={question.author.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{question.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
                <span className="font-medium">{question.author.name}</span>
                <span>({question.author.reputation.toLocaleString()} rep)</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <h2 className="text-xl font-bold text-gray-900">
          {question.answers.length} Answer{question.answers.length !== 1 ? "s" : ""}
        </h2>

        {question.answers.map((answer) => (
          <div key={answer.id} className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
            <div className="flex gap-6">
              <VoteButtons votes={answer.votes} questionId={question.id} answerId={answer.id} onVote={onVote} />

              <div className="flex-1">
                {answer.isAccepted && (
                  <div className="flex items-center gap-2 mb-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span className="text-sm font-medium text-green-700">Accepted Answer</span>
                  </div>
                )}

                <div className="prose max-w-none mb-4">
                  <div className="whitespace-pre-wrap text-gray-700">{answer.body}</div>
                </div>

                <div className="flex items-center justify-end text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <span>Answered {getTimeAgo(answer.createdAt)}</span>
                    <Avatar className="h-6 w-6">
                      <AvatarImage src={answer.author.avatar || "/placeholder.svg"} />
                      <AvatarFallback>{answer.author.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium">{answer.author.name}</span>
                    <span>({answer.author.reputation.toLocaleString()} rep)</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}

        <div className="bg-white border border-gray-200 rounded-lg p-6 shadow-sm">
          <h3 className="text-lg font-semibold mb-4">Your Answer</h3>
          <Textarea
            value={newAnswer}
            onChange={(e) => setNewAnswer(e.target.value)}
            placeholder="Write your answer here..."
            className="min-h-[150px] mb-4 border border-orange-300 focus:border-orange-500"
          />
          <Button
            onClick={handleSubmitAnswer}
            disabled={!newAnswer.trim() || isSubmitting}
            className="bg-orange-600 hover:bg-orange-700 text-white"
          >
            {isSubmitting ? "Submitting..." : "Post Your Answer"}
          </Button>
        </div>
      </div>
    </div>
  );
}
