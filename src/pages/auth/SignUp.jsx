

const heroBackground = {
  backgroundColor: "#0033FF",
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)",
  backgroundSize: "72px 72px",
};

export default function SignUp() {
  return (
    <div
      className="min-h-screen w-full flex items-center justify-center p-4 sm:p-6 lg:p-8 text-white"
      style={heroBackground}
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        
        {/* Left Side: Branding & Info */}
        <div className="space-y-6">
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
            Sign up and come in
          </h2>
          <p className="text-blue-100 text-xs sm:text-sm max-w-md leading-relaxed">
            The registration process is straightforward, uncomplicated, and efficient, allowing users to sign up quickly, easily, and at no cost.
          </p>
          {/* Decorative preview card graphic placeholder */}
          <div className="relative p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 max-w-sm space-y-3 shadow-xl">
            <div className="text-xs font-semibold text-white">The Power of Big Data</div>
            <div className="text-[10px] text-blue-200">by purepearl studio</div>
            <div className="flex justify-between items-center text-xs pt-2 border-t border-white/10">
              <span className="bg-lime-400 text-blue-900 font-bold px-2 py-0.5 rounded text-[10px]">$25 / lifetime</span>
            </div>
          </div>
        </div>

        {/* Right Side: Sign Up Form Card */}
        <div className="bg-white text-gray-900 p-8 sm:p-10 rounded-3xl shadow-2xl w-full max-w-md mx-auto">
          <div className="mb-6">
            <span className="text-[11px] text-gray-400 font-medium">Create an Account</span>
            <h1 className="text-2xl font-bold text-gray-900 tracking-tight">Welcome to ByteSpace</h1>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Full Name</label>
              <input
                type="text"
                placeholder="Jamie Davis"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-50/50"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Email</label>
              <input
                type="email"
                placeholder="designer@example.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-50/50"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-700 mb-1.5">Password</label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-600 bg-gray-50/50"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-lime-400 hover:bg-lime-300 text-blue-900 font-bold py-3 rounded-xl text-sm transition shadow-md cursor-pointer mt-2"
            >
              Continue
            </button>
          </form>

          <p className="text-center text-xs text-gray-500 mt-6">
            Already have an account?{' '}
            <a href="/login" className="text-blue-600 font-semibold hover:underline">
              Login
            </a>
          </p>
        </div>

      </div>
    </div>
  );
}