"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { usePathname } from "next/navigation";


export default function UserLayout({ children }) {
  const pathname = usePathname();

  // project detail path looks like: /home/project/123
  const hideNavbar = pathname?.startsWith("/home/project/");
  return (
    <>
    <div className="h-full overflow-y-auto scrollbar-hide">
        {!hideNavbar && <Navbar />}
        {children}
        <Footer/>
        </div>
    </>
  );
}