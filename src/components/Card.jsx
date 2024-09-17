import React from "react";

import "./card.css";
function Card({ projectBrief, clientLogo }) {
  return (
    <>
      <div className="sliderCard text-black ">
        <img src={clientLogo} alt="" />
        <p className="projectBrief ">
            {projectBrief}
        </p>
      </div>
    </>
  );
}

export default Card;
