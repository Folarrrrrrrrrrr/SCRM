import "../assets/style/styles.css";
import ProfileIcon from "../assets/images/User.jpeg";
import energy from "../assets/images/energyIcon.png";
import money from "../assets/images/money.png";
import Button from "./Botton";
import profileIcon from "../assets/images/User.jpeg";
import DrSamir from "../assets/docs/DrSamir.pdf";
import Communication from "../assets/images/networking.png";
import waterTrans from "../assets/images/waterTrans.png";
import Finance from "../assets/images/Finance.png";
const About = () => {
  const Sectors = [
    {
      logo: energy,
      Sector: " Clean Energy / Circular Economy",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Idsoluta illo facilis labore, sed ipsam nemo possimus. Molestias,fugiat vel voluptate repellendus iure ipsam rem consectetur erferendis laudantium odio tempora!",
    },
    {
      logo: Finance,
      Sector: " FINANCIAL SERVICES",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Idsoluta illo facilis labore, sed ipsam nemo possimus. Molestias,fugiat vel voluptate repellendus iure ipsam rem consectetur erferendis laudantium odio tempora!",
    },
    {
      logo: Communication,
      Sector: " Communication, Innovation, And Digital Economy",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Idsoluta illo facilis labore, sed ipsam nemo possimus. Molestias,fugiat vel voluptate repellendus iure ipsam rem consectetur erferendis laudantium odio tempora!",
    },
    {
      logo: waterTrans,
      Sector: "WATER TRANSPORTATION",
      summary:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Idsoluta illo facilis labore, sed ipsam nemo possimus. Molestias,fugiat vel voluptate repellendus iure ipsam rem consectetur erferendis laudantium odio tempora!",
    },
  ];

  const hof = [
    {
      profilePicture: ProfileIcon,
      profileName: "",
      profile: "ii",
    },
    {
      profilePicture: ProfileIcon,
      profileName: "",
      profile: "oo",
    },
    {
      profilePicture: "",
      profileName: "",
      profile: "",
    },
    {
      profilePicture: "",
      profileName: "",
      profile: "",
    },
    {
      profilePicture: "",
      profileName: "",
      profile: "",
    },
    {
      profilePicture: "",
      profileName: "",
      profile: "",
    },
    {
      profilePicture: "",
      profileName: "",
      profile: "",
    },
  ];
  return (
    <>
      <div id="about" className="section3 mt-7 ">
        <h2 className="line-title">About SCRM </h2>
        <div className="visionContainer">
          <div className="visionStatement">
            <h3 className="text-2xl ml-20 autoShow  mt-10 text-center">
              OUR VISION STATEMENT
            </h3>
            <h3 className=" text-xl  ml-20 autoShow text-wrap text-center">
              "To support the unlocking of the potentials of the African economy
              using Nigeria as the starting point because of it's market
              size,youth population, institutional voids and the sheer magnitude
              ot technological innovations"
            </h3>
          </div>
        </div>
        <div className="visionContainer">
          <div className="visionStatement">
            <h3 className="text-2xl ml-20 autoShow  mt-10 text-center">
              STRATEGIC ALLIANCES
            </h3>
            <h3 className=" text-xl  ml-20 autoShow text-wrap text-center">
              Over many years, our firm has built several strategic alliances to
              undertake sensitive projects acros various sectors. Typically, we
              work with firms and senior professional with at least 15years of
              experience in the specific sector of the projectthat we undertake.
              These firms are well known to provide thought leadershipin those
              specific sector, example, Project Finance, Infrastructure,
              Finance, Renewable Energy, Cleantech, etc.
            </h3>
          </div>
        </div>
        <br />
        <br />
        <div className="sectorsContainer ml-6   ">
          <h1 className="sectorTitle autoShow text-center mt-4 text-xl">
            {" "}
            OUR VERTICALS
          </h1>
          {/* <p className="sectorDetails text-wrap text-center text-l text-gray-500">
            {" "}
            We've got everything you need to launch your business{" "}
          </p> */}
          <div className="servicesList mt-5">
            {Sectors.map((sector, i) => (
              <div
                className={
                  i < 2
                    ? "slideLeft sectorCard bg-white  p-2  m-2"
                    : "sectorCard slideLeft bg-white  p-2  m-2"
                }
              >
                <img src={Sectors[i].logo} className="w-12 sectorIcon" alt="" />
                <h4 className="cardHeader  mt-4 text-center font-semibold text-sm">
                  {" "}
                  {Sectors[i].Sector}
                </h4>
                <p className="cardDetails mt-3 text-center text-wrap text-gray-500">
                  {Sectors[i].summary}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="HallOfFameContainer ml-10 mt-10">
          <h1 className="HOFHeading text-xl ml-20 autoShow mt-10 text-center">
            {" "}
            OUR TEAM OF PROFESSIONALS
          </h1>
          <div className="hofRow mt-12  text-center">
            <div className="profileCard autoBlur mt-6 text-center">
              {" "}
              <div className="imgContainer ">
                <img
                  className="profilePicture  w-20 h-20"
                  src={profileIcon}
                  alt=""
                />
              </div>
              <div className="cardBox">
                <h4 className="name text-black text-xl"> UDEME UKPONG </h4>
                <p className="bio text-center text-black">
                  Former Senior Manager and pioneer Head of the Energy Sector
                  Business of the African Development Bank Limited. He served as
                  Credit Officer (Enugu Branch),Branch Manager (lagos Apapa
                  Branch and Head Office) of the defunct Commercial Bank of
                  Africa Limited also former Executive Assistant to the MD/CEO
                  of the Bank,also a member of the Think Tank and Investment
                  Promotion Agency of the Government of Akwa Ibom state (1999 –
                  2007). Former Vice Chairman of the Ibom Power Company Limited,
                  an IPP of 167MW in Akwa Ibom state. MBA (1987) and BSc (1981).
                  He has conducted Feasibility Studies for a range of private
                  projects and participates in fund-raise and private
                  placements.
                </p>
                {/* <a href={DrSamir} className="DownloadBtn">
                  Resume
                </a> */}
              </div>
            </div>
            <div className="profileCard autoBlur mt-6 text-center">
              <img
                className="profilePicture  w-20 h-20"
                src={profileIcon}
                alt=""
              />
              <div className="cardBox">
                <h4 className="name text-black text-xl"> Dr. Samir Attia </h4>
                <p className="bio text-center text-black">
                  Samir is a Management Expert and Business Trainer helping
                  private & public sectors achieve their business goals and
                  conducting world-class workshops in people management for
                  leading international companies. In Small and Medium
                  Enterprises (SMEs), Samir provides technical consultancy and
                  capacity-building training in Egypt and Africa in SME
                  initiatives financed by UNIDO, UNDP, UN Women, EU, Drosos,
                  IOM, GIZ to business women, youth in some low-income
                  Governorates such as Shoubra Al Khaima, Ezbet El Nakhal,
                  Minya, Wahat to raise the standard of living, reducing
                  poverty, empowering women and youth, for economic growth and
                  sustainability.
                </p>
                {/* <a href={DrSamir} className="DownloadBtn">
                  Resume
                </a> */}
              </div>
            </div>
            <div className="profileCard autoBlur mt-6 text-center">
              <img
                className="profilePicture  w-20 h-20"
                src={profileIcon}
                alt=""
              />
              <div className="cardBox">
                <h4 className="name text-black text-xl">
                  {" "}
                  ENGR ABAYOMI JUNAID{" "}
                </h4>
                <p className="bio text-center text-black">
                  A Senior Investment Banker and former Chief Manager at the
                  African International Bank Limited in charge of Corporate
                  Finance. He has successfully packed Feasibility Studies, and
                  procured financing from the banks including the defunct NIDB,
                  Bank of Industry, Bank of Agriculture, etc. He holds a degree
                  in Chemical Engineering with strong expertise in Production
                  Engineering and an MBA degree.
                </p>
                {/* <a href={DrSamir} className="DownloadBtn">
                  Resume
                </a> */}
              </div>
            </div>
            <div className="profileCard autoBlur mt-6 text-center">
              <img
                className="profilePicture  w-20 h-20"
                src={profileIcon}
                alt=""
              />
              <div className="cardBox">
                <h4 className="name text-black text-xl">
                  {" "}
                  OLABANJI M. BALOGUN{" "}
                </h4>
                <p className="bio text-center text-black">
                  He was a Principal Manager of the Bank of Industry in charge
                  of Appraisal (Market, Technical, Financial, and Economic
                  Analysis), Implementation, Supervision, and Debt Collection of
                  Industrial Projects (World Bank/ IBRD, African Development
                  Bank, European Investment Bank, etc at the Bank of Industry.
                  He had handled NERFUND & SME Projects as well. 23-year career
                  at the Bank of Industry. BSc in Economics (2nd class upper).
                </p>
                {/* <a href={DrSamir} className="DownloadBtn">
                  Resume
                </a> */}
              </div>
            </div>
            <div className="profileCard autoBlur  mt-6 text-center">
              <img
                className="profilePicture  w-20 h-20"
                src={profileIcon}
                alt=""
              />
              <div className="cardBox  ">
                <h4 className="name text-black text-xl"> ISAAC FAMULUSI </h4>
                <p className="bio text-center text-black">
                  He was a Principal Manager of the Bank of Industry in charge
                  of Appraisal (Market, Technical, Financial, and Economic
                  Analysis), Implementation, Supervision, and Debt Collection of
                  Industrial Projects (World Bank/ IBRD, African Development
                  Bank, European Investment Bank, etc at the Bank of Industry.
                  He had handled NERFUND & SME Projects as well. 23-year career
                  at the Bank of Industry. BSc in Economics (2nd class upper).
                </p>
                {/* <a href={DrSamir} className="DownloadBtn">
                  Resume
                </a> */}
              </div>
            </div>
            {/* </div>
          <div className="hofRow"> */}
            <div className="profileCard autoBlur mt-6 text-center">
              <img
                className="profilePicture  w-20 h-20"
                src={profileIcon}
                alt=""
              />
              <div className="cardBox">
                <h4 className="name text-black text-xl"> EMMA EDISON </h4>
                <p className="bio text-center text-black">
                  Senior Marketing Specialist. Consulted for the LBS and worked
                  for the IFC on the design of Feasibility Studies for the
                  Izombe Gas Project in Imo state. Holds an MBA in Marketing and
                  a BSc in Chemistry (1980).
                </p>
                {/* <a href={DrSamir} className="DownloadBtn">
                  Resume
                </a> */}
              </div>
            </div>
            <div className="profileCard autoBlur mt-6 text-center">
              <img
                className="profilePicture  w-20 h-20"
                src={profileIcon}
                alt=""
              />
              <div className="cardBox">
                <h4 className="name text-black text-xl"> FRIDAY ESSENENKAK </h4>
                <p className="bio text-center text-black">
                  Schooled in Business Administration and Finance, Chartered
                  Stockbroker (ACS), Certified Pension Consultant (FCIP) and
                  accredited MSME Specialist. Alumnus of the Venture Capital
                  Institute of USA and a former Council Member, National
                  Association of Small and Medium Enterprises (NASME). He is
                  skilled in building and growing small firms into stable medium
                  and large economically contributing enterprises.
                </p>
                {/* <a href={DrSamir} className="DownloadBtn">
                  Resume
                </a> */}
              </div>
            </div>
            <div className="profileCard autoBlur mt-6 text-center">
              <img
                className="profilePicture  w-20 h-20"
                src={profileIcon}
                alt=""
              />
              <div className="cardBox  ">
                <h4 className="name text-black text-xl"> EDIMA BEN EKPO</h4>
                <p className="bio text-center text-black">
                  Former Deputy General Manager – Risk Management for the United
                  Bank of Africa Plc. He is a Fellow of the Institute of
                  Chartered Accountants of Nigeria (ICAN). A senior specialist
                  in Operational Risk Management, he is an Examiner for the
                  Institute of Risk Management of London.
                </p>
                {/* <a href={DrSamir} className="DownloadBtn">
                  Resume
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
