import React from 'react';

function About() {
  return (
    <section id="about" className="w-full py-20 bg-slate-900">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-4xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              About Me
            </span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Image Section */}
            <div className="relative">
              <div className="relative z-10 rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
                <img 
                  src="./images/profile.png" 
                  alt="Saad's profile" 
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/50 to-transparent"></div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -z-10 top-4 left-4 w-full h-full bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg"></div>
            </div>

            {/* Content Section */}
            <div className="text-gray-300 space-y-6">
              <p className="text-xl leading-relaxed">
                Hi! I'm a passionate Front End Developer with a keen eye for design and a love for creating seamless user experiences.
              </p>
              
              <p className="leading-relaxed">
                With 3+ years of experience in web development, I specialize in building modern, responsive applications using React and related technologies.
              </p>

              {/* Skills Section */}
              <div className="pt-6">
                <h3 className="text-xl font-semibold text-purple-400 mb-4">Technical Skills</h3>
                <div className="flex flex-wrap gap-3">
                  {['React', 'JavaScript', 'TypeScript', 'Tailwind CSS', 'Next.js', 'Git'].map((skill) => (
                    <span 
                      key={skill}
                      className="px-4 py-2 bg-purple-900/30 border border-purple-500/30 rounded-full text-sm font-medium hover:bg-purple-900/50 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
