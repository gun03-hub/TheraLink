import React from 'react';
import Slider from '../components/Slider';
import Chatbot from '../components/Chatbot';

const Home = () => {
  return (
    <div className="home-container">
      <Slider>
        <div className="slider-page">
          <h1>Welcome to TheraLink</h1>
          <p>AI-Powered Mental Health Support</p>
        </div>
      </Slider>

      <Slider>
        <Chatbot />
      </Slider>
    </div>
  );
};

export default Home;
