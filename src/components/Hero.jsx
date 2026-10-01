import { useNavigate } from "react-router-dom";
import { Star } from "lucide-react";
import heroPerson from "../assets/hero-section/hero-image-boy.png";
import heroBg from "../assets/hero-section/Ellipse 7.png";

import shape1 from "../assets/hero-section-logo/Frame.png";
import shape2 from "../assets/hero-section-logo/Mask Group-1.png";
import shape3 from "../assets/hero-section-logo/Mask Group.png";
import shape4 from "../assets/hero-section-logo/Rectangle-3.png";
import shape5 from "../assets/hero-section-logo/Rectangle-2.png";
import shape6 from "../assets/hero-section-logo/Frame6.png";

export default function Hero() {
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate("/search");
  };

  return (
    <section className="relative min-h-[700px] overflow-hidden bg-blue-700 text-white pt-[80px] pb-[40px]">
      <div className="relative z-30 mx-auto flex flex-col items-center justify-center max-w-[1200px] px-6 text-center">
        <div className="flex flex-col gap-[32px] w-full max-w-[935px] mx-auto text-center">
          <h1 className="text-[53px] lg:text-[66px] font-bold leading-[61px] lg:leading-[80px] text-white">
            Get Access to Hundreds
            <br />
            Courses Available
          </h1>
          <p className="text-sm lg:text-base text-blue-100 max-w-xl mx-auto">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>
        </div>

        {/* Search Box Form Trigger */}
        <div className="mt-8 flex justify-center w-full">
          <form 
            onSubmit={handleSearchSubmit}
            onClick={() => navigate("/search")}
            className="flex w-full max-w-[380px] rounded-full bg-white p-1.5 shadow-lg cursor-pointer select-none items-center justify-between"
          >
            <input 
              type="text"
              placeholder="Course, topic, creator"
              readOnly
              className="flex-1 px-4 py-2 text-sm text-gray-500 bg-transparent border-none outline-none cursor-pointer pointer-events-none"
            />
            <button
              type="submit"
              onClick={(e) => {
                e.stopPropagation();
                navigate("/search");
              }}
              className="rounded-full bg-lime-400 px-5 py-2 text-sm font-medium text-blue-700 hover:bg-lime-300 transition flex items-center justify-center cursor-pointer"
            >
              Search
            </button>
          </form>
        </div>
      </div>

      <div className="relative z-10 mx-auto mt-[-80px] h-[500px] max-w-[1200px]">
        <img
          src={heroBg}
          alt=""
          aria-hidden="true"
          className="absolute pointer-events-none z-0 left-1/2 -translate-x-1/2"
          style={{ width: "1149px", top: "176px" }}
        />

        <img
          src={heroPerson}
          alt="Student"
          className="absolute z-10 object-contain object-bottom left-1/2 -translate-x-1/2"
          style={{ width: "578px", height: "541px", top: "1px" }}
        />

        <div className="absolute left-[26%] top-[230px] rounded-lg bg-white px-4 py-3 text-gray-800 shadow-lg z-25">
          <p className="text-xs font-semibold">UI/UX Design</p>
          <p className="text-[10px] text-gray-400">
            200 Courses • 1000+ Students
          </p>
        </div>

        <div className="absolute right-[34%] top-[258px] w-[145px] rounded-lg bg-white px-4 py-3 text-gray-800 shadow-lg z-25">
          <p className="text-[10px] text-gray-500">Learning Progress</p>
          <p className="text-2xl font-bold">55%</p>
          <div className="mt-1 h-1 rounded-full bg-gray-200">
            <div className="h-full w-[55%] rounded-full bg-lime-400" />
          </div>
        </div>

        <div className="absolute top-[430px] left-[25%] rounded-lg bg-white px-4 py-3 text-gray-800 shadow-lg z-25">
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

      <img
        src={shape1}
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none z-10 hidden lg:block"
        style={{ width: "303.68px", height: "303.69px", top: "500px", right: "-30px", transform: "rotate(5deg)" }}
      />
      <img
        src={shape2}
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none z-10 hidden lg:block"
        style={{ width: "303.68px", height: "303.69px", top: "500px", left: "-5px" }}
      />
      <img
        src={shape3}
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none z-10 hidden lg:block"
        style={{ width: "180.68px", height: "180.69px", top: "360px", left: "150px" }}
      />
      <img
        src={shape4}
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none z-10 hidden lg:block"
        style={{ width: "180.68px", height: "180.69px", top: "360px", right: "150px" }}
      />
      <img
        src={shape5}
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none z-10 hidden lg:block"
        style={{ width: "180.68px", height: "180.69px", top: "175px", right: "-100px", borderRadius: "75px 75px 25px 25px", transform: "rotate(65deg)" }}
      />
      <img
        src={shape6}
        alt=""
        aria-hidden="true"
        className="absolute pointer-events-none z-10 hidden lg:block"
        style={{ width: "180.68px", height: "180.69px", top: "160px", borderRadius: "75px 75px 25px 25px" }}
      />
    </section>
  );
}