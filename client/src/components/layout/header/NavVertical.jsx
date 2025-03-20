import React from "react";
import {
  Offcanvas,
  OffcanvasBody,
  Dropdown,
  DropdownMenu
} from "reactstrap";
import UserDropdownMenu from "./UserDropdownMenu";
import style from "./Header.module.css";

const NavVertical = ({ navVertical, toggle }) => {
  return (
    <div>
      <Offcanvas toggle={toggle} isOpen={navVertical} direction="end"  className="d-lg-none">
        <OffcanvasBody>
          <Dropdown isOpen={true} direction="down">
            <DropdownMenu end className={`${style.profileDropdown} border-0 w-100 shadow-none`}>
              <UserDropdownMenu style={style} isVertical={true} />
            </DropdownMenu>
          </Dropdown>
        </OffcanvasBody>
      </Offcanvas>
    </div>
  );
};

export default NavVertical;
