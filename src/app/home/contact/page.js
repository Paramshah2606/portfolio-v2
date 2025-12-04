"use client";
import { useState } from "react";
import { PORTFOLIO_DATA } from "@/constant/constant";
import { Github, Linkedin, Mail } from "lucide-react";
import { toast } from "react-toastify";

const ContactPage = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateField = (field, value) => {
    let msg = "";

    if (field === "name") {
      if (!value.trim()) msg = "Name is required";
    } else if (field === "email") {
      if (!value.trim()) msg = "Email is required";
      else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value))
        msg = "Enter a valid email";
    } else if (field === "message") {
      if (!value.trim()) msg = "Message is required";
    }

    setErrors((prev) => ({ ...prev, [field]: msg }));
  };

  const handleChange = (field, value) => {
    setForm({ ...form, [field]: value });
    validateField(field, value); // LIVE VALIDATION
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  // Final validation before submit
  const newErrors = {};
  Object.keys(form).forEach((field) => {
    const value = form[field];
    validateField(field, value);
    if (!value.trim()) newErrors[field] = `${field} is required`;
  });

  if (Object.values(newErrors).some((x) => x !== "")) return;

  setIsSubmitting(true);

  try {
    const response = await fetch('/api/sendEmail', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    if (response.ok && data.success) {
      toast.success("Message sent successfully!");
      setForm({ name: "", email: "", message: "" });
      setErrors({});
    } else {
      toast.error("Failed to send message. Please try again later.");
    }
  } catch (error) {
    toast.error("Something went wrong. Please try again later.");
    console.error("Submit error:", error);
  } finally {
    setIsSubmitting(false);
  }
};


  return (
    <div className="min-h-screen bg-black pt-24 pb-12">
      <div className="container mx-auto px-8 max-w-4xl">
        <h1 className="text-5xl font-bold text-white mb-4">Let's Connect</h1>
        <p className="text-gray-400 text-xl mb-12">
          Ready to collaborate on your next project
        </p>

        {/* SOCIAL LINKS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <a
            href={`mailto:${PORTFOLIO_DATA.personal.email}`}
            className="bg-gradient-to-br from-red-600 to-red-800 p-8 rounded-lg text-center transform transition-all duration-300 hover:scale-105 animate-slide-up"
          >
            <Mail className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-white font-bold text-xl mb-2">Email</h3>
            <p className="text-gray-200 text-sm">
              {PORTFOLIO_DATA.personal.email}
            </p>
          </a>

          <a
            href={PORTFOLIO_DATA.personal.social.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-gray-700 to-gray-900 p-8 rounded-lg text-center transform transition-all duration-300 hover:scale-105 animate-slide-up"
            style={{ animationDelay: "100ms" }}
          >
            <Github className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-white font-bold text-xl mb-2">GitHub</h3>
            <p className="text-gray-200 text-sm">View my code</p>
          </a>

          <a
            href={PORTFOLIO_DATA.personal.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-br from-blue-600 to-blue-800 p-8 rounded-lg text-center transform transition-all duration-300 hover:scale-105 animate-slide-up"
            style={{ animationDelay: "200ms" }}
          >
            <Linkedin className="w-12 h-12 mx-auto mb-4" />
            <h3 className="text-white font-bold text-xl mb-2">LinkedIn</h3>
            <p className="text-gray-200 text-sm">Connect professionally</p>
          </a>
        </div>

        {/* CONTACT FORM */}
        <div
          className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-lg animate-slide-up"
          style={{ animationDelay: "300ms" }}
        >
          <h2 className="text-3xl font-bold text-white mb-6">Send a Message</h2>

          <form onSubmit={handleSubmit} className="space-y-4">
            {/* NAME */}
            <div>
              <input
                type="text"
                placeholder="Your Name"
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                className="w-full bg-gray-800 text-white p-4 rounded-lg focus:ring-2 ring-red-600 focus:ring-gray-600 outline-none transition-all"
              />
              {errors.name && (
                <p className="text-red-500 text-sm mt-1">{errors.name}</p>
              )}
            </div>

            {/* EMAIL */}
            <div>
              <input
                type="email"
                placeholder="Your Email"
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                className="w-full bg-gray-800 text-white p-4 rounded-lg focus:ring-2 ring-red-600 focus:ring-gray-600 outline-none transition-all"
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <textarea
                placeholder="Your Message"
                rows="5"
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className="w-full bg-gray-800 text-white p-4 rounded-lg focus:ring-2 ring-red-600 focus:ring-gray-600 outline-none transition-all"
              />
              {errors.message && (
                <p className="text-red-500 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            {/* BUTTON */}
            <button
              type="submit"
              disabled={isSubmitting}
              className={`w-full px-8 py-4 rounded-lg font-semibold transition-colors 
                ${
                  isSubmitting
                    ? "bg-gray-600 cursor-not-allowed"
                    : "bg-red-600 hover:bg-red-700 text-white"
                }
              `}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
