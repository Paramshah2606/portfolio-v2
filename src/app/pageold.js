"use client"
import React, { useState, useEffect } from 'react';
import { Play, Info, Github, Linkedin, Mail, Code, Briefcase, User, X, ExternalLink, GraduationCap, School } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { PORTFOLIO_DATA } from '@/constant/constant';

const NetflixPortfolio = () => {
  const [currentProfile, setCurrentProfile] = useState(null);
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentPage, setCurrentPage] = useState('home');
  const [hoveredProject, setHoveredProject] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const router=useRouter();

  const profiles = [
    {
      id: 'recruiter',
      name: 'Recruiter',
      image:'/user_1.jpeg',
      icon: <Briefcase className="w-20 h-20" />,
      description: 'Professional projects & achievements'
    },
    {
      id: 'developer',
      name: 'Developer',
      image:'/user_2.jpeg',
      icon: <Code className="w-20 h-20" />,
      description: 'Technical implementations & code'
    },
    {
      id: 'business',
      name: 'Product/Business',
      image:'/user_3.jpeg',
      icon: <User className="w-20 h-20" />,
      description: 'Business impact & outcomes'
    }
  ];

  useEffect(()=>{
    const savedProfile = localStorage.getItem("currentProfile");
    if(savedProfile){
      setCurrentProfile(savedProfile);
    }
  },[]);

  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(()=>{
    console.log(currentProfile);
    if(currentProfile){
      console.log("setting");
      localStorage.setItem("currentProfile",currentProfile);
    }
  },[currentProfile]);


  const getProjectsByProfile = (profile) => {
    return PORTFOLIO_DATA.projects.map(project => ({
      ...project,
      description: profile === 'recruiter' ? project.recruiter.impact :
                   profile === 'developer' ? project.developer.challenges :
                   project.business.roi
    }));
  };

  const ProfileSelector = () => (
    <div
  className="min-h-screen relative flex items-center justify-center bg-black/70"
>
  {/* Cinematic Background */}
  <div
    className="absolute inset-0 bg-cover bg-center opacity-40"
    style={{
      backgroundImage:
        "url(/cover-image.jpg)", // real Netflix backdrop style
    }}
  />

  {/* Netflix Dark Vignette */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />

  {/* Content */}
  <div className="text-center relative z-10">
    <h1 className="text-6xl font-bold text-white mb-4 animate-fade-in">
      Who's viewing?
    </h1>
    <p className="text-gray-300 mb-16 text-xl">Choose your perspective</p>

    <div className="flex gap-12 justify-center flex-wrap">
      {profiles.map((profile, index) => (
        <div
          key={profile.id}
          onClick={() => setCurrentProfile(profile.id)}
          className="group cursor-pointer transform transition-all duration-300 hover:scale-110 animate-slide-up"
          style={{ animationDelay: `${index * 100}ms` }}
        >
          <div className="w-52 h-52 rounded-xl overflow-hidden mb-4 group-hover:ring-4 ring-white transition-all duration-300">
            <img
              src={profile.image}
              alt={profile.name}
              className="w-full h-full object-cover group-hover:brightness-110"
            />
          </div>

          <h3 className="text-white text-2xl font-bold text-center">
            {profile.name}
          </h3>
        </div>
      ))}
    </div>
  </div>
</div>

  );

  const Navbar = () => (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300
  ${scrollPosition > 50 ? 'bg-black' : 'bg-gradient-to-b from-black to-transparent'}
`}>
  <div className="relative  w-full px-8 py-4 flex items-center gap-8">
    
    {/* LEFT SIDE — LOGO + NAV ITEMS */}
    <div className="flex items-center gap-8">
      <h1 className="text-red-600 text-3xl font-bold">PORTFOLIO</h1>

      <div className="hidden md:flex gap-6 text-sm">
        <button onClick={() => setCurrentPage('home')} className={`hover:text-white transition-colors ${currentPage === 'home' ? 'text-white' : 'text-gray-400'}`}>Home</button>
        <button onClick={() => setCurrentPage('journey')} className={`hover:text-white transition-colors ${currentPage === 'journey' ? 'text-white' : 'text-gray-400'}`}>My Journey</button>
        <button onClick={() => setCurrentPage('skills')} className={`hover:text-white transition-colors ${currentPage === 'skills' ? 'text-white' : 'text-gray-400'}`}>Skills</button>
        <button onClick={() => setCurrentPage('contact')} className={`hover:text-white transition-colors ${currentPage === 'contact' ? 'text-white' : 'text-gray-400'}`}>Contact</button>
      </div>
    </div>

    {/* RIGHT SIDE — ABSOLUTE PROFILE BUTTON */}
    <div
      onClick={() => setCurrentProfile(null)}
      className="absolute right-8 top-1/2 -translate-y-1/2 w-11 h-11 rounded-md overflow-hidden cursor-pointer hover:scale-110 transition-all"
    >
      <img
        src={profiles.find(p => p.id === currentProfile)?.image}
        alt="profile"
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</nav>

  );

  const Footer=()=> {
  return (
    <footer className="w-full bg-black text-gray-300 py-5 mt-10 border-t border-gray-700">
      <div className="max-w-6xl mx-auto text-center">
        <p className="mt-1 text-sm opacity-70">
          © {new Date().getFullYear()} Paramm — All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}

  const ProjectCard = ({ project, delay = 0 }) => (
    <div
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
      onClick={() => router.push(`/home/project/${project.id}`)}
      className="relative cursor-pointer transform transition-all duration-300 hover:scale-105 hover:z-10 animate-slide-up"
      style={{ animationDelay: `${delay}ms` }}
    >
      <img src={project.thumbnail} alt={project.title} className="w-full rounded-lg" />
      <div className={`absolute inset-0 rounded-lg p-4 flex flex-col justify-between transition-all duration-300 ${hoveredProject === project.id ? 'backdrop-blur-md bg-black/40' : 'opacity-0'}`}>
        <div>
          <h3 className="text-white font-bold text-lg mb-2">{project.title}</h3>
          <p className="text-gray-200 text-sm mb-3">{project.shortDesc}</p>
        </div>
         <button
        className={`px-4 py-2 rounded bg-white text-black text-sm flex items-center gap-2 
          transition-all duration-300 mt-4 w-fit
          ${hoveredProject === project.id ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}
        `}
      >
        <Play className="w-4 h-4" /> View Project
      </button>
      </div>
    </div>
  );

  const ProjectModal = ({ project }) => (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm bg-opacity-95 z-50 flex items-center justify-center p-4 animate-fade-in" onClick={() => setSelectedProject(null)}>
      <div className="bg-gradient-to-b from-gray-900 to-black rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
        <div className="relative">
          <img src={project.thumbnail} alt={project.title} className="w-full h-96 object-cover rounded-t-lg" />
          <button onClick={() => setSelectedProject(null)} className="absolute top-4 right-4 bg-black bg-opacity-50 p-2 rounded-full hover:bg-opacity-75 transition-colors">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>
        <div className="p-8">
          <h2 className="text-4xl font-bold text-white mb-4">{project.title}</h2>
          <p className="text-gray-300 text-lg mb-6">{project.fullDesc}</p>
          
          <div className="mb-6">
            <h3 className="text-red-600 font-semibold mb-3 text-xl">Tech Stack</h3>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span key={i} className="bg-red-600 text-white px-4 py-2 rounded-full text-sm">{tech}</span>
              ))}
            </div>
          </div>
          
          <div className="flex gap-4 flex-wrap">
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="bg-white text-black px-6 py-3 rounded flex items-center gap-2 hover:bg-gray-200 transition-colors">
                <Play className="w-5 h-5" /> Live Demo
              </a>
            )}
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="bg-gray-700 text-white px-6 py-3 rounded flex items-center gap-2 hover:bg-gray-600 transition-colors">
                <Github className="w-5 h-5" /> View Code
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  const HomePage = () => (
    <div className="min-h-screen bg-black pt-20">
      <div className="relative h-[90vh] mb-8">
        <img src="/cover-image.jpg" alt="Hero" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
        <div className="absolute bottom-90 left-0 p-12 ml-10 max-w-2xl">
          <h1 className="text-7xl font-bold text-white mb-4 animate-slide-up">{PORTFOLIO_DATA.personal.name}</h1>
          <p className="text-4xl text-red-500 mb-2 animate-slide-up" style={{ animationDelay: '100ms' }}>{PORTFOLIO_DATA.personal.title}</p>
          <p className="text-2xl text-gray-300 mb-6 animate-slide-up" style={{ animationDelay: '200ms' }}>{PORTFOLIO_DATA.personal.tagline}</p>
          <div className="flex gap-4 animate-slide-up" style={{ animationDelay: '300ms' }}>
            <button onClick={() => {
              const section = document.getElementById("featured-projects");
              section?.scrollIntoView({ behavior: "smooth" });
            }} className="bg-white text-black px-10 py-4 rounded flex items-center gap-3 font-semibold hover:bg-gray-200 transition-colors">
              <Play className="w-5 h-5" /> View Projects
            </button>
            <button onClick={() => setCurrentPage('contact')} className="bg-gray-600/80 backdrop-blur-sm text-white px-10 py-4 rounded flex items-center gap-3 font-semibold hover:bg-gray-500 transition-colors">
              <Info className="w-5 h-5" /> Contact Me
            </button>
          </div>
        </div>
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex justify-center animate-bounce">
            <div className="w-1 h-3 bg-gray-300 rounded-full mt-2 animate-bounce"></div>
          </div>
          <p className="text-gray-400 text-sm mt-2">Scroll</p>
        </div>

      </div>

      <div className="container ml-10 px-8 pb-12">
        <h2 className="text-3xl font-bold text-white mb-6" id="featured-projects">Featured Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {getProjectsByProfile(currentProfile).filter(p => p.featured).map((project, index) => (
            <ProjectCard key={project.id} project={project} delay={index * 100} />
          ))}
        </div>

        <h2 className="text-3xl font-bold text-white mb-6 mt-12">More Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {getProjectsByProfile(currentProfile).filter(p => !p.featured).map((project, index) => (
            <ProjectCard key={project.id} project={project} delay={index * 100} />
          ))}
        </div>
      </div>
    </div>
  );

  const JourneyPage = () => (
    <div className="min-h-screen bg-black pt-24 pb-12">
      <div className="container mx-auto px-8">
        <h1 className="text-5xl font-bold text-white mb-4">My Journey: Original Series</h1>
        <p className="text-gray-400 text-xl mb-12">The story of growth, challenges, and achievements</p>
        
        <div className="space-y-6">
          {PORTFOLIO_DATA.journey.map((episode, index) => (
            <div key={index} className="bg-gradient-to-r from-gray-900 to-gray-800 p-6 rounded-lg flex items-center gap-6 transform transition-all duration-300 hover:scale-102 hover:shadow-xl animate-slide-up" style={{ animationDelay: `${index * 100}ms` }}>
              <div className="text-center min-w-[100px]">
                <div className="text-2xl font-bold text-red-600">{episode.start}-{episode.end}</div>
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">{episode.title}</h3>
                <h5 className="text-xl text-white mb-2">{episode.organization}</h5>
                <p className="text-gray-400">{episode.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const SkillsPage = () => (
  <div className="min-h-screen bg-black pt-24 pb-16">
    <div className="max-w-6xl mx-auto px-6">

      {/* Heading */}
      <h1 className="text-5xl font-extrabold text-white mb-3">
        Technical Skills
      </h1>
      <p className="text-gray-400 text-lg mb-14">
        A snapshot of my development toolkit
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {PORTFOLIO_DATA.skills.map((skill, index) => (
          <div
            key={index}
            className="p-8 rounded-2xl bg-white/5 backdrop-blur-md border border-white/10 
                       shadow-lg"
            style={{ animationDelay: `${index * 120}ms` }}
          >
            
            {/* Category */}
            <h3 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <span className="text-red-500 text-3xl">⬤</span>
              {skill.category}
            </h3>

            {/* Skill List */}
            <div className="space-y-5 mb-6">
              {skill.items.map((item, i) => (
                <div key={i}>
                  <div className="flex justify-between mb-2">
                    <span className="text-gray-200 font-medium">{item}</span>
                    <span className="text-gray-400 text-sm">{skill.level}%</span>
                  </div>

                  {/* Progress Bar */}
                  <div className="w-full h-2 bg-gray-700/50 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-red-600 to-red-400 
                                 rounded-full transition-all duration-1000"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

          </div>
        ))}
      </div>

    </div>
  </div>
);


  const ContactPage = () => (
    <div className="min-h-screen bg-black pt-24 pb-12">
      <div className="container mx-auto px-8 max-w-4xl">
        <h1 className="text-5xl font-bold text-white mb-4">Let's Connect</h1>
        <p className="text-gray-400 text-xl mb-12">Ready to collaborate on your next project</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a href={`mailto:${PORTFOLIO_DATA.personal.email}`} className="bg-gradient-to-br from-red-600 to-red-800 p-8 rounded-lg text-center transform transition-all duration-300 hover:scale-105 animate-slide-up">
            <Mail className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-white font-bold text-xl mb-2">Email</h3>
            <p className="text-gray-200 text-sm">{PORTFOLIO_DATA.personal.email}</p>
          </a>
          
          <a href={PORTFOLIO_DATA.personal.social.github} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-gray-700 to-gray-900 p-8 rounded-lg text-center transform transition-all duration-300 hover:scale-105 animate-slide-up" style={{ animationDelay: '100ms' }}>
            <Github className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-white font-bold text-xl mb-2">GitHub</h3>
            <p className="text-gray-200 text-sm">View my code</p>
          </a>
          
          <a href={PORTFOLIO_DATA.personal.social.linkedin} target="_blank" rel="noopener noreferrer" className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-lg text-center transform transition-all duration-300 hover:scale-105 animate-slide-up" style={{ animationDelay: '200ms' }}>
            <Linkedin className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-white font-bold text-xl mb-2">LinkedIn</h3>
            <p className="text-gray-200 text-sm">Connect professionally</p>
          </a>
        </div>
        
        <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg animate-slide-up" style={{ animationDelay: '300ms' }}>
          <h2 className="text-3xl font-bold text-white mb-6">Send a Message</h2>
          <div className="space-y-4">
            <input type="text" placeholder="Your Name" className="w-full bg-gray-800 text-white p-4 rounded-lg focus:ring-2 ring-red-600 outline-none transition-all" />
            <input type="email" placeholder="Your Email" className="w-full bg-gray-800 text-white p-4 rounded-lg focus:ring-2 ring-red-600 outline-none transition-all" />
            <textarea placeholder="Your Message" rows="5" className="w-full bg-gray-800 text-white p-4 rounded-lg focus:ring-2 ring-red-600 outline-none transition-all" />
            <button onClick={(e) => { e.preventDefault(); alert('Message sent!'); }} className="bg-red-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-red-700 transition-colors w-full">
              Send Message
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  if (!currentProfile) {
    return <ProfileSelector />;
  }

  return (
    <div className="bg-black min-h-screen h-screen text-white overflow-y-auto scrollbar-hide">
      <Navbar />
      {currentPage === 'home' && <HomePage />}
      {currentPage === 'journey' && <JourneyPage />}
      {currentPage === 'skills' && <SkillsPage />}
      {currentPage === 'contact' && <ContactPage />}
      {selectedProject && <ProjectModal project={selectedProject} />}
      <Footer/>
      
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
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