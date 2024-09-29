import NavBar from "../components/NavBar";
import Botton from "../components/Botton";
import Home from "../components/Home";
import About from "../components/About";
import Services from "../components/Services";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const MainPage = () => {
  const LinkBtnHandler = () => {
    // window.open("https://www.linkedin.com/in/folawe-oluwole", "_blank");
  };

  return (
    <>
      <div>
        <NavBar />
        <Home />
        <Services />
        <About />
        <Contact />
        <Footer />
        <a href="#">
          <Botton
            btnStyle="fixed bottom-5 right-4 text-white z-[999]
          cursor-pointer text-4xl bg-green-700 w-16 h-16 flex items-center
          justify-center rounded-full animate-bounce"
            handleBtnClick={LinkBtnHandler}
            children=<ion-icon name="logo-linkedin" />
          />
        </a>
      </div>
    </>
  );
};

export default MainPage;
