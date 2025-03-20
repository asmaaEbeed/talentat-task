import React, { useState } from "react";
import {
  Card,
  CardBody,
  CardTitle,
  CardSubtitle,
  Badge,
  Button,
} from "reactstrap";
import { FaMapMarkerAlt, FaClock, FaHeart, FaRegHeart, FaCalendar, FaCalendarAlt } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-regular-svg-icons/faCalendar";
import style from "../jobs.module.css";

const JobCard = ({ job, image }) => {
  const [favorite, setFavorite] = useState(false);

  const toggleFavorite = () => {
    setFavorite(!favorite);
  };

  return (
    <Card className={`job-card mb-3 ${style.jobCard} px-0 border-0 rounded-1`}>
      <CardBody className="px-0">
        <div className="d-flex justify-content-between align-items-start px-4">
          <div className="d-flex">
            <div className="job-company-logo me-3">
              {/* Company logo placeholder */}
              <div
                style={{
                  width: "50px",
                  height: "50px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "8px",
                  color: "#666",
                }}
              >
                <img src={image} alt="company logo" />
                {/* {job.company.charAt(0)} */}
              </div>
            </div>
            <div>
              <CardTitle tag="h5" className="job-title">
                {job.title}
              </CardTitle>
              <CardSubtitle
                tag="h6"
                className="job-company mb-2 text-primary-color"
              >
                {job.company}
              </CardSubtitle>
            </div>
          </div>

          <Button
            color="link"
            className="favorite-btn p-0"
            onClick={toggleFavorite}
          >
            {favorite ? <FaHeart color="#ff6b6b" /> : <FaRegHeart />}
          </Button>
        </div>
        <div className="d-flex align-items-center my-2 px-4">
          <FaMapMarkerAlt className="text-muted me-1" />
          <small className="text-muted ">{job.location}</small>
          <FontAwesomeIcon icon={faCalendar} className="text-muted me-1 mx-2"  />
          <small className="text-muted">{job.postedDays} days ago</small>
        </div>

        <div className="job-details my-3 px-4">
          <Badge color="light" className="me-2 text-gray rounded-1 fw-medium">
            {job.experienceLevel}
          </Badge>
          <Badge color="light" className="me-2 text-gray rounded-1 fw-medium">
            {job.jobType}
          </Badge>
          <Badge color="light" className="text-gray fw-medium">{job.workMode}</Badge>
        </div>
        <hr className="sidebar-menu-divider" />
        <div className="job-categories px-4">
          {job.categories.map((category, index) => (
            <span key={index}  >
              {category}<span className="mx-2 text-muted"> {index !== job.categories.length - 1 && " - "}</span>
            </span>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

export default JobCard;
