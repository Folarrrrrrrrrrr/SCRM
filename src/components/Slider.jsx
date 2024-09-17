import React, { useRef } from "react";
import Card from "./Card";
import "./slider.css";
import nextIcon from '../assets/images/next.png'
import BackIcon from '../assets/images/back.png'


function Slider({ Testomonials }) {
  const sliderRef = useRef(null);
  const scroll = (direction) => {
    const number = (135 * 100) / 100;
    if (sliderRef.current) {
      const scrollAmount = direction === "left" ? -number : number;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <>
      <h1 className="text-center text-black mt-20 text-xl">
        {" "}
        Executed Projects
      </h1>
      <div className="sliderContainer">
        <button
          className="sliderButton text-black left"
          onClick={() => scroll("left")}
        >
          <img src={BackIcon} alt="" srcset="" />
        </button>
        <div className="slider" ref={sliderRef}>
          <div className="sliderInner">
            {Testomonials.map((item, index) => (
              <Card
                key={index}
                projectBrief={item.projectBrief}
                clientLogo={item.clientLogo}
              />
            ))}
          </div>
        </div>
        <button
          className="sliderButton text-black right"
          onClick={() => scroll("right")}
        >
          <img src={nextIcon} alt="" srcset="" />
        </button>
      </div>
    </>
  );
}

export default Slider;
