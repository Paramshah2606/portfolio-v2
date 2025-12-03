"use client";
import { Play, Github, ArrowLeft, X } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { use, useState } from "react";

const projects= [
    {
      id: 1,
      title: "CourseBuddy – Online Learning Platform",
      thumbnail: "/coursebuddy.png",
      shortDesc: "A complete dual-side learning platform with course management, progress tracking, and secure payments.",
      fullDesc: "CourseBuddy is a full-featured e-learning platform built with separate admin and user experiences. Admins can create courses, upload lessons using YouTube links or text editors, manage users, and track student progress in real-time. Users can browse courses, search & filter through options, purchase courses using Stripe, and track their lesson-wise progress.",
      tech: ["Next.js", "Node.js", "MySQL", "Stripe", "Cloudinary", "TailwindCSS"],
      liveUrl: "https://coursebuddy-frontend.vercel.app/user/login",
      githubUrl: "https://github.com/paramshah/coursebuddy",
      featured: true,
      recruiter: { impact: "Complete e-learning solution serving multiple users", metrics: "Full course management system" },
      developer: { challenges: "Implemented dual-side architecture with real-time progress tracking" },
      business: { roi: "Stripe payment integration with automated receipts", testimonial: "Streamlined online education delivery" },
      gallery: [
        "https://images.unsplash.com/photo-1763996147774-522014c41e74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1763996147774-522014c41e74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1763996147774-522014c41e74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1763996147774-522014c41e74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
        "https://images.unsplash.com/photo-1763996147774-522014c41e74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0fHx8ZW58MHx8fHx8",
        ],

    },
    {
      id: 2,
      title: "EasyChat – Real-Time Messaging Platform",
      thumbnail: "/easychat2.png",
      shortDesc: "A full-fledged real-time chat application with messaging, groups, calls, notifications, and secure encrypted communication.",
      fullDesc: "EasyChat is a modern real-time messaging platform with multi-step signup, OTP verification, and Google OAuth. Features include real-time messaging with Socket.io, message replies, deletion, infinite scrolling, group chats with admin controls, and integrated audio/video calls via 100ms. All communication is encrypted with Cloudinary media storage.",
      tech: ["Next.js", "Node.js", "MySQL", "Socket.io", "100ms", "Cloudinary"],
      liveUrl: "https://easychat-web.vercel.app",
      githubUrl: "https://github.com/paramshah/easychat",
      featured: true,
      recruiter: { impact: "Full-featured messaging platform with video calls", metrics: "Real-time communication system" },
      developer: { challenges: "Built real-time socket architecture with encrypted API communication" },
      business: { roi: "Complete communication solution", testimonial: "Enterprise-grade messaging features" }
    },
    {
      id: 3,
      title: "ShopEase – E-Commerce Platform",
      thumbnail: "/shopease.png",
      shortDesc: "A complete e-commerce platform with cart, order flow, admin dashboard, and multilingual support.",
      fullDesc: "ShopEase is a clothing e-commerce platform with category-wise shopping, size/color variations, and smooth cart-to-order flow. Features three-step signup with OTP verification, complete product management, powerful admin dashboard with analytics, and multilingual support (Hindi, English, Gujarati) using i18n.",
      tech: ["Next.js", "React.js", "Node.js", "MySQL", "TailwindCSS", "i18n"],
      liveUrl: "https://example.com/shopease",
      githubUrl: "https://github.com/paramshah/shopease",
      featured: true,
      recruiter: { impact: "Full e-commerce solution with admin dashboard", metrics: "Complete order management system" },
      developer: { challenges: "Implemented multilingual support and complex product variations" },
      business: { roi: "End-to-end shopping experience", testimonial: "Scalable e-commerce architecture" }
    },
    {
      id: 4,
      title: "SpeedDial – Instant Calling Platform",
      thumbnail: "/speeddial.png",
      shortDesc: "A blazing-fast calling platform connecting users within seconds using virtual 6-digit numbers.",
      fullDesc: "SpeedDial connects two users over audio/video calls within 5-6 seconds. Each user gets a unique 6-digit virtual number. Supports video toggle, camera switching, screen sharing, and four layout options: Grid View, Spotlight View, Sidebar View, and Picture-in-Picture. Built with Agora for real-time communication.",
      tech: ["Next.js", "Node.js", "Sequelize", "MySQL", "Agora RTC", "TailwindCSS"],
      liveUrl: "https://speeddial-web.vercel.app",
      githubUrl: "https://github.com/paramshah/speeddial",
      featured: false,
      recruiter: { impact: "Lightning-fast calling platform", metrics: "5-6 second connection time" },
      developer: { challenges: "Optimized real-time video streaming with multiple layout options" },
      business: { roi: "Instant connectivity solution", testimonial: "Seamless calling experience" }
    },
    {
      id: 5,
      title: "ClimateQuest – Weather Lookup",
      thumbnail: "/climateQuest.png",
      shortDesc: "A simple weather lookup tool fetching real-time data using the OpenWeather API.",
      fullDesc: "ClimateQuest was one of my first projects during early development. Allows users to enter any city name and fetch current weather conditions including temperature, humidity, and weather description. Focus on API integration and state management.",
      tech: ["React.js", "OpenWeatherMap API", "CSS"],
      liveUrl: "https://climatequest-global-weather-explorer.onrender.com",
      githubUrl: "https://github.com/paramshah/climatequest",
      featured: false,
      recruiter: { impact: "Early learning project", metrics: "Real-time weather data" },
      developer: { challenges: "First API integration project" },
      business: { roi: "Simple weather tool", testimonial: "Foundation project" }
    }
  ]

export default function ProjectPage({ params }) {
    const [lightbox, setLightbox] = useState(null);
  const router = useRouter();
  const {id}=use(params);
  console.log(id,"idddd");

  // Example: project data coming from DB or static list
  const project = projects.find((p) => p.id == id);
  console.log(project);

  if (!project) return <div className="text-white p-10">Project Not Found</div>;

  return (
    <div className="w-full min-h-screen bg-black text-white">
      
      {/* TOP HERO IMAGE */}
      <div className="relative w-full overflow-hidden">
        <img
          src={project.thumbnail}
          alt={project.title}
          className="w-full h-64 md:h-80 object-cover opacity-80"
        />
        <button
          onClick={() => router.back()}
          className="absolute top-6 left-6 bg-black/60 px-4 py-2 rounded-md hover:bg-black/80 transition"
        >
          <ArrowLeft className="inline-block mr-2" />
          Back
        </button>
      </div>

      <div className="max-w-5xl mx-auto px-6 py-10">

        {/* TITLE */}
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          {project.title}
        </h1>

        {/* FULL DESCRIPTION */}
        <p className="text-gray-300 text-lg leading-relaxed mb-10">
          {project.fullDesc}
        </p>

        {/* ⭐ GALLERY SECTION */}
        {project.gallery && 
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
                    onClick={() => setLightbox(img)}
                />
                ))}
            </div>
            </div>
        }       

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
              rel="noopener noreferrer"
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
              rel="noopener noreferrer"
              className="bg-gray-700 text-white px-6 py-3 rounded flex items-center gap-2 hover:bg-gray-600 transition"
            >
              <Github className="w-5 h-5" />
              View Code
            </a>
          )}
        </div>

      </div>
      {lightbox && (
        <div
          className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 backdrop-blur-sm"
          onClick={() => setLightbox(null)}
        >
          <img
            src={lightbox}
            className="max-w-full max-h-full rounded-lg"
          />
          <button
            className="absolute top-6 right-6 bg-black/60 p-2 rounded-full"
            onClick={() => setLightbox(null)}
          >
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
      )}
    </div>
  );
}
