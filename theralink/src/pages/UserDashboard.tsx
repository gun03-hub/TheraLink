import React from 'react';

const UserDashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-4xl font-semibold text-gray-800">User Dashboard</h1>

      {/* Profile Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-700">Profile</h2>
        <div className="mt-4">
          <p className="text-lg text-gray-600">Name: John Doe</p>
          <p className="text-lg text-gray-600">Email: johndoe@example.com</p>
          {/* Add a button to edit the profile */}
          <button className="mt-4 bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
            Edit Profile
          </button>
        </div>
      </section>

      {/* Mood Tracking Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-700">Mood Tracking</h2>
        <p className="text-lg text-gray-600 mt-2">
          Track your mood daily to monitor your mental wellness.
        </p>
        {/* Add Mood Tracker Component here */}
        <div className="mt-4">
          <button className="bg-green-600 text-white px-6 py-3 rounded-md hover:bg-green-700">
            Log Mood
          </button>
        </div>
      </section>

      {/* Chatbot Section */}
      <section className="mt-12">
        <h2 className="text-2xl font-semibold text-gray-700">Chat with NeuroNex</h2>
        <p className="text-lg text-gray-600 mt-2">
          Engage with NeuroNex for emotional support or guidance.
        </p>
        <div className="mt-4">
          <button className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700">
            Start Chatting
          </button>
        </div>
      </section>
    </div>
  );
};

export default UserDashboard;
