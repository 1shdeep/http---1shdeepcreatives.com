import "./Testimonials.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faQuoteLeft } from "@fortawesome/free-solid-svg-icons";
import {Autoplay, Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import { Bounce } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import React, { useEffect, useState } from "react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import { getTestimonials } from "../../services/testimonialsService";

const Testimonials = () => {
  const [testimonials, setTestimonials] = useState([]);
  const [isDataFetched, setIsDataFetched] = useState(false);

  useEffect(() => {
    if (!isDataFetched) {
      fetchTestimonials();
    }
  }, [isDataFetched]);

  const fetchTestimonials = async () => {
    try {
      const testimonialsData = await getTestimonials();
      setTestimonials(testimonialsData.data);
      setIsDataFetched(true);
      console.log(testimonialsData.data, "testimonialss");
    } catch (error) {
      console.error("Error fetching testimonials:", error);
    }
  };

  return (
    <section id="clients " className="bg-white p-0 cursor-light no-transition">
      <div className="section-padding parallax-setting parallaxie parallax2">
        {/* <Bounce> */}
          <div className="container-testimonials">
            <div className="row">
              <div className="col-md-12">
                <div className="main-title wow fadeIn" data-wow-delay="300ms">
                  <h2
                    className="mb-0"
                    style={{ color: "white", justifySelf: "center" }}
                  >
                    Valuable<span className="color-pink"> Clients</span>
                  </h2>
                </div>
              </div>
            </div>

            <div className="testimonial-images">
              <div className="owl-thumbs owl-dots d-lg-block d-none">
                {testimonials.map((testimonial, index) => (
                  <div
                    key={testimonial._id}
                    className={`owl-dot animated-wrap ${
                      index === 0 ? "active" : ""
                    }`}
                  >
                    <img
                      src={testimonial.logoUrl}
                      alt={`Testimonial ${index + 1}`}
                      className="animated-element"
                    />
                  </div>
                ))}
              </div>
            </div>

            <div className="row align-items-center position-relative">
              <div className="col-md-12">
                <div
                  className="owl-carousel owl-theme testimonial-two hide-cursor mx-auto wow zoomIn"
                  data-wow-delay="400ms"
                >
                  <Swiper
                    freeMode={true}
                    autoplay={{
                      delay: 3500,
                      disableOnInteraction: false,
                    }}
                    modules={[
                      Autoplay,
                      Navigation,
                      Pagination,
                      Scrollbar,
                      A11y,
                    ]}
                    spaceBetween={50}
                    slidesPerView={1}
                    navigation={false}
                    pagination={false}
                    scrollbar={{ draggable: true }}
                    onSwiper={(swiper) => console.log(swiper)}
                    onSlideChange={() => console.log("slide change")}
                  >
                    {testimonials.map((testimonial, index) => (
                      <SwiperSlide key={index}>
                        <div className="testimonial-item">
                          <p className="color-white testimonial-para mb-15px">
                            {testimonial.description}
                          </p>
                          <div className="testimonial-post">
                            <a href="/javascript:void(0)" className="post ">
                              <img src={testimonial.logoUrl} alt="" />
                            </a>
                            <div className="text-content">
                              <h5 className="color-white text-capitalize">
                                {testimonial.client}
                              </h5>
                            </div>
                          </div>
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </div>
            </div>
          </div>
        {/* </Bounce> */}
      </div>
    </section>
  );
};

export default Testimonials;


