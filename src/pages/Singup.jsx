
const Login = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center p-6">
      <div className="max-w-4xl w-full flex bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-1/2 bg-blue-50 p-8 hidden md:block">
          <div className="relative h-full flex items-center justify-center">
            <img 
              src="/api/placeholder/400/400"
              alt="Shopping cart with smartphone and shopping bags"
              className="object-cover rounded-lg"
            />
          </div>
        </div>

        <div className="w-full md:w-1/2 p-8">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Log in to Exclusive</h2>
            <p className="text-sm text-gray-600 mb-6">Enter your details below</p>

            <form className="space-y-4">
              <div>
                <input
                  type="text"
                  placeholder="Email or Phone Number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>

              <div>
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>

              <div className="flex items-center justify-between">
                <button
                  type="submit"
                  className="bg-red-500 text-white px-8 py-2 rounded-lg hover:bg-red-600 transition duration-200"
                >
                  Log in
                </button>
                
                <a href="#" className="text-red-500 text-sm hover:underline">
                  Forgot Password?
                </a>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;