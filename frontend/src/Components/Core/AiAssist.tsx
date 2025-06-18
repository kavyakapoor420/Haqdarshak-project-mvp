import { useState } from "react";
import { Send, Plus, Upload, Image, Paperclip } from "lucide-react";
import { Button } from '../ui/button'
import { Input } from "../ui/input";
import { ScrollArea } from "../ui/scroll-area";
import { Textarea } from "../ui/textarea";

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
  attachments?: File[];
}

interface Chat {
  id: string;
  title: string;
  messages: Message[];
  lastActivity: Date;
}

const AiAssistPage = () => {
  const [chats, setChats] = useState<Chat[]>([
    {
      id: "1",
      title: "Getting started with AI",
      messages: [
        {
          id: "1",
          content: "Hello! How can I help you today?",
          role: "assistant",
          timestamp: new Date(),
        },
      ],
      lastActivity: new Date(),
    },
  ]);
  const [activeChat, setActiveChat] = useState<string>("1");
  const [inputMessage, setInputMessage] = useState("");
  const [attachedFiles, setAttachedFiles] = useState<File[]>([]);

  const currentChat = chats.find((chat) => chat.id === activeChat);

  const handleSendMessage = () => {
    if (!inputMessage.trim() && attachedFiles.length === 0) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputMessage,
      role: "user",
      timestamp: new Date(),
      attachments: attachedFiles.length > 0 ? [...attachedFiles] : undefined,
    };

    const assistantMessage: Message = {
      id: (Date.now() + 1).toString(),
      content: "I'm a demo chatbot. This is where the AI response would appear. Your message was received!",
      role: "assistant",
      timestamp: new Date(),
    };

    setChats((prevChats) =>
      prevChats.map((chat) =>
        chat.id === activeChat
          ? {
              ...chat,
              messages: [...chat.messages, newMessage, assistantMessage],
              lastActivity: new Date(),
            }
          : chat
      )
    );

    setInputMessage("");
    setAttachedFiles([]);
  };

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(event.target.files || []);
    setAttachedFiles((prev) => [...prev, ...files]);
  };

  const createNewChat = () => {
    const newChat: Chat = {
      id: Date.now().toString(),
      title: "New conversation",
      messages: [
        {
          id: Date.now().toString(),
          content: "Hello! How can I help you today?",
          role: "assistant",
          timestamp: new Date(),
        },
      ],
      lastActivity: new Date(),
    };

    setChats((prev) => [newChat, ...prev]);
    setActiveChat(newChat.id);
  };

  const removeFile = (index: number) => {
    setAttachedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="flex h-screen bg-gradient-to-br from-orange-50 via-amber-50 to-orange-100">
      {/* Sidebar */}
      <div className="w-80 bg-white/70 backdrop-blur-sm border-r border-orange-200 flex flex-col">
        {/* New Chat Button */}
        <div className="p-4 border-b border-orange-200">
          <Button
            onClick={createNewChat}
            className="w-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
          >
            <Plus className="w-4 h-4 mr-2" />
            New Chat
          </Button>
        </div>

        {/* Chat History */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-2">
            {chats.map((chat) => (
              <button
                key={chat.id}
                onClick={() => setActiveChat(chat.id)}
                className={`w-full text-left p-3 rounded-lg transition-all duration-200 ${
                  activeChat === chat.id
                    ? "bg-gradient-to-r from-orange-100 to-amber-100 border border-orange-300"
                    : "hover:bg-orange-50 border border-transparent"
                }`}
              >
                <div className="font-medium text-gray-800 truncate">
                  {chat.title}
                </div>
                <div className="text-sm text-gray-500 mt-1">
                  {chat.lastActivity.toLocaleDateString()}
                </div>
              </button>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="bg-white/70 backdrop-blur-sm border-b border-orange-200 p-4">
          <h1 className="text-xl font-semibold text-gray-800">
            {currentChat?.title}
          </h1>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-6">
          <div className="max-w-3xl mx-auto space-y-6">
            {currentChat?.messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${
                  message.role === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                    message.role === "user"
                      ? "bg-gradient-to-r from-orange-500 to-amber-500 text-white"
                      : "bg-white/80 backdrop-blur-sm border border-orange-200 text-gray-800"
                  }`}
                >
                  {message.attachments && message.attachments.length > 0 && (
                    <div className="mb-2 space-y-1">
                      {message.attachments.map((file, index) => (
                        <div
                          key={index}
                          className="flex items-center space-x-2 text-sm opacity-90"
                        >
                          <Paperclip className="w-3 h-3" />
                          <span>{file.name}</span>
                        </div>
                      ))}
                    </div>
                  )}
                  <p className="whitespace-pre-wrap">{message.content}</p>
                  <div
                    className={`text-xs mt-2 opacity-70 ${
                      message.role === "user" ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {message.timestamp.toLocaleTimeString()}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>

        {/* Input Area */}
        <div className="bg-white/70 backdrop-blur-sm border-t border-orange-200 p-4">
          <div className="max-w-3xl mx-auto">
            {/* Attached Files */}
            {attachedFiles.length > 0 && (
              <div className="mb-3 flex flex-wrap gap-2">
                {attachedFiles.map((file, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-orange-100 px-3 py-1 rounded-full text-sm"
                  >
                    <Paperclip className="w-3 h-3" />
                    <span>{file.name}</span>
                    <button
                      onClick={() => removeFile(index)}
                      className="text-orange-600 hover:text-orange-800"
                    >
                      ×
                    </button>
                  </div>
                ))}
              </div>
            )}

            {/* Input Row */}
            <div className="flex items-end space-x-3">
              <div className="flex-1 relative">
                <Textarea
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Type your message here..."
                  className="resize-none bg-white/80 border-orange-200 focus:border-orange-400 focus:ring-orange-400 rounded-xl"
                  rows={1}
                  onKeyPress={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      handleSendMessage();
                    }
                  }}
                />
              </div>

              {/* File Upload */}
              <label className="cursor-pointer">
                <input
                  type="file"
                  multiple
                  onChange={handleFileUpload}
                  className="hidden"
                  accept="image/*,text/*,.pdf,.doc,.docx"
                />
                <Button
                  type="button"
                  variant="outline"
                  size="icon"
                  className="border-orange-200 hover:bg-orange-50 hover:border-orange-300"
                >
                  <Upload className="w-4 h-4" />
                </Button>
              </label>

              {/* Send Button */}
              <Button
                onClick={handleSendMessage}
                disabled={!inputMessage.trim() && attachedFiles.length === 0}
                className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white"
                size="icon"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiAssistPage;