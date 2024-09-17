import "../assets/style/styles.css";
import Resume from "../assets/docs/FOLAWE_OLUWOLE_RESUME.pdf";

const Services = () => {

  return (
    <>
      <div id="services" className="section ">
        <h2 className="line-title"> Our Services</h2>
        <div className="sectionFourContainer justify-center">
          <div className="servicesContainer  mt-5">
            <div className="serviceOne slideRightOnly">
              <h3 className="">Strategic Planning and Advisory</h3>
            </div> 
            <div className="serviceTwo slideLeftOnly">
              <h3>Research Management & Collaboration </h3>
            </div>
            <div className="serviceThree slideRightOnly">
              <h3> Business Diagnostic Reviews </h3>
            </div>
            <div className="serviceFour slideLeftOnly">
              <h3>Investment Facilitation and Promotion</h3>
            </div>
            <div className="serviceFive slideRightOnly">
              <h3> Fund-Raising Consultancy </h3>
            </div>
            <div className="serviceSix slideLeftOnly">
              <h3> Financial Due Diligence </h3>
            </div>
            <div className="serviceSeven slideRightOnly">
              <h3> Comprehensive Feasibility Study</h3>
            </div>
            <div className="serviceEight slideLeftOnly">
              <h3> Corporate Governance</h3>
            </div>
            <div className="serviceNine slideRightOnly">
              <h3>Policy Analysis and Reforms using Local Situation Analysis</h3>
            </div>
            <div className="serviceTen slideLeftOnly">
              <h3> Company Retreat</h3>
            </div>
          </div>
          {/* <div className="contactContainer">
            <h2 className="line-title"> Contact Me</h2>
            <div className="row">
              <div className="contact-col-one">
                <p className="email">Oluwolefolawe@gmail.com</p>
                <p className="">
                  <a href="callto:+2349036800896"> +2349036800896 </a>
                </p>
                <div className="socials">
                  <a href="">
                    <i className="bx bxl-twitter" id="soch"></i>{" "}
                  </a>
                  <a href="">
                    {" "}
                    <i className="bx bxl-linkedin-square" id="soch"></i>
                  </a>
                  <a href="">
                    {" "}
                    <i className="bx bxl-facebook-square" id="soch"></i>
                  </a>
                </div>
                <a href={Resume} download className="btn btn-two">
                  My Resume
                </a>
              </div>
              <div className="contact-col-two">
                <form action="">
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name"
                    required
                  />
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                  />
                  <textarea
                    name="message"
                    rows="10"
                    placeholder="Your Message"
                  ></textarea>

                  <button type="submit" className="btn form-btn">
                    {" "}
                    Submit{" "}
                  </button>
                  <br />
                </form>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </>
  );
};

export default Services;
