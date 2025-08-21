import React, { useState } from 'react';

function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "E-Commerce Dashboard",
      description: "Modern dashboard with React and Material-UI featuring real-time analytics and sales tracking.",
      image: "./images/ecommerce.jpg",
      category: ["react", "frontend"],
      technologies: ["React", "Material-UI", "Chart.js"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/yourusername/project",
    },
            {
      id: 2,
      title: "Mobile Apps",
      description: "Responsive portfolio website with modern animations and dark theme.",
      image: "./images/mobile-app2.webp",
      category: ["frontend", "ui"],
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/yourusername/project",
    },
    {
      id: 3,
      title: "Social Media App",
      description: "Full-stack social media platform with real-time messaging and post updates.",
      image: "./images/social.webp",
      category: ["fullstack", "react"],
      technologies: ["React", "Node.js", "MongoDB"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/yourusername/project",
    },
    {
      id: 4,
      title: "Portfolio Website",
      description: "Responsive portfolio website with modern animations and dark theme.",
      image: "./images/portfolio.jpg",
      category: ["frontend", "ui"],
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/yourusername/project",
    },
    {
      id: 5,
      title: "Mobile Apps",
      description: "Responsive portfolio website with modern animations and dark theme.",
      image: "./images/mobile-app.webp",
      category: ["frontend", "ui"],
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/yourusername/project",
    },
    {
      id: 6,
      title: "Mobile Apps",
      description: "Responsive portfolio website with modern animations and dark theme.",
      image: "./images/mobile-app2.webp",
      category: ["frontend", "ui"],
      technologies: ["React", "Tailwind CSS", "Framer Motion"],
      liveLink: "https://example.com",
      githubLink: "https://github.com/yourusername/project",
    },
  ];

  const filters = [
    { label: 'All', value: 'all' },
    { label: 'Frontend', value: 'frontend' },
    { label: 'Full Stack', value: 'fullstack' },
    { label: 'UI/UX', value: 'ui' },
    { label: 'React', value: 'react' },
  ];

  const filteredProjects = activeFilter === 'all'
    ? projects
    : projects.filter(project => project.category.includes(activeFilter));

  return (
    <section id="projects" className="w-full py-20 bg-gradient-to-b from-slate-800 to-slate-900">
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 xl:px-16">
        <div className="max-w-6xl mx-auto">
          {/* Section Title */}
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          
          {/* Description */}
          <p className="text-gray-400 text-center mb-12 max-w-2xl mx-auto">
            Explore my recent projects showcasing my expertise in web development and design.
            Each project reflects my commitment to clean code and exceptional user experience.
          </p>

          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {filters.map((filter) => (
              <button
                key={filter.value}
                onClick={() => setActiveFilter(filter.value)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                  ${activeFilter === filter.value
                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white'
                    : 'bg-slate-800 text-gray-400 hover:bg-slate-700'
                  }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div
                key={project.id}
                className="group bg-slate-800/50 rounded-xl overflow-hidden border border-purple-500/10 hover:border-purple-500/30 transition-all duration-300"
              >
                {/* Project Image */}
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex gap-4">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 rounded bg-purple-500 text-white text-sm font-medium hover:bg-purple-600 transition-colors"
                      >
                        Live Demo
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 text-center py-2 rounded bg-slate-700 text-white text-sm font-medium hover:bg-slate-600 transition-colors"
                      >
                        Code
                      </a>
                    </div>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-200 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-slate-700/50 rounded-full text-purple-400 text-xs font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Projects;
