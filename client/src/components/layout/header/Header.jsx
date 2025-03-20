import React from "react";
import { Navbar, NavbarBrand } from "reactstrap";
import Logo from "../../../assets/images/logo.png";
import style from "./Header.module.css";

import SearchBar from "./SearchBar";
import NavHorizontal from "./NavHorizontal";
import ProfileMenu from "./ProfileMenu";
const Header = () => {
  return (
    <Navbar
      expand="md"
      className={`${style.header} px-5 dark-background-color navbar`}
    >
      <div className="d-flex align-items-center justify-content-center">
        <NavbarBrand href="/" className={`${style.logo}`}>
          <img src={Logo} alt="Logo" />
        </NavbarBrand>

        {/******** SearchBar ********/}
        <div className="d-lg-block d-none">
          <SearchBar />
        </div>
      </div>

      <div className="d-lg-block d-none">
        <NavHorizontal />
      </div>
      <div className="d-lg-none d-block">
        <ProfileMenu style={style} withoutDrop={true} withBars={true} />
      </div>
    </Navbar>
  );
};

export default Header;
