import React from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling
import './App.css'; // Ensure this CSS file exists
import Chatbot from './components/Chatbot'; // Correct path for Chatbot component
import Dashboard from './pages/Dashboard'; // Correct path for Dashboard component

const App = () => {
  return (
    <div className="bg-blue-50 flex flex-col items-center text-gray-800">
      {/* Navigation Bar */}
      <header
        className="w-full shadow-md py-4 px-8 flex items-center fixed top-0 z-50"
        style={{ backgroundColor: '#4CAF50' }}
      >
        <div className="flex items-center">
          <img src="/logo2.jpg" alt="TheraLink Logo" className="h-12 w-12 rounded-full object-cover" />
          <h1 className="text-3xl font-semibold ml-6">TheraLink</h1>
        </div>
        <nav className="ml-auto">
          <ul className="flex space-x-12 font-bold">
            <li>
              <Link to="home" smooth className="text-lg cursor-pointer hover:text-blue-500">
                Home
              </Link>
            </li>
            <li>
              <Link to="how-it-works" smooth className="text-lg cursor-pointer hover:text-blue-500">
                How It Works
              </Link>
            </li>
            <li>
              <Link to="chatbot-section" smooth className="text-lg cursor-pointer hover:text-blue-500">
                Chat with NeuroNex
              </Link>
            </li>
            <li>
              <Link to="dashboard" smooth className="text-lg cursor-pointer hover:text-blue-500">
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="contact" smooth className="text-lg cursor-pointer hover:text-blue-500">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section id="home" className="h-screen flex justify-center items-center text-center relative bg-gradient-to-r from-green-400 to-blue-500">
        <div>
          <h1 className="text-6xl font-bold text-white">Welcome to TheraLink</h1>
          <p className="text-xl text-white mt-4">Your AI-powered mental health assistant</p>
          <Link to="chatbot-section" smooth>
            <button className="mt-8 bg-green-600 text-white px-8 py-3 rounded-full hover:bg-green-800">
              Start Chatting
            </button>
          </Link>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="w-full py-20 bg-white text-center">
        <h2 className="text-3xl font-semibold">How TheraLink Can Help</h2>
        <p className="text-lg mt-4 text-gray-600 max-w-2xl mx-auto">
          TheraLink connects you with NeuroNex, an AI assistant designed to guide you through mental wellness.
        </p>
      </section>

      {/* Chatbot Section */}
      <section id="chatbot-section" className="w-full py-20 bg-blue-50 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Chat with NeuroNex</h2>
        <Chatbot />
      </section>

      {/* Dashboard */}
      <section id="dashboard" className="w-full py-20 bg-white text-center">
        <h2 className="text-3xl font-semibold">Dashboard</h2>
        <Dashboard />
      </section>

      {/* Contact */}
      <section id="contact" className="w-full py-20 bg-gray-50 text-center">
        <h2 className="text-3xl font-semibold">Contact Us</h2>
        <p className="text-lg mt-4 max-w-2xl mx-auto">
          Have questions? Get in touch with us.
        </p>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-200 text-center">
        <p>© 2025 TheraLink - All rights reserved</p>
      </footer>
    </div>
  );
};

export default App;
