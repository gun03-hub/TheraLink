import React from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling
import './App.css';
import Chatbot from './components/Chatbot';

const App = () => {
  return (
    <div className="bg-blue-50 h-screen flex flex-col items-center text-gray-800">
      
      {/* Logo and Navigation Bar */}
      <header className="w-full bg-white shadow-md py-4 px-8 flex justify-between items-center fixed top-0 z-50">
        <img src="/logo.jpg" alt="TheraLink Logo" className="h-10" />
        <nav>
          <ul className="flex space-x-8">
            <li><Link to="how-it-works" smooth={true} className="text-lg cursor-pointer">How It Works</Link></li>
            <li><Link to="chatbot-section" smooth={true} className="text-lg cursor-pointer">Chat with NeuroNex</Link></li>
            <li><Link to="footer" smooth={true} className="text-lg cursor-pointer">Contact</Link></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="w-full h-screen bg-gradient-to-r from-blue-400 via-teal-500 to-green-500 flex flex-col justify-center items-center text-center text-white mt-16" id="how-it-works">
        <h1 className="text-6xl font-bold">Welcome to TheraLink</h1>
        <p className="text-xl mt-4">Your AI-powered mental health assistant</p>
        <Link to="chatbot-section" smooth={true}>
          <button className="mt-8 bg-green-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-800 transition-all">Start Chatting</button>
        </Link>
      </section>

      {/* How It Works Section */}
      <section className="w-full py-20 bg-white text-center" id="how-it-works">
        <h2 className="text-3xl font-semibold text-gray-800">How TheraLink Can Help</h2>
        <p className="text-lg text-gray-600 mt-4 max-w-2xl mx-auto">
          TheraLink connects you with NeuroNex, an AI assistant designed to guide you through mental wellness. Whether you're seeking guidance, self-care resources, or emotional support, we're here to help.
        </p>
      </section>

      {/* Chatbot Section */}
      <section className="w-full py-20 bg-blue-50 text-center" id="chatbot-section">
        <h2 className="text-3xl font-semibold text-gray-800">Chat with NeuroNex</h2>
        <Chatbot />
      </section>

      {/* Footer Section */}
      <footer className="w-full py-12 bg-gray-200 text-center" id="footer">
        <p className="text-lg text-gray-600">© 2025 TheraLink - All rights reserved</p>
      </footer>
    </div>
  );
};

export default App;
