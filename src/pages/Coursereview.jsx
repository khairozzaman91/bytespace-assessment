import { useState } from "react";
import {
  Share2,

  FileText,
  Video,
  Award,
  Users,
  Star,
  BarChart3,
  Play,
 
} from "lucide-react";

import videoThumbnail from "../assets/coursedeatils/course-deatils.png";

import creatorAvatar from "../assets/coursedeatils/Ellipse.png";

// Blue background with a faint white grid (blueprint style)
const heroBackground = {
  backgroundColor: "#0033FF",
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
  backgroundSize: "72px 72px",
};

export default function CourseReviews() {
  const [activeTab, setActiveTab] = useState("reviews"); 

  return (
    <div className="min-h-screen bg-white text-gray-800">
      
      {/* =========================================
          1. FULL-WIDTH BLUE HERO
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

            <button className="flex items-center gap-2 bg-lime-400 text-blue-900 font-medium px-5 py-2.5 rounded-full text-sm hover:bg-lime-300 transition shrink-0 cursor-pointer">
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
              <span>4.7 (172 reviews)</span>
            </div>

            <div className="flex items-center gap-2 bg-white text-gray-900 px-4 py-2 rounded-full text-sm font-medium shadow-sm">
              <Users size={16} className="text-blue-700" />
              <span>199 Students</span>
            </div>
          </div>

          {/* Video (left) + Sidebar (right) */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mt-10">
            {/* Video preview */}
            <div className="lg:col-span-2">
              <div className="relative aspect-video overflow-hidden rounded-[20px] bg-gray-300 shadow-xl flex items-center justify-center">
                <img
                  src={videoThumbnail}
                  alt="Course Video Preview"
                  className="w-full h-full object-cover opacity-90"
                />
                <button className="absolute bg-lime-400 hover:bg-lime-300 text-blue-900 p-4 rounded-full shadow-lg transition cursor-pointer flex items-center justify-center">
                  <Play size={28} className="fill-blue-900 ml-0.5" />
                </button>
              </div>
            </div>

            {/* Sidebar wrapper */}
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

                <button className="w-full bg-lime-400 hover:bg-lime-300 text-blue-900 font-bold py-3.5 rounded-full transition shadow-md cursor-pointer">
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

                  <button className="text-xs font-semibold text-blue-600 border border-blue-200 px-3 py-1.5 rounded-full hover:bg-blue-50 transition cursor-pointer">
                    See Full Profile
                  </button>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          2. MAIN CONTENT (white area with dynamic tabs)
      ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            
            {/* Pill Tabs */}
            <div className="flex items-center gap-3">
              {[
                { id: "about", label: "About" },
                { id: "lesson", label: "Lesson" },
                { id: "reviews", label: "Reviews" },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-5 py-2 rounded-full text-sm font-semibold transition cursor-pointer ${
                    activeTab === tab.id
                      ? "bg-lime-400 text-blue-900 shadow-sm"
                      : "bg-transparent text-gray-500 hover:text-gray-900"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* CONDITIONAL TAB CONTENT */}
            {activeTab === "about" && (
              <div className="space-y-8">
                <div className="space-y-4 text-gray-600 text-sm leading-relaxed bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                  <h2 className="text-lg font-bold text-gray-900">Description</h2>
                  <p>
                    Embark on an enlightening exploration into the world of digital
                    creation with our comprehensive course, "Build Digital Assets: A
                    Comprehensive Guide." This foundational learning experience
                    invites you to dive deep into the intricacies of crafting
                    impactful digital content.
                  </p>
                </div>
              </div>
            )}

            {activeTab === "lesson" && (
              <div className="space-y-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
                <h2 className="text-lg font-bold text-gray-900">Explore the Modules</h2>
                <p className="text-sm text-gray-600">
                  Immerse yourself in the course content as we break down each module into comprehensive lessons.
                </p>
              </div>
            )}

            {/* UPDATED REVIEWS TAB MATCHING SCREENSHOT */}
            {activeTab === "reviews" && (
              <div className="space-y-6">
                {/* Header title & subtitle */}
                <div className="space-y-1">
                  <h2 className="text-xl font-bold text-gray-900">What Learners Are Saying</h2>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    Discover what our learners have to say about their experience with 'Build Digital Assets: A Comprehensive Guide.' Read reviews and ratings from individuals who have embarked on the transformative journey of mastering digital asset creation.
                  </p>
                </div>

                {/* Rating Overview Box */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col sm:flex-row items-center gap-6">
                  {/* Big Lime Rating Card */}
                  <div className="bg-[#ccff00] w-36 h-36 rounded-2xl flex flex-col items-center justify-center shrink-0 shadow-sm">
                    <span className="text-xs font-semibold text-gray-800">Ratings</span>
                    <span className="text-4xl font-extrabold text-gray-900 mt-1">4.7</span>
                  </div>

                  {/* Star Breakdown Bars */}
                  <div className="w-full space-y-2">
                    {[
                      { stars: 5, width: "w-full", count: 130 },
                      { stars: 5, width: "w-[65%]", count: 120 },
                      { stars: 5, width: "w-[30%]", count: 21 },
                      { stars: 5, width: "w-[20%]", count: 12 },
                      { stars: 5, width: "w-[15%]", count: 16 },
                    ].map((item, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <div className="flex-1 bg-gray-100 h-2.5 rounded-full overflow-hidden">
                          <div className={`bg-[#ccff00] h-full ${item.width}`}></div>
                        </div>
                        <div className="flex text-gray-800 shrink-0">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={13} className="fill-gray-800 text-gray-800" />
                          ))}
                        </div>
                        <span className="text-xs text-gray-500 w-8 text-right">{item.count}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Individual Reviews Header & Filters */}
                <div className="space-y-4 pt-2">
                  <h3 className="font-bold text-gray-900 text-base">Individual Reviews:</h3>
                  
                  <div className="flex flex-wrap items-center gap-2">
                    <button className="bg-[#ccff00] text-gray-900 px-4 py-1.5 rounded-full text-xs font-semibold shadow-sm cursor-pointer">
                      All rating
                    </button>
                    {[
                      { label: "5", count: "" },
                      { label: "4", count: "" },
                      { label: "3", count: "" },
                      { label: "2", count: "" },
                      { label: "1", count: "" },
                    ].map((filter, i) => (
                      <button
                        key={i}
                        className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-700 px-3.5 py-1.5 rounded-full text-xs font-medium hover:bg-gray-50 transition cursor-pointer shadow-2xs"
                      >
                        <Star size={12} className="fill-gray-700 text-gray-700" />
                        <span>{filter.label}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Review Cards List */}
                <div className="space-y-4">
                  {[
                    {
                      name: "PurePearl Studio",
                      role: "UI/UX Designer",
                      time: "a year ago",
                      review: "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
                    },
                    {
                      name: "Albert Flores",
                      role: "UI/UX Designer",
                      time: "a year ago",
                      review: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
                    },
                    {
                      name: "Cody Fisher",
                      role: "UI/UX Designer",
                      time: "a year ago",
                      review: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
                    },
                    {
                      name: "Brooklyn Simmons",
                      role: "UI/UX Designer",
                      time: "a year ago",
                      review: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
                    },
                  ].map((rev, index) => (
                    <div key={index} className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 space-y-4">
                      <div className="flex justify-between items-start">
                        <div className="flex items-center gap-3">
                          <img
                            src={creatorAvatar}
                            alt={rev.name}
                            className="w-10 h-10 rounded-full object-cover"
                          />
                          <div>
                            <h4 className="font-bold text-sm text-gray-900">{rev.name}</h4>
                            <p className="text-xs text-gray-400">{rev.role}</p>
                          </div>
                        </div>
                        <span className="text-xs text-gray-400">{rev.time}</span>
                      </div>

                      {/* Stars */}
                      <div className="flex text-gray-800">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} size={14} className="fill-gray-800 text-gray-800" />
                        ))}
                      </div>

                      {/* Review text */}
                      <p className="text-xs text-gray-600 leading-relaxed">
                        "{rev.review}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>
        </div>
      </section>

    </div>
  );
}