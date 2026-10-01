// Import your assets/images for this section
import studentMale from "../assets/hero-section/hero-image-boy.png";
import spiralShape from "../assets/hero-section-logo/speiral.png";
import coursePreviewImg from "../assets/course/figma.png";

export default function ProfessionalGrowth() {
  return (
    <section className="relative w-full bg-gradient-to-b from-[#f4f7fe] via-white to-[#f4f7fe] py-20 overflow-hidden">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* TOP ROW: Professional Growth */}
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
      </div>
    </section>
  );
}