// Hero.tsx
import React from 'react';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-cover bg-center h-screen" style={{ backgroundImage: 'url(/hero.jpg)' }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative z-10 md:mt-8 mt-12 max-w-4xl mx-auto text-center text-white px-4 py-16 md:px-8 md:py-32">
        <h1 className="text-5xl md:text-7xl font-extrabold drop-shadow-lg">Welcome to Wise'R'Books</h1>
        <p className="mt-4 text-lg md:text-2xl drop-shadow-md">
          Discover the best books and exclusive deals, all in one place. Enjoy a seamless shopping experience.
        </p>
      </div>
    </div>
  );
};

export default Hero;
