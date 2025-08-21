import React from 'react';

function Hero() {
  return (
    <section className="w-full min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/2 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-500"></div>
      </div>

      {/* Container for content */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        {/* Main content */}
        <div className="relative z-10 text-center max-w-4xl mx-auto">
          {/* Profile image */}
          <div className="mb-6 sm:mb-8 relative">
            <div className="w-24 h-24 sm:w-32 sm:h-32 mx-auto rounded-full bg-gradient-to-r from-purple-400 to-pink-400 p-1 animate-spin-slow">
              <div className="w-full h-full rounded-full bg-slate-800 flex items-center justify-center">
                <img src="images/logo.png" className="w-full h-full rounded-full" alt="Saad"/>
              </div>
            </div>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight text-center">
            Hi, I'm{' '}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent animate-pulse">
              Saad
            </span>
          </h1>

          {/* Subtitle with typewriter effect */}
          <div className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-6 sm:mb-8 h-8 text-center">
            <span className="border-r-2 border-purple-400 animate-pulse">
              Front End Developer
            </span>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-400 mb-8 sm:mb-12 max-w-2xl mx-auto leading-relaxed px-4 sm:px-0">
            I Create Beautiful, Responsive Web Applications with Modern Technologies. 
            Passionate about clean code, User experience, and bringing ideas to life through code.
          </p>

          {/* Call-to-action buttons */}
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center w-full sm:w-auto px-4 sm:px-0">
            <button 
              onClick={() => {
                document.getElementById('projects').scrollIntoView({ 
                  behavior: 'smooth',
                  block: 'start'
                });
              }}
              className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-lg hover:from-purple-600 hover:to-pink-600 transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-purple-500/25 text-sm sm:text-base"
            >
              View My Work
            </button>
            <button className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-purple-400 text-purple-400 font-semibold rounded-lg hover:bg-purple-400 hover:text-white transition-all duration-300 text-sm sm:text-base">
              Download CV
            </button>
          </div>

          {/* Social links */}
          <div className="flex justify-center space-x-4 sm:space-x-6 mt-8 sm:mt-12">
            <a href="https://www.facebook.com/MahmouS3D/" target='_blank' className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
              <svg className="w-5 h-5 sm:w-6 sm:h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14 13.5h2.5l1-4H14v-2c0-1.03 0-2 2-2h1.5V2.14c-.326-.043-1.557-.14-2.857-.14C11.928 2 10 3.657 10 6.7v2.8H7v4h3V22h4v-8.5z"/>
              </svg>
            </a>
            <a href="https://www.linkedin.com/in/mahmoud-saad-0baa08247/" target='_blank' className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
            <a href="https://github.com/Floki92" target='_blank' className="text-gray-400 hover:text-purple-400 transition-colors duration-300 transform hover:scale-110">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button 
        onClick={() => {
          document.getElementById('about').scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
          });
        }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer hover:text-purple-400 transition-colors duration-300"
        aria-label="Scroll to About section"
      >
        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </button>
    </section>
  );
}

export default Hero;

