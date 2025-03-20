import React from "react";

import { Nav, NavItem } from "reactstrap";
import { Link, useLocation } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faSuitcase,
  faUsers,
  faBell,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import style from "./Header.module.css";
import ProfileMenu from "./ProfileMenu";

const NavHorizontal = ({ isVertical }) => {
  const location = useLocation();
  const myRoute = location.pathname;
  return (
    <Nav className={`${isVertical ? style.navIconsVertical : style.navIcons}`}>
      <NavItem className="px-md-1 px-lg-2 px-xl-3">
        <Link to="/" className={`${style.navLink} nav-link`}>
          <div
            className={`${
              isVertical ? "d-flex align-items-center gap-2" : "d-block"
            }`}
          >
            <FontAwesomeIcon
              icon={faHouse}
              color="white"
              className={`${style.icon} ${myRoute !== '/' && style.iconOutlined } ${
                isVertical ? "d-inline" : "d-block m-auto"
              } `}
            />

            <span
              className={`${isVertical ? "d-inline" : "d-block"} text-white`}
            >
              Home
            </span>
          </div>
        </Link>
      </NavItem>
      <NavItem className="px-md-1 px-lg-2 px-xl-3">
        <Link to="/jobs" className={`${style.navLink} nav-link`}>
          <div
            className={`${
              isVertical ? "d-flex align-items-center gap-2" : "d-block"
            }`}
          >
            <FontAwesomeIcon
              icon={faSuitcase}
              color="white"
              className={`${style.icon} ${myRoute !== '/jobs' && style.iconOutlined } ${
                isVertical ? "d-inline" : "d-block m-auto"
              } `}
            />
            <span
              className={`text-white ${isVertical ? "d-inline" : "d-block"}`}
            >
              Jobs
            </span>
          </div>
        </Link>
      </NavItem>
      <NavItem className={`${style.pr2} border-end px-md-1 px-lg-2 px-xl-3`}>
        <Link to="/employers" className={`${style.navLink} nav-link`}>
          <div
            className={`${
              isVertical ? "d-flex align-items-center gap-2" : "d-block"
            }`}
          >
            <FontAwesomeIcon
              icon={faUsers}
              color="white"
              className={`${style.icon} ${myRoute !== '/employers' && style.iconOutlined } ${
                isVertical ? "d-inline" : "d-block m-auto"
              }`}
            />
            <span
              className={`text-white ${isVertical ? "d-inline" : "d-block"}`}
            >
              Employers
            </span>
          </div>
        </Link>
      </NavItem>
      <NavItem className="px-md-1 px-lg-2 px-xl-3">
        <Link to="/notifications" className={`${style.navLink} nav-link`}>
          <div
            className={`${
              isVertical ? "d-flex align-items-center gap-2" : "d-block"
            }`}
          >
            <FontAwesomeIcon
              icon={faBell}
              color="white"
              className={`${style.icon} ${myRoute !== '/notifications' && style.iconOutlined } ${
                isVertical ? "d-inline" : "d-block m-auto"
              }`}
            />
            <span
              className={`text-white ${isVertical ? "d-inline" : "d-block"}`}
            >
              Notifications
            </span>
          </div>
        </Link>
      </NavItem>
      <NavItem className="px-md-1 px-lg-2 px-xl-3">
        <Link
          to="/messaging"
          className={`${style.navLink} nav-link position-relative`}
        >
          <div
            className={`${
              isVertical ? "d-flex align-items-center gap-2 position-relative" : "d-block"
            }`}
          >
            <FontAwesomeIcon
              icon={faMessage}
              color="white"
              className={`${style.icon} ${myRoute !== '/messaging' && style.iconOutlined } ${
                isVertical ? "d-inline" : "d-block m-auto "
              }`}
            />
            <span
              className={`${style.badge} ${isVertical ? "d-flex align-items-center justify-content-center" : "d-block top-0 start-100 translate-middle"} position-absolute rounded-pill bg-danger color-white`}
            >
              9
              <span className="visually-hidden">unread messages</span>
            </span>
            <span
              className={`text-white ${isVertical ? "d-inline" : "d-block"}`}
            >
              Messaging
            </span>
          </div>
        </Link>
      </NavItem>
      {!isVertical && (
        <NavItem className="px-md-1 px-lg-2 px-xl-3">
          <ProfileMenu style={style} />
        </NavItem>
      )}
    </Nav>
  );
};

export default NavHorizontal;
