import React from "react";
import './FooterResponsiveness.css'
function Footer() {
  return (
    <>
      <div className="-mt-40  h-80 flex ml-96 footerContainer">
        <div className="Quicklinks  mt-28 ml-12">
          <h3 className="quickHeader text-xl"> Quick Links</h3>
          <ul>
            <li> About Us </li>
            <li> Our Services </li>
            <li> Contact Us </li>
          </ul>
        </div>
        <div className="Quicklinks mt-28 ml-12">
          <h3 className="quickHeader text-xl"> Our Socials</h3>
          <ul>
            <li> LinkedIn </li>
            <li> Email </li>
          </ul>
        </div>
        {/* <p className="copyright mt-72 ml-96"> &copy; Folawe Oluwole 2024 </p> */}
      </div>
    </>
  );
}

export default Footer;
