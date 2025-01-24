import React, { useState } from 'react';
import { Link } from 'react-scroll'; // For smooth scrolling
import Popup from 'reactjs-popup'; // Import the popup library
import 'reactjs-popup/dist/index.css'; // Import the popup styles
import './App.css'; // Custom CSS for animations
import Chatbot from './components/Chatbot'; // Ensure this CSS file exists

const App = () => {
  const [isLoginOpen, setLoginOpen] = useState(false);
  const [isSignUpOpen, setSignUpOpen] = useState(false);

  const handleLoginOpen = () => {
    setLoginOpen(true);
  };

  const handleSignUpOpen = () => {
    setSignUpOpen(true);
  };

  const closeModal = () => {
    setLoginOpen(false);
    setSignUpOpen(false);
  };

  return (
    <div className="bg-blue-50 h-screen flex flex-col items-center text-gray-800">
      {/* Logo and Navigation Bar */}
      <header className="w-full shadow-md py-4 px-8 flex items-center fixed top-0 z-50" style={{ backgroundColor: '#4CAF50' }}>
        <div className="flex items-center">
          <img src="/logo2.jpg" alt="TheraLink Logo" className="h-12 w-12 rounded-full object-cover" />
          <h1 className="text-3xl font-semibold ml-6">TheraLink</h1>
        </div>
        <nav className="ml-auto">
          <ul className="flex space-x-8 ml-auto text-white text-outline">
            <li>
              <Link to="home" smooth={true} className="text-lg cursor-pointer active:underline text-outline" activeClass="text-blue-600 font-semibold">Home</Link>
            </li>
            <li>
              <Link to="how-it-works" smooth={true} className="text-lg cursor-pointer active:underline text-outline" activeClass="active-link">How It Works</Link>
            </li>
            <li>
              <Link to="chatbot-section" smooth={true} className="text-lg cursor-pointer active:underline text-outline" activeClass="active-link">Chat with NeuroNex</Link>
            </li>
            <li>
              <Link to="contact" smooth={true} className="text-lg cursor-pointer text-outline" activeClass="active-link">Contact</Link>
            </li>
            <li>
              <button onClick={handleSignUpOpen} className="text-lg cursor-pointer active:underline text-outline px-6 py-2 rounded bg-blue-500 mr-2">Sign Up</button>
            </li>
            <li>
              <button onClick={handleLoginOpen} className="text-lg cursor-pointer active:underline text-outline px-6 py-2 rounded bg-blue-500 mr-2">Login</button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Sign Up Popup */}
      <Popup open={isSignUpOpen} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <h1 className='font items-center'>Sign Up</h1>
          <form>
            <input type="text" placeholder="Username" required />
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button style={{ marginRight: '10px', padding: '10px 20px' }} type="submit">Sign Up</button>
            <button style={{ padding: '10px 20px' }} className="close" onClick={closeModal}>Close</button>
          </form>
        </div>
      </Popup>

      {/* Login Popup */}
      <Popup open={isLoginOpen} closeOnDocumentClick onClose={closeModal}>
        <div className="modal">
          <h1 className='font items-center'>Login</h1>
          <form>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <button style={{ marginRight: '10px', padding: '10px 20px' }} type="submit">Login</button>
            <button style={{ padding: '10px 20px' }} className="close" onClick={closeModal}>Close</button>
          </form>
        </div>
      </Popup>

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

      {/* How It Works Section */}
      <section className="w-full py-20 bg-white text-center" id="how-it-works">
        <h2 className="text-3xl font-semibold text-gray-800 mt-0">How TheraLink Can Help</h2>
        <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
          TheraLink connects you with NeuroNex, an AI assistant designed to guide you through mental wellness. Whether you're seeking guidance, self-care resources, or emotional support, we're here to help.
        </p>
        <div className="mt-6 max-w-4xl mx-auto">
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">Step 1: Getting Started</h3>
          <p className="text-lg text-gray-600 mb-4">
            Begin your journey by signing up and creating your profile. This allows NeuroNex to better understand your needs and personalize the experience. From there, you can access mental health resources, mood tracking, and more.
          </p>
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">Step 2: Chat with NeuroNex</h3>
          <p className="text-lg text-gray-600 mb-4">
            NeuroNex is your AI-powered assistant available 24/7. Engage in conversations to discuss various topics like stress management, mindfulness practices, or simply share how you're feeling. NeuroNex is here to listen and guide you.
          </p>
          <h3 className="text-2xl font-semibold text-gray-700 mb-2">Step 3: Continuous Support and Growth</h3>
          <p className="text-lg text-gray-600 mb-4">
            As you continue using TheraLink, you'll get personalized suggestions, resources, and progress tracking to help you maintain your mental wellness. NeuroNex grows with you and adapts to your journey.
          </p>
        </div>
      </section>

      {/* Chatbot Section */}
      <section id="chatbot-section" className="w-full py-20 bg-blue-50 text-center">
        <h2 className="text-3xl font-semibold text-gray-800">Chat with NeuroNex</h2>
        <Chatbot />
      </section>

      {/* Contact Section */}
      <section className="w-full py-20 mt-28 bg-white text-center" id="contact">
        <h2 className="text-3xl font-semibold text-gray-800">Contact Us</h2>
        <p className="text-lg text-gray-600 mt-2 max-w-2xl mx-auto">
          We're here to help! If you have any questions, feedback, or need assistance, please reach out to us.
        </p>
        <form
          className="mt-8 max-w-2xl mx-auto space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert('Form submitted');
          }}
        >
          <div className="flex space-x-4">
            <div className="w-1/2">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
            <div className="w-1/2">
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
                required
              />
            </div>
          </div>
          <div>
            <textarea
              name="message"
              placeholder="Your Message"
              rows={4}
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-600"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-green-600 text-white px-8 py-3 rounded-full shadow-lg hover:bg-green-800 transition-all"
          >
            Send Message
          </button>
        </form>
      </section>

      {/* Footer */}
      <footer className="w-full py-6 bg-gray-200 text-center">
        <p>© 2025 TheraLink - All rights reserved</p>
      </footer>
    </div>
  );
};

export default App;