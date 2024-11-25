import React from 'react';

const TeamGreeting = () => {
  return (
    <div className="min-h-screen relative overflow-hidden bg-white">
      {/* Background circles */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 -left-24 w-96 h-96 rounded-full bg-blue-200/70 blur-2xl" />
        <div className="absolute -top-24 right-1/4 w-[30rem] h-[30rem] rounded-full bg-purple-200/70 blur-2xl" />
        <div className="absolute bottom-1/4 -right-24 w-[28rem] h-[28rem] rounded-full bg-pink-200/70 blur-2xl" />
        <div className="absolute -bottom-24 left-1/4 w-[32rem] h-[32rem] rounded-full bg-indigo-200/70 blur-2xl" />
      </div>

      {/* Frosted glass overlay */}
      <div className="absolute inset-0 backdrop-blur-md bg-white/30" />

      {/* Content - centered both vertically and horizontally */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className="text-center">
          <div className="text-3xl text-gray-700 mb-4 font-semibold tracking-wider">
            Hello, we are
          </div>
          <div className="text-5xl text-gray-800 font-bold tracking-widest">
            team_83
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamGreeting;