import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-scroll";
import Sidebar from "../../components/sidebar/Sidebar";
import useNavbar from "../../hook/useNavbar";
import { FiMenu } from "react-icons/fi";
import { FaArrowTurnDown } from "react-icons/fa6";
import Logo from "../../components/Logo/Logo";

const Header = () => {
  const [openSidebar, setOpenSidebar] = useState(false);
  const { showNavbar } = useNavbar();
  const navigations = [
    {
      label: "Home",
      to: "home",
    },
    {
      label: "About",
      to: "about",
    },
    {
      label: "Services",
      to: "services",
    },
    {
      label: "Projects",
      to: "portfolio",
    },
    {
      label: "Contact",
      to: "contact",
    },
  ];
  return (
    <nav className={`flex__center navbar ${showNavbar ? "drop" : ""}`}>
      <Sidebar
        openSidebar={openSidebar}
        onClose={() => setOpenSidebar(!openSidebar)}
      />
      <div className="logo">
        <Logo />
      </div>
      <div className="nav-links">
        {navigations.map((item, index) => (
          <Link
            to={item.to}
            spy={true}
            className="nav__item"
            activeClass="active"
            smooth={true}
            offset={-300}
            key={index}
          >
            {item.label}
          </Link>
        ))}
      </div>
      <div className="flex__center">
        <Link to="contact" smooth={true} className="flex__center btn primary">
          Reach Us <FaArrowTurnDown />
        </Link>
        <button
          className="flex__center icon menu__btn"
          onClick={() => setOpenSidebar(!openSidebar)}
        >
          <FiMenu />
        </button>
      </div>
    </nav>
  );
};

export default Header;
