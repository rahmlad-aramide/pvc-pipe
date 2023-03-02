import React from 'react';

const Hero = () => {
  return (
    <div className="h-screen bg-hero bg-cover">
      <div className="flex h-full flex-col items-center justify-center text-white">
        <div className="text-4xl font-semibold">
          {' '}
          <span className="text-secondary">PVC Delivery </span>at the comfort of
          your home
        </div>
        <div className="max-w-[64ch] text-center text-lg">
          Making sure your pvc is delivered and given to you at the comfort of
          your home, your voice must be heard.
        </div>
      </div>
    </div>
  );
};

export default Hero;
