// import React, { useState } from "react";
// import { Card, CardContent } from '../Components/ui/card'
// import { Badge } from '../Components/ui/badge'
// import { Button } from '../Components/ui/button'
// import { MessageSquare, ThumbsUp, Eye } from "lucide-react";
// import { Input } from '../Components/ui/input'
// import { Textarea } from '../Components/ui/textarea'
// import { Select, SelectItem } from '../Components/ui/select'

// const questions = [
//   {
//     title: "How to apply for widow pension scheme in rural Maharashtra?",
//     body: "I'm helping a widow apply for the pension scheme. She has Aadhar and Ration card but no bank passbook. Is it mandatory? Also, what if her application gets rejected?",
//     tags: ["pension", "maharashtra", "documents", "grievance"],
//     language: "English",
//     author: "agent_233",
//     region: "Satara",
//     status: "Open",
//     createdAt: "1 min ago",
//     votes: 3,
//     views: 12,
//     answers: 0
//   },
//   {
//     title: "Documents needed for PMAY-U application in Uttar Pradesh",
//     body: "I want to know what documents are required for a family living in an urban slum in Kanpur to apply for PMAY-Urban housing scheme.",
//     tags: ["pmay", "uttar-pradesh", "urban", "documents"],
//     language: "Hindi",
//     author: "agent_118",
//     region: "Kanpur",
//     status: "Answered",
//     createdAt: "5 mins ago",
//     votes: 1,
//     views: 20,
//     answers: 2
//   },
//   {
//     title: "How to escalate a rejected pension application?",
//     body: "One of my applications for old-age pension was rejected without any reason. How can I raise a grievance? Is there a contact or email?",
//     tags: ["grievance", "pension", "escalation"],
//     language: "Marathi",
//     author: "agent_045",
//     region: "Nagpur",
//     status: "Open",
//     createdAt: "10 mins ago",
//     votes: -1,
//     views: 8,
//     answers: 0
//   }
// ];

// const languages = ["English", "Hindi", "Marathi"];

// function ChatBotInterface() {
//   const [query, setQuery] = useState("");
//   const [language, setLanguage] = useState("English");
//   const [response, setResponse] = useState("");

//   const handleAsk = () => {
//     // Simulate an AI/KB response
//     setResponse("Here's an answer from the knowledge base or a fellow agent. [Multilingual support enabled: " + language + "]");
//   };

//   return (
//     <Card className="border shadow-md p-4">
//       <h3 className="text-xl font-semibold mb-2">Ask the Knowledge Bot</h3>
//       <Textarea
//         placeholder="Type your question here..."
//         value={query}
//         onChange={(e) => setQuery(e.target.value)}
//         className="mb-3"
//       />
//       <Select onValueChange={setLanguage} defaultValue={language} className="mb-3 w-48">
//         {languages.map((lang) => (
//           <SelectItem key={lang} value={lang}>
//             {lang}
//           </SelectItem>
//         ))}
//       </Select>
//       <Button onClick={handleAsk}>Ask</Button>
//       {response && (
//         <div className="mt-4 bg-gray-100 p-3 rounded text-sm text-gray-700">
//           <strong>Response:</strong> {response}
//         </div>
//       )}
//     </Card>
//   );
// }

// export default function QuestionsPage() {
//   return (
//     <div className="space-y-6 max-w-3xl mx-auto p-4">
//       <ChatBotInterface />
//       {questions.map((q, index) => (
//         <Card key={index} className="border shadow-md hover:shadow-lg transition-all">
//           <CardContent className="p-4">
//             <div className="flex justify-between items-center mb-2">
//               <h2 className="text-lg font-semibold text-blue-800 hover:underline cursor-pointer">
//                 {q.title}
//               </h2>
//               <span className="text-sm text-gray-500">{q.createdAt}</span>
//             </div>
//             <p className="text-sm text-gray-700 mb-3 line-clamp-3">{q.body}</p>
//             <div className="flex flex-wrap gap-2 mb-2">
//               {q.tags.map((tag, i) => (
//                 <Badge key={i} variant="outline">
//                   {tag}
//                 </Badge>
//               ))}
//             </div>
//             <div className="flex items-center justify-between text-sm text-gray-500">
//               <div className="flex items-center gap-4">
//                 <span className="flex items-center gap-1"><ThumbsUp size={14} /> {q.votes}</span>
//                 <span className="flex items-center gap-1"><MessageSquare size={14} /> {q.answers} answers</span>
//                 <span className="flex items-center gap-1"><Eye size={14} /> {q.views} views</span>
//               </div>
//               <span>{q.region} | {q.language}</span>
//             </div>
//           </CardContent>
//         </Card>
//       ))}
//     </div>
//   );
// }




import React, { useState } from "react";
import { Card, CardContent } from '../Components/ui/card'
import { Badge } from '../Components/ui/badge'
import { Button } from '../Components/ui/button'
import { MessageSquare, ThumbsUp, Eye } from "lucide-react";
import { Input } from '../Components/ui/input'
import { Textarea } from '../Components/ui/textarea'
import { Select, SelectItem,SelectContent, SelectTrigger, SelectValue } from '../Components/ui/select'


const questions = [
  {
    title: "How to apply for widow pension scheme in rural Maharashtra?",
    body: "I'm helping a widow apply for the pension scheme. She has Aadhar and Ration card but no bank passbook. Is it mandatory? Also, what if her application gets rejected?",
    tags: ["pension", "maharashtra", "documents", "grievance"],
    language: "English",
    author: "agent_233",
    region: "Satara",
    status: "Open",
    createdAt: "1 min ago",
    votes: 3,
    views: 12,
    answers: 0
  },
  {
    title: "Documents needed for PMAY-U application in Uttar Pradesh",
    body: "I want to know what documents are required for a family living in an urban slum in Kanpur to apply for PMAY-Urban housing scheme.",
    tags: ["pmay", "uttar-pradesh", "urban", "documents"],
    language: "Hindi",
    author: "agent_118",
    region: "Kanpur",
    status: "Answered",
    createdAt: "5 mins ago",
    votes: 1,
    views: 20,
    answers: 2
  },
  {
    title: "How to escalate a rejected pension application?",
    body: "One of my applications for old-age pension was rejected without any reason. How can I raise a grievance? Is there a contact or email?",
    tags: ["grievance", "pension", "escalation"],
    language: "Marathi",
    author: "agent_045",
    region: "Nagpur",
    status: "Open",
    createdAt: "10 mins ago",
    votes: -1,
    views: 8,
    answers: 0
  }
];

const languages = ["English", "Hindi", "Marathi"];

function ChatBotInterface() {
  const [query, setQuery] = useState("");
  const [language, setLanguage] = useState("English");
  const [response, setResponse] = useState("");

  const handleAsk = () => {
    // Simulate an AI/KB response
    setResponse("Here's an answer from the knowledge base or a fellow agent. [Multilingual support enabled: " + language + "]");
  };

  return (
    <Card className="border shadow-md p-4">
      <h3 className="text-xl font-semibold mb-2">Ask the Knowledge Bot</h3>
      <Textarea
        placeholder="Type your question here..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="mb-3"
      />
      <Select onValueChange={setLanguage} defaultValue={language} value={language} className="mb-3 w-48">
        <SelectTrigger>
          <SelectValue>{language}</SelectValue>
        </SelectTrigger>
        <SelectContent>
          {languages.map((lang) => (
            <SelectItem key={lang} value={lang}>
              {lang}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Button onClick={handleAsk}>Ask</Button>
      {response && (
        <div className="mt-4 bg-gray-100 p-3 rounded text-sm text-gray-700">
          <strong>Response:</strong> {response}
        </div>
      )}
    </Card>
  );
}

export default function QuestionFeed() {
  return (
    <div className="space-y-6 max-w-3xl mx-auto p-4">
      <ChatBotInterface />
      {questions.map((q, index) => (
        <Card key={index} className="border shadow-md hover:shadow-lg transition-all">
          <CardContent className="p-4">
            <div className="flex justify-between items-center mb-2">
              <h2 className="text-lg font-semibold text-blue-800 hover:underline cursor-pointer">
                {q.title}
              </h2>
              <span className="text-sm text-gray-500">{q.createdAt}</span>
            </div>
            <p className="text-sm text-gray-700 mb-3 line-clamp-3">{q.body}</p>
            <div className="flex flex-wrap gap-2 mb-2">
              {q.tags.map((tag, i) => (
                <Badge key={i} variant="outline">
                  {tag}
                </Badge>
              ))}
            </div>
            <div className="flex items-center justify-between text-sm text-gray-500">
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1"><ThumbsUp size={14} /> {q.votes}</span>
                <span className="flex items-center gap-1"><MessageSquare size={14} /> {q.answers} answers</span>
                <span className="flex items-center gap-1"><Eye size={14} /> {q.views} views</span>
              </div>
              <span>{q.region} | {q.language}</span>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
