import CourseCard from "./CourseCard";

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

const courses = [
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
   
  },
];

export default function CourseGrid() {
  return (
    <section className="py-10 bg-white">
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </section>
  );
}