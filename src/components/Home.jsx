import "../assets/style/styles.css";
import Button from "./Botton";
import Coins from "../assets/images/Coins.jpg";
import "./homeResponsive.css";
import Modal from "../components/Modal";

const Home = () => {
  const aboutBtnHandler = () => {};
  const ContactBtnHandler = () => {};
  return (
    <>
      <div id="home" className="section">
        <div className="BannerContaier  p-4 h-screen">
          <div className="HeroText mt-52 ">
            <h1 className="HeroHeader   font-Poppins">
              WELCOME TO{" "}
              <span className=" text-green-400 font-Poppins font-semibold ">
                S.C.R.M
              </span>
            </h1>
            <h3 className="summary   text-wrap text-left">
              Sharon Consultative & Research Management, established 1997. We
              are your trusted partner in financial consulting.
            </h3>
            <h3 className="summary  text-wrap text-left">
              We specialze in providing tailored financial solutions to help
              businessses
            </h3>
            <h3 className="summary  text-wrap text-left">
              achieve their financial goals.
            </h3>
          </div>
          <div
            className="buttonContainer  flex  items-center
          justify-center "
          >
            <a href="#contact">
              <Button
                btnStyle="text-white   flex items-center m-5 p-2
                justify-center cursor-pointer  bg-green-700  w-56"
                handleBtnClick={ContactBtnHandler}
                children="CONTACT US NOW"
              />{" "}
            </a>
            <Modal
              btnText="MORE ABOUT US"
              summaryText=" SharonConsultative & Research Management is a multidisciplinary
            consulting, advisory, and project development practice committed to
            delivering innovative solutions across a diverse range of sectors.
            At S.C.R.M., we partner principally with international organizations
            and a select few private sector entities with strong management
            teams to drive impactful change, support sustainable development,
            and create value through tailored data-driven strategies. With a
            focus on strong fear of God in our dealings, innovation, excellence,
            integrity, and collaboration, we are dedicated to helping our
            discerning clients achieve their goals and navigate complex
            challenges in an ever-evolving global landscape. Our firm has a
            growing pool of senior experts including senior economists,
            agribusiness researchers, certified finance specialists, consulting
            industry specialists, health management specialists, academicians,
            retired senior civil servants, project management experts, market
            researchers, investment bankers, etc that we deploy on intricate
            assignments across various sectors especially in West Africa. In the
            last 27 years, the firm has handled direct mandates for the World
            Bank, World Economic Forum, CNFA of the USA, FDC of France, DFID /
            Adam Smith International of the UK, Connexion Corporation of USA,
            Fem Consult of The Hague, Alpha Consult of Milan, Italtrend of
            Italy, several private entities, international NGOs, etc. Please,
            see our list of typical assignments successfully handled. Founded in
            May 1997, S.C.R.M. growing pool of senior experts including finance
            specialists, consulting industry specialists, academicians, project
            management experts, market researchers, investment bankers, etc.
            With the rich experience of our core team of experts on several
            flagship assignments over the years, our firm is evolving to offer
            services to support credible project developers principally in the
            private sector space and global research community in the analysis,
            preparation, and implementation of a broad range of investments and
            development projects. The outcomes will incorporate the ability to
            assess grant funding of various regional and overseas bodies
            including the World Bank, African Development Bank, EU vehicles,
            USAID Feed the Future, FCDO, etc in principally West Africa.
          "
              modalButtonStyle="flex items-center justify-center cursor-pointer text-white bg-green-700 m-5 p-2 w-56"
            />
            {/* </a> */}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
