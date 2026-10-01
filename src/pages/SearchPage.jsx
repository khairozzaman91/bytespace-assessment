import { useState } from "react";
import CourseCard from "../components/CourseCard";

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
    author: "purpearl studio",
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
    author: "purpearl studio",
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
    author: "purpearl studio",
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
    author: "purpearl studio",
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
    author: "purpearl studio",
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
    author: "purpearl studio",
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

export default function SearchPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Featured", "Music", "Drawing & Painting", "UI/UX Design", "Development"];

  // Filter courses based on search query and category
  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || course.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        
        {/* Header & Search Bar */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Find Your Next Course</h1>
          <div className="max-w-xl mx-auto flex gap-2">
            <input
              type="text"
              placeholder="Search courses, skills, or creators..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 bg-white text-sm"
            />
            <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition text-sm">
              Search
            </button>
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition ${
                selectedCategory === category
                  ? "bg-blue-600 text-white"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Search Results Grid */}
        {filteredCourses.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 text-gray-500">
            No courses found! Please try searching with a different keyword.
          </div>
        )}

      </div>
    </div>
  );
}