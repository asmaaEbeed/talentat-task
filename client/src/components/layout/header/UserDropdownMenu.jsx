import React from "react";
import { DropdownItem } from "reactstrap";
import { Link } from "react-router-dom";
import user from "../../../assets/images/user.jpeg";
import NavHorizontal from "./NavHorizontal";

const UserDropdownMenu = ({ style, isVertical }) => {
  return (
    <>
      <DropdownItem header className="d-flex align-items-center ">
        <div
          className={`${style.dropdownProfileImg}  rounded-circle overflow-hidden`}
        >
          <img src={user} className={`d-block h-100`} alt="user" />
        </div>
        <div className="px-2 ">
          <h5 className="fs-5 text-black">Ahmed Amaar</h5>
          <span className="text-light-dark fw-light">UX UI Designer</span>
        </div>
      </DropdownItem>
      {isVertical && <DropdownItem divider />}
      {isVertical && <NavHorizontal isVertical={isVertical} />}
      <DropdownItem divider />

      <DropdownItem tag={Link} to="/profile" className="text-light-dark">
        Setting and privacy
      </DropdownItem>
      <DropdownItem tag={Link} to="/settings" className="text-light-dark">
        Language
      </DropdownItem>
      <DropdownItem tag={Link} to="/settings" className="text-light-dark">
        Help
      </DropdownItem>
      <DropdownItem divider />
      <DropdownItem tag={Link} to="/logout" className="text-danger">
        Logout
      </DropdownItem>
    </>
  );
};

export default UserDropdownMenu;
