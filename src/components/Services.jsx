import "../assets/style/styles.css";
import Resume from "../assets/docs/FOLAWE_OLUWOLE_RESUME.pdf";

const Services = () => {
  return (
    <>
      <div id="services" className="section ">
        <h2 className="line-title"></h2>
        <div className="sectionFourContainer justify-center">
          <div className="servicesContainer mt-5">
            <div className="spaImg serviceOne ">
              <div className="imageOverlay"></div>
              <div className="overlayContent">
                <h2 className="text-white  text-center"> Strategic Planning and Advisory</h2>
                <p className="serviceSummary pl-2 pr-2 text-white">
                  We assist in developing strategic plans and roadmaps, support
                  organizational development and capacity assessment, and offer
                  guidance in policy formulation and review. Our advisory
                  services also include stakeholder engagements and partnership
                  development to help clients achieve their objectives.
                </p>
              </div>
            </div>
            <div className="pdmImg serviceTwo ">
              <div className="imageOverlay"></div>
              <div className="overlayContent">
                <h2  className="text-white text-center">Project Development and Management </h2>
                <p className="serviceSummary pl-2 pr-2 text-white">
                  End-to-end project management services, from project design
                  and proposal development to implementation and evaluation.
                  This includes risk assessment and mitigation strategies, as
                  well as financial and resource management to ensure project
                  success. We now have specialist support for risk management
                  and operational risk work in West Africa.
                </p>
              </div>
            </div>
            <div className=" frcImg serviceFive ">
              <div className="imageOverlay"></div>
              <div className="overlayContent">
                <h2  className="text-white text-center"> Fund-Raising Consultancy </h2>
                <p className="serviceSummary pl-2 pr-2 text-white">
                  We provide some support for fundraising activities of project
                  sponsors of vetted and shovel-ready private sector projects,
                  and assist with drafting technical proposals to respond to
                  international competitive bids of the World Bank, African
                  Development Bank, African Union, USAID, EU, etc across various
                  sectors. In so doing, we assist organizations secure the
                  resources they need to achieve their mission and goals.
                </p>
              </div>
            </div>
            <div className="bdrImg serviceThree ">
              <div className="imageOverlay"></div>
              <div className="overlayContent">
                <h2  className="text-white text-center" > Business Diagnostic Reviews </h2>
                <p className="serviceSummary pl-2 pr-2 text-white">
                  identify challenges, and uncover growth opportunities by
                  evaluating key areas such as operations, financial management,
                  human resources, and strategic alignment. Through in-depth
                  analysis and customized solutions, we help businesses optimize
                  their processes, enhance efficiency, and achieve long-term
                  sustainability to cope with competition
                </p>
              </div>
            </div>
            <div className="ifpImg serviceFour ">
              <div className="imageOverlay"></div>
              <div className="overlayContent">
                <h2  className="text-white text-center">Investment Facilitation and Promotion</h2>
                <p className="serviceSummary pl-2 pr-2 text-white">
                  strategic guidance on regulatory environments, market entry,
                  and establishing local partnerships, based on our previous
                  experience with IPAs.
                </p>
              </div>
            </div>
            <div className="meImg serviceNine ">
              <div className="imageOverlay"></div>
              <div className="overlayContent">
                <h2  className="text-white text-center">Monitoring and Evaluation</h2>
                <p className="serviceSummary pl-2 pr-2 text-white">
                  We design detailed proposals and implement comprehensive
                  monitoring and evaluation frameworks, conduct baseline,
                  midline, and endline evaluations, develop data collection
                  tools, etc using very stringent guidelines.
                </p>
              </div>
            </div>
            <div className=" cgImg serviceEight ">
              <div className="imageOverlay"></div>
              <div className="overlayContent">
                <h2  className="text-white text-center"> Corporate Governance</h2>
                <p className=" text-white serviceSummary pl-2 pr-2">
                  Our comprehensive corporate governance services designed to
                  enhance organisational accountability, transparency, and
                  ethical standards in line with global best practices.{" "}
                </p>
              </div>
            </div>
            <div className="fddImg serviceSix ">
              <div className="imageOverlay"></div>
              <div className="overlayContent">
                <h2 className="text-white text-center"> Financial Due Diligence </h2>
                <p className="  serviceSummary pl-2 pr-2 text-white">
                  Our approach includes analyzing financial statements,
                  assessing financial health, evaluating cash flow, and
                  identifying potential risks and liabilities.Our expertise
                  supports clients in mitigating financial risks and maximizing
                  the value of their transactions
                </p>
              </div>
            </div>
            {/* <div className="cfsImg serviceSeven ">
              <h2> Comprehensive Feasibility Study</h2>
              <div className="imageOverlay"></div>
            </div> */}
            <div className=" crImg serviceTen ">
              <div className="imageOverlay"></div>
              <div className="overlayContent">
                <h2  className="text-white text-center"> Company Retreat</h2>
                <p className="serviceSummary pl-2 pr-2 text-white">
                  We design and deliver tailored retreat and training programmes
                  and workshops using time-tested methodologies that guarantee
                  the effectiveness of these interventions especially for MSMEs
                  and sub-national entities.
                </p>
              </div>
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
