import React, { useEffect, useRef, useState } from "react";
import './Hero.css';
import BG from '../../Assets/Hero-Video/slider-video.mp4';
import { TypeAnimation } from "react-type-animation";

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;

    const handleInteraction = () => {
      if (!isPlaying) {
        setIsPlaying(true);
        video.play().catch(error => console.error("Video playback error:", error));
      }
    };

    // Add event listeners for touch events to start video playback
    window.addEventListener("touchstart", handleInteraction);

    return () => {
      // Remove event listeners when component unmounts
      window.removeEventListener("touchstart", handleInteraction);
    };
  }, [isPlaying]);

  return (
    <section id="home" className="relative h-screen">
      {/* Background Video */}
      <video
        ref={videoRef}
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
              "Innovate",
              1000,
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
          Creativity is contagious, pass it on.
        </p>
      </div>
    </section>
  );
};

export default VideoSection;
