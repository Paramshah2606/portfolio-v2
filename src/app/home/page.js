"use client";
import React, { useState, useEffect } from "react";
import { Play, Info } from "lucide-react";
import { useRouter } from "next/navigation";
import { PORTFOLIO_DATA } from "@/constant/constant";

const NetflixPortfolio = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const router = useRouter();

  // const ProjectCard = ({ project, delay = 0 }) => (
  //   <div
  //     onMouseEnter={() => setHoveredProject(project.id)}
  //     onMouseLeave={() => setHoveredProject(null)}
  //     onClick={() => router.push(`/home/project/${project.id}`)}
  //     className="relative cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10 animate-slide-up"
  //     style={{ animationDelay: `${delay}ms` }}
  //   >
  //     <img src={project.thumbnail} alt={project.title} className="w-full rounded-lg" />
  //     <div className={`absolute inset-0 rounded-lg p-4 flex flex-col justify-between transition-all duration-300 ${hoveredProject === project.id ? 'backdrop-blur-md bg-black/40' : 'opacity-0'}`}>
  //       <div>
  //         <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
  //         <p className="text-gray-200 text-sm mb-3">{project.shortDesc}</p>
  //       </div>
  //        <button
  //       className={`px-4 py-2 rounded bg-white text-black text-sm flex items-center gap-2
  //         transition-all duration-300 mt-4 w-fit
  //         ${hoveredProject === project.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
  //       `}
  //     >
  //       <Play className="w-4 h-4" /> View Project
  //     </button>
  //     </div>
  //   </div>
  // );

  const ProjectCard = ({ project, delay = 0 }) => {
    const [hovered, setHovered] = useState(null);
    const [index, setIndex] = useState(0);

    const images = project.gallery || [project.thumbnail]; // fallback

    // auto-slider
    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 2500);

      return () => clearInterval(interval);
    }, [images.length]);

    return (
  <div
    onMouseEnter={() => setHovered(project.id)}
    onMouseLeave={() => setHovered(null)}
    onClick={() => router.push(`/home/project/${project.id}`)}
    className="
      relative cursor-pointer transform transition-all duration-300
      hover:scale-105 hover:z-10 animate-slide-up
    "
    style={{ animationDelay: `${delay}ms` }}
  >
    {/* IMAGE GALLERY */}
    <div className="relative w-full h-48 sm:h-56 md:h-64 overflow-hidden rounded-lg">
      {images.map((img, i) => (
        <img
          key={i}
          src={img}
          className={`absolute w-full h-full object-cover transition-all duration-500 ${
            i === index ? "opacity-100" : "opacity-0"
          }`}
        />
      ))}

      {/* DOTS */}
      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, i) => (
          <div
            key={i}
            className={`
              w-2 h-2 sm:w-2.5 sm:h-2.5 rounded-full transition-all
              ${i === index ? "bg-white scale-110" : "bg-white/40"}
            `}
          />
        ))}
      </div>
    </div>

    {/* HOVER OVERLAY */}
    <div
      className={`
        absolute inset-0 rounded-lg p-3 sm:p-4 flex flex-col justify-between transition-all duration-300 ${hovered === project.id ? "backdrop-blur-md bg-black/40" : "opacity-0"}
      `}
    >
      <div>
        <h3 className="text-white font-bold text-base sm:text-lg mb-1">
          {project.title}
        </h3>
        <p className="text-gray-200 text-xs sm:text-sm mb-3">
          {project.shortDesc}
        </p>
      </div>

      <button
        className={`
          px-3 py-1.5 sm:px-4 sm:py-2 rounded bg-white text-black text-xs sm:text-sm flex items-center gap-2 transition-all duration-300 mt-2 w-fit ${hovered === project.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
        `}
      >
        <Play className="w-3 h-3 sm:w-4 sm:h-4" /> View Project
      </button>
    </div>
  </div>
);

  };

  return (
    <div className="bg-black min-h-screen text-white overflow-y-auto scrollbar-hide pt-20">
      {/* HERO SECTION */}
      <div className="relative h-[70vh] sm:h-[80vh] md:h-[90vh] mb-8">
        <img
          src="/cover-image.jpg"
          alt="Hero"
          className="w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

        {/* TEXT AREA */}
        <div className="absolute left-4 sm:left-10 bottom-40 sm:bottom-60 md:bottom-80 p-6 sm:p-10 max-w-lg sm:max-w-xl md:max-w-2xl">
          <h1 className="font-bold text-white mb-3 animate-slide-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
            {PORTFOLIO_DATA.personal.name}
          </h1>

          <p
            className=" text-red-500 mb-2 animate-slide-up text-xl sm:text-2xl md:text-3xl"
            style={{ animationDelay: "100ms" }}
          >
            {PORTFOLIO_DATA.personal.title}
          </p>

          <p
            className=" text-gray-300 mb-6 animate-slide-up text-lg sm:text-xl md:text-2xl"
            style={{ animationDelay: "200ms" }}
          >
            {PORTFOLIO_DATA.personal.tagline}
          </p>

          {/* BUTTONS */}
          <div
            className="flex flex-wrap gap-4 animate-slide-up"
            style={{ animationDelay: "300ms" }}
          >
            <button
              onClick={() => {
                const section = document.getElementById("featured-projects");
                section?.scrollIntoView({ behavior: "smooth" });
              }}
              className=" bg-white text-black px-6 py-3 md:px-10 md:py-4 rounded flex items-center gap-3 font-semibold hover:bg-gray-200 transition-colors"
            >
              <Play className="w-5 h-5" /> View Projects
            </button>

            <button
              onClick={() => setCurrentPage("contact")}
              className=" bg-gray-600/80 backdrop-blur-sm text-white px-6 py-3 md:px-10 md:py-4 rounded flex items-center gap-3 font-semibold hover:bg-gray-500 transition-colors"
            >
              <Info className="w-5 h-5" /> Contact Me
            </button>
          </div>
        </div>

        {/* SCROLL INDICATOR */}
        <div className="hidden lg:flex absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center animate-bounce">
            <div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-bounce"></div>
          </div>
          <p className="text-gray-400 text-sm mt-2">Scroll</p>
        </div>
      </div>

      {/* PROJECTS SECTION */}
      <div className="container px-6 sm:px-10 pb-12">
        <h2
          className="text-3xl font-bold text-white mb-6"
          id="featured-projects"
        >
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.projects
            .filter((p) => p.featured)
            .map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                delay={index * 100}
              />
            ))}
        </div>

        <h2 className="text-3xl font-bold text-white mb-6 mt-12">
          More Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {PORTFOLIO_DATA.projects
            .filter((p) => !p.featured)
            .map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                delay={index * 100}
              />
            ))}
        </div>
      </div>

      {/* ANIMATIONS */}
      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slide-up {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.5s ease-out;
        }
        .animate-slide-up {
          animation: slide-up 0.6s ease-out forwards;
          opacity: 0;
        }
      `}</style>
    </div>
  );
};

export default NetflixPortfolio;
