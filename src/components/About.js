import React from "react";
import ZUIII_LOGO from "../assets/ZUIII_LOGO.png";

const About = () => {
  return (
    <div className="min-h-lvh">
      <div className="w-3/12 my-6 m-auto px-8 text-center">
        <img src={ZUIII_LOGO} alt="logo" />
        <p className="text-sm font-medium font-serif">
          The ZUIII is inspired by childhood nostalgia. It was the word that
          excited children the most when they sat on bikes. They felt like they
          were driving and would mimic the sound, saying "ZUIII... ZUIII..."
        </p>
      </div>
    </div>
  );
};

export default About;
