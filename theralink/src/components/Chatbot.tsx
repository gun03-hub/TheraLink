import React, { useState } from 'react';

const Chatbot = () => {
  interface Message {
    text: string;
    sender: string;
  }
  
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');

      // Simulate AI response
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: 'NeuroNex: How can I assist you today?', sender: 'bot' },
        ]);
      }, 1000);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8">
      <h2 className="text-xl font-semibold text-center mb-4">Chat with NeuroNex</h2>

      <div className="mb-4 max-h-60 overflow-y-auto p-4 bg-gray-50 rounded-lg">
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <p className={`inline-block ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} p-3 rounded-lg`}>
              {msg.text}
            </p>
          </div>
        ))}
      </div>

      <div className="flex items-center space-x-2 mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Ask NeuroNex..."
        />
        <button
          onClick={handleSendMessage}
          className="bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-800 transition-all"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chatbot;
