import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faBitbucket } from "@fortawesome/free-brands-svg-icons";
// import { faVideo, faBullhorn } from "@fortawesome/free-solid-svg-icons";
import circle from "../../Assets/About/about-circle.png";
// import bitbucket from "../../Assets/About/bitbucket.png";
import bitbucket from "../../Assets/About/lens.png";
import camera from "../../Assets/About/camera.png";
import speaker from "../../Assets/About/speaker.png";
import "./About.css";

const About = () => {
  return (
    <div
      className="about flex flex-col md:flex-row justify-center items-center relative "
      id="about"
    >
      <img
        src={circle}
        className="semiCircle absolute right-0 top-1/4"
        alt="Circle"
      />

      <div className="card-content container mx-auto flex flex-col md:flex-row">
        <div className="about-graphics md:w-2/4 flex gap-5">
          <div className="w-full md:w-1/2 flex flex-col gap-6 justify-center items-center">
            <div className="about-card p-6">
              {/* <FontAwesomeIcon
                className="card-icon font-primary"
                icon={faBullhorn}
              /> */}
              <img
                className="card-icon font-primary"
                src={speaker}
                alt="speaker"
              />

              <div className="about-heading">
                <p className="text-left mt-6 text-black">
                  Marketing Madness with Artful Content
                </p>
              </div>
            </div>
          </div>
          <div className="w-full md:w-1/2 flex flex-col gap-6 justify-center items-center">
            <div className="about-card p-6">
              {/* <img className="card-icon" src={bitbucket} alt="" /> */}
              <img
                className="card-icon font-primary"
                src={bitbucket}
                alt="lens"
              />
              <div className="about-heading">
                <p className="text-left mt-6 text-black">
                  Influencer Engagement: The Next Big Thing
                </p>
              </div>
            </div>
            <div className="about-card p-6">
              {/* <FontAwesomeIcon className="card-icon" icon={faVideo} /> */}
              <img
                className="card-icon font-primary"
                src={camera}
                alt="camera"
              />
              <div className="about-heading">
                <p className="text-left mt-6 text-black">
                  Quality Content Production at its best
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-2/4 flex flex-col justify-between">
          <h2 className="about-content m-3 text-center md:text-left font-primary text-white font-semibold">
            Not just a <br /> <span>Creative Agency</span> but a Community of
            Artists and Creative Minds.
          </h2>
          <p className="text-left creative mb-7 text-white">
            1shdeep Creatives is India’s first “Premium Quality Oriented”
            content production engine and marketing company backed by the
            community of the best Creative thinkers, filmmakers, photographers,
            and artists. A creative network designed to cater to the needs of
            all. We believe in empowering our clients to ‘Think Forward’ through
            our strategic creative concepts backed by creativity and technology
            in an environment of rapid change so that our clients can succeed in
            their marketing transformation and content production through art.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
