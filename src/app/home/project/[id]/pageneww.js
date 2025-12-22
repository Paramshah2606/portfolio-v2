"use client";

import { PORTFOLIO_DATA } from "@/constant/constant";
import { Play, Github, ArrowLeft, X, CheckCircle, Code, TrendingUp, Users, Zap, Target } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useState, useEffect, use } from "react";

export default function ProjectPage({ params }) {
  const router = useRouter();
  const { id } = use(params);

  const [lightboxIndex, setLightboxIndex] = useState(null);
  const [animating, setAnimating] = useState(false);
  const [touchStart, setTouchStart] = useState(null);

  // Get current persona from localStorage or context (adjust based on your implementation)
  const [currentPersona, setCurrentPersona] = useState("recruiter"); // default

  useEffect(() => {
    // Get persona from localStorage or your state management
    const persona = localStorage.getItem("currentProfile") || "recruiter";
    setCurrentPersona(persona);
  }, []);

  const project = PORTFOLIO_DATA.projects.find((p) => p.id == id);

  if (!project)
    return <div className="text-white p-10">Project Not Found</div>;

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

  const handleTouchStart = (e) => setTouchStart(e.touches[0].clientX);

  const handleTouchEnd = (e) => {
    if (!touchStart) return;
    const end = e.changedTouches[0].clientX;
    const diff = touchStart - end;
    if (Math.abs(diff) > 50) {
      if (diff > 0) goNext();
      else goPrev();
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

        {/* USER JOURNEY - Show to ALL personas */}
        {project.userJourney && (
          <div className="mb-12 bg-gray-900 p-6 rounded-lg border border-gray-800">
            <h2 className="text-2xl font-semibold text-red-500 mb-6 flex items-center gap-2">
              <Target className="w-6 h-6" />
              How It Works
            </h2>

            {/* User Flow */}
            {project.userJourney.userFlow && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-300 mb-3">
                  User Journey
                </h3>
                <div className="space-y-3">
                  {project.userJourney.userFlow.map((step, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <div className="bg-red-600 text-white w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 text-sm font-bold mt-0.5">
                        {i + 1}
                      </div>
                      <p className="text-gray-400">{step}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Admin Flow */}
            {project.userJourney.adminFlow && (
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-gray-300 mb-3">
                  Admin Capabilities
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {project.userJourney.adminFlow.map((item, i) => (
                    <div key={i} className="flex items-center gap-2 text-gray-400">
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Key Features */}
            {project.userJourney.keyFeatures && (
              <div>
                <h3 className="text-lg font-semibold text-gray-300 mb-3">
                  Key Features
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.userJourney.keyFeatures.map((feature, i) => (
                    <span
                      key={i}
                      className="bg-gray-800 border border-gray-700 px-3 py-1 rounded-full text-sm text-gray-300"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* PERSONA-SPECIFIC CONTENT */}
        {currentPersona === "recruiter" && project.recruiter && (
          <RecruiterView data={project.recruiter} />
        )}

        {currentPersona === "developer" && project.developer && (
          <DeveloperView data={project.developer} />
        )}

        {currentPersona === "business" && project.business && (
          <BusinessView data={project.business} />
        )}

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

          <button
            className="absolute top-6 right-6 bg-black/60 p-2 rounded-full"
            onClick={() => setLightboxIndex(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              goPrev();
            }}
            className="absolute left-6 bg-black/60 p-4 rounded-full text-3xl hover:bg-black/80 transition"
          >
            ‹
          </button>

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

// RECRUITER VIEW COMPONENT
function RecruiterView({ data }) {
  return (
    <div className="mb-12 space-y-6">
      <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
        <h2 className="text-2xl font-semibold text-red-500 mb-6 flex items-center gap-2">
          <Users className="w-6 h-6" />
          Impact & Responsibilities
        </h2>

        {/* Impact Statement */}
        <div className="mb-6">
          <h3 className="text-lg font-semibold text-gray-300 mb-2">
            Project Impact
          </h3>
          <p className="text-gray-400">{data.impact}</p>
        </div>

        {/* Metrics */}
        {data.metrics && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-300 mb-3">
              Key Metrics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(data.metrics).map(([key, value]) => (
                <div key={key} className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-xs text-gray-500 uppercase mb-1">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </p>
                  <p className="text-gray-300">{value}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Responsibilities */}
        {data.responsibilities && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-300 mb-3">
              My Responsibilities
            </h3>
            <div className="space-y-2">
              {data.responsibilities.map((resp, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-400">{resp}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Skills Highlighted */}
        {data.skillsHighlighted && (
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-3">
              Skills Demonstrated
            </h3>
            <div className="flex flex-wrap gap-2">
              {data.skillsHighlighted.map((skill, i) => (
                <span
                  key={i}
                  className="bg-red-600/20 border border-red-600 text-red-400 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// DEVELOPER VIEW COMPONENT
function DeveloperView({ data }) {
  return (
    <div className="mb-12 space-y-6">
      <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
        <h2 className="text-2xl font-semibold text-red-500 mb-6 flex items-center gap-2">
          <Code className="w-6 h-6" />
          Technical Deep Dive
        </h2>

        {/* Architecture */}
        {data.architecture && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-300 mb-2">
              Architecture
            </h3>
            <p className="text-gray-400">{data.architecture}</p>
          </div>
        )}

        {/* Technical Details */}
        {data.technicalDetails && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-300 mb-3">
              Technical Stack Details
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(data.technicalDetails).map(([key, value]) => (
                <div key={key} className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-xs text-red-500 uppercase mb-1 font-semibold">
                    {key}
                  </p>
                  <p className="text-gray-300 text-sm">{value}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Challenges */}
        {data.challenges && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-300 mb-3">
              Technical Challenges Solved
            </h3>
            <div className="space-y-3">
              {data.challenges.map((challenge, i) => (
                <div key={i} className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-400">{challenge}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Code Highlights */}
        {data.codeHighlights && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-300 mb-3">
              Code Highlights
            </h3>
            <div className="flex flex-wrap gap-2">
              {data.codeHighlights.map((highlight, i) => (
                <span
                  key={i}
                  className="bg-green-600/20 border border-green-600 text-green-400 px-3 py-1 rounded-full text-sm"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Learnings */}
        {data.learnings && (
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-3">
              Key Learnings
            </h3>
            <div className="space-y-2">
              {data.learnings.map((learning, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-blue-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-400">{learning}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// BUSINESS VIEW COMPONENT
function BusinessView({ data }) {
  return (
    <div className="mb-12 space-y-6">
      <div className="bg-gray-900 p-6 rounded-lg border border-gray-800">
        <h2 className="text-2xl font-semibold text-red-500 mb-6 flex items-center gap-2">
          <TrendingUp className="w-6 h-6" />
          Business Value & ROI
        </h2>

        {/* Problem & Solution */}
        <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.problemSolved && (
            <div className="bg-red-900/20 border border-red-800 p-4 rounded-lg">
              <h3 className="text-sm font-semibold text-red-400 mb-2">
                Problem Solved
              </h3>
              <p className="text-gray-300 text-sm">{data.problemSolved}</p>
            </div>
          )}
          {data.solution && (
            <div className="bg-green-900/20 border border-green-800 p-4 rounded-lg">
              <h3 className="text-sm font-semibold text-green-400 mb-2">
                Solution
              </h3>
              <p className="text-gray-300 text-sm">{data.solution}</p>
            </div>
          )}
        </div>

        {/* Value Proposition */}
        {data.valueProposition && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-300 mb-2">
              Value Proposition
            </h3>
            <p className="text-gray-400">{data.valueProposition}</p>
          </div>
        )}

        {/* ROI Metrics */}
        {data.roi && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-300 mb-3">
              Return on Investment
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {Object.entries(data.roi).map(([key, value]) => (
                <div key={key} className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-xs text-gray-500 uppercase mb-1">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </p>
                  <p className="text-gray-300 text-sm">{value}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Target Users */}
        {data.targetUsers && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-300 mb-3">
              Target Users
            </h3>
            <div className="flex flex-wrap gap-2">
              {data.targetUsers.map((user, i) => (
                <span
                  key={i}
                  className="bg-blue-600/20 border border-blue-600 text-blue-400 px-3 py-1 rounded-full text-sm"
                >
                  {user}
                </span>
              ))}
            </div>
          </div>
        )}

        {/* Competitive Advantage */}
        {data.competitiveAdvantage && (
          <div className="mb-6">
            <h3 className="text-lg font-semibold text-gray-300 mb-3">
              Competitive Advantages
            </h3>
            <div className="space-y-2">
              {data.competitiveAdvantage.map((advantage, i) => (
                <div key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                  <p className="text-gray-400">{advantage}</p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Business Metrics */}
        {data.metrics && (
          <div>
            <h3 className="text-lg font-semibold text-gray-300 mb-3">
              Business Metrics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(data.metrics).map(([key, value]) => (
                <div key={key} className="bg-gray-800 p-4 rounded-lg">
                  <p className="text-xs text-gray-500 uppercase mb-1">
                    {key.replace(/([A-Z])/g, " $1").trim()}
                  </p>
                  <p className="text-gray-300">{value}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}