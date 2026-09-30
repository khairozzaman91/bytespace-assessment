import { Star } from "lucide-react";
import heroPerson from "../assets/hero-section/hero-image-boy.png";
import heroBg from "../assets/hero-section/Ellipse 7.png";

export default function Hero() {
  return (
    <section className="relative min-h-[700px] overflow-hidden bg-blue-700 text-white">
      <img
        src={heroBg}
        alt=""
        aria-hidden="true"
        className="absolute bottom-[-180px] left-1/2 w-[850px] -translate-x-1/2 lg:w-[1000px]"
      />

      <div className="relative z-10 mx-auto max-w-[1200px] px-6 pt-[100px] text-center lg:pt-[165px]">
        <h1 className="mx-auto max-w-[900px] text-[42px] font-bold leading-[50px] lg:text-[53px] lg:leading-[61px]">
          Get Access to Hundreds
          <br />
          Courses Available
        </h1>

        <p className="mx-auto mt-4 max-w-xl text-sm text-blue-100">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <div className="mt-8 flex justify-center">
          <div className="flex w-full max-w-[380px] rounded-full bg-white p-1.5">
            <input
              type="text"
              placeholder="Course, topic, creator"
              aria-label="Search courses"
              className="min-w-0 flex-1 rounded-full px-4 py-2 text-sm text-gray-700 outline-none"
            />

            <button
              type="button"
              className="rounded-full bg-lime-400 px-5 py-2 text-sm font-medium text-blue-700 hover:bg-lime-300"
            >
              Search
            </button>
          </div>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-10 h-[400px] max-w-[850px]">
        <img
          src={heroPerson}
          alt="Student"
          className="absolute bottom-0 left-1/2 h-[380px] -translate-x-1/2"
        />

        <div className="absolute left-4 top-[80px] rounded-lg bg-white px-4 py-3 text-gray-800 shadow-lg lg:left-12">
          <p className="text-xs font-semibold">UI/UX Design</p>
          <p className="text-[10px] text-gray-400">
            200 Courses • 1000+ Students
          </p>
        </div>

        <div className="absolute right-4 top-[140px] w-[145px] rounded-lg bg-white px-4 py-3 text-gray-800 shadow-lg lg:right-12">
          <p className="text-[10px] text-gray-500">Learning Progress</p>

          <p className="text-2xl font-bold">55%</p>

          <div className="mt-1 h-1 rounded-full bg-gray-200">
            <div className="h-full w-[55%] rounded-full bg-lime-400" />
          </div>
        </div>

        <div className="absolute bottom-8 left-4 rounded-lg bg-white px-4 py-3 text-gray-800 shadow-lg lg:left-12">
          <p className="text-xs font-semibold">Happy Students</p>

          <div className="mt-1 flex items-center gap-0.5">
            {[1, 2, 3, 4, 5].map((item) => (
              <Star
                key={item}
                size={11}
                className={
                  item <= 4
                    ? "fill-yellow-400 text-yellow-400"
                    : "text-gray-300"
                }
              />
            ))}

            <span className="ml-1 text-[9px] text-gray-400">4.5 (240)</span>
          </div>
        </div>
        
      </div>
    </section>
  );
}