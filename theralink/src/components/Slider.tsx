// src/components/Slider.tsx
import { useState } from 'react';

interface Slide {
  id: number;
  title: string;
  description: string;
  image: string;
}

const slides: Slide[] = [
  {
    id: 1,
    title: "Welcome to TheraLink",
    description: "Your journey to emotional well-being starts here.",
    image: "https://via.placeholder.com/800x400/FF5733/FFFFFF?text=Slide+1",
  },
  {
    id: 2,
    title: "Personalized Insights",
    description: "Get tailored advice based on your input.",
    image: "https://via.placeholder.com/800x400/33FF57/FFFFFF?text=Slide+2",
  },
  {
    id: 3,
    title: "Interactive Guidance",
    description: "Engage in mindfulness exercises and journaling.",
    image: "https://via.placeholder.com/800x400/3357FF/FFFFFF?text=Slide+3",
  },
];

const Slider: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-2xl mx-auto">
      <div className="overflow-hidden rounded-lg shadow-lg">
        <img src={slides[currentIndex].image} alt={slides[currentIndex].title} className="w-full h-64 object-cover" />
        <div className="absolute inset-0 flex items-center justify-between p-4">
          <button onClick={prevSlide} className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700">
            &#10094;
          </button>
          <button onClick={nextSlide} className="bg-gray-800 text-white p-2 rounded-full hover:bg-gray-700">
            &#10095;
          </button>
        </div>
      </div>
      <div className="text-center mt-4">
        <h2 className="text-xl font-bold">{slides[currentIndex].title}</h2>
        <p className="text-gray-600">{slides[currentIndex].description}</p>
      </div>
    </div>
  );
};

export default Slider;