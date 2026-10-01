import Creator1 from "../assets/Creator/Frame1.png";
import Creator2 from "../assets/Creator/Frame2.png";
import Creator3 from "../assets/Creator/Frame3.png";
import Creator4 from "../assets/Creator/Frame4.png";
import Creator5 from "../assets/Creator/Frame5.png";
import Creator6 from "../assets/Creator/Frame6.png";
import Creator7 from "../assets/Creator/Frame7.png";

export default function CreatorCTA() {
  return (
    <section className="relative bg-blue-700 overflow-hidden py-20">
      {/* Decorative shapes - desktop only (7 shapes) */}
      <img
        src={Creator1}
        alt=""
        aria-hidden="true"
        className="absolute top-0  w-[160px] hidden lg:block pointer-events-none"
      />
      <img
        src={Creator2}
        alt=""
        aria-hidden="true"
        className="absolute top-6 left-[120px] w-[160px] hidden lg:block pointer-events-none"
      />


      <img
        src={Creator3}
        alt=""
        aria-hidden="true"
        className="absolute top-38 w-[120px] hidden lg:block pointer-events-none"
      />


      <img
        src={Creator4}
        alt=""
        aria-hidden="true"
        className="absolute top-[280px]  w-[290px] hidden lg:block pointer-events-none"
      />


      <img
        src={Creator5}
        alt=""
        aria-hidden="true"
        className="absolute top-[8px] right-[160px]  w-[120px] hidden lg:block pointer-events-none"
      />


      <img
        src={Creator6}
        alt=""
        aria-hidden="true"
        className="absolute bottom-0 w-[140px] top-1 right-0.5 hidden lg:block pointer-events-none"
      />


      <img
        src={Creator7}
        alt=""
        aria-hidden="true"
        className="absolute bottom-2 right-1  hidden lg:block pointer-events-none"
      />

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight">
          Unlock Your Potential as a
          <br />
          Creator with ByteSpace
        </h2>

        <p className="mt-6 text-sm text-blue-100 leading-relaxed">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize
          our Course Editor, and showcase your expertise by publishing your
          finest course on the ByteSpace Course Library.
        </p>

        <button
          type="button"
          className="mt-8 bg-lime-400 text-blue-700 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-lime-300"
        >
          Join as Creator
        </button>
      </div>
    </section>
  );
}