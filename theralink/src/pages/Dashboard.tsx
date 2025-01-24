import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Dashboard.css'; // Importing the CSS file for styling

const Dashboard = () => {
  const navigate = useNavigate();

  // Sample user data (replace with dynamic data from API or state management)
  const [user] = useState({
    name: 'Gunjan Arora',
    email: '4518gunjanarora@gmail.com',
  });

  // Sample mood tracking history
  const [moodHistory] = useState([
    { date: '2025-01-20', mood: 'Happy' },
    { date: '2025-01-21', mood: 'Stressed' },
    { date: '2025-01-22', mood: 'Calm' },
  ]);

  const handleEditProfile = () => {
    alert('Edit Profile feature coming soon!');
  };

  const handleLogMood = () => {
    alert('Mood Tracker feature coming soon!');
  };

  const handleStartChat = () => {
    navigate('/chatbot'); // Ensure the chatbot route exists
  };

  return (
    <div className="dashboard-container">
      <h1 className="dashboard-title">User Dashboard</h1>

      {/* Profile Section */}
      <section className="dashboard-section">
        <h2>Profile</h2>
        <div className="profile-card">
          <p><strong>Name:</strong> {user.name}</p>
          <p><strong>Email:</strong> {user.email}</p>
          <button onClick={handleEditProfile} className="btn edit-btn">
            Edit Profile
          </button>
        </div>
      </section>

      {/* Mood Tracking Section */}
      <section className="dashboard-section">
        <h2>Mood Tracking</h2>
        <p>Track your mood daily to monitor your mental wellness.</p>
        <button onClick={handleLogMood} className="btn log-btn">
          Log Mood
        </button>
        <div className="mood-history">
          <h3>Mood History</h3>
          <ul>
            {moodHistory.map((entry, index) => (
              <li key={index}>
                <span>{entry.date}</span>
                <span className="mood">{entry.mood}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Chatbot Section */}
      <section className="dashboard-section">
        <h2>Chat with NeuroNex</h2>
        <p>Engage with NeuroNex for emotional support or guidance.</p>
        <button onClick={handleStartChat} className="btn chat-btn">
          Start Chatting
        </button>
      </section>
    </div>
  );
};

export default Dashboard;
