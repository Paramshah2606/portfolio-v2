import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Param Shah – Portfolio",
  description: "Welcome to the portfolio of Param Shah, showcasing projects, skills, and professional experience in web development and software engineering.",
  keywords: [
    "Param Shah",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
    "Full-Stack Developer",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Projects",
    "Open Source",
    "Developer Portfolio",
  ],
  author: "Param Shah",
  openGraph: {
    title: "Param Shah – Portfolio",
    description: "Explore the projects and skills of Param Shah, a passionate web developer and software engineer.",
    url: "https://your-portfolio-domain.com", // Replace with your actual domain
    siteName: "Param Shah Portfolio",
    images: [
      {
        url: "https://your-portfolio-domain.com/og-image.jpg", // Replace with your OG image URL
        width: 1200,
        height: 630,
        alt: "Param Shah Portfolio",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Param Shah – Portfolio",
    description: "Showcasing projects, skills, and experience of Param Shah, web developer and software engineer.",
    creator: "@yourTwitterHandle", // Replace with your Twitter handle if any
    images: ["https://your-portfolio-domain.com/twitter-card.jpg"], // Replace with Twitter card image
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ToastContainer position="top-right" autoClose={2000} theme="dark"/>
        {children}
      </body>
    </html>
  );
}
