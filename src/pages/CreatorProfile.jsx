import { useState } from "react";
import {
  Filter,
  BarChart2,
  Layers,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";
import CourseCard from "../components/CourseCard";

// Creator Avatar & Hero Assets
import creatorAvatar from "../assets/course/avatarSet/Ellipse.png";

// Course thumbnails
import course1 from "../assets/course/figma.png";
import course2 from "../assets/course/digital.png";
import course3 from "../assets/course/bigdata.png";
import course4 from "../assets/course/balancing.png";
import course5 from "../assets/course/mastring.png";
import course6 from "../assets/course/startupidea.png";

// Instructor avatars
import avatar1 from "../assets/course/avatarSet/Ellipse.png";
import avatar2 from "../assets/course/avatarSet/Ellipse2.png";
import avatar3 from "../assets/course/avatarSet/Ellipse3.png";
import avatar4 from "../assets/course/avatarSet/Ellipse4.png";
import avatar5 from "../assets/course/avatarSet/Ellipse5.png";

const avatarSet = [avatar1, avatar2, avatar3, avatar4, avatar5];

const allCourses = [
  {
    id: 1,
    image: course1,
    title: "Learn Figma from Basic",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    priceType: "Lifetime",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    avatars: avatarSet,
    category: "UI/UX Design",
  },
  {
    id: 2,
    image: course2,
    title: "Build Digital Asset",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    priceType: "Lifetime",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    avatars: avatarSet,
    category: "Featured",
  },
  {
    id: 3,
    image: course3,
    title: "the Power of Big Data",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    priceType: "Lifetime",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    avatars: avatarSet,
    category: "Development",
  },
  {
    id: 4,
    image: course4,
    title: "Balancing Productivity and...",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    priceType: "Lifetime",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    avatars: avatarSet,
    category: "Featured",
  },
  {
    id: 5,
    image: course5,
    title: "Mastering Money Manage...",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    priceType: "Lifetime",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    avatars: avatarSet,
    category: "Music",
  },
  {
    id: 6,
    image: course6,
    title: "From Idea to Startup Succ...",
    author: "purepearl studio",
    rating: 4.5,
    level: "Beginner",
    price: 25,
    priceType: "Lifetime",
    lessons: 17,
    duration: "2 hours 16 mins",
    comments: 59,
    avatars: avatarSet,
    category: "Featured",
  },
];

const heroBackground = {
  backgroundColor: "#0033FF",
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
  backgroundSize: "72px 72px",
};

export default function CreatorProfile() {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Featured", "Music", "Drawing & Painting", "UI/UX Design", "Development"];

  const filteredCourses = allCourses.filter((course) => {
    return selectedCategory === "All" || course.category === selectedCategory;
  });

  return (
    <div className="min-h-screen bg-white text-gray-800">
      
      {/* =========================================
          1. CREATOR HERO SECTION (Blue Grid Background)
      ========================================== */}
      <section
        className="relative w-full text-white pt-10 pb-12 px-4 sm:px-6 lg:px-8"
        style={heroBackground}
      >
        <div className="max-w-7xl mx-auto space-y-6">
          
          {/* Top Row: Avatar, Name & Follow Button */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="flex items-start gap-4">
              <img
                src={creatorAvatar}
                alt="PurePearl Studio"
                className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl object-cover shadow-lg border-2 border-white/20"
              />
              <div className="space-y-0.5">
                <div className="flex items-center gap-2">
                  <h1 className="text-xl sm:text-2xl font-bold tracking-tight">
                    PurePearl Studio
                  </h1>
                  <span className="bg-lime-400 text-blue-900 text-[10px] font-bold px-2 py-0.5 rounded-md">
                    Creator
                  </span>
                </div>
                <p className="text-blue-100 text-xs">
                  Passionate UI/UX, Web designer
                </p>
              </div>
            </div>

            <button className="bg-lime-400 hover:bg-lime-300 text-blue-900 font-bold px-8 py-2 rounded-full text-xs transition shadow-md cursor-pointer">
              Follow
            </button>
          </div>

          {/* Description Text */}
          <p className="text-blue-100 text-xs leading-relaxed max-w-4xl">
            Welcome to the creative world of [Creator's Name]. Here, you'll discover the passion, expertise, and inspiration that drive my creative journey. Let's explore and learn together! <br />
            Dive into my creative portfolio, showcasing a glimpse of my artistic endeavors. From digital designs to multimedia projects, each piece tells a unique story. Explore the world of creativity with me.
          </p>

          {/* Bottom Row: Products & Followers Counters */}
          <div className="flex items-center gap-3 pt-1">
            <button className="bg-white text-gray-900 font-semibold px-4 py-1.5 rounded-full text-xs shadow-sm flex items-center gap-1.5 cursor-pointer">
              <span className="text-blue-600 font-bold">3</span> Products
            </button>
            <button className="bg-white text-gray-900 font-semibold px-4 py-1.5 rounded-full text-xs shadow-sm flex items-center gap-1.5 cursor-pointer">
              <span className="text-blue-600 font-bold">12</span> Followers
            </button>
          </div>

        </div>
      </section>

      {/* =========================================
          2. FILTERS & COURSE CARDS SECTION
      ========================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        
        {/* Filter Toolbar Options */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div className="flex flex-wrap items-center gap-2.5">
            <button className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-700 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-2xs hover:bg-gray-50 transition cursor-pointer">
              <Filter size={13} />
              <span>Filter</span>
            </button>

            <button className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-700 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-2xs hover:bg-gray-50 transition cursor-pointer">
              <BarChart2 size={13} />
              <span>Level</span>
            </button>

            <button className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-700 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-2xs hover:bg-gray-50 transition cursor-pointer">
              <Layers size={13} />
              <span>Category</span>
            </button>
          </div>

          <button className="flex items-center gap-1.5 bg-white border border-gray-200 text-gray-700 px-3.5 py-1.5 rounded-full text-xs font-semibold shadow-2xs hover:bg-gray-50 transition cursor-pointer ml-auto">
            <SlidersHorizontal size={13} />
            <span>Most relevant</span>
            <ChevronDown size={13} />
          </button>
        </div>

        {/* Category Pill Buttons */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition cursor-pointer ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500 text-sm">
            No courses found in this category!
          </div>
        )}

      </section>

    </div>
  );
}