import React from "react";
import ZUIII_LOGO from "../assets/ZUIII_LOGO.png";

const About = () => {
  return (
    <div className="min-h-lvh">
      <div className="my-6 m-auto px-8 text-center md:w-6/12">
        <img src={ZUIII_LOGO} alt="logo" className="m-auto" />
        <p className="lg:text-base font-medium text-xl font-serif">
          The ZUIII is inspired by childhood nostalgia. It was the word that
          excited children the most when they sat on bikes. They felt like they
          were driving and would mimic the sound, saying "ZUIII... ZUIII..."
        </p>
      </div>
    </div>
  );
};

export default About;
