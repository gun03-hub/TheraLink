import React, { useState, useRef } from 'react';

const Chatbot = () => {
  interface Message {
    text: string;
    sender: string;
  }

  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [conversationStage, setConversationStage] = useState('start');
  const chatContainerRef = useRef<HTMLDivElement>(null);

  // Responses for each emotion
  const responses = {
    happiness: [
      "I'm so glad to hear that you're feeling happy! What's been making you smile today?",
      "That's fantastic! Share more about what's bringing you joy!",
      "It's great to hear that you're in a good mood. What’s the highlight of your day?",
    ],
    sadness: [
      "I'm sorry you're feeling this way. Would you like to share what's on your mind?",
      "I hear you. It’s okay to feel sad sometimes. I'm here to listen.",
      "Take your time. It's okay to express how you're feeling.",
    ],
    anger: [
      "I'm really sorry to hear you're feeling angry. What's been frustrating you?",
      "Anger can be tough to handle. Do you want to talk about what's causing it?",
      "It sounds like something is really bothering you. I'm here to help if I can.",
    ],
    fear: [
      "It’s okay to feel scared sometimes. What's worrying you right now?",
      "I'm here for you. Talking about your fears can help lighten the load.",
      "You’re not alone. Let’s talk about what’s making you anxious.",
    ],
    surprise: [
      "Wow, that sounds surprising! Tell me more about what happened.",
      "That must have been unexpected! How are you feeling about it?",
      "It's interesting to hear that! What’s your reaction to this surprise?",
    ],
    love: [
      "That's beautiful. Love and affection can really brighten our lives!",
      "It’s wonderful to feel cared for. Who or what is making you feel this way?",
      "Sharing love and positivity is always a good thing. Tell me more about it!",
    ],
    confusion: [
      "Feeling confused is normal. What’s on your mind?",
      "It’s okay to feel unsure. Let’s try to sort through it together.",
      "Can you share more details? Maybe we can figure it out.",
    ],
    neutral: [
      "That's okay. Would you like to share more about how you're feeling?",
      "Sometimes it’s okay to just feel neutral. What's been going on?",
      "I'm here for you whenever you feel like sharing more.",
    ],
  };

  const handleSendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { text: input, sender: 'user' }]);
      setInput('');
      scrollToBottom();

      // Simulate AI response
      setIsTyping(true);
      let botResponse = '';
      const inputLower = input.toLowerCase();

      // Determine the response based on emotion keywords
      if (inputLower.includes('happy') || inputLower.includes('joy') || inputLower.includes('excited')) {
        botResponse = responses.happiness[Math.floor(Math.random() * responses.happiness.length)];
      } else if (inputLower.includes('sad') || inputLower.includes('lonely') || inputLower.includes('down')) {
        botResponse = responses.sadness[Math.floor(Math.random() * responses.sadness.length)];
      } else if (inputLower.includes('angry') || inputLower.includes('upset') || inputLower.includes('frustrated')) {
        botResponse = responses.anger[Math.floor(Math.random() * responses.anger.length)];
      } else if (inputLower.includes('scared') || inputLower.includes('anxious') || inputLower.includes('nervous')) {
        botResponse = responses.fear[Math.floor(Math.random() * responses.fear.length)];
      } else if (inputLower.includes('surprised') || inputLower.includes('shocked') || inputLower.includes('amazed')) {
        botResponse = responses.surprise[Math.floor(Math.random() * responses.surprise.length)];
      } else if (inputLower.includes('loved') || inputLower.includes('affectionate') || inputLower.includes('cared')) {
        botResponse = responses.love[Math.floor(Math.random() * responses.love.length)];
      } else if (inputLower.includes('confused') || inputLower.includes('unsure') || inputLower.includes('perplexed')) {
        botResponse = responses.confusion[Math.floor(Math.random() * responses.confusion.length)];
      } else {
        botResponse = responses.neutral[Math.floor(Math.random() * responses.neutral.length)];
      }

      // Simulate delay for typing
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
    if (chatContainerRef.current) {
      chatContainerRef.current.scrollTop = chatContainerRef.current.scrollHeight;
    }
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
