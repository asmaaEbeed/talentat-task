import React, { useState, useEffect, useCallback } from "react";
import update  from "immutability-helper";
import { Nav, Spinner } from "reactstrap";
import { useLocation } from "react-router-dom";

import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGear,
  faServer,
  faCheck,
  faXmark,
} from "@fortawesome/free-solid-svg-icons";
import SidebarNavItems from "./SidebarNavItems";
import { navItemsAPI } from "../../../services/api/NavItems.api";

const SidebarNav = () => {
  const [navItems, setNavItems] = useState([]);
  const [expandedItems, setExpandedItems] = useState({});
  const [loading, setLoading] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [postNavLoading, setPostNavLoading] = useState(false);
  const [originalNavItems, setOriginalNavItems] = useState([]);
  const location = useLocation();

  useEffect(() => {
    // Fetch navigation items from backend
    const fetchNavItems = async () => {
      try {
        setLoading(true);
        const response = await navItemsAPI.getAllNavItems();
        setOriginalNavItems(response.data);
        response.data.forEach(item => {
          item.visible = true;
          if (item.children) {
            item.children.forEach(child => {
              child.visible = true;
            });
          }
        });
        setNavItems(response.data);

      } catch (error) {
        console.error("Error fetching navigation items:", error);
        // Fallback to static navigation if API fails
        setNavItems([
          {
            id: 1,
            title: "Please connect to the server",
            path: "#",
            icon: { faServer },
          },
        ]);
      } finally {
        setLoading(false);
      }
    };

    fetchNavItems();
  }, []);

  const toggleSubmenu = (id) => {
    setExpandedItems((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const changeVisibility = (id, childId = 0) => {
    const item = navItems.find(item => item.id === id);
    if (!childId) {
      if (item) {
        item.visible = !item.visible;
        setNavItems([...navItems]);
      } 
    } else {
      item.children.find(child => child.id === childId).visible = !item.children.find(child => child.id === childId).visible;
      setNavItems([...navItems]);
    }
    // handle child visibility
    if (!item && childId) {

    }
  };


  const moveCard = useCallback((dragIndex, hoverIndex, itemId) => {
    const body = {id: itemId, from: dragIndex, to: hoverIndex};
    handlePostTrackNavItem(body);
    
    setNavItems((prevCards) =>
      update(prevCards, {
        $splice: [
          [dragIndex, 1],
          [hoverIndex, 0, prevCards[dragIndex]],
        ],
      })
    );
  }, []);

  // Function to handle the post track nav item
  const handlePostTrackNavItem = async (body) => {
    try {
      const response = await navItemsAPI.postTrackNavItem(body);
    } catch (error) {
      console.error("Error posting track nav item:", error);
    }
  };

  const handlePostNavItem = async (body) => {
    setPostNavLoading(true);
    try {
      const response = await navItemsAPI.postNavItem(body);
    } catch (error) {
      console.error("Error posting nav item:", error);
    } finally {
      setPostNavLoading(false);
    }
  };
  // Function to render the appropriate icon based on the icon name
  return (
    <Nav vertical className="sidebar-menu px-3">
      <div className="d-flex justify-content-between align-items-center px-2">
        <div className="sidebar-menu-header">
          <h4 className="sidebar-menu-title">Menu</h4>
        </div>
        <div className="sidebar-menu-close">
          {!isEditMode ? (
            <FontAwesomeIcon
              icon={faGear}
              onClick={() => setIsEditMode(!isEditMode)}
            />
          ) : (
            <div className="d-flex align-items-center gap-2 ">
              <FontAwesomeIcon
                icon={faCheck}
                onClick={() => {setIsEditMode(!isEditMode); handlePostNavItem(navItems)}}
                color="green"
                className="fs-4 border border-2 rounded-circle border-success p-1 mx-2 fixed-circle"
              />{" "}
              <FontAwesomeIcon
                icon={faXmark}
                onClick={() => {setIsEditMode(!isEditMode); setNavItems(originalNavItems)}}
                color="red"
                className="fs-4 border border-2 rounded-circle border-danger p-1 mx-2 fixed-circle"
              />
            </div>
          )}
        </div>
      </div>
      <hr className="sidebar-menu-divider" />
      {!loading ? (
        navItems.map((item, index) => (
          isEditMode ? <SidebarNavItems
            key={item.id}
            item={item}
            index={index}
            location={location}
            toggleSubmenu={toggleSubmenu}
            expandedItems={expandedItems}
            moveCard={moveCard}
            isEditMode={isEditMode}
            changeVisibility={changeVisibility}
          /> : item.visible ? <SidebarNavItems
          key={item.id}
          item={item}
          index={index}
          location={location}
          toggleSubmenu={toggleSubmenu}
          expandedItems={expandedItems}
          moveCard={moveCard}
          isEditMode={isEditMode}
          changeVisibility={changeVisibility}
          /> : <div key={item.id}></div>
        ))
      ) : (
        <div className="m-auto">
          <Spinner color="success"></Spinner>
        </div>
      )}
    </Nav>
  );
};

export default SidebarNav;
