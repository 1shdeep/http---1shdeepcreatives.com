import React from "react";
import ContactSection from "../../Home/Contact/Contact";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./Details.css";

import Master from "../../Assets/Details/Master.jpg";

// import required modules
import { Autoplay, FreeMode} from "swiper/modules";

const details = [
  {
    photo: Master,
  },
  {
    photo: Master,
  },

];

const Details = () => {
  return (
    <>
      {/* Master Image */}
      <div className="master">
        <img src={Master} alt="" srcset="" />
      </div>

      <div className="container">
        {/* Head */}

        <div className="details-heading">
          <h1>SAMSUNG</h1>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
        </div>

        {/*  */}

        <div class="project-section">
          <div class="column">
            <h2 class="highlighted-heading">PROJECT OVERVIEW</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
          <div class="column">
            <h2>OUTPUT</h2>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
            <p>
              Lorem Ipsum has been the industry's standard dummy text ever since
              the 1500s, when an unknown printer took a galley of type and
              scrambled it to make a type specimen book.
            </p>
          </div>
        </div>

        {/* Good Images */}
        <div className="goodimg">
          <img src={Master} alt="" srcset="" />
        </div>

        {/* Other Images */}

        <div className="other-grid">
          <div className="other-card">
            <img src={Master} alt="" srcset="" />
          </div>
          <div className="other-card">
            <img src={Master} alt="" srcset="" />
          </div>
          <div className="other-card">
            <img src={Master} alt="" srcset="" />
          </div>
          <div className="other-card">
            <img src={Master} alt="" srcset="" />
          </div>
          <div className="other-card">
            <img src={Master} alt="" srcset="" />
          </div>
          <div className="other-card">
            <img src={Master} alt="" srcset="" />
          </div>
        </div>

        {/* Swiper */}
        <Swiper
          slidesPerView={1} /* Show 1 slide on small screens */
          spaceBetween={20}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 1,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
          }}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, FreeMode]}
          className="mySwiper"
        >
          {details.map((details, index) => (
            <SwiperSlide key={index} className="testimonial-slide">
              <div className="testimonial-card">
                <img
                  src={details.photo}
                  alt={details.name}
                  className="testimonial-photo"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <ContactSection />
      </div>
    </>
  );
};

export default Details;
