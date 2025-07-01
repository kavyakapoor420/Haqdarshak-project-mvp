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
// import AiAssistPage from "./Components/Core/AiAssist";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <BrowserRouter>
    <LanguageProvider>
      {/* Navbar fixed at top */}
      <Navbar isLoggedIn={isLoggedIn} />

      {/* Wrapper for sidebar and main content */}
      <div className="">
        {/* <div className="flex"> */}
        {/* Sidebar is fixed and doesn't scroll with content */}
        {/* <Sidebar /> */}

        {/* Main content area */}
        {/* <main className="flex-1 p-4 ml-64 mt-16 overflow-y-auto"> */}
        <main className="">
          <Routes>
            
              <Route path="/" element={<LandingPage/> } />
           
            <Route path="/signup" element={<AuthPage />} />
            <Route path='/questions' element={<PostQuestionPage />} />
            <Route path="/all-questions" element={<QuestionsPage/>}/>
          </Routes>
        </main>
      </div>
      <KnowledgeBasePage />
      <AiAssistPage/>
      {/* <AiAssistPage/> */}
      <ChatInterface/>
      <QuestionsList/>
      
      <KnowledgeBasePage />
      <KnowledgeBasePage />
      
      </LanguageProvider>
    </BrowserRouter>
  );
}

export default App;
