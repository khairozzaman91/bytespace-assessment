import { useState } from "react";
import {
  Share2,
  CheckCircle2,
  FileText,
  Video,
  Award,
  Users,
  Star,
  BarChart3,
  Play,
} from "lucide-react";

import videoThumbnail from "../assets/coursedeatils/course-deatils.png";
import sneak1 from "../assets/sneakpeak/Rectangle1.png";
import sneak2 from "../assets/sneakpeak/Rectangle2.png";
import sneak3 from "../assets/sneakpeak/Rectangle3.png";
import sneak4 from "../assets/sneakpeak/Rectangle4.png";
import creatorAvatar from "../assets/coursedeatils/Ellipse.png";

// Blue background with a faint white grid (blueprint style)
const heroBackground = {
  backgroundColor: "#0033FF",
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
  backgroundSize: "72px 72px",
};

export default function CourseDetailsPage() {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen bg-white text-gray-800">
      {/* =========================================
          1. FULL-WIDTH BLUE HERO
          (header + video + sidebar start here)
      ========================================== */}
      <section
        className="relative w-full text-white pt-10 pb-12 px-4 sm:px-6 lg:px-8"
        style={heroBackground}
      >
        <div className="max-w-7xl mx-auto">
          {/* Title row */}
          <div className="flex flex-col md:flex-row justify-between items-start gap-6 mb-6">
            <div className="space-y-3 max-w-4xl">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Build Digital Asset: A Comprehensive Guide
              </h1>

              <p className="text-blue-100 text-base sm:text-lg">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>

              <p className="text-sm text-blue-100 pt-1">
                by{" "}
                <span className="text-lime-400 font-medium cursor-pointer hover:underline">
                  purepearl studio
                </span>
              </p>
            </div>

            <button className="flex items-center gap-2 bg-lime-400 text-blue-900 font-medium px-5 py-2.5 rounded-full text-sm hover:bg-lime-300 transition shrink-0">
              <Share2 size={16} />
              Share
            </button>
          </div>

          {/* Course meta pills */}
          <div className="flex flex-wrap items-center gap-4 mt-8">
            <div className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
              <BarChart3 size={16} className="text-blue-700" />
              <span>Intermediate</span>
            </div>

            <div className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
              <Star size={16} className="fill-blue-700 text-blue-700" />
              <span>4.8 (172 reviews)</span>
            </div>

            <div className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
              <Users size={16} className="text-blue-700" />
              <span>199 Students</span>
            </div>
          </div>

          {/* Video (left) + Sidebar (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
            {/* Video preview — sits directly on the blue background */}
            <div className="lg:col-span-2">
              <div className="relative aspect-video overflow-hidden rounded-[20px] bg-gray-300 shadow-xl">
                <img
                  src={videoThumbnail}
                  alt="Course Video Preview"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Sidebar wrapper: */}
            <div className="lg:relative lg:h-0">
              <aside className="lg:absolute lg:inset-x-0 lg:top-0 z-10 bg-white text-gray-800 rounded-2xl shadow-xl border border-gray-100 p-6 space-y-6">
                {/* Lessons */}
                <div>
                  <h3 className="font-bold text-gray-900 text-base mb-3">
                    112 Lessons (24 hours)
                  </h3>

                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between items-center text-gray-600 pb-2 border-b border-gray-100">
                      <span className="truncate pr-2">
                        01 Introduction to Digital Assets
                      </span>
                      <span className="text-blue-600 font-medium shrink-0">
                        12 mins
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-gray-600 pb-2 border-b border-gray-100">
                      <span className="truncate pr-2">
                        02 Design Principles for Impacts
                      </span>
                      <span className="text-blue-600 font-medium shrink-0">
                        21 mins
                      </span>
                    </div>

                    <div className="flex justify-between items-center text-gray-600 pb-2 border-b border-gray-100">
                      <span className="truncate pr-2">
                        03 Advanced Techniques in Digital Creation
                      </span>
                      <span className="text-blue-600 font-medium shrink-0">
                        16 mins
                      </span>
                    </div>
                  </div>

                  <p className="text-xs text-gray-400 mt-2">99 more videos</p>
                </div>

                <p className="text-xs text-gray-500">
                  Ready to Dive In? Enroll Now and Start Building Your Digital
                  Future!
                </p>

                {/* Price */}
                <div className="flex items-baseline gap-1">
                  <span className="text-3xl font-extrabold text-blue-600">
                    $25
                  </span>
                  <span className="text-xs text-gray-400">/lifetime</span>
                </div>

                <button className="w-full bg-lime-400 hover:bg-lime-300 text-blue-900 font-bold py-3.5 rounded-full transition shadow-md">
                  Enroll Now
                </button>

                {/* Course includes */}
                <div className="space-y-3 pt-4 border-t border-gray-100 text-xs text-gray-600">
                  <p className="font-bold text-gray-900">This course include</p>

                  <div className="flex items-center gap-2.5">
                    <FileText size={15} className="text-blue-600" />
                    <span>Learning Resources</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Video size={15} className="text-blue-600" />
                    <span>Quality 24/24 Video</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Award size={15} className="text-blue-600" />
                    <span>Certificate of Completion</span>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <Users size={15} className="text-blue-600" />
                    <span>Private Consultation</span>
                  </div>
                </div>

                {/* Creator */}
                <div className="pt-4 border-t border-gray-100 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <img
                      src={creatorAvatar}
                      alt="Creator"
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h4 className="font-bold text-sm text-gray-900">
                        Purepearl Studio
                      </h4>
                      <p className="text-[11px] text-gray-400">
                        Professional Creator
                      </p>
                    </div>
                  </div>

                  <button className="text-xs font-semibold text-blue-600 border border-blue-200 px-3 py-1.5 rounded-full hover:bg-blue-50 transition">
                    See Full Profile
                  </button>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* 2. MAIN CONTENT (white area) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* Tabs */}
            <div className="flex border-b border-gray-200 gap-8">
              {["about", "lessons", "review"].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`pb-3 text-sm font-semibold capitalize transition border-b-2 ${
                    activeTab === tab
                      ? "border-blue-600 text-blue-600"
                      : "border-transparent text-gray-400 hover:text-gray-600"
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Description */}
            <div className="space-y-4 text-gray-600 text-sm leading-relaxed bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900">Description</h2>

              <p>
                Embark on an enlightening exploration into the world of digital
                creation with our comprehensive course, "Build Digital Assets: A
                Comprehensive Guide." This foundational learning experience
                invites you to dive deep into the intricacies of crafting
                impactful digital content.
              </p>

              <p>
                In the initial modules, you'll establish a solid foundation by
                immersing yourself in the foundational concepts that form the
                backbone of digital asset creation.
              </p>

              <p>
                As you progress through the course, you'll expand to higher
                levels of expertise, delving into the nuances of design
                principles that drive impactful creations.
              </p>
            </div>

            {/* Sneak Peek */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Sneak Peek
              </h2>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                {[sneak1, sneak2, sneak3, sneak4].map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt={`Sneak peek ${i + 1}`}
                    className="rounded-lg object-cover h-28 w-full"
                  />
                ))}
              </div>
            </div>

            {/* Key Points */}
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
              <h2 className="text-lg font-bold text-gray-900 mb-4">
                Key Points
              </h2>

              <div className="grid grid-cols-1 gap-3 text-sm text-gray-700">
                {[
                  "Foundational Concepts",
                  "Design Principle Matters",
                  "Advanced Techniques in Digital Creation",
                  "Proper Showcase and Critique",
                  "Optimizing to Various Platforms",
                  "Digital Asset Management Best Practices",
                  "Monetization Strategies",
                  "Capstone Project: Building Your Portfolio",
                ].map((point, index) => (
                  <div key={index} className="flex items-center gap-2.5">
                    <CheckCircle2
                      size={18}
                      className="text-blue-600 shrink-0"
                    />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}