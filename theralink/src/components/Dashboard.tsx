import React, { useState } from 'react';
import './Dashboard.css'; // Import your CSS for styling
import { Link } from 'react-scroll';

const Dashboard = () => {
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

  // Handlers for actions
  const handleEditProfile = () => {
    alert('Edit Profile feature coming soon!');
  };

  const handleLogMood = () => {
    alert('Mood Tracker feature coming soon!');
  };

  const handleStartChat = () => {
    alert('Redirecting to chatbot...');
  };

  return (
    <div className="dashboard-layout">
      {/* Navbar */}
      <header className="dashboard-navbar">
        <h1 className="navbar-brand">TheraLink</h1>
        <nav>
          <ul className="navbar-links">
            <li>
              <Link to="profile-section" smooth={true} duration={500}>
                Profile
              </Link>
            </li>
            <li>
              <Link to="mood-tracking-section" smooth={true} duration={500}>
                Mood Tracking
              </Link>
            </li>
            <li>
              <Link to="chatbot-section" smooth={true} duration={500}>
                Chat with NeuroNex
              </Link>
            </li>
            <li>
              <button className="logout-btn">Logout</button>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <div className="dashboard-content">
        {/* Sidebar */}
        <aside className="dashboard-sidebar">
          <div className="sidebar-profile">
            <h3>Welcome, {user.name}!</h3>
            <p>{user.email}</p>
          </div>
          <ul className="sidebar-tools">
            <li>
              <button onClick={handleEditProfile}>Edit Profile</button>
            </li>
            <li>
              <button onClick={handleLogMood}>Mood Tracker</button>
            </li>
            <li>
              <button onClick={handleStartChat}>Chat with NeuroNex</button>
            </li>
            <li>
              <button onClick={() => alert('Feature coming soon!')}>
                Insights & Analytics
              </button>
            </li>
            <li>
              <button onClick={() => alert('Feature coming soon!')}>
                Resources & Guides
              </button>
            </li>
          </ul>
        </aside>

        {/* Dashboard Sections */}
        <main className="dashboard-main">
          <section id="profile-section" className="dashboard-section">
            <h2>Profile</h2>
            <div className="profile-card">
              <p>
                <strong>Name:</strong> {user.name}
              </p>
              <p>
                <strong>Email:</strong> {user.email}
              </p>
              <button onClick={handleEditProfile} className="btn edit-btn">
                Edit Profile
              </button>
            </div>
          </section>

          <section id="mood-tracking-section" className="dashboard-section">
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

        </main>
      </div>
    </div>
  );
};

export default Dashboard;
