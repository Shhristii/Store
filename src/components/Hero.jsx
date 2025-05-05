import React from "react";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="bg-gray-900 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-6">
          Welcome to <span className="text-indigo-500">MyApp</span>
        </h1>
        <p className="text-lg sm:text-xl mb-8 max-w-2xl mx-auto">
          Build something amazing with our modern tools and APIs. Fast,
          reliable, and easy to use.
        </p>
        <div className="flex justify-center gap-4">
          <Link
            to="/store"
            className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold rounded-md"
          >
            Get Started
          </Link>
          <Link
            to="/about"
            className="px-6 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md"
          >
            Learn More
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
