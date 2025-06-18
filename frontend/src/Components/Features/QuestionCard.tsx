// "use client"

// import { Eye, MessageSquare, CheckCircle } from "lucide-react"
// import { Badge } from "../ui/badge"
// import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"
// import { VoteButtons } from '../ui/voteButtons'
// import { getTimeAgo } from "@/utils/time-utils"
// import type { Question } from "@/types/question"

// interface QuestionCardProps {
//   question: Question
//   onQuestionClick: (questionId: string) => void
//   onVote: (questionId: string, answerId: string | undefined, type: "up" | "down") => void
// }

// export function QuestionCard({ question, onQuestionClick, onVote }: QuestionCardProps) {
//   return (
//     <div className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition-colors bg-white">
//       <div className="flex gap-4">
//         {/* Vote and Stats */}
//         <div className="flex flex-col items-center gap-3 min-w-[80px]">
//           <VoteButtons votes={question.votes} questionId={question.id} onVote={onVote} />

//           <div className="text-center text-sm text-gray-600">
//             <div className="flex items-center gap-1">
//               <MessageSquare className="h-4 w-4" />
//               <span>{question.answers.length}</span>
//             </div>
//             <div className="text-xs text-gray-500">answers</div>
//           </div>

//           <div className="text-center text-sm text-gray-600">
//             <div className="flex items-center gap-1">
//               <Eye className="h-4 w-4" />
//               <span>{question.views}</span>
//             </div>
//             <div className="text-xs text-gray-500">views</div>
//           </div>
//         </div>

//         {/* Question Content */}
//         <div className="flex-1">
//           <div className="flex items-start justify-between gap-4">
//             <div className="flex-1">
//               <h3
//                 className="text-lg font-medium text-blue-600 hover:text-blue-800 cursor-pointer mb-2"
//                 onClick={() => onQuestionClick(question.id)}
//               >
//                 {question.title}
//                 {question.hasAcceptedAnswer && <CheckCircle className="inline-block ml-2 h-4 w-4 text-green-500" />}
//               </h3>

//               <p className="text-gray-700 text-sm mb-3 line-clamp-2">{question.body.substring(0, 200)}...</p>

//               <div className="flex flex-wrap gap-2 mb-3">
//                 {question.tags.map((tag) => (
//                   <Badge
//                     key={tag}
//                     variant="secondary"
//                     className="bg-blue-100 text-blue-800 hover:bg-blue-200 cursor-pointer"
//                   >
//                     {tag}
//                   </Badge>
//                 ))}
//               </div>
//             </div>

//             {/* Author and Status */}
//             <div className="text-right min-w-[150px]">
//               <div className="flex items-center gap-2 justify-end mb-2">
//                 <Badge
//                   variant={question.status === "open" ? "default" : "secondary"}
//                   className={question.status === "open" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}
//                 >
//                   {question.status}
//                 </Badge>
//               </div>

//               <div className="flex items-center gap-2 justify-end">
//                 <div className="text-right">
//                   <div className="text-sm font-medium text-gray-900">{question.author.name}</div>
//                   <div className="text-xs text-gray-500">{question.author.reputation.toLocaleString()} rep</div>
//                   <div className="text-xs text-gray-500">{getTimeAgo(question.createdAt)}</div>
//                 </div>
//                 <Avatar className="h-8 w-8">
//                   <AvatarImage src={question.author.avatar || "/placeholder.svg"} />
//                   <AvatarFallback>{question.author.name.charAt(0)}</AvatarFallback>
//                 </Avatar>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


import { Eye, MessageSquare, CheckCircle } from "lucide-react";
import { Badge } from "../ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { VoteButtons } from '../ui/voteButtons';
import { getTimeAgo } from "@/utils/time-utils";
import type { Question } from "@/types/question";

interface QuestionCardProps {
  question: Question;
  onQuestionClick: (questionId: string) => void;
  onVote: (questionId: string, answerId: string | undefined, type: "up" | "down") => void;
}

export function QuestionCard({ question, onQuestionClick, onVote }: QuestionCardProps) {
  return (
    <div className="border border-gray-200 rounded-lg p-4 hover:border-orange-300 transition-colors bg-white shadow-sm">
      <div className="flex gap-4">
        <div className="flex flex-col items-center gap-3 min-w-[80px]">
          <VoteButtons votes={question.votes} questionId={question.id} onVote={onVote} />

          <div className="text-center text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <MessageSquare className="h-4 w-4" />
              <span>{question.answers.length}</span>
            </div>
            <div className="text-xs text-gray-500">answers</div>
          </div>

          <div className="text-center text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Eye className="h-4 w-4" />
              <span>{question.views}</span>
            </div>
            <div className="text-xs text-gray-500">views</div>
          </div>
        </div>

        <div className="flex-1">
          <div className="flex items-start justify-between gap-4">
            <div className="flex-1">
              <h3
                className="text-lg font-medium text-blue-600 hover:text-blue-800 cursor-pointer mb-2"
                onClick={() => onQuestionClick(question.id)}
              >
                {question.title}
                {question.hasAcceptedAnswer && <CheckCircle className="inline-block ml-2 h-4 w-4 text-green-500" />}
              </h3>

              <p className="text-gray-700 text-sm mb-3 line-clamp-2">{question.body.substring(0, 200)}...</p>

              <div className="flex flex-wrap gap-2 mb-3">
                {question.tags.map((tag) => (
                  <Badge
                    key={tag}
                    variant="secondary"
                    className="bg-orange-100 text-orange-800 hover:bg-orange-200 cursor-pointer"
                  >
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="text-right min-w-[150px]">
              <div className="flex items-center gap-2 justify-end mb-2">
                <Badge
                  variant={question.status === "open" ? "default" : "secondary"}
                  className={question.status === "open" ? "bg-green-100 text-green-800" : "bg-gray-100 text-gray-800"}
                >
                  {question.status}
                </Badge>
              </div>

              <div className="flex items-center gap-2 justify-end">
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">{question.author.name}</div>
                  <div className="text-xs text-gray-500">{question.author.reputation.toLocaleString()} rep</div>
                  <div className="text-xs text-gray-500">{getTimeAgo(question.createdAt)}</div>
                </div>
                <Avatar className="h-8 w-8">
                  <AvatarImage src={question.author.avatar || "/placeholder.svg"} />
                  <AvatarFallback>{question.author.name.charAt(0)}</AvatarFallback>
                </Avatar>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

