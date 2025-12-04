"use client";
import React, { useState, useEffect } from "react";
import {
  Code,
  Briefcase,
  User,
} from "lucide-react";
import { useRouter } from "next/navigation";

const NetflixPortfolio = () => {
  const [currentProfile, setCurrentProfile] = useState(null);
  const router = useRouter();

  const profiles = [
    {
      id: "recruiter",
      name: "Recruiter",
      image: "/user_1.jpeg",
      icon: <Briefcase className="w-20 h-20" />,
      description: "Professional projects & achievements",
    },
    {
      id: "developer",
      name: "Developer",
      image: "/user_2.jpeg",
      icon: <Code className="w-20 h-20" />,
      description: "Technical implementations & code",
    },
    {
      id: "business",
      name: "Business",
      image: "/user_3.jpeg",
      icon: <User className="w-20 h-20" />,
      description: "Business impact & outcomes",
    },
  ];

  useEffect(() => {
    const savedProfile = localStorage.getItem("currentProfile");
    if (savedProfile) {
      router.push("/home");
      setCurrentProfile(savedProfile);
    }
  }, []);

  useEffect(() => {
    if (currentProfile) {
      console.log("setting");
      localStorage.setItem("currentProfile", currentProfile);
    }
  }, [currentProfile]);

  if (!currentProfile) {
    return (
  <div className="min-h-screen relative flex items-center justify-center bg-black/70 px-4">
    {/* Cinematic Background */}
    <div
      className="absolute inset-0 bg-cover bg-center opacity-40"
      style={{
        backgroundImage: "url(/cover-image.jpg)",
      }}
    />

    {/* Netflix Dark Vignette */}
    <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

    {/* Content */}
    <div className="text-center relative z-10 w-full">
      <h1 className="font-bold text-white mb-3 animate-fade-in
                     text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
        Who's viewing?
      </h1>

      <p className="text-gray-300 mb-10 text-lg sm:text-xl">
        Choose your perspective
      </p>

      <div className="
        flex justify-center flex-wrap gap-6 sm:gap-10 md:gap-14
      ">
        {profiles.map((profile, index) => (
          <div
            key={profile.id}
            onClick={() => {
              setCurrentProfile(profile.id);
              router.push("/home");
            }}
            className="group cursor-pointer transform transition-all duration-300 
                       hover:scale-105 md:hover:scale-110 animate-slide-up"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="rounded-xl overflow-hidden mb-3 group-hover:ring-4 ring-white transition-all duration-300
                            w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-52 lg:h-52">
              <img
                src={profile.image}
                alt={profile.name}
                className="w-full h-full object-cover group-hover:brightness-110"
              />
            </div>

            <h3 className="text-white font-bold text-center
                           text-xl sm:text-2xl">
              {profile.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  </div>
);

  }
};

export default NetflixPortfolio;
