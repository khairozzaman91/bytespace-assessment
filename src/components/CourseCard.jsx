import { Star } from "lucide-react";
import { Link } from "react-router-dom";

export default function CourseCard({ course }) {
  return (
    <Link
      to={`/course/${course.id}`}
      className="block group no-underline text-inherit"
    >
      <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group-hover:shadow-md transition cursor-pointer">
        {/* Thumbnail */}
        <div className="relative">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-40 object-cover"
          />
          <div className="absolute bottom-2 left-2 flex gap-2 text-[10px] text-white">
            <span className="bg-black/60 px-2 py-0.5 rounded">
              {course.lessons} Lessons
            </span>
            <span className="bg-black/60 px-2 py-0.5 rounded">
              {course.duration}
            </span>
            <span className="bg-black/60 px-2 py-0.5 rounded">
              {course.comments} Comments
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-gray-900 text-sm group-hover:text-blue-600 transition">
              {course.title}
            </h3>
            <div className="flex items-center gap-1 text-xs text-gray-600 shrink-0 ml-2">
              <Star size={12} className="fill-yellow-400 text-yellow-400" />
              {course.rating}
            </div>
          </div>

          <p className="text-xs text-blue-600 mt-1">by {course.author}</p>

          {/* Level + Avatar group */}
          <div className="flex items-center gap-2 mt-3">
            <span className="flex items-center gap-1 text-xs bg-gray-100 text-gray-600 px-2 py-1 rounded">
              {course.level}
            </span>

            <div className="flex items-center">
              {course.avatars.map((avatar, index) => (
                <img
                  key={index}
                  src={avatar}
                  alt=""
                  className="w-6 h-6 rounded-full border-2 border-white -ml-2 first:ml-0"
                />
              ))}
            </div>
          </div>

          {/* Price */}
          <div className="mt-3">
            <span className="text-blue-700 font-bold text-sm">
              ${course.price}
              <span className="text-gray-400 font-normal text-xs">
                /{course.priceType}
              </span>
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
