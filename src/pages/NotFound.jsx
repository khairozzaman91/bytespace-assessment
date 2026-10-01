

const heroBackground = {
  backgroundColor: "#0033FF",
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
  backgroundSize: "72px 72px",
};

export default function NotFound() {
  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center text-white px-4 text-center"
      style={heroBackground}
    >
      <div className="space-y-4 max-w-xl mx-auto">
        {/* Large 404 Text with lime gradient/color vibe */}
        <h1 className="text-8xl sm:text-9xl font-extrabold tracking-wider text-lime-400 drop-shadow-md">
          404
        </h1>

        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-white">
          The page you are looking for doesn’t exist
        </h2>

        <p className="text-xs sm:text-sm text-blue-100 opacity-90 pb-2">
          Try to use a correct url or go back to homepage to start again
        </p>

        <div>
          <a
            href="/"
            className="inline-block bg-lime-400 hover:bg-lime-300 text-blue-900 font-bold px-8 py-3 rounded-full text-xs sm:text-sm transition shadow-lg cursor-pointer"
          >
            Back to Home
          </a>
        </div>
      </div>
    </div>
  );
}