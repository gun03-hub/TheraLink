import React, { useState, useEffect, useRef } from 'react';

const Chatbot = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [conversationStage, setConversationStage] = useState('start');
  const chatContainerRef = useRef(null);

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      scrollToBottom();

      // Simulate AI response with empathy and conversation stages
      setIsTyping(true);
      let botResponse = '';

      if (conversationStage === 'start') {
        botResponse = "NeuroNex: How can I assist you today? I'm here to listen.";
        setConversationStage('asking_for_feelings');
      } else if (conversationStage === 'asking_for_feelings') {
        botResponse = "I'm really sorry you're feeling this way. It's important to talk about how you feel. Can you tell me more about what's been going on?";
        setConversationStage('discussing_feelings');
      } else if (conversationStage === 'discussing_feelings') {
        botResponse = "It sounds tough, but it's great that you're sharing. What do you think is causing these feelings? I'm here to listen and help.";
        setConversationStage('offering_help');
      } else if (conversationStage === 'offering_help') {
        botResponse = "I can suggest some ways to cope with difficult feelings, like deep breathing exercises or journaling. Would you like to try one of those?";
        setConversationStage('waiting_for_action');
      } else if (conversationStage === 'waiting_for_action') {
        botResponse = "If you'd like, we can talk more about your feelings or go through a relaxation technique together. Let me know what you'd prefer.";
      }

      // Delay for simulated typing
      setTimeout(() => {
        setMessages((prevMessages) => [
          ...prevMessages,
          { text: botResponse, sender: 'bot' },
        ]);
        setIsTyping(false);
        scrollToBottom();
      }, 1500);
    }
  };

  // Scroll to bottom when a new message is added
  const scrollToBottom = () => {
    chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
  };

  // Handle Enter key press to send message
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8">
      <h2 className="text-xl font-semibold text-center mb-4">Chat with NeuroNex</h2>

      <div
        className="mb-4 max-h-60 overflow-y-auto p-4 bg-gray-50 rounded-lg"
        ref={chatContainerRef}
      >
        {messages.map((msg, index) => (
          <div key={index} className={`mb-2 ${msg.sender === 'user' ? 'text-right' : 'text-left'}`}>
            <p
              className={`inline-block ${msg.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-black'} p-3 rounded-lg`}
            >
              {msg.text}
            </p>
          </div>
        ))}

        {/* Show typing indicator */}
        {isTyping && (
          <div className="text-left mb-2">
            <p className="inline-block bg-gray-200 text-black p-3 rounded-lg">NeuroNex is typing...</p>
          </div>
        )}
      </div>

      <div className="flex items-center space-x-2 mt-4">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Tell me how you're feeling..."
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
