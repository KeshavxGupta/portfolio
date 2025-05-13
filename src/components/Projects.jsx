// src/components/Projects.jsx

const projects = [
  {
    title: "Task Management System",
    description: "A full-stack productivity platform for managing tasks, users, and shop products. The backend is built with Flask (REST API), and the frontend is a Django web application.",
    image: new URL('../assets/photos/project1.jpg', import.meta.url).href,
    technologies: ["Flask", "Django", "Python"],
    link: "https://github.com/KeshavxGupta/TaskMaster"
  },
  {
    title: "Farming Management System",
    description: "A comprehensive web application for modern farming management, providing real-time monitoring, crop prediction, and farm management tools.",
    image: new URL('../assets/photos/project2.png', import.meta.url).href,
    technologies: ["Web Development", "Agriculture Tech"],
    link: "https://github.com/Naitik355/Hackmol"
  },
  {
    title: "Image Gallery",
    description: "A responsive image gallery application leveraging vanilla HTML, CSS, and JavaScript to deliver fluid animations, adaptive layout, and intuitive design without external frameworks.",
    image: new URL('../assets/photos/project3.png', import.meta.url).href,
    technologies: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/KeshavxGupta/IMAGE-GALLERY"
  }
  // Add more projects as needed
];

function Projects() {
  return (
    <section
      id="projects"
      className="relative flex flex-col items-center justify-center min-h-screen px-4 text-white bg-gradient-to-b from-[#121212] via-[#1a232a] to-[#121212] overflow-hidden py-16 md:px-16"
    >
      {/* Animated Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
        <div className="absolute animate-pulse top-[10%] left-[5%] w-24 h-24 bg-brightBlue rounded-full blur-3xl"></div>
        <div className="absolute animate-pulse top-[70%] right-[15%] w-32 h-32 bg-green rounded-full blur-3xl"></div>
        <div className="absolute animate-pulse bottom-[20%] left-[30%] w-16 h-16 bg-cyan-500 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 flex flex-col items-center max-w-5xl gap-12 mx-auto space-y-6 px-4">
        <h2 className="text-4xl md:text-5xl font-black tracking-wide text-white animate-fade-in-up">
          Projects
        </h2>
        
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3 animate-fade-in-up animation-delay-200">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-xl border border-white/10 shadow-2xl transition-all duration-500 hover:scale-[1.03] hover:shadow-3xl transform-gpu"
            >
              {/* Project Image */}
              <div className="relative w-full aspect-video overflow-hidden rounded-t-3xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
              </div>
              
              {/* Project Details */}
              <div className="p-6 space-y-4 relative">
                <h3 className="text-2xl font-bold text-cyan-300 group-hover:text-cyan-200 transition-all duration-300 ease-in-out">
                  {project.title}
                </h3>
                <p className="text-gray-400 group-hover:text-gray-200 transition-all duration-300 ease-in-out">
                  {project.description}
                </p>
                
                {/* Technologies */}
                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {project.technologies.map((tech, techIdx) => (
                      <span
                        key={techIdx}
                        className="px-3 py-1 text-xs bg-white/10 text-cyan-300 border border-white/10 rounded-full transition-all duration-300 hover:bg-white/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
                
                {/* Project Link */}
                <div className="mt-4">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 px-5 py-2.5 font-semibold text-dark bg-cyan-500 hover:bg-cyan-400 rounded-full transition-all duration-300 ease-in-out transform hover:-translate-y-1 shadow-lg hover:shadow-xl"
                  >
                    View Project
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;