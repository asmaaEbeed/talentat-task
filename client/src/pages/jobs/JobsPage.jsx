import React, { useState, useEffect, useContext } from "react";
import {
  Container,
  Row,
  Col,
  FormGroup,
  Input,
  Pagination,
  PaginationItem,
  PaginationLink,
} from "reactstrap";
import axios from "axios";
import JobCard from "./components/JobCard";
import SortingDropdown from "./components/SortingDropdown";
import SidebarContext from "../../context/SidebarContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import style from "./JobsPage.module.css";
import { jobAPI } from "../../services/api";
import image1 from "../../assets/images/jobs-imgs/image1.png"
import image2 from "../../assets/images/jobs-imgs/image2.png"
import image3 from "../../assets/images/jobs-imgs/image3.png"

const JobsPage = () => {
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [jobsPerPage] = useState(5);
  const [jobAlert, setJobAlert] = useState(false);
  const [currentSort, setCurrentSort] = useState('top_match');

  const { toggle } = useContext(SidebarContext);

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        setLoading(true);
        const response = await jobAPI.getAllJobs();
        setJobs(response?.data || []);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching jobs:", error);
        setJobs([]);
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  // Get current jobs
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;

  // Sort jobs based on currentSort
  const sortJobs = (jobsToSort) => {
    if (!jobsToSort) return [];
    
    switch (currentSort) {
      case 'newest':
        return [...jobsToSort].sort((a, b) => new Date(b.postedDate) - new Date(a.postedDate));
      case 'latest':
        return [...jobsToSort].sort((a, b) => new Date(a.postedDate) - new Date(b.postedDate));
      case 'top_match':
      default:
        return jobsToSort; // Assuming the default API response is already sorted by top match
    }
  };

  const sortedJobs = sortJobs(jobs);
  const currentJobs = sortedJobs?.slice(indexOfFirstJob, indexOfLastJob) || [];

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Handle sort change
  const handleSort = (sortId) => {
    setCurrentSort(sortId);
    setCurrentPage(1); // Reset to first page when sorting changes
  };

  return (
    <Container fluid className="px-0">
      <div className="d-lg-flex d-none justify-content-end mb-2">
        <SortingDropdown onSort={handleSort} currentSort={currentSort} />
      </div>
      <div className="d-flex justify-content-between align-items-center gap-2 mb-2">
        <div className="primary-background-color d-flex justify-content-between align-items-center w-100 rounded-2 px-3 py-1 py-lg-4">
          <div>
            <h4 className={`${style.jobListTitle} text-white`}>UI Designer in Egypt</h4>
            <div className="job-list-count text-white">{jobs?.length || 0} job positions</div>
          </div>
          <div className="d-flex align-items-center gap-3">
            <div className="job-alert-switch d-flex align-items-center gap-2">
              <span className="text-white">Set alert</span>
              <FormGroup switch className="mb-0">
                <Input
                  type="switch"
                  checked={jobAlert}
                  onChange={() => setJobAlert(!jobAlert)}
                />
              </FormGroup>
            </div>
          </div>
        </div>
        <div className="toggle-sidebar d-flex d-lg-none justify-content-end">
          <button className={`toggle-sidebar-button p-2 bg-white border border-2 rounded-2 ${style.sidebarButton}`} onClick={toggle}>
            <FontAwesomeIcon icon={faBars} color="black" className="fs-4"/>
          </button>
        </div>
      </div>

      <Row className="mx-0">
        <Col className="px-0">
          {loading ? (
            <div className="text-center my-5">Loading...</div>
          ) : (
            <>
              {jobs?.length > 0 && currentJobs.map((job, index) => (
                <JobCard key={job?.id} job={job} image={index%3 === 0 ? image1 : index%3 === 1 ? image2 : image3} />
              ))}

              {jobs?.length > 0 && (
                <Pagination className="d-flex justify-content-center mt-4">
                  <PaginationItem disabled={currentPage === 1}>
                    <PaginationLink
                      previous
                      onClick={() => paginate(currentPage - 1)}
                    />
                  </PaginationItem>

                  {Array.from({
                    length: Math.ceil((jobs?.length || 0) / jobsPerPage),
                  }).map((_, index) => (
                    <PaginationItem
                      key={index}
                      active={currentPage === index + 1}
                    >
                      <PaginationLink onClick={() => paginate(index + 1)}>
                        {index + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}

                  <PaginationItem
                    disabled={
                      currentPage === Math.ceil((jobs?.length || 0) / jobsPerPage)
                    }
                  >
                    <PaginationLink
                      next
                      onClick={() => paginate(currentPage + 1)}
                    />
                  </PaginationItem>
                </Pagination>
              )}
            </>
          )}
        </Col>
      </Row>
    </Container>
  );
};

export default JobsPage;
