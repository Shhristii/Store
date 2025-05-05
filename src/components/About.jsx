import React from "react";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="max-w-6xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row items-center gap-12">
        {/* Image or illustration */}
        <div className="md:w-1/2">
          <img
            src="https://t3.ftcdn.net/jpg/01/92/95/00/360_F_192950048_PUUtUFKtCTaiCSXbDMoo7Ex8VO0TnYK2.jpg"
            alt="About us"
            className="rounded-lg shadow-lg w-full"
          />
        </div>

        {/* Text content */}
        <div className="md:w-1/2">
          <h2 className="text-3xl font-extrabold text-gray-900 mb-4">
            About Us
          </h2>
          <p className="text-gray-700 mb-6">
            At <strong>MyApp</strong>, we believe in building technology that
            empowers businesses and individuals alike. Our team is dedicated to
            delivering reliable, scalable, and beautifully designed solutions
            that solve real-world problems.
          </p>
          <p className="text-gray-700">
            Whether you're a developer, a startup founder, or an enterprise
            leader, our platform is designed to help you move faster and build
            better. Join thousands who are already experiencing the future of
            innovation with MyApp.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
