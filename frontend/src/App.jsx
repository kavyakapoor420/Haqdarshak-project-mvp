import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";

import Navbar from "./Components/Common/Navbar";
import Sidebar from "./Components/Common/Sidebar";
import AuthPage from "./Auth/AuthPage";
import KnowledgeBasePage from "./Pages/KnowledgePage";
import PostQuestionPage from "./Pages/PostQuestionPage";
import QuestionsPage from "./Pages/QuestionPage";
import { QuestionsList } from "./Components/Features/QuestionList";
import ChatInterface from "./Components/Core/ChatInterface";
import AiAssistPage from "./Components/Chatbot/Page";
import LandingPage from "./Pages/LandingPage";
import { LanguageProvider } from "./Pages/LanguageContext";
import { SarthiChatbot } from "./Components/Chatbot/SarthiChatbot";
import { AdminDashboard } from "./Dashboards/AdminDashboard";
import FileUploader from "./FileUploader";
// import AiAssistPage from "./Components/Core/AiAssist";
import Page from "./Components2/Page";
function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div>
      <Page/>
    </div>
    // <BrowserRouter>
    // <LanguageProvider>
    //   <Page/>
    //   {/* Navbar fixed at top */}
    //   <Navbar isLoggedIn={isLoggedIn} />
    //  <LandingPage/>
    //   {/* Wrapper for sidebar and main content */}
    //   <div className="">
    //     {/* <div className="flex"> */}
    //     {/* Sidebar is fixed and doesn't scroll with content */}
    //     {/* <Sidebar /> */}
    //     {/* Main content area */}
    //     {/* <main className="flex-1 p-4 ml-64 mt-16 overflow-y-auto"> */}
    //     <main className="">
    //       <Routes>
            
    //           <Route path="/" element={<LandingPage/> } />
           
    //         <Route path="/signup" element={<AuthPage />} />
    //         <Route path='/questions' element={<PostQuestionPage />} />
    //         <Route path="/all-questions" element={<QuestionsPage/>}/>
    //         <Route path="/admin" element={<AdminDashboard/>}/>
    //       </Routes>
    //     </main>
    //   </div>
    //   <SarthiChatbot/>
    //   <KnowledgeBasePage />
    //   <AiAssistPage/>
    //   <QuestionsList/>
      
    //   </LanguageProvider>
    // </BrowserRouter>
  );
}

export default App;
