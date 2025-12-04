"use client";
import { Briefcase, Code, User, Menu, X } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

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
    name: "Product/Business",
    image: "/user_3.jpeg",
    icon: <User className="w-20 h-20" />,
    description: "Business impact & outcomes",
  },
];

const Navbar = () => {
  const [currentProfile, setCurrentProfile] = useState(null);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const currentPage = pathname.split("/")[2] || "home";

  // Scroll opacity change
  useEffect(() => {
    const handleScroll = () => setScrollPosition(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Load profile — else redirect
  useEffect(() => {
    const savedProfile = localStorage.getItem("currentProfile");
    if (savedProfile) {
      setCurrentProfile(savedProfile);
    } else {
      router.push("/");
    }
  }, []);

  if (currentProfile === null) return null;

  // Navigation Button Component (shared)
  const NavButton = ({ label, page }) => (
    <button
      onClick={() => {
        router.push(`/home${page === "home" ? "" : `/${page}`}`);
        setMenuOpen(false);
      }}
      className={`transition-colors text-lg ${
        currentPage === page ? "text-white" : "text-gray-400"
      } hover:text-white`}
    >
      {label}
    </button>
  );

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300
        ${
          scrollPosition > 50
            ? "bg-black"
            : "bg-gradient-to-b from-black to-transparent"
        }
      `}
    >
      <div className="relative w-full px-6 sm:px-8 py-4 flex items-center justify-between">

        {/* LEFT: LOGO */}
        <h1
          className="text-red-600 text-2xl sm:text-3xl font-bold cursor-pointer"
          onClick={() => router.push("/home")}
        >
          PORTFOLIO
        </h1>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-8 items-center">
          <NavButton label="Home" page="home" />
          <NavButton label="My Journey" page="journey" />
          <NavButton label="Skills" page="skills" />
          <NavButton label="Contact" page="contact" />
        </div>

        {/* RIGHT: PROFILE BUTTON */}
        <div
          onClick={() => {
            localStorage.removeItem("currentProfile");
            setCurrentProfile(null);
            router.push("/");
          }}
          className="w-11 h-11 rounded-md overflow-hidden cursor-pointer hover:scale-110 transition-all"
        >
          <img
            src={profiles.find((p) => p.id === currentProfile)?.image}
            alt="profile"
            className="w-full h-full object-cover"
          />
        </div>

        {/* MOBILE MENU BUTTON */}
        <button
          className="md:hidden text-white absolute right-20"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* MOBILE NAVIGATON MENU */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 bg-black border-t border-gray-800
          ${menuOpen ? "max-h-60 py-4" : "max-h-0 py-0"}
        `}
      >
        <div className="flex flex-col gap-4 px-8">
          <NavButton label="Home" page="home" />
          <NavButton label="My Journey" page="journey" />
          <NavButton label="Skills" page="skills" />
          <NavButton label="Contact" page="contact" />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
