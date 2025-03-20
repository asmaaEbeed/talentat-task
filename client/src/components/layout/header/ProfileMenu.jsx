import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
} from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faBars } from "@fortawesome/free-solid-svg-icons";
import user from "../../../assets/images/user.jpeg";
import NavVertical from "./NavVertical";
import UserDropdownMenu from "./UserDropdownMenu";

const ProfileMenu = ({ style, withoutDrop, withBars }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [navVertical, setNavVertical] = useState(false);
  const toggleNavVertical = () => setNavVertical(!navVertical);
  const toggle = () => {
    !withoutDrop && setDropdownOpen((prevState) => !prevState);
  };
  return (
    <>
      <Dropdown isOpen={dropdownOpen} toggle={toggle} direction="down">
        <DropdownToggle
          tag="div"
          className={`${style.navLink} nav-link  position-relative`}
        >
          <div
            className={`${style.profileIcon} rounded-circle overflow-hidden d-block m-auto`}
          >
            <img src={user} alt="Profile" className="h-100 border-rounded" />
            <div
              className={`${style.verticalUserMenuIcon} border-rounded position-absolute rounded-circle d-flex justify-content-center align-items-center d-lg-none`}
              onClick={toggleNavVertical}
            >
              <FontAwesomeIcon icon={faBars} color="black" />
            </div>
          </div>
          {!withoutDrop && (
            <span className="text-white d-block">
              Profile <FontAwesomeIcon icon={faChevronDown} color="white" />{" "}
            </span>
          )}
        </DropdownToggle>
        {!withoutDrop && (
          <DropdownMenu end className={`${style.profileDropdown}`}>
          
          <UserDropdownMenu style={style} />
          </DropdownMenu>
        )}
      </Dropdown>
      <NavVertical toggle={toggleNavVertical} navVertical={navVertical} />
    </>
  );
};

export default ProfileMenu;
