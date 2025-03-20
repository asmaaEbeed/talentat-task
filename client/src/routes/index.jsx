import JobsPage from "../pages/jobs/JobsPage";
import Dashboard from "../pages/Dashboard";
import JobApplication from "../pages/JobApplication";
import Qualifications from "../pages/Qualifications";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Companies from "../pages/Companies";
import Employers from "../pages/Employers";
import Messaging from "../pages/Messaging";
import Notifications from "../pages/Notifications";



export const routes = [
  {
    path: "/",
    element: <JobsPage />,
  },
  {
    path: "/jobs",
    element: <JobsPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/job-application",
    element: <JobApplication />,
  },
  {
    path: "/qualifications",
    element: <Qualifications />,
  },
  {
    path: "/about",
    element: <About />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/companies",
    element: <Companies />,
  },
  {
    path: "/employers",
    element: <Employers />,
  },
  {
    path: "/messaging",
    element: <Messaging />,
  },
  {
    path: "/notifications",
    element: <Notifications />,
  },
]; 