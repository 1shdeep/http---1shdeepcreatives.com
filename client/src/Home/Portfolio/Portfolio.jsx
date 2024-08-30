import React from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import img from "../../Assets/Portfolio/img.jfif";
import { Autoplay, FreeMode, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import { HiOutlineArrowUpRight } from "react-icons/hi2";

const portfolioDetails = [
  {
    photo: img,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    head: "OUR SERVICES",
  },
  {
    photo: img,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    head: "OUR SERVICES",
  },
  {
    photo: img,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    head: "OUR SERVICES",
  },
];

export default function Portfolio() {
  return (
    <section className="portfolio-section container">
      <div className="portfolio-header">
        <div>
          <h2>PORTFOLIO</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy.
          </p>
        </div>
        <Link to="/Projects" className="portfolio-contact contact-link">
          MORE WORK{" "}
          <span className="arrow">
            <HiOutlineArrowUpRight />
          </span>
        </Link>
      </div>

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
        freeMode={true}
        modules={[Autoplay, FreeMode]}
        className="mySwiper"
      >
        <SwiperSlide className="portfolio-slide">
          <div className="portfolio-card">
            <img src={img} alt="" srcset="" />
            <h3>OUR SERVICES</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </SwiperSlide>
        
        <SwiperSlide className="portfolio-slide">
          <div className="portfolio-card">
            <Link to= "/Details">
            <img src={img} alt="" srcset="" />
            </Link>
            <h3>OUR SERVICES</h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry.
            </p>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </section>
  );
}
