import React, { useState, useRef, useEffect } from "react";
import { Button } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { ScrollArea } from "../ui/scroll-area";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { X, Send, Paperclip, Mic, User } from "lucide-react";
import { cn } from "@/lib/utils";
import HaqdarshakImage from '../../assets/Haqdarshak.png'

interface Message {
  id: string;
  content: string;
  role: "user" | "assistant";
  timestamp: Date;
}

export function SarthiChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "Hello! I'm Sarthi, your personal assistant. I can help you with information about government schemes, policies, and services. Feel free to ask me anything!",
      role: "assistant",
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return;

    const newMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      role: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");
    setIsTyping(true);

    // Simulate AI response
    setTimeout(() => {
      const responses = [
        `Thank you for asking about "${inputValue}". I understand your question and I'm here to help you with government schemes and services.`,
        `I can help you with information about various welfare schemes, application processes, and eligibility criteria. What specific scheme are you interested in?`,
        `For questions about "${inputValue}", I recommend checking with your local government office or visiting the official website for the most current information.`,
        `That's a great question about "${inputValue}". Let me help you understand the process step by step.`,
      ];

      const randomResponse = responses[Math.floor(Math.random() * responses.length)];

      const aiResponse: Message = {
        id: (Date.now() + 1).toString(),
        content: randomResponse,
        role: "assistant",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, aiResponse]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chatbot Trigger Button */}
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50">
          <Button
            onClick={() => setIsOpen(true)}
            className="h-20 w-20 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 shadow-2xl hover:shadow-3xl transition-all duration-300 group border-4 border-white"
          >
            <div className="flex flex-col items-center">
              <img
                src={HaqdarshakImage}
                alt="Chat Icon"
                className="h-12 w-12 text-white group-hover:scale-110 transition-transform duration-200"
              />
              <span className="text-xs text-white font-bold mt-1">Help</span>
            </div>
          </Button>

          {/* Floating notification */}
          <div className="absolute -top-2 -left-2 h-8 w-8 bg-red-500 rounded-full flex items-center justify-center animate-pulse border-2 border-white">
            <span className="text-white text-xs font-bold">New</span>
          </div>
        </div>
      )}

      {/* Chatbot Interface */}
      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[420px] h-[650px] bg-gradient-to-br from-orange-50 via-white to-amber-50 rounded-3xl shadow-2xl border-2 border-orange-200/50 backdrop-blur-sm animate-in slide-in-from-bottom-4 duration-300">
          {/* Header */}
          <div className="flex items-center justify-between p-5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-t-3xl text-white">
            <div className="flex items-center space-x-4">
              <div className="relative">
                <div className="h-12 w-12 bg-white/20 rounded-full flex items-center justify-center border-2 border-white/30">
                  <img
                    src={HaqdarshakImage}
                    alt="Bot Icon"
                    className="h-6 w-6 text-white"
                  />
                </div>
                <div className="absolute -bottom-1 -right-1 h-5 w-5 bg-green-400 rounded-full border-2 border-white flex items-center justify-center">
                  <div className="h-3 w-3 bg-green-600 rounded-full animate-pulse"></div>
                </div>
              </div>
              <div>
                <h3 className="font-bold text-xl">Sarthi</h3>
                <p className="text-sm text-orange-100">Your Helper</p>
              </div>
            </div>

            <div className="flex items-center space-x-3">
              <div className="flex items-center space-x-2 bg-black/20 rounded-full px-3 py-1">
                <div className="h-3 w-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">Online</span>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsOpen(false)}
                className="text-white hover:bg-white/20 h-10 w-10 rounded-full"
              >
                <X className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Messages Area */}
          <ScrollArea className="flex-1 h-[450px] p-4">
            <div className="space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={cn(
                    "flex gap-3",
                    message.role === "user" ? "flex-row-reverse" : "flex-row"
                  )}
                >
                  <Avatar className="h-10 w-10 shrink-0">
                    <AvatarFallback
                      className={cn(
                        message.role === "user"
                          ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                          : "bg-gradient-to-r from-orange-500 to-amber-500 text-white"
                      )}
                    >
                      {message.role === "user" ? (
                        <img
                          src={HaqdarshakImage}
                          alt="User Icon"
                          className="h-5 w-5"
                        />
                      ) : (
                        <img
                          src={HaqdarshakImage}
                          alt="Bot Icon"
                          className="h-5 w-5"
                        />
                      )}
                    </AvatarFallback>
                  </Avatar>

                  <div
                    className={cn(
                      "max-w-[75%] rounded-2xl px-4 py-3 shadow-sm",
                      message.role === "user"
                        ? "bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                        : "bg-white border-2 border-orange-100 text-gray-800"
                    )}
                  >
                    <p className="text-base leading-relaxed whitespace-pre-wrap font-medium">
                      {message.content}
                    </p>
                    <p
                      className={cn(
                        "text-xs mt-2",
                        message.role === "user" ? "text-blue-100" : "text-gray-500"
                      )}
                    >
                      {message.timestamp.toLocaleTimeString([], {
                        hour: "2-digit",
                        minute: "2-digit",
                      })}
                    </p>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex gap-3">
                  <Avatar className="h-10 w-10 shrink-0">
                    <AvatarFallback className="bg-gradient-to-r from-orange-500 to-amber-500 text-white">
                      <img
                        src={HaqdarshakImage}
                        alt="Bot Icon"
                        className="h-5 w-5"
                      />
                    </AvatarFallback>
                  </Avatar>
                  <div className="bg-white border-2 border-orange-100 rounded-2xl px-4 py-3 shadow-sm">
                    <div className="flex space-x-1">
                      <div className="h-3 w-3 bg-orange-400 rounded-full animate-bounce"></div>
                      <div className="h-3 w-3 bg-orange-400 rounded-full animate-bounce delay-100"></div>
                      <div className="h-3 w-3 bg-orange-400 rounded-full animate-bounce delay-200"></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>

          {/* Input Area */}
          <div className="p-5 border-t-2 border-orange-100 bg-white/90 backdrop-blur-sm rounded-b-3xl">
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Textarea
                  ref={textareaRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Type your question here... (Press Enter to send)"
                  className="min-h-[70px] max-h-36 resize-none pr-12 bg-gray-50 border-2 border-orange-200 focus:border-orange-400 focus:ring-orange-200 rounded-2xl text-base font-medium placeholder:text-gray-500"
                  disabled={isTyping}
                />
                <Button
                  type="button"
                  variant="ghost"
                  size="icon"
                  className="absolute right-3 top-3 h-10 w-10 text-gray-400 hover:text-orange-500 rounded-xl"
                  disabled={isTyping}
                >
                  <Paperclip className="h-5 w-5" />
                </Button>
              </div>
              <Button
                onClick={handleSendMessage}
                disabled={!inputValue.trim() || isTyping}
                className="h-[70px] px-6 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-200 rounded-2xl font-semibold"
              >
                <Send className="h-6 w-6" />
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
