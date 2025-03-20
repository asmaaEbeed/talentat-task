import React, { useEffect, useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { NavItem, Nav } from "reactstrap";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";

// Define a constant for the item type
const ItemTypes = {
  NAV_ITEM: "navItem",
};

const SidebarNavItems = ({
  item,
  index,
  location,
  toggleSubmenu,
  expandedItems,
  moveCard,
  isEditMode,
}) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  // ... existing drag and drop code ...

  return (
    <div 
      data-handler-id={handlerId} 
      ref={ref} 
      style={{ 
        opacity,
        transform: isHovered ? 'translateY(10px)' : 'translateY(0)',
        transition: 'transform 0.2s ease',
        touchAction: 'none',
        cursor: isDragging ? 'grabbing' : 'grab',
        userSelect: 'none'
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <NavItem
        key={item.id}
        className={`sidebar-item px-2 py-1${
          location.pathname === item.path ? "active" : ""
        }`}
      >
        <div className="sidebar-item-content w-100 bg-light">
          <Link
            to={item.path}
            className="nav-link d-flex align-items-center px-2 py-2 text-dark my-1 w-100 justify-content-between"
            onClick={
              item.children && !isEditMode
                ? (e) => {
                    e.preventDefault();
                    toggleSubmenu(item.id);
                  }
                : undefined
            }
            style={{
              cursor: isDragging ? 'grabbing' : 'grab',
              userSelect: 'none'
            }}
          >
            <div>
              <span>{item.title}</span>
            </div>
            <div>
              {item.children && !isEditMode && (
                <span className="ms-auto">
                  {expandedItems[item.id] ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronRight />
                  )}
                </span>
              )}
            </div>
          </Link>
        </div>

        {/* Render submenu if exists and is expanded */}
        {item.children && (isEditMode || expandedItems[item.id]) && (
          <Nav vertical className="submenu ps-4 mt-2">
            <>
              {item.children.map((child) => (
                <NavItem key={child.id}>
                  <Link to={child.path} className="nav-link text-black">
                    {child.title}
                  </Link>
                </NavItem>
              ))}
            </>
          </Nav>
        )}
      </NavItem>
    </div>
  );
};

export default SidebarNavItems; 