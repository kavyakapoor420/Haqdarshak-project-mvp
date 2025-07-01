import React, { useState } from 'react';

const ChatInterface = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim() === '') return;

    const newMessage = {
      id: messages.length + 1,
      text: inputValue,
      sender: 'user',
    };

    setMessages([...messages, newMessage]);
    setInputValue('');

    // Simulate a response from the chatbot
    setTimeout(() => {
      const responseMessage = {
        id: messages.length + 2,
        text: `Response to: "${inputValue}"`,
        sender: 'bot',
      };
      setMessages((prevMessages) => [...prevMessages, responseMessage]);
    }, 1000);
  };

  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const fileMessage = {
          id: messages.length + 1,
          text: `File uploaded: ${file.name}`,
          sender: 'user',
          file: e.target.result,
        };
        setMessages([...messages, fileMessage]);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="flex h-screen">
      <div className="w-1/4 bg-gray-200 p-4 overflow-y-auto">
        <h2 className="text-xl font-bold mb-4">Chat History</h2>
        {messages.map((message) => (
          <div key={message.id} className="mb-2 p-2 bg-white rounded">
            <p>{message.text}</p>
          </div>
        ))}
      </div>
      <div className="w-3/4 flex flex-col">
        <div className="flex-1 p-4 overflow-y-auto">
          {messages.map((message) => (
            <div key={message.id} className={`mb-2 p-2 rounded ${message.sender === 'user' ? 'bg-blue-500 text-white ml-auto' : 'bg-gray-300 mr-auto'}`}>
              <p>{message.text}</p>
              {message.file && <img src={message.file} alt="Uploaded content" className="mt-2 max-w-xs" />}
            </div>
          ))}
        </div>
        <div className="p-4 bg-gray-100">
          <div className="flex">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="flex-1 p-2 border rounded"
              placeholder="Type your message..."
            />
            <input type="file" onChange={handleFileUpload} className="mx-2" />
            <button onClick={handleSendMessage} className="bg-blue-500 text-white p-2 rounded">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
