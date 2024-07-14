import React, { useState } from "react";
import serviceImage1 from "../assets/1.png";
import serviceImage2 from "../assets/2.png";
import serviceImage3 from "../assets/3.jpg";
import serviceImage4 from "../assets/4.png";
import webServiceIcon from "../assets/webServiceIcon.svg";
import arrow from "../assets/arrow.png";

const services = [
  {
    image: serviceImage1,
    description: "Service 1 description",
  },
  {
    image: serviceImage2,
    description: "Service 2 description",
  },
  {
    image: serviceImage3,
    description: "Service 3 description",
  },
  {
    image: serviceImage4,
    description: "Service 4 description",
  },
];

function ServicesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0);

  return (
    <section className="services-slider container">
      <h3>WHAT WE DO</h3>
      <div className="serviceProvider">
        <h1 className="service-heading">SERVICES PROVIDE FOR YOU</h1>
        <div className="service-description">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Pariatur
          atque debitis autem error maxime ipsa, distinctio aut possimus, culpa
          ut, laborum fugiat aliquam cumque recusandae a temporibus amet.
          Nostrum, optio.
        </div>
      </div>
      <div className="slider">
        {services.map((service, index) => (
          <div
            className="slide"
            key={index}
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            <div className="slide-content">
              <img src={service.image} alt={`Service ${index + 1}`} />
              <div className="overlay">
                <div className="overlay-content">
                  <img src={webServiceIcon} alt="webIcon" />
                  <h3>WEB DEVELOPMENT</h3>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quaerat facilis voluptas, ullam eum ratione totam! Ipsam
                    delectus aperiam est ducimus veniam blanditiis vitae,
                    doloremque laboriosam doloribus velit autem sed id!
                  </p>
                  <a
                    href="https://www.fylehq.com"
                    target="none"
                    className="read-button"
                  >
                    READ MORE
                    <img src={arrow} alt="" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="dots">
        {services.map((_, index) => (
          <div
            key={index}
            className={`dot-border ${index === currentSlide ? "active" : ""}`}
          >
            <span
              key={index}
              className={`dot ${index === currentSlide ? "active" : ""}`}
              onClick={() => setCurrentSlide(index)}
            ></span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ServicesSlider;
