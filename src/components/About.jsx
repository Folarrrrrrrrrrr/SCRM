import "../assets/style/styles.css";
import ProfileIcon from "../assets/images/User.jpeg";
import circularEconomy from "../assets/images/energyIcon.png";
import money from "../assets/images/money.png";
import Button from "./Botton";
import profileIcon from "../assets/images/User.jpeg";
import DrSamir from "../assets/docs/DrSamir.pdf";
import Communication from "../assets/images/networking.png";
import waterTrans from "../assets/images/waterTrans.png";
import Finance from "../assets/images/Finance.png";
import Waste from "../assets/images/waste.png";
import Therna from "../assets/images/therna.png";
import Estate from "../assets/images/realEstate.png";
import REnergy from "../assets/images/energy.png";
import Agric from "../assets/images/agric.png";
import Flare from "../assets/images/gasflare.png";
import Health from "../assets/images/health.png";
import Edima from "../assets/images/Edima.jpg";
import samir from "../assets/images/Samir.jpg";
import Sampson from "../assets/images/Sampson.jpg";
import Udeme from "../assets/images/Udeme.jpg";
const About = () => {
  const Sectors = [
    {
      logo: circularEconomy,
      Sector: "CIRCULAR ECONOMY",
      summary:
        "Focuses on reducing waste by reusing, recycling, and refurbishing materials to promote sustainable development and innovation in designing products that can be reused, extending the life cycle of resources.",
    },
    {
      logo: Finance,
      Sector: " FINANCIAL SERVICES",
      summary:
        "The financial services vertical including Banks, Insurance, and Investment  firms, plays a key role in managing money and supporting economic growth. Digital technologies like fintech are transforming how financial products are accessed and delivered ",
    },
    {
      logo: Communication,
      Sector: " COMMUNICATION, AND DIGITAL ECONOMY",
      summary:
        "The digital economy is driven by technologies like the internet, mobile devices, and cloud computing, transforming industries and global connectivity. Communication infrastures, including 5G networks, underpins this economy facilitating e-commerce and digital services. This sector is crucial for innovation and the job creation, though it faces challenges like cybersecurity and data privacy",
    },
    {
      logo: REnergy,
      Sector: " RENEWABLE ENERGY ",
      summary:
        " Investing in renewable energy infrastructure boost economic growth and job creation as we committed to reducing carbon emmissions, offering a sustainable alternative to fossol fuels while ehancing energy",
    },

    {
      logo: Flare,
      Sector: "GAS FLARES",
      summary:
        " Excess natural gas is burned off durong oil extraction, contributing, to greenhouse gas emissions wasting valuable energy that could br harnessed for power genration. Efforts are underway to reduce flaring through regulatory frameworks and gas recovery technologies",
    },
    {
      logo: waterTrans,
      Sector: "CRITICAL MINERALS / PRECIOUS METALS",
      summary:
        "Minerals like lithium, cobalt, and precious metals are vital for modern technologies such as batteries and electronics. Growing global demand, driven by green energy and digitalisation is creating supply chain challenges and environmental concerns. Sustainable sourcing and recycling are key to securing long-term access to these resources.",
    },
    {
      logo: Agric,
      Sector: "COMMERCIAL AGRICULTURE",
      summary:
        "Larrge-scale farming aimed at producing crops and livestock for market sale plays a crucial rolein food security and economic development . Innovations in eco-friendly farming practices are needed to balance productivity with environmental health.",
    },
    {
      logo: Therna,
      Sector: "THERNAL POWER PLANTS",
      summary:
        "Thernal power plants convert heat from fossil fuels into electricity, making them major energy producers but also contributors to carbon emissions. Cleaner technologies are being adopted to reduce their environmental impact.",
    },
    {
      logo: Estate,
      Sector: "REAL ESTATE ",
      summary:
        "Development, buying, and sellong of property for residential, commercial or industrial use. It drives economic growth and shapes urban development, with sustainability becoming an impotrtant factor. Smart building anf green infrastructure are increasingly in demand for energy-efficient, eco-friendly living and working spaces.",
    },
    {
      logo: Waste,
      Sector: "CLEAN TECHNOLOGY",
      summary:
        " Cleantech  includes innovations that minimise waste and  emissions while promoting renwable energy and sustainable  practices.",
    },
    {
      logo: Health,
      Sector: " HEALTH CARE / HOSPITAL CAMPUSES",
      summary:
        " Healthcare and hospital campuses provide critical medical services, from routine care to advanced treatments. They increasingly incorporate technology and sustainable design to enhance patient outcomes and reduce environmetal impacts. These campuses are also hubs for medical research and innovation.",
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
        <h2 className="line-title"></h2>
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
            <div className="sectorContainer">
              {Sectors.map((sector, i) => (
                <div
                  className={
                    i < 2
                      ? "slideLeft sectorCard   p-2  m-2"
                      : "sectorCard slideLeft   p-2  m-2"
                  }
                >
                  <img
                    src={Sectors[i].logo}
                    className="w-12 sectorIcon"
                    alt=""
                  />
                  <h4 className="cardHeader  mt-4 text-center font-semibold text-sm">
                    {" "}
                    {Sectors[i].Sector}
                  </h4>
                  <p className="cardDetails mt-3 text-center text-wrap ">
                    {Sectors[i].summary}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="HallOfFameContainer  ml-10 mt-10">
          <h1 className="HOFHeading text-xl  autoShow mt-10 text-center">
            {" "}
            OUR TEAM OF PROFESSIONALS
          </h1>
          <div className="hofRow mt-12   text-center">
            <div className="profileCard autoBlur mt-6 text-center">
              {" "}
              <div className="imgContainer ">
                <img
                  className="profilePicture  w-20 h-20"
                  src={Udeme}
                  alt=""
                />
              </div>
              <div className="cardBox">
                <h4 className="name text-black text-xl">
                  {" "}
                  Udeme Nkana Ukpong{" "}
                </h4>
                <p className="bio text-left text-black">
                  Former Senior Manager and pioneer Head of the Energy Sector
                  Business of the African International Bank Limited. He led
                  various high-profile projrects, including working with the
                  EU,World Bank, and African Development Bank on initatives
                  related to finanacial management, investmwnt climate, and
                  agriculture. <br /> He is a Former Vice Chairman of the Ibom Power
                  Company Limited, an IPP of 167MW in Akwa Ibom state. MBA
                  (1987) and BSc (1981). He has conducted Feasibility Studies
                  for a range of private projects and participates in fund-raise
                  and private placements.
                </p>
                {/* <a href={DrSamir} className="DownloadBtn">
                  Resume
                </a> */}
              </div>
            </div>
            <div className=" otherRow flex flex-wrap">
              <div className="profileCard autoBlur m-6 text-center">
                <img
                  className="profilePicture  w-20 h-20"
                  src={Edima}
                  // src={profileIcon}
                  alt=""
                />
                <div className="cardBox  ">
                  <h4 className="name text-black text-xl"> Edima Ben Ekpo</h4>
                  <p className="bio text-left text-black">
                    Former Deputy General Manager – Risk Management for the
                    United Bank of Africa Plc. <br /> He is a Fellow of the Institute
                    of Chartered Accountants of Nigeria (ICAN). A senior
                    specialist in Operational Risk Management, he is an Examiner
                    for the Institute of Risk Management of London.
                  </p>
                  {/* <a href={DrSamir} className="DownloadBtn">
                  Resume
                </a> */}
                </div>
              </div>
              <div className="profileCard autoBlur m-6 text-center">
                <img
                  className="profilePicture  w-20 h-20"
                  src={samir}
                  alt=""
                />
                <div className="cardBox">
                  <h4 className="name text-black text-xl"> Dr. Samir Attia </h4>
                  <p className="bio text-left text-black">
                    Samir is a Management Expert and Business Trainer helping
                    private & public sectors achieve their business goals and
                    conducting world-class workshops in people management for
                    leading international companies. <br /> In Small and Medium
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
              <div className="profileCard autoBlur m-6 text-center">
                <img
                  className="profilePicture  w-20 h-20"
                  src={profileIcon}
                  alt=""
                />
                <div className="cardBox">
                  <h4 className="name text-black text-xl">
                    {" "}
                    Engr. Abayomi Jinaid{" "}
                  </h4>
                  <p className="bio text-left text-black">
                    A Senior Investment Banker and former Chief Manager at the
                    African International Bank Limited in charge of Corporate
                    Finance. He has successfully packed Feasibility Studies, and
                    procured financing from the banks including the defunct
                    NIDB, Bank of Industry, Bank of Agriculture, etc. <br /> He holds a
                    degree in Chemical Engineering with strong expertise in
                    Production Engineering and an MBA degree.
                  </p>
                  {/* <a href={DrSamir} className="DownloadBtn">
                  Resume
                </a> */}
                </div>
              </div>
              <div className="profileCard autoBlur m-6 text-center">
                <img
                  className="profilePicture  w-20 h-20"
                  src={Sampson}
                  alt=""
                />
                <div className="cardBox">
                  <h4 className="name text-black text-xl"> Sampson Edodi </h4>
                  <p className="bio text-left text-black">
                    Sampson Edodi is a Research Analyst at S.C.R.M. with strong
                    expertise in monitoring and evaluation and project
                    management. <br /> Some of the studies undertaken or participated
                    in include Sustainability, Urban Disaster and Resilience in
                    a Pandemic: Sustainable Livelihoods of the Informal Sector
                    in Islamabad, Tata Institute of Social Sciences (TISS),
                    Mumbai (August 2021); Challenges of Deepening Regional
                    Integration and Sustainable Development in West Africa, Case
                    of ECOWAS, ECOWAS (Jul-Sep., 2022); AI Innovation, Eurostars
                    3 (ESTARS3), Eureka Association, European Union (Sept/Oct.
                    2023); Managing the environment: issues and priority actions
                    for sustainable waste management in Uganda, Mbarara
                    University of Science and Technology, Uganda (2023); and
                    COP26 Climate Exp0: Fusion of Science and Policy, COP26
                    Universities Network and the Italian University Network for
                    Sustainable Development (RUS), (May 2021).
                  </p>
                  {/* <a href={DrSamir} className="DownloadBtn">
                  Resume
                </a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
