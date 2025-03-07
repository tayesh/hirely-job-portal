import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import FindJob from "../Find Job/FindJob";
import CoursesPage from "../CoursesPage/CoursesPage";
import Support from "../Support/Support";
import Login from "../Login/Login";
import Agency from "../Agency/Agency";
import Registration from "../Registration/Registration";
import JobDetails from "../JobDetails/JobDetails";
import MoreInfo from "../Courses/MoreInfo";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>
      },
      {
        path: "/findjob",
        element: <FindJob></FindJob>
      },
      {
        path: "/coursepage",
        element: <CoursesPage></CoursesPage>
      },
      {
        path: "/support",
        element: <Support></Support>
      },
      {
        path: "/login",
        element: <Login></Login>
      },
      {
        path: "/agency",
        element: <Agency></Agency>
      },
      {
        path: "/register",
        element: <Registration></Registration>
      },
      {
        path: "/findjob/:jobTitle",
        element: <JobDetails></JobDetails>,
        loader: async ({ params }) => {
          const res = await fetch('/fake.json');
          const jobs = await res.json();
          return jobs.find(job => job.jobTitle === params.jobTitle) || null;
        }
      },
      {
        path: "/more-info/:courseId",
        element: <MoreInfo></MoreInfo>
      }
    ]
  },
  // {
  //   path: "/dashboard",
  //   element: <Dashboard></Dashboard>,
  //   children: [
  //     {
  //       path: "/dashboard",
  //       element: <DashboardCh></DashboardCh>
  //     },
  //     {
  //       path: "profile",
  //       element: <Profile></Profile>
  //     },
  //     {
  //       path: "createcv",
  //       element: <CreateCV></CreateCV>
  //     },
  //     {
  //       path: "appliedjobs",
  //       element: <AppliedJobs></AppliedJobs>
  //     },
  //     {
  //       path: "savedjobs",
  //       element: <SavedJobs></SavedJobs>
  //     },
  //     {
  //       path: "company",
  //       element: <Company></Company>
  //     },
  //     {
  //       path: "recruiting",
  //       element: <Recruiting></Recruiting>
  //     },
  //     {
  //       path: "message",
  //       element: <Message></Message>
  //     },
  //     {
  //       path: "getjobalert",
  //       element: <GetAJobAlert></GetAJobAlert>
  //     },
  //     {
  //       path: "settings",
  //       element: <Settings></Settings>
  //     }
  //   ]
  // }
]);

export default router;