import React, { useEffect, useRef, useState } from "react";
import { useDrag, useDrop } from "react-dnd";
import { NavItem, Nav } from "reactstrap";
import { Link } from "react-router-dom";
import { FaChevronDown, FaChevronRight } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faPencil,
  faEye,
  faEyeSlash,
} from "@fortawesome/free-solid-svg-icons";
import style from "./Sidebar.module.css";
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
  changeVisibility,
}) => {
  const ref = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const [longPressTimer, setLongPressTimer] = useState(null);

  const [{ handlerId }, drop] = useDrop({
    accept: ItemTypes.NAV_ITEM,
    collect(monitor) {
      return {
        handlerId: monitor.getHandlerId(),
      };
    },
    hover(item, monitor) {
      if (!ref.current || !isEditMode) {
        return;
      }
      const dragIndex = item.originalIndex;
      const hoverIndex = index;

      // Don't replace items with themselves
      if (dragIndex === hoverIndex) {
        return;
      }

      // Determine rectangle on screen
      const hoverBoundingRect = ref.current?.getBoundingClientRect();

      // Get vertical middle
      const hoverMiddleY =
        (hoverBoundingRect.bottom - hoverBoundingRect.top) / 2;

      // Determine mouse position
      const clientOffset = monitor.getClientOffset();

      // Get pixels to the top
      const hoverClientY = clientOffset.y - hoverBoundingRect.top;

      // Only perform the move when the mouse has crossed half of the items height
      // When dragging downwards, only move when the cursor is below 50%
      // When dragging upwards, only move when the cursor is above 50%

      // Dragging downwards
      if (dragIndex < hoverIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // Dragging upwards
      if (dragIndex > hoverIndex && hoverClientY > hoverMiddleY) {
        return;
      }

      // Just update the visual position without affecting indices
      item.currentHoverIndex = hoverIndex;
    },
    drop(item, monitor) {
      if (!isEditMode) return;
      const dragIndex = item.originalIndex;
      const dropIndex = index;
      if (dragIndex !== dropIndex) {
        moveCard(dragIndex, dropIndex, item.id);
      }
    },
  });

  const [{ isDragging }, drag] = useDrag({
    type: ItemTypes.NAV_ITEM,
    item: () => {
      if (!isEditMode) return null;
      return {
        id: item.id,
        originalIndex: index,
        currentHoverIndex: index,
      };
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
    canDrag: () => isEditMode,
  });

  const opacity = isDragging ? 0 : 1;
  drag(drop(ref));

  const handleTouchStart = () => {
    setIsHovered(true);
  };

  const handleTouchEnd = () => {
    setIsHovered(false);
  };

  return (
    <div
      data-handler-id={handlerId}
      ref={ref}
      className={`${
        style.cardDragging
      } opacity-100 text-dark-gray transition-transform duration-200 ease-in-out ${
        isHovered ? style.translate5 : style.translate0
      } ${
        isDragging ? "cursor-grabbing" : isEditMode ? "cursor-grab" : "default"
      }`}
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
            to={item.target}
            className={`nav-link d-flex align-items-center px-2 py-2 ${
              item.visible ? "text-dark" : "text-light-gray"
            } my-1 w-100 justify-content-between`}
            onClick={
              item.children
                ? (e) => {
                    isEditMode && e.preventDefault();
                    toggleSubmenu(item.id);
                  }
                : undefined
            }
            style={{
              cursor: isDragging ? "grabbing" : isEditMode ? "grab" : "default",
              userSelect: "none",
            }}
          >
            <div>
              {isEditMode && (
                <FontAwesomeIcon icon={faEllipsisVertical} className="px-1" />
              )}
              {isEditMode && (
                <FontAwesomeIcon icon={faEllipsisVertical} className="pr-2" />
              )}
              <span>{item.title}</span>
            </div>
            <div className={`${style.sidebarNavItemsIcons}`}>
              {item.children && !isEditMode && (
                <span className="ms-auto">
                  {expandedItems[item.id] ? (
                    <FaChevronDown />
                  ) : (
                    <FaChevronRight />
                  )}
                </span>
              )}
              {isEditMode && (
                <FontAwesomeIcon icon={faPencil} className="px-1 text-gray" />
              )}
              {isEditMode && (
                <FontAwesomeIcon
                  icon={item.visible ? faEye : faEyeSlash}
                  className="px-1 text-gray"
                  onClick={() => changeVisibility(item.id)}
                />
              )}
            </div>
          </Link>
        </div>

        {/* Render submenu if exists and is expanded */}
        {item.children && (isEditMode || expandedItems[item.id]) && (
          <Nav vertical className="submenu ps-4 mt-2">
            <>
              {item.children.map((child) =>
                isEditMode ? (
                  <NavItem
                    key={child.id}
                    className="d-flex align-items-center justify-content-between"
                  >
                    <Link
                      to={child.target}
                      className={`${
                        child.visible ? "text-dark" : "text-light-gray"
                      } nav-link`}
                    >
                      {child.title}
                    </Link>
                    <div>
                      {isEditMode && (
                        <FontAwesomeIcon
                          icon={faPencil}
                          className="px-1 text-gray"
                        />
                      )}
                      {isEditMode && (
                        <FontAwesomeIcon
                          icon={child.visible ? faEye : faEyeSlash}
                          className="px-1 text-gray"
                          onClick={() => changeVisibility(item.id, child.id)}
                        />
                      )}
                    </div>
                  </NavItem>
                ) : (
                  child.visible && (
                    <NavItem
                      key={child.id}
                      className="d-flex align-items-center justify-content-between"
                    >
                      <Link
                        to={child.path}
                        className={`${
                          child.visible ? "text-dark" : "text-light-gray"
                        } nav-link`}
                      >
                        {child.title}
                      </Link>
                    </NavItem>
                  )
                )
              )}
            </>
          </Nav>
        )}
      </NavItem>
    </div>
  );
};

export default SidebarNavItems;
