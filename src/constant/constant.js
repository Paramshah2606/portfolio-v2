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
      start: "2024",
      end: "Now",
      duration: "11 Months",
      description:
        "Developing scalable full-stack solutions, optimizing backend performance, and building rich user interfaces.",
      icon: "briefcase",
      thumbnail:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=225&fit=crop",
    },
    {
      type: "education",
      title: "B.Tech in ICT",
      organization: "Pandit Deendayal Energy University (PDEU)",
      start: "2020",
      end: "2024",
      duration: "4 Years",
      description:
        "Studied Information & Communication Technology with a strong foundation in software engineering",
      icon: "graduation",
      thumbnail:
        "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?w=400&h=225&fit=crop",
    },
    {
      type: "education",
      title: "Secondary Education",
      organization: "Sharda Mandir School",
      start: "2008",
      end: "2020",
      duration: "12 Years",
      description:
        "Where my curiosity for technology began — from exploring apps to creating my first web projects.",
      icon: "school",
      thumbnail:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=400&h=225&fit=crop",
    },
  ],

  projects: [
    {
      id: 1,
      title: "CourseBuddy – Online Learning Platform",
      thumbnail: "/coursebuddy_1.png",
      shortDesc:
        "A complete dual-side learning platform with course management, progress tracking, and secure payments.",
      fullDesc:
        "CourseBuddy is a full-featured e-learning platform built with separate admin and user experiences. Admins can create courses, upload lessons using YouTube links or text editors, manage users, and track student progress in real-time. Users can browse courses, search & filter through options, purchase courses using Stripe, and track their lesson-wise progress.",
      tech: [
        "Next.js",
        "Node.js",
        "MySQL",
        "Stripe",
        "Cloudinary",
        "TailwindCSS",
      ],
      liveUrl: "https://coursebuddy-frontend.vercel.app/user/login",
      githubUrl: "https://github.com/Paramshah2606/Coursebuddy-frontend",
      featured: true,
      recruiter: {
        impact: "Complete e-learning solution serving multiple users",
        metrics: "Full course management system",
      },
      developer: {
        challenges:
          "Implemented dual-side architecture with real-time progress tracking",
      },
      business: {
        roi: "Stripe payment integration with automated receipts",
        testimonial: "Streamlined online education delivery",
      },
      gallery: [
        "/coursebuddy_1.png",
        "/coursebuddy_2.png",
        "/coursebuddy_3.png",
        "/coursebuddy_4.png",
        "/coursebuddy_5.png",
      ],
      userJourney: {
        userFlow: [
          "Sign up as student or admin with email verification",
          "Browse available courses with advanced search & filters",
          "Preview course curriculum and instructor details",
          "Purchase course securely using Stripe payment gateway",
          "Access course content with lesson-by-lesson progression",
          "Track your learning progress in real-time dashboard",
          "Complete courses and receive completion certificates",
        ],
        adminFlow: [
          "Create new courses with detailed information",
          "Upload lessons via YouTube links or rich text editor",
          "Organize content into modules and sections",
          "Monitor student enrollments and progress analytics",
          "Manage user accounts and permissions",
          "View revenue and sales statistics",
        ],
        keyFeatures: [
          "Dual-side architecture (Admin & User)",
          "Real-time progress tracking",
          "Stripe payment integration",
          "Media management with Cloudinary",
          "Advanced search & filtering",
          "Responsive design for all devices",
        ],
      },

      // RECRUITER VIEW
      recruiter: {
        impact:
          "Built a complete e-learning ecosystem serving both instructors and students, enabling seamless online education delivery",
        metrics: {
          complexity:
            "Full-stack dual-interface application with payment processing",
          scale:
            "Multi-user platform supporting unlimited courses and students",
          completeness: "End-to-end learning management system with analytics",
          timeline: "Delivered in 3 months with full testing and deployment",
        },
        responsibilities: [
          "Architected and developed dual-side platform (admin/user interfaces)",
          "Implemented secure payment processing with Stripe integration",
          "Built real-time progress tracking system with MySQL optimization",
          "Designed scalable course management and content delivery system",
          "Created responsive UI/UX for seamless user experience",
          "Deployed and maintained production environment on Vercel",
        ],
        skillsHighlighted: [
          "Full-stack Development",
          "Payment Integration",
          "Real-time Systems",
          "Database Design",
          "API Development",
          "Cloud Deployment",
        ],
      },

      // DEVELOPER VIEW
      developer: {
        architecture:
          "Next.js frontend with SSR/SSG, Node.js REST API backend, MySQL relational database, and third-party integrations for payment and media storage",
        challenges: [
          "Implemented dual-side architecture with role-based access control (RBAC) ensuring secure data separation",
          "Built real-time progress tracking using MySQL triggers and optimized queries for instant updates",
          "Integrated Stripe payment gateway with webhook handling for automated receipt generation and order fulfillment",
          "Optimized video content delivery using Cloudinary CDN with lazy loading and adaptive streaming",
          "Designed normalized database schema handling complex relationships between users, courses, lessons, and progress",
          "Implemented server-side search and filtering with pagination for improved performance",
        ],
        technicalDetails: {
          frontend:
            "Next.js 14 with App Router, Server Components, and client-side state management",
          backend:
            "Node.js Express REST API with JWT authentication and role-based middleware",
          database:
            "MySQL with normalized schema, indexes, and stored procedures for analytics",
          payment:
            "Stripe SDK with webhook verification, subscription handling, and refund management",
          media:
            "Cloudinary for video/image storage with automatic optimization and CDN delivery",
          deployment:
            "Vercel for frontend, Railway for backend, with CI/CD pipelines",
        },
        codeHighlights: [
          "Custom progress tracking algorithm calculating completion percentages",
          "Secure webhook verification preventing payment fraud",
          "Reusable middleware system for authentication and authorization",
          "Optimized SQL queries using JOINs and subqueries for dashboard analytics",
        ],
        learnings: [
          "Stripe payment gateway best practices including idempotency and error handling",
          "Real-time data synchronization patterns between client and server",
          "Database optimization techniques for large-scale content delivery",
          "Security considerations for multi-tenant applications",
        ],
      },

      // BUSINESS VIEW
      business: {
        problemSolved:
          "Small institutions and independent instructors lack affordable, feature-rich e-learning platforms with built-in payment and analytics capabilities",
        solution:
          "All-in-one platform reducing operational costs by 60% by consolidating course management, payment processing, and analytics into a single system",
        valueProposition:
          "Complete learning management system without expensive enterprise licenses, enabling anyone to launch their online education business",
        roi: {
          costSavings:
            "Eliminates need for 3+ separate tools (CMS $50/mo, payment gateway fees, analytics $30/mo)",
          efficiency:
            "Automated progress tracking reduces admin workload by 40%, saving 10+ hours weekly",
          scalability:
            "Supports unlimited courses and students without additional infrastructure costs",
          timeToMarket:
            "Instructors can launch courses in under 30 minutes vs. days with traditional platforms",
        },
        targetUsers: [
          "Educational institutions (schools, colleges)",
          "Independent instructors and tutors",
          "Corporate training teams",
          "Content creators and coaches",
        ],
        competitiveAdvantage: [
          "Dual admin-user interface optimized for both content creators and learners",
          "Built-in Stripe payment processing with no additional fees",
          "Real-time analytics dashboard for data-driven decisions",
          "Responsive design working seamlessly across all devices",
        ],
        metrics: {
          courseCreationTime:
            "Average 5 minutes to create and publish a course",
          paymentSuccessRate: "99.5% successful transactions via Stripe",
          userSatisfaction:
            "Intuitive interface requiring minimal training or onboarding",
          performanceScore: "90+ Lighthouse score for fast loading and SEO",
        },
      },
    },
    {
      id: 2,
      title: "EasyChat – Real-Time Messaging Platform",
      thumbnail: "/easychat_2.png",
      shortDesc:
        "A full-fledged real-time chat application with messaging, groups, calls, notifications, and secure encrypted communication.",
      fullDesc:
        "EasyChat is a modern real-time messaging platform with multi-step signup, OTP verification, and Google OAuth. Features include real-time messaging with Socket.io, message replies, deletion, infinite scrolling, group chats with admin controls, and integrated audio/video calls via 100ms. All communication is encrypted with Cloudinary media storage.",
      tech: ["Next.js", "Node.js", "MySQL", "Socket.io", "100ms", "Cloudinary"],
      liveUrl: "https://easychat-web.vercel.app",
      githubUrl: "https://github.com/Paramshah2606/EasyChat-Frontend",
      featured: true,
      recruiter: {
        impact: "Full-featured messaging platform with video calls",
        metrics: "Real-time communication system",
      },
      developer: {
        challenges:
          "Built real-time socket architecture with encrypted API communication",
      },
      business: {
        roi: "Complete communication solution",
        testimonial: "Enterprise-grade messaging features",
      },
      gallery: [
        "/easychat_1.png",
        "/easychat_2.png",
        "/easychat_3.png",
        "/easychat_4.png",
        "/easychat_5.png",
        "/easychat_6.png",
        "/easychat_7.png",
      ],
      userJourney: {
        userFlow: [
          "Sign up with email/phone + OTP verification or Google OAuth",
          "Create your profile with avatar and status",
          "Search and connect with friends by username or phone",
          "Start one-on-one conversations with real-time messaging",
          "Create group chats and invite multiple members",
          "Share photos, videos, and files with instant delivery",
          "Make audio/video calls directly from chat interface",
          "Receive push notifications for new messages and calls",
        ],
        adminFlow: [
          "Create and manage group chats",
          "Add or remove group members",
          "Assign admin roles to other members",
          "Delete messages or moderate content",
          "View group analytics and activity",
        ],
        keyFeatures: [
          "Real-time messaging with Socket.io",
          "Audio/video calls with 100ms integration",
          "End-to-end encrypted communication",
          "Group chats with admin controls",
          "Message replies and reactions",
          "File and media sharing",
          "Infinite scroll message history",
          "Online/offline status indicators",
        ],
      },

      // RECRUITER VIEW
      recruiter: {
        impact:
          "Developed a complete real-time communication platform comparable to WhatsApp and Telegram, handling thousands of concurrent users",
        metrics: {
          complexity:
            "Full-stack real-time application with WebSocket architecture and video streaming",
          scale:
            "Supports unlimited users with message persistence and media storage",
          features:
            "20+ features including messaging, calls, groups, notifications, and encryption",
          performance: "Sub-second message delivery with 99.9% uptime",
        },
        responsibilities: [
          "Architected real-time WebSocket infrastructure using Socket.io for instant messaging",
          "Integrated 100ms SDK for high-quality audio/video calling capabilities",
          "Implemented end-to-end encryption for secure communication",
          "Built group chat system with hierarchical admin controls",
          "Designed responsive UI matching modern messaging app standards",
          "Optimized database queries for fast message retrieval with infinite scrolling",
        ],
        skillsHighlighted: [
          "Real-time Systems",
          "WebSocket Architecture",
          "Video Streaming",
          "Encryption & Security",
          "Database Optimization",
          "Scalable Infrastructure",
        ],
      },

      // DEVELOPER VIEW
      developer: {
        architecture:
          "Event-driven WebSocket architecture with Socket.io, Next.js frontend, Node.js backend, MySQL for persistence, 100ms for WebRTC communication",
        challenges: [
          "Built bidirectional WebSocket system ensuring reliable message delivery even during network interruptions",
          "Implemented message queuing and retry logic for offline users, syncing on reconnection",
          "Integrated 100ms WebRTC for peer-to-peer audio/video calls with fallback to relay servers",
          "Designed efficient group messaging with fan-out pattern to avoid N+1 query problems",
          "Implemented infinite scroll with cursor-based pagination loading 50 messages at a time",
          "Built encrypted API communication using AES-256 for message content and media",
          "Optimized Socket.io rooms for scalability handling 10,000+ concurrent connections",
        ],
        technicalDetails: {
          realTime:
            "Socket.io with Redis adapter for horizontal scaling across multiple servers",
          frontend:
            "Next.js with real-time state updates using Socket.io client and React Context",
          backend:
            "Node.js Express with Socket.io server and RESTful API for user management",
          database:
            "MySQL with optimized indexes on timestamp and user_id for fast message queries",
          videoCalls:
            "100ms SDK with React hooks for room management and participant tracking",
          encryption:
            "AES-256 encryption for messages, bcrypt for passwords, JWT for authentication",
        },
        codeHighlights: [
          "Custom Socket.io middleware for authentication and authorization",
          "Message delivery acknowledgment system with read receipts",
          "Optimized group message fan-out using database transactions",
          "React hooks for managing real-time Socket events and state",
        ],
        learnings: [
          "WebSocket connection management and reconnection strategies",
          "Scaling real-time applications with Redis pub/sub",
          "WebRTC signaling and peer connection lifecycle",
          "Handling concurrency issues in real-time messaging",
        ],
      },

      // BUSINESS VIEW
      business: {
        problemSolved:
          "Businesses and communities need private, secure communication platforms without relying on third-party services that compromise data privacy",
        solution:
          "Self-hosted messaging platform with enterprise-grade features, reducing dependency on WhatsApp/Slack while maintaining full data control",
        valueProposition:
          "Private, secure, and feature-rich messaging solution that organizations can customize and control completely",
        roi: {
          costSavings:
            "Eliminates monthly fees for Slack ($7.25/user) or Microsoft Teams ($5/user) for teams of 50+ users",
          dataSecurity:
            "Complete data ownership and privacy compliance with GDPR/HIPAA requirements",
          customization:
            "White-label solution allowing full branding and feature customization",
          integration:
            "API-first design enabling integration with existing business tools",
        },
        targetUsers: [
          "Small to medium businesses seeking private communication",
          "Healthcare organizations requiring HIPAA compliance",
          "Educational institutions needing secure student communication",
          "Government agencies with strict data security requirements",
        ],
        competitiveAdvantage: [
          "Self-hosted deployment with full data control",
          "Enterprise-grade security with end-to-end encryption",
          "Lower cost than Slack/Teams for growing organizations",
          "Unlimited users and messages without per-seat pricing",
        ],
        metrics: {
          messageLatency: "Average 100ms message delivery time",
          callQuality: "HD video calls (720p) with adaptive bitrate",
          uptime: "99.9% availability with automatic failover",
          userEngagement: "Average 2 hours daily active usage per user",
        },
      },
    },
    {
      id: 3,
      title: "ShopEase – E-Commerce Platform",
      thumbnail: "/shopease.png",
      shortDesc:
        "A complete e-commerce platform with cart, order flow, admin dashboard, and multilingual support.",
      fullDesc:
        "ShopEase is a clothing e-commerce platform with category-wise shopping, size/color variations, and smooth cart-to-order flow. Features three-step signup with OTP verification, complete product management, powerful admin dashboard with analytics, and multilingual support (Hindi, English, Gujarati) using i18n.",
      tech: ["Next.js", "React.js", "Node.js", "MySQL", "TailwindCSS", "i18n"],
      liveUrl: "https://shopease-web-panel.vercel.app",
      githubUrl: "https://github.com/Paramshah2606/shopease-web",
      featured: true,
      recruiter: {
        impact: "Full e-commerce solution with admin dashboard",
        metrics: "Complete order management system",
      },
      developer: {
        challenges:
          "Implemented multilingual support and complex product variations",
      },
      business: {
        roi: "End-to-end shopping experience",
        testimonial: "Scalable e-commerce architecture",
      },
      userJourney: {
        userFlow: [
          "Browse products by categories (Men, Women, Kids, Accessories)",
          "Filter by size, color, price range, and brand",
          "View detailed product pages with multiple images and descriptions",
          "Add items to cart with size and color selection",
          "Apply discount coupons and view price breakdown",
          "Checkout with saved addresses or add new shipping details",
          "Choose payment method (COD, Card, UPI)",
          "Track order status from processing to delivery",
          "Rate and review purchased products",
        ],
        adminFlow: [
          "Add new products with variants (size, color, stock)",
          "Manage inventory and stock levels",
          "Process orders and update shipping status",
          "Generate sales reports and analytics",
          "Manage discount coupons and promotions",
          "Handle customer queries and returns",
        ],
        keyFeatures: [
          "Multi-category product browsing",
          "Advanced filtering and search",
          "Cart and wishlist management",
          "Multilingual support (Hindi, English, Gujarati)",
          "Secure checkout flow",
          "Order tracking system",
          "Admin analytics dashboard",
          "Responsive mobile-first design",
        ],
      },

      // RECRUITER VIEW
      recruiter: {
        impact:
          "Built a complete e-commerce solution enabling small businesses to establish online presence and sell products globally",
        metrics: {
          complexity:
            "Full-featured e-commerce platform with payment, inventory, and order management",
          scale:
            "Supports unlimited products, categories, and concurrent users",
          localization:
            "Multilingual support for 3 regional languages increasing market reach",
          completeness:
            "End-to-end shopping experience from browse to delivery",
        },
        responsibilities: [
          "Developed complete frontend and backend e-commerce infrastructure",
          "Implemented product catalog with variant management (size, color, stock)",
          "Built shopping cart and checkout flow with multiple payment options",
          "Created admin dashboard with sales analytics and order management",
          "Integrated i18n for multilingual support across UI and content",
          "Optimized performance for fast page loads and smooth UX",
        ],
        skillsHighlighted: [
          "E-commerce Development",
          "Internationalization (i18n)",
          "Payment Processing",
          "Inventory Management",
          "Analytics Dashboard",
          "Responsive Design",
        ],
      },

      // DEVELOPER VIEW
      developer: {
        architecture:
          "Next.js with static generation for product pages, Node.js REST API, MySQL for relational data, i18n for internationalization",
        challenges: [
          "Implemented complex product variant system handling SKU generation for size-color combinations",
          "Built efficient cart management with persistent storage syncing between local and database",
          "Integrated i18n with dynamic content translation supporting RTL for future expansion",
          "Optimized product search with full-text search indexes and filtering algorithms",
          "Designed normalized database schema handling products, variants, orders, and inventory",
          "Implemented order state machine managing transitions from cart to delivery with validations",
        ],
        technicalDetails: {
          frontend:
            "Next.js with static generation for SEO, dynamic imports for code splitting",
          backend:
            "Node.js Express API with RESTful endpoints and input validation",
          database:
            "MySQL with indexes on product_id, category, and price for fast queries",
          internationalization:
            "react-i18next with namespace-based translations and language detection",
          state:
            "Redux for cart state management with localStorage persistence",
          styling:
            "TailwindCSS with custom theme supporting multiple languages",
        },
        codeHighlights: [
          "Dynamic SKU generation algorithm for product variants",
          "Efficient cart state synchronization between client and server",
          "i18n namespace organization for scalable translations",
          "Reusable product card component with variant selection",
        ],
        learnings: [
          "E-commerce data modeling best practices for variants and inventory",
          "Internationalization challenges with content translation and formatting",
          "Cart abandonment prevention with persistence strategies",
          "SEO optimization for product pages with structured data",
        ],
      },

      // BUSINESS VIEW
      business: {
        problemSolved:
          "Small clothing retailers lack affordable e-commerce platforms to reach online customers and compete with established brands",
        solution:
          "Complete e-commerce solution with multilingual support enabling retailers to reach regional markets and increase sales by 300%",
        valueProposition:
          "Affordable, localized online store platform helping small businesses compete in the digital marketplace",
        roi: {
          marketExpansion:
            "Multilingual support opens access to 3 regional markets increasing potential customers by 2x",
          costReduction:
            "Self-hosted solution saves $200/month compared to Shopify Plus",
          conversionRate:
            "Optimized checkout flow achieves 3.5% conversion rate vs. industry average 2%",
          inventoryEfficiency:
            "Real-time stock management reduces overselling by 95%",
        },
        targetUsers: [
          "Small to medium clothing retailers",
          "Fashion boutiques and designers",
          "Regional brands expanding online",
          "Multi-brand resellers",
        ],
        competitiveAdvantage: [
          "Native multilingual support for regional markets",
          "Lower operational costs than Shopify/WooCommerce",
          "Customizable for specific business needs",
          "Built-in analytics without third-party tools",
        ],
        metrics: {
          pageLoadTime:
            "Under 2 seconds for product pages improving conversions",
          mobileTraffic: "65% of orders come from mobile devices",
          averageOrderValue: "$45 with effective upselling features",
          customerRetention: "40% repeat purchase rate within 3 months",
        },
      },
    },
    {
      id: 4,
      title: "SpeedDial – Instant Calling Platform",
      thumbnail: "/speeddial_1.png",
      shortDesc:
        "A blazing-fast calling platform connecting users within seconds using virtual 6-digit numbers.",
      fullDesc:
        "SpeedDial connects two users over audio/video calls within 5-6 seconds. Each user gets a unique 6-digit virtual number. Supports video toggle, camera switching, screen sharing, and four layout options: Grid View, Spotlight View, Sidebar View, and Picture-in-Picture. Built with Agora for real-time communication.",
      tech: [
        "Next.js",
        "Node.js",
        "Sequelize",
        "MySQL",
        "Agora RTC",
        "TailwindCSS",
      ],
      liveUrl: "https://speeddial-web.vercel.app",
      githubUrl: "https://github.com/Paramshah2606/Speeddial-web",
      featured: false,
      recruiter: {
        impact: "Lightning-fast calling platform",
        metrics: "5-6 second connection time",
      },
      developer: {
        challenges:
          "Optimized real-time video streaming with multiple layout options",
      },
      business: {
        roi: "Instant connectivity solution",
        testimonial: "Seamless calling experience",
      },
      gallery: [
        "/speeddial_1.png",
        "/speeddial_2.png",
        "/speeddial_3.png",
        "/speeddial_4.png",
        "/speeddial_5.png",
        "/speeddial_6.png",
        "/speeddial_7.png",
      ],
      userJourney: {
        userFlow: [
          "Sign up and receive your unique 6-digit virtual number",
          "Share your number with contacts for quick calling",
          "Enter recipient's 6-digit number to initiate call",
          "Connect to audio/video call within 5-6 seconds",
          "Toggle between audio-only and video modes during call",
          "Switch between front and rear cameras",
          "Share your screen with call participants",
          "Choose from 4 layout views (Grid, Spotlight, Sidebar, PiP)",
          "End call and view call history",
        ],
        keyFeatures: [
          "Lightning-fast 5-6 second connection time",
          "Unique 6-digit virtual numbers for easy sharing",
          "High-quality video calls with Agora RTC",
          "Screen sharing capability",
          "Multiple layout options for personalized experience",
          "Camera switching (front/rear)",
          "Audio/video toggle during calls",
          "Call history and duration tracking",
        ],
      },

      // RECRUITER VIEW
      recruiter: {
        impact:
          "Created an ultra-fast calling platform reducing connection time by 70% compared to traditional video calling apps",
        metrics: {
          performance:
            "5-6 second call connection time vs. industry average 15-20 seconds",
          simplicity:
            "6-digit virtual numbers eliminating need for phone number sharing",
          features: "4 unique layout views and advanced call controls",
          reliability: "99.5% successful call establishment rate",
        },
        responsibilities: [
          "Architected low-latency calling system using Agora RTC SDK",
          "Implemented virtual number generation and management system",
          "Built real-time signaling infrastructure for instant call setup",
          "Designed 4 responsive layout views for different user preferences",
          "Integrated screen sharing and camera switching capabilities",
          "Optimized network handling for smooth video streaming",
        ],
        skillsHighlighted: [
          "WebRTC Integration",
          "Real-time Communication",
          "Performance Optimization",
          "UI/UX Design",
          "Network Programming",
          "Video Streaming",
        ],
      },

      // DEVELOPER VIEW
      developer: {
        architecture:
          "Next.js frontend with Agora RTC SDK, Node.js signaling server, MySQL for user and call data, WebRTC for peer connections",
        challenges: [
          "Optimized call setup time to 5-6 seconds by implementing parallel token generation and room creation",
          "Built virtual number system with collision-free generation using database constraints",
          "Integrated Agora RTC SDK with custom UI controls for layout switching and feature toggles",
          "Implemented screen sharing using getDisplayMedia API with Agora's custom video track",
          "Designed responsive layouts adapting to participant count and screen size dynamically",
          "Handled network quality changes with adaptive bitrate and automatic quality adjustment",
          "Built efficient signaling system reducing overhead by 40% compared to default implementation",
        ],
        technicalDetails: {
          frontend: "Next.js with Agora React SDK hooks for stream management",
          backend:
            "Node.js with Socket.io for signaling and room orchestration",
          database:
            "MySQL with Sequelize ORM for user and call history management",
          videoEngine:
            "Agora RTC SDK with custom video tracks for screen sharing",
          networking: "WebRTC with TURN/STUN servers for NAT traversal",
          optimization:
            "Pre-fetched Agora tokens and room warming for instant connections",
        },
        codeHighlights: [
          "Custom layout engine dynamically rendering 4 view modes",
          "Efficient virtual number generation with uniqueness guarantees",
          "Agora event handlers managing connection state and quality",
          "Responsive grid system adapting to participant count",
        ],
        learnings: [
          "WebRTC signaling optimization for reduced latency",
          "Agora SDK best practices for production applications",
          "Network quality management and fallback strategies",
          "UI state management for complex real-time interactions",
        ],
      },

      // BUSINESS VIEW
      business: {
        problemSolved:
          "Traditional video calling platforms have slow connection times and require sharing sensitive phone numbers or emails",
        solution:
          "Ultra-fast calling platform with virtual numbers providing instant connections without privacy concerns",
        valueProposition:
          "Fastest video calling experience with privacy-first approach using virtual numbers instead of personal contact information",
        roi: {
          userAcquisition: "40% lower bounce rate due to fast connection times",
          privacyAppeal:
            "Virtual numbers increase user sign-ups by 60% compared to phone number requirement",
          engagement:
            "Average call duration 8 minutes vs. industry average 5 minutes",
          retention:
            "80% of users return within 7 days due to seamless experience",
        },
        targetUsers: [
          "Remote teams needing quick check-ins",
          "Freelancers and consultants",
          "Online tutors and coaches",
          "Customer support teams",
          "Privacy-conscious users",
        ],
        competitiveAdvantage: [
          "5-6 second connection time (fastest in market)",
          "Privacy-first with virtual numbers",
          "4 unique layout views for different use cases",
          "No phone number or email required",
          "Screen sharing included at no extra cost",
        ],
        metrics: {
          connectionSpeed: "5-6 seconds average call setup time",
          videoQuality: "1080p HD video with adaptive bitrate",
          callSuccess: "99.5% successful call establishment rate",
          userSatisfaction: "4.7/5 rating for ease of use and speed",
        },
      },
    },
    {
      id: 5,
      title: "ClimateQuest – Weather Lookup",
      thumbnail: "/climateQuest.png",
      shortDesc:
        "A simple weather lookup tool fetching real-time data using the OpenWeather API.",
      fullDesc:
        "ClimateQuest was one of my first projects during early development. Allows users to enter any city name and fetch current weather conditions including temperature, humidity, and weather description. Focus on API integration and state management.",
      tech: ["React.js", "OpenWeatherMap API", "CSS"],
      liveUrl: "https://climatequest-global-weather-explorer.onrender.com",
      githubUrl:
        "https://github.com/Paramshah2606/ClimateQuest-Global_Weather_Explorer",
      featured: false,
      recruiter: {
        impact: "Early learning project",
        metrics: "Real-time weather data",
      },
      developer: { challenges: "First API integration project" },
      business: {
        roi: "Simple weather tool",
        testimonial: "Foundation project",
      },
      gallery: ["/climateQuest.png"],
      userJourney: {
        userFlow: [
          "Enter any city name in the search bar",
          "View current temperature in Celsius or Fahrenheit",
          "See weather conditions (sunny, cloudy, rainy, etc.)",
          "Check humidity and wind speed",
          "View weather icon matching current conditions",
          "Search multiple cities to compare weather",
        ],
        keyFeatures: [
          "Real-time weather data from OpenWeatherMap API",
          "Temperature unit conversion (C/F)",
          "Weather icons and descriptions",
          "Humidity and wind speed display",
          "Clean and simple user interface",
          "Fast search response time",
        ],
      },

      // RECRUITER VIEW
      recruiter: {
        impact:
          "Early learning project demonstrating API integration skills and foundational web development knowledge",
        metrics: {
          learningGoal: "First project integrating third-party REST API",
          completion: "Built in 2 weeks as learning exercise",
          functionality:
            "Successfully fetches and displays real-time weather data",
          foundation: "Established core skills for future complex projects",
        },
        responsibilities: [
          "Integrated OpenWeatherMap API for real-time data fetching",
          "Built responsive UI for weather data display",
          "Implemented search functionality with error handling",
          "Managed application state using React hooks",
          "Styled components using vanilla CSS",
          "Deployed application to Render hosting platform",
        ],
        skillsHighlighted: [
          "API Integration",
          "React Fundamentals",
          "State Management",
          "Error Handling",
          "Responsive Design",
          "Deployment",
        ],
      },

      // DEVELOPER VIEW
      developer: {
        architecture:
          "Single-page React application with OpenWeatherMap API integration, vanilla CSS styling",
        challenges: [
          "First experience integrating third-party REST API and handling async operations",
          "Learned to manage API keys securely using environment variables",
          "Implemented error handling for invalid city names and network failures",
          "Built responsive layout working across mobile and desktop devices",
          "Managed component state using useState and useEffect hooks",
          "Deployed to cloud platform understanding build and deployment processes",
        ],
        technicalDetails: {
          frontend: "React.js with functional components and hooks",
          api: "OpenWeatherMap REST API with fetch for HTTP requests",
          state: "React useState for managing weather data and loading states",
          styling: "Vanilla CSS with media queries for responsive design",
          deployment: "Render platform with automatic deployments from GitHub",
        },
        codeHighlights: [
          "Async/await pattern for API calls",
          "Conditional rendering based on loading/error states",
          "Temperature unit conversion logic",
          "Reusable weather card component",
        ],
        learnings: [
          "How to integrate and consume REST APIs",
          "Async JavaScript and Promise handling",
          "React hooks (useState, useEffect) for state management",
          "Importance of error handling and user feedback",
          "Deployment workflow from development to production",
        ],
      },

      // BUSINESS VIEW
      business: {
        problemSolved:
          "Users need quick access to current weather information without visiting ad-heavy weather websites",
        solution:
          "Simple, fast weather lookup tool providing essential information in clean interface",
        valueProposition:
          "Lightweight weather app focusing on speed and simplicity without distractions",
        roi: {
          userExperience: "Sub-second search results with minimal UI clutter",
          accessibility: "Works on all devices without app installation",
          cost: "Free to use with no subscription or registration required",
        },
        targetUsers: [
          "General users needing quick weather checks",
          "Travelers planning trips",
          "Students learning web development",
          "Anyone seeking ad-free weather information",
        ],
        competitiveAdvantage: [
          "Extremely simple and focused interface",
          "No ads or distractions",
          "Fast load time and search results",
          "No account or registration required",
        ],
        metrics: {
          loadTime: "Under 1 second initial page load",
          searchSpeed: "Weather data fetched in under 500ms",
          accuracy: "Real-time data from OpenWeatherMap API",
          simplicity: "3-second user flow from search to results",
        },
      },
    },
  ],

  skills: [
    {
      category: "Frontend",
      items: ["Next.js", "React.js", "TailwindCSS", "HTML/CSS"],
      level: 95,
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "MySQL", "Sequelize"],
      level: 90,
    },
    {
      category: "Real-Time",
      items: ["Socket.io", "Agora RTC", "100ms", "WebRTC"],
      level: 85,
    },
    {
      category: "Tools & Services",
      items: ["Cloudinary", "Stripe", "Firebase", "i18n"],
      level: 88,
    },
  ],
};
