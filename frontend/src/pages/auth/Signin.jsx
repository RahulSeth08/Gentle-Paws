import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import authbanner from "../../assets/authbanner.jpg";
import { Loader2 } from "lucide-react";

export default function Signin() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false); // New loading state
  const navigate = useNavigate();
  const API_URL = import.meta.env.VITE_API_URL;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous error and set loading to true
    setError(null);
    setLoading(true);

    try {
      const response = await fetch(`${API_URL}/token/`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();

      // Store the tokens in localStorage (or context for global access)
      localStorage.setItem("access_token", data.access);
      localStorage.setItem("refresh_token", data.refresh);

      // Redirect to the dashboard or any other protected route
      navigate("/");
    } catch (error) {
      setError("Invalid email or password");
      console.error("Error during login:", error);
    } finally {
      setLoading(false); // Set loading to false after the request
    }
  };

  return (
    <section className="bg-white">
      <div className="grid grid-cols-1 lg:grid-cols-2 h-screen">
        {/* Left Section */}
        <div className="relative flex items-end px-4 pb-10 pt-60 sm:pb-16 md:justify-center lg:pb-24 bg-gray-50 sm:px-6 lg:px-8">
          <div className="absolute inset-0">
            <img
              className="object-cover object-center w-full h-full"
              src={authbanner}
              alt="Auth Banner"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent"></div>

          <div className="relative">
            <div className="w-full max-w-xl xl:w-full xl:mx-auto xl:pr-24 xl:max-w-xl">
              <h3 className="text-4xl font-bold text-white">
                Join 35k+ web professionals & <br className="hidden xl:block" />
                build your website
              </h3>
              <ul className="grid grid-cols-1 mt-10 sm:grid-cols-2 gap-x-8 gap-y-4">
                {[
                  "Commercial License",
                  "Unlimited Exports",
                  "120+ Coded Blocks",
                  "Design Files Included",
                ].map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3">
                    <div className="inline-flex items-center justify-center flex-shrink-0 w-5 h-5 bg-blue-500 rounded-full">
                      <svg
                        className="w-3.5 h-3.5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-lg font-medium text-white">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="flex items-center justify-center px-4 py-10 bg-white sm:px-6 lg:px-8 sm:py-16 lg:py-24">
          <div className="xl:w-full xl:max-w-sm 2xl:max-w-md xl:mx-auto">
            <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl">
              Sign in to Celebration
            </h2>
            <p className="mt-2 text-base text-gray-600">
              Don’t have an account?{" "}
              <a
                href="/signup"
                title="Sign Up"
                className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
              >
                Create a free account
              </a>
            </p>

            {error && (
              <p className="text-red-500 text-sm mt-2">{error}</p>
            )}

            <form onSubmit={handleSubmit} className="mt-8">
              <div className="space-y-5">
                {/* Email Field */}
                <div>
                  <label
                    htmlFor="email"
                    className="text-base font-medium text-gray-900"
                  >
                    Email address
                  </label>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                      </svg>
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="Enter email to get started"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-base font-medium text-gray-900"
                    >
                      Password
                    </label>
                    <a
                      href="#"
                      className="text-sm font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
                    >
                      Forgot password?
                    </a>
                  </div>
                  <div className="mt-2.5 relative text-gray-400 focus-within:text-gray-600">
                    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                      <svg
                        className="w-5 h-5"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 008 11a4 4 0 118 0c0 1.017-.07 2.019-.203 3m-2.118 6.844A21.88 21.88 0 0015.171 17m3.839 1.132c.645-2.266.99-4.659.99-7.132A8 8 0 008 4.07M3 15.364c.64-1.319 1-2.8 1-4.364 0-1.457.39-2.823 1.07-4"
                        />
                      </svg>
                    </div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={handleChange}
                      required
                      className="block w-full py-4 pl-10 pr-4 text-black placeholder-gray-500 transition-all duration-200 border border-gray-200 rounded-md bg-gray-50 focus:outline-none focus:border-blue-600 focus:bg-white caret-blue-600"
                    />
                  </div>
                </div>

                {/* Submit Button */}
                <div>
                  <button
                    type="submit"
                    disabled={loading}
                    className="inline-flex items-center justify-center w-full px-4 py-4 text-base font-semibold text-white transition-all duration-200 border border-transparent rounded-xl bg-gradient-to-r from-fuchsia-600 to-blue-600 focus:outline-none hover:opacity-80 focus:opacity-80"
                  >
                    {loading ? <Loader2 className="w-5 h-5 animate-spin text-white" /> : "Log In"}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
