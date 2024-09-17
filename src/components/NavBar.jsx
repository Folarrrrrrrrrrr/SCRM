import { useState } from "react";
import "../assets/style/styles.css";
import './navResponsive.css'
const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);
  const [btnDisplay, setBtnDisplay] = useState(true);

  const sideNavHandler = () => {
    setOpenNav(!openNav);
    setBtnDisplay(!btnDisplay);
  };

  const navList = [
    { name: "Home", link: "#home" },
    { name: "OUR SERVICES", link: "#services" },
    { name: "ABOUT US", link: "#about" },
    { name: "CONTACT US", link: "#contact" },
  ];
  return (
    <>
      <div className="navContainer navBox fixed z-[999]">
        <div className="kkk"></div>
        <nav className=" site-navbar nav">
          <a href="#" className="flex ">
            <h2 className="site-logo text-lg  text-white font-medium mt-1">
              {" "}
              S.C.R.M{" "}
            </h2>
            <p className="w-1.5  mt-4 pt-2 bg-green-700 h-1 "></p>
          </a>
          <div className=" navlinks">
            <ul>
              {navList.map((list, i) => (
                <li key={i}>
                  <a href={list.link}>
                    {" "}
                    <h4>{list?.name}</h4>{" "}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <button className="nav-toggler" onClick={sideNavHandler}>
            {btnDisplay === true ? (
              <span></span>
            ) : (
              <h1 className="closeBtn">
                {" "}
                <ion-icon name="close-outline"></ion-icon>
              </h1>
            )}
          </button>
          {openNav === false ? (
            <> </>
          ) : (
            <div className="sideNav text-grey-900">
              <div
                className=" flex flex-col sideNavFlex justify-center py-2 gap-10
            text-lg "
              >
                {navList.map((list, i) => (
                  <div key={i} className="px-6 ">
                    <a href={list?.link}>
                      <h4 className=" text-white hover:text-cyan-600">
                        {" "}
                        {list?.name}
                      </h4>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default NavBar;
