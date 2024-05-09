import React from "react";
import './Hero.css'
import BG from '../../Assets/Hero-Video/slider-video.mp4'
import Typewriter from "typewriter-effect/dist/core";
import { TypeAnimation } from "react-type-animation";



const VideoSection = () => {

  return (
    <section id="home" className="relative h-screen">
      {/* Background Video */}
      <video
        autoPlay
        muted
        loop
        className="absolute top-0 left-0 object-cover w-full h-full"
      >
        <source src={BG} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
       

      <div className="banner-overlay"></div>

      {/* Text Overlay */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
        <h5 className="text-4xl font-thin mb-6">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              "Innovate",
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              "Create",
              1000,
              "Inspire",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ fontSize: "2em", display: "inline-block" }}
            repeat={Infinity}
          />
        </h5>
        <p className="tagline text-lg">
          {" "}
          Creativity is contagious, pass it on.
        </p>
      </div>
    </section>
  );
};

export default VideoSection;
