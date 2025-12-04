"use client";

import { PORTFOLIO_DATA } from "@/constant/constant";
import { Play, Github, ArrowLeft, X } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect, use } from "react";

export default function ProjectPage({ params }) {
  const router = useRouter();
  const { id } = use(params);

  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [animating, setAnimating] = useState(false);

  // Swipe tracking
  const [touchStart, setTouchStart] = useState(null);

  const project = PORTFOLIO_DATA.projects.find((p) => p.id == id);

  if (!project)
    return <div className="text-white p-10">Project Not Found</div>;

  // Handle navigation (next/prev)
  const goNext = () => {
    setAnimating(true);
    setTimeout(() => {
      setLightboxIndex(
        lightboxIndex === project.gallery.length - 1 ? 0 : lightboxIndex + 1
      );
      setAnimating(false);
    }, 200);
  };

  const goPrev = () => {
    setAnimating(true);
    setTimeout(() => {
      setLightboxIndex(
        lightboxIndex === 0 ? project.gallery.length - 1 : lightboxIndex - 1
      );
      setAnimating(false);
    }, 200);
  };

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e) => {
      if (lightboxIndex === null) return;

      if (e.key === "Escape") setLightboxIndex(null);
      if (e.key === "ArrowRight") goNext();
      if (e.key === "ArrowLeft") goPrev();
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [lightboxIndex]);

  // Swipe detection
  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const end = e.changedTouches[0].clientX;
    const diff = touchStart - end;

    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext(); // swipe left → next
      else goPrev(); // swipe right → prev
    }

    setTouchStart(null);
  };

  return (
    <div className="w-full min-h-screen bg-black text-white">
      {/* TOP HERO IMAGE */}
      <div className="relative w-full overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-64 md:h-80 object-cover object-top blur-sm scale-110"
        />
        <div className="absolute inset-0 bg-black/60"></div>

        <button
          onClick={() => router.back()}
          className="absolute top-6 left-6 bg-black/60 px-4 py-2 rounded-md hover:bg-black/80 transition"
        >
          <ArrowLeft className="inline-block mr-2" />
          Back
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {project.title}
        </h1>

        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          {project.fullDesc}
        </p>

        {/* GALLERY */}
        {project.gallery && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold text-red-500 mb-4">
              Gallery
            </h2>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {project.gallery.map((img, i) => (
                <img
                  key={i}
                  src={img}
                  className="w-full h-50 object-cover rounded-lg cursor-pointer hover:opacity-80 transition"
                  onClick={() => setLightboxIndex(i)}
                />
              ))}
            </div>
          </div>
        )}

        {/* TECH STACK */}
        <div className="mb-12">
          <h2 className="text-xl text-red-500 font-semibold mb-4">
            Tech Stack
          </h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map((t, i) => (
              <span
                key={i}
                className="bg-red-600 px-4 py-2 rounded-full text-sm"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* BUTTONS */}
        <div className="flex gap-4 flex-wrap mb-16">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              className="bg-white text-black px-6 py-3 rounded flex items-center gap-2 hover:bg-gray-200 transition"
            >
              <Play className="w-5 h-5" />
              Live Demo
            </a>
          )}

          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              className="bg-gray-700 text-white px-6 py-3 rounded flex items-center gap-2 hover:bg-gray-600 transition"
            >
              <Github className="w-5 h-5" />
              View Code
            </a>
          )}
        </div>
      </div>

      {/* LIGHTBOX */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 backdrop-blur-sm"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          <img
            src={project.gallery[lightboxIndex]}
            className={`max-w-full max-h-full rounded-lg transition-all duration-300 ${
              animating ? "opacity-0 scale-95" : "opacity-100 scale-100"
            }`}
          />

          {/* CLOSE */}
          <button
            className="absolute top-6 right-6 bg-black/60 p-2 rounded-full"
            onClick={() => setLightboxIndex(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          {/* PREV */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-6 bg-black/60 p-4 rounded-full text-3xl hover:bg-black/80 transition"
          >
            ‹
          </button>

          {/* NEXT */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              goNext();
            }}
            className="absolute right-6 bg-black/60 p-4 rounded-full text-3xl hover:bg-black/80 transition"
          >
            ›
          </button>
        </div>
      )}
    </div>
  );
}
