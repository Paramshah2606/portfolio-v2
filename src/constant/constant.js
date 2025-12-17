export const PORTFOLIO_DATA = {
  personal: {
    name: "Param Shah",
    title: "Software Engineer",
    tagline: "Turning childhood curiosity into code",
    email: "paramshah2606@gmail.com",
    location: "Ahmedabad, Gujarat, IN",
    social: {
      github: "https://github.com/paramshah2606",
      linkedin: "https://www.linkedin.com/in/param-shah-0a39b3249/",
    },
  },

  journey: [
    {
      type: "work",
      title: "Software Engineer",
      organization: "Hyperlink InfoSystem Pvt. Ltd.",
      start:"2024",
      end:"Now",
      duration: "11 Months",
      description: "Developing scalable full-stack solutions, optimizing backend performance, and building rich user interfaces.",
      icon: "briefcase",
      thumbnail: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=225&fit=crop"
    },
    {
      type: "education",
      title: "B.Tech in ICT",
      organization: "Pandit Deendayal Energy University (PDEU)",
      start:"2020",
      end:"2024",
      duration: "4 Years",
      description: "Studied Information & Communication Technology with a strong foundation in software engineering",
      icon: "graduation",
      thumbnail: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=225&fit=crop"
    },
    {
      type: "education",
      title: "Secondary Education",
      organization: "Sharda Mandir School",
      start:"2008",
      end:"2020",
      duration: "12 Years",
      description: "Where my curiosity for technology began — from exploring apps to creating my first web projects.",
      icon: "school",
      thumbnail: "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=225&fit=crop"
    },
  ],

  projects: [
    {
      id: 1,
      title: "CourseBuddy – Online Learning Platform",
      thumbnail: "/coursebuddy_1.png",
      shortDesc: "A complete dual-side learning platform with course management, progress tracking, and secure payments.",
      fullDesc: "CourseBuddy is a full-featured e-learning platform built with separate admin and user experiences. Admins can create courses, upload lessons using YouTube links or text editors, manage users, and track student progress in real-time. Users can browse courses, search & filter through options, purchase courses using Stripe, and track their lesson-wise progress.",
      tech: ["Next.js", "Node.js", "MySQL", "Stripe", "Cloudinary", "TailwindCSS"],
      liveUrl: "https://coursebuddy-frontend.vercel.app/user/login",
      githubUrl: "https://github.com/Paramshah2606/Coursebuddy-frontend",
      featured: true,
      recruiter: { impact: "Complete e-learning solution serving multiple users", metrics: "Full course management system" },
      developer: { challenges: "Implemented dual-side architecture with real-time progress tracking" },
      business: { roi: "Stripe payment integration with automated receipts", testimonial: "Streamlined online education delivery" },
      gallery:["/coursebuddy_1.png","/coursebuddy_2.png","/coursebuddy_3.png","/coursebuddy_4.png","/coursebuddy_5.png"]
    },
    {
      id: 2,
      title: "EasyChat – Real-Time Messaging Platform",
      thumbnail: "/easychat_2.png",
      shortDesc: "A full-fledged real-time chat application with messaging, groups, calls, notifications, and secure encrypted communication.",
      fullDesc: "EasyChat is a modern real-time messaging platform with multi-step signup, OTP verification, and Google OAuth. Features include real-time messaging with Socket.io, message replies, deletion, infinite scrolling, group chats with admin controls, and integrated audio/video calls via 100ms. All communication is encrypted with Cloudinary media storage.",
      tech: ["Next.js", "Node.js", "MySQL", "Socket.io", "100ms", "Cloudinary"],
      liveUrl: "https://easychat-web.vercel.app",
      githubUrl: "https://github.com/Paramshah2606/EasyChat-Frontend",
      featured: true,
      recruiter: { impact: "Full-featured messaging platform with video calls", metrics: "Real-time communication system" },
      developer: { challenges: "Built real-time socket architecture with encrypted API communication" },
      business: { roi: "Complete communication solution", testimonial: "Enterprise-grade messaging features" },
      gallery:["/easychat_1.png","/easychat_2.png","/easychat_3.png","/easychat_4.png","/easychat_5.png","/easychat_6.png","/easychat_7.png"]
    },
    {
      id: 3,
      title: "ShopEase – E-Commerce Platform",
      thumbnail: "/shopease.png",
      shortDesc: "A complete e-commerce platform with cart, order flow, admin dashboard, and multilingual support.",
      fullDesc: "ShopEase is a clothing e-commerce platform with category-wise shopping, size/color variations, and smooth cart-to-order flow. Features three-step signup with OTP verification, complete product management, powerful admin dashboard with analytics, and multilingual support (Hindi, English, Gujarati) using i18n.",
      tech: ["Next.js", "React.js", "Node.js", "MySQL", "TailwindCSS", "i18n"],
      liveUrl: "https://shopease-web-panel.vercel.app",
      githubUrl: "https://github.com/Paramshah2606/shopease-web",
      featured: true,
      recruiter: { impact: "Full e-commerce solution with admin dashboard", metrics: "Complete order management system" },
      developer: { challenges: "Implemented multilingual support and complex product variations" },
      business: { roi: "End-to-end shopping experience", testimonial: "Scalable e-commerce architecture" }
    },
    {
      id: 4,
      title: "SpeedDial – Instant Calling Platform",
      thumbnail: "/speeddial_1.png",
      shortDesc: "A blazing-fast calling platform connecting users within seconds using virtual 6-digit numbers.",
      fullDesc: "SpeedDial connects two users over audio/video calls within 5-6 seconds. Each user gets a unique 6-digit virtual number. Supports video toggle, camera switching, screen sharing, and four layout options: Grid View, Spotlight View, Sidebar View, and Picture-in-Picture. Built with Agora for real-time communication.",
      tech: ["Next.js", "Node.js", "Sequelize", "MySQL", "Agora RTC", "TailwindCSS"],
      liveUrl: "https://speeddial-web.vercel.app",
      githubUrl: "https://github.com/Paramshah2606/Speeddial-web",
      featured: false,
      recruiter: { impact: "Lightning-fast calling platform", metrics: "5-6 second connection time" },
      developer: { challenges: "Optimized real-time video streaming with multiple layout options" },
      business: { roi: "Instant connectivity solution", testimonial: "Seamless calling experience" },
      gallery:["/speeddial_1.png","/speeddial_2.png","/speeddial_3.png","/speeddial_4.png","/speeddial_5.png","/speeddial_6.png","/speeddial_7.png"]
    },
    {
      id: 5,
      title: "ClimateQuest – Weather Lookup",
      thumbnail: "/climateQuest.png",
      shortDesc: "A simple weather lookup tool fetching real-time data using the OpenWeather API.",
      fullDesc: "ClimateQuest was one of my first projects during early development. Allows users to enter any city name and fetch current weather conditions including temperature, humidity, and weather description. Focus on API integration and state management.",
      tech: ["React.js", "OpenWeatherMap API", "CSS"],
      liveUrl: "https://climatequest-global-weather-explorer.onrender.com",
      githubUrl: "https://github.com/Paramshah2606/ClimateQuest-Global_Weather_Explorer",
      featured: false,
      recruiter: { impact: "Early learning project", metrics: "Real-time weather data" },
      developer: { challenges: "First API integration project" },
      business: { roi: "Simple weather tool", testimonial: "Foundation project" },
      gallery:["/climateQuest.png"]
    }
  ],

  skills: [
    { category: 'Frontend', items: ['Next.js', 'React.js', 'TailwindCSS', 'HTML/CSS'], level: 95 },
    { category: 'Backend', items: ['Node.js', 'Express', 'MySQL', 'Sequelize'], level: 90 },
    { category: 'Real-Time', items: ['Socket.io', 'Agora RTC', '100ms', 'WebRTC'], level: 85 },
    { category: 'Tools & Services', items: ['Cloudinary', 'Stripe', 'Firebase', 'i18n'], level: 88 }
  ]
};