// Import your assets/images for this section
import studentMale from "../assets/hero-section/hero-image-boy.png";
import studentFeMale from "../assets/hero-section/hero-image-girl.png";
import spiralShape from "../assets/hero-section-logo/speiral.png";
import coursePreviewImg from "../assets/course/figma.png";

import avatar1 from "../assets/hero-section/logo/Ellipse1.png";
import avatar2 from "../assets/hero-section/logo/Ellipse2.png";
import avatar3 from "../assets/hero-section/logo/Ellipse3.png";
import avatar4 from "../assets/hero-section/logo/Ellipse4.png";
import avatar5 from "../assets/hero-section/logo/Ellipse5.png";
import avatar6 from "../assets/hero-section/logo/Ellipse6.png";
import avatar7 from "../assets/hero-section/logo/Ellipse7.png";
import avatar8 from "../assets/hero-section/logo/group.png";

export default function ProfessionalGrowth() {
  const avatars = [
    avatar1,
    avatar2,
    avatar3,
    avatar4,
    avatar5,
    avatar6,
    avatar7,
    avatar8,
  ];

  return (
    <section className="relative w-full bg-gradient-to-b from-[#f4f7fe] via-white to-[#f4f7fe] py-20 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6 space-y-24">
        {/* 1. TOP ROW: Professional Growth Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content & Stats */}
          <div className="flex flex-col">
            <h2 className="text-[32px] lg:text-[40px] font-bold text-gray-900 leading-tight">
              Your Path to Professional Growth Starts Here!
            </h2>
            <p className="mt-4 text-[16px] text-gray-500 leading-relaxed">
              Explore our curated selection of courses tailored to enhance your
              capabilities and accelerate your career journey. Whether you are
              looking to sharpen specific skills, gain industry expertise, or
              embark on a new career path entirely, we have the resources you
              need.
            </p>

            {/* Statistics Row */}
            <div className="mt-8 flex items-center gap-12 border-t border-gray-200 pt-6">
              <div>
                <h4 className="text-[24px] font-bold text-blue-600">12K</h4>
                <p className="text-sm text-gray-500">Students</p>
              </div>
              <div>
                <h4 className="text-[24px] font-bold text-blue-600">70+</h4>
                <p className="text-sm text-gray-500">Courses</p>
              </div>
              <div>
                <h4 className="text-[24px] font-bold text-blue-600">16</h4>
                <p className="text-sm text-gray-500">Creators</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visuals & Floating Cards */}
          <div className="relative flex justify-center items-center">
            {/* Green Spiral Decorative Shape */}
            <img
              src={spiralShape}
              alt=""
              aria-hidden="true"
              className="absolute top-12 left-[400px] w-[190px] z-40 pointer-events-none"
            />

            {/* Main Container for Layering */}
            <div className="relative w-full max-w-[480px] h-[440px] flex items-center justify-center">
              {/* 1. BACKGROUND LAYER: Course Preview Card */}
              <div className="absolute top-0 left-4 w-[220px] bg-white p-3 rounded-2xl shadow-xl border border-gray-100 z-10">
                <div className="relative h-[140px] w-[220px] overflow-hidden rounded-xl bg-gray-100 mb-2">
                  <img
                    src={coursePreviewImg}
                    alt="Course Preview"
                    className="w-full h-full object-cover"
                  />

                  <div className="absolute bottom-2 left-2 flex items-center gap-1.5">
                    <span className="bg-black/60 backdrop-blur-md text-white text-[9px] px-2 py-0.5 rounded-full">
                      17 Lessons
                    </span>
                    <span className="bg-black/60 backdrop-blur-md text-white text-[9px] px-2 py-0.5 rounded-full">
                      2 hrs 16 mins
                    </span>
                  </div>
                </div>

                <div className="text-xs">
                  <p className="font-bold text-gray-900">
                    Learn Figma from Scratch
                  </p>
                  <p className="text-gray-400 text-[11px]">
                    by Bytespace Studio
                  </p>
                </div>
              </div>

              {/* 2. FOREGROUND LAYER: Main Student Image */}
              <div className="absolute bottom-0 right-0 left-1 z-20 w-full max-w-[480px]">
                <img
                  src={studentMale}
                  alt="Student learning online"
                  className="w-full drop-shadow-2xl"
                />
              </div>

              {/* 3. FOREGROUND LAYER: Floating Progress Bar Card */}
              <div className="absolute h-[100px] right-[-10px] bg-white p-4 rounded-2xl shadow-xl border border-gray-100 w-[170px] z-30">
                <div className="flex justify-between text-xs text-gray-500 mb-1 mt-1">
                  <span>Learning Progress</span>
                </div>
                <div className="flex justify-between text-3xl text-gray-500 mb-1 mt-1">
                  <span className="font-bold text-gray-900">55%</span>
                </div>

                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden mt-2">
                  <div className="bg-lime-400 h-full w-[55%] rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 2. SECOND ROW: Create & Manage Courses Easily Section */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full pt-12">
          {/* Left Side: Visual Elements & Cards Layering */}
          <div className="relative flex justify-center items-center w-full lg:w-1/2">
            {/* Green Spiral Decorative Shape */}
            <img
              src={spiralShape}
              alt=""
              aria-hidden="true"
              className="absolute top-[28px] left-[330px] w-[140px] z-30 pointer-events-none scale-x-[-1]"
            />

            {/* Main Container for Layering */}
            <div className="relative w-full max-w-[480px] h-[440px] flex items-center justify-center">
              {/* 1. TOP BLUE CARD: Total Revenue */}
              <div className="absolute top-4 left-8 bg-blue-600 text-white p-4 rounded-2xl shadow-xl w-[190px] z-10">
                <p className="text-[10px] text-blue-200">Total Revenue</p>
                <p className="text-[9px] text-blue-300 mb-1">July 1-28</p>
                <p className="text-xl font-bold mb-2">$120.29</p>
                <div className="w-full bg-blue-500/50 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-lime-400 h-full w-[70%] rounded-full"></div>
                </div>
              </div>

              {/* 2. LOWER BLUE CARD: Year to Date */}
              <div className="absolute top-40 left-[20px] bg-blue-600 text-white p-4 rounded-2xl shadow-xl w-[140px] z-10">
                <p className="text-[10px] text-blue-200">Year to Date</p>
                <p className="text-[9px] text-blue-300 mb-1">2023</p>
                <p className="text-xl font-bold mb-2">$1,200.38</p>
                <span className="bg-lime-400 text-gray-900 text-[10px] font-bold px-2 py-0.5 rounded-md inline-block">
                  +15%
                </span>
              </div>

              {/* 3. FOREGROUND LAYER: Main Instructor/Support Image */}
              <div className="absolute bottom-0 right-0 z-20 w-[380px]">
                <img
                  src={studentFeMale}
                  alt="Instructor managing courses"
                  className="w-full drop-shadow-2xl"
                />
              </div>

              {/* 4. BOTTOM FLOATING CARD: Happy Students */}
              <div className="absolute bottom-6 left-12 bg-white p-3 rounded-2xl shadow-xl border border-gray-100 w-[210px] z-30">
                <p className="text-xs font-bold text-gray-900 mb-1">
                  Happy Students
                </p>
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-xs font-bold text-gray-800">4.8</span>
                  <span className="text-[10px] text-yellow-400">★</span>
                  <span className="text-[10px] text-gray-400">(240)</span>
                </div>
                <div className="flex items-center justify-between">
                  {/* Student Avatars Stack */}
                  <div className="flex -space-x-2 overflow-hidden">
                    {avatars.map((avatar, index) => (
                      <img
                        key={index}
                        src={avatar}
                        alt=""
                        className="inline-block h-6 w-6 rounded-full ring-2 ring-white object-cover"
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side: Title, Description & Feature List */}
          <div className="w-full lg:w-1/2 flex flex-col items-start">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 tracking-tight mb-4">
              Create & Manage <br /> Courses Easily.
            </h2>
            <p className="text-gray-500 text-sm lg:text-base mb-8 leading-relaxed">
              <strong className="text-gray-800">ByteSpace</strong> supports
              individuals or entities in the creation, publication, and
              administration of educational courses.
            </p>

            {/* Feature List */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs shrink-0">
                  ✓
                </div>
                <span className="font-semibold text-gray-800 text-sm">
                  Share Your Expertise
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs shrink-0">
                  ✓
                </div>
                <span className="font-semibold text-gray-800 text-sm">
                  Monetize Your Passion
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs shrink-0">
                  ✓
                </div>
                <span className="font-semibold text-gray-800 text-sm">
                  Flexibility and Autonomy
                </span>
              </div>

              <div className="flex items-center gap-3">
                <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center text-xs shrink-0">
                  ✓
                </div>
                <span className="font-semibold text-gray-800 text-sm">
                  Build a Community
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
