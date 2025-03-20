import React, { useContext } from "react";
import {
  Offcanvas,
  OffcanvasBody,
  OffcanvasHeader,
} from "reactstrap";

import SidebarNav from "./SidebarNav";
import SidebarContext from "../../../context/SidebarContext";
import style from "./Sidebar.module.css";

const Sidebar = () => {
  const { sideBarNavOffCanvas, toggle } = useContext(SidebarContext);
  return (
    <>
      <div className={`${style.sidebar} d-lg-block d-none`}>
        <SidebarNav />
      </div>
      <Offcanvas
        toggle={toggle}
        isOpen={sideBarNavOffCanvas}
        direction="end"
        className="d-block d-lg-none"
      >
        <OffcanvasBody>
          <SidebarNav toggle={toggle} />
        </OffcanvasBody>
      </Offcanvas>
    </>
  );
};

export default Sidebar;
