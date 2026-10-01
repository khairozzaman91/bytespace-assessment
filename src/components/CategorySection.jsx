import { useState } from "react";

const categories = [
  "Featured",
  "Music",
  "Drawing & Painting",
  "Marketing",
  "Animation",
  "Social Media",
  "UI/UX Design",
  "Creative Marketing",
  "Digital Illustration",
  "Film & Video",
  "Crafts",
  "Freelance & Entrepreneurship",
  "Graphic Design",
  "Photography",
  "Productivity",
  "Web Development",
  "Data Science",
  "Cooking",
];

export default function CategorySection() {
  const [activeCategory, setActiveCategory] = useState("Featured");

  return (
    <section className="py-16 bg-white text-center">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Discover Your Passion,
          <br />
          Build Your Skills
        </h2>
        <p className="mt-4 text-gray-500 text-sm">
          At Bytespace Courses, we bring you closer to life-changing
          knowledge. Explore a variety of courses across different fields,
          from technology to the arts, and make a difference in your career
          and life.
        </p>
      </div>

      <div className="mt-10 flex flex-wrap justify-center gap-3 max-w-4xl mx-auto px-6">
        {categories.map((category) => (
          <button
            key={category}
            type="button"
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-full text-sm font-medium transition ${
              activeCategory === category
                ? "bg-lime-400 text-blue-700"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
            }`}
          >
            {category}
          </button>
        ))}

        <button
          type="button"
          className="px-5 py-2 text-sm font-medium text-blue-600 hover:underline"
        >
          + More
        </button>
      </div>
    </section>
  );
}