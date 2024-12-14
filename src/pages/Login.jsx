

const SignupForm = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center ">
      <div className="max-w-4xl w-full flex bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="w-1/2 bg-blue-50 p-8 hidden md:block">
          <div className="relative h-full flex items-center justify-center">
            <img 
              src=""
              alt=""
              className="object-cover rounded-lg"
            />
          </div>
        </div>
        <div className="w-full md:w-1/2 p-8">
          <div className="max-w-md mx-auto">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">Create an account</h2>
            <p className="text-sm text-gray-600 mb-6">Enter your details below</p>

            <form className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition"
                />
              </div>

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

              <button
                type="submit"
                className="w-full bg-red-500 text-white py-3 rounded-lg hover:bg-red-600 transition duration-200"
              >
                Create Account
              </button>

              <button
                type="button"
                className="w-full border border-gray-300 text-gray-700 py-3 rounded-lg flex items-center justify-center space-x-2 hover:bg-gray-50 transition duration-200"
              >
                <svg className="w-5 h-5" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M12.545,10.239v3.821h5.445c-0.712,2.315-2.647,3.972-5.445,3.972c-3.332,0-6.033-2.701-6.033-6.032s2.701-6.032,6.033-6.032c1.498,0,2.866,0.549,3.921,1.453l2.814-2.814C17.503,2.988,15.139,2,12.545,2C7.021,2,2.543,6.477,2.543,12s4.478,10,10.002,10c8.396,0,10.249-7.85,9.426-11.748L12.545,10.239z"
                  />
                </svg>
                <span>Sign up with Google</span>
              </button>
            </form>

            <div className="mt-6 text-center">
              <span className="text-gray-600">Already have an account?</span>
              <a href="#" className="text-blue-600 hover:underline ml-1">
                Log in
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;