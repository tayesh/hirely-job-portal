import { createBrowserRouter } from "react-router-dom";
import Root from "../Root/Root";
import Home from "../Home/Home";
import FindJob from "../Find Job/FindJob";
import CoursesPage from "../CoursesPage/CoursesPage";
import Support from "../Support/Support";
import Login from "../Login/Login";
import Agency from "../Agency/Agency";
import Registration from "../Registration/Registration";
import Dashboard from "../Dashboard/Dashboard";
import DashboardCh from "../Dashboard/Dashboard Childrens/DashboardCh";
import Profile from "../Dashboard/Dashboard Childrens/Profile";
import CreateCV from "../Dashboard/Dashboard Childrens/CreateCV";
import AppliedJobs from "../Dashboard/Dashboard Childrens/AppliedJobs";
import SavedJobs from "../Dashboard/Dashboard Childrens/SavedJobs";
import Company from "../Dashboard/Dashboard Childrens/Company";
import Recruiting from "../Dashboard/Dashboard Childrens/Recruiting";
import Message from "../Dashboard/Dashboard Childrens/Message";
import GetAJobAlert from "../Dashboard/Dashboard Childrens/GetAJobAlert";
import Settings from "../Dashboard/Dashboard Childrens/Settings";


const router = createBrowserRouter([
    {
      path: "/",
      element:<Root></Root>,
      children:[
        {
            path: "/",
            element: <Home></Home>
        },
        {
          path:"/findjob",
          element:<FindJob></FindJob>
        },
        {
          path:"/coursepage",
          element: <CoursesPage></CoursesPage>
        },
        {
          path:"/support",
          element: <Support></Support>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/agency",
          element:<Agency></Agency>
        },
        {
          path:"/register",
          element: <Registration></Registration>
        },
        {
          path:"/dashboard",
          element:<Dashboard></Dashboard>,
          children:[
            {
              path:"/dashboard",
              element:<DashboardCh></DashboardCh>
            },
            {
              path:"profile",
              element:<Profile></Profile>
            },
            {
              path:"createcv",
              element:<CreateCV></CreateCV>
            },
            {
              path:"appliedjobs",
              element:<AppliedJobs></AppliedJobs>
            },
            {
              path:"savedjobs",
              element:<SavedJobs></SavedJobs>
            },
            {
              path:"company",
              element:<Company></Company>
            },
            {
              path:"recruiting",
              element:<Recruiting></Recruiting>
            },
            {
              path:"message",
              element:<Message></Message>
            },
            {
              path:"getjobalert",
              element:<GetAJobAlert></GetAJobAlert>
            },
            {
              path:"settings",
              element:<Settings></Settings>
            }
          ]
        }
      ]
    },
  ]);

  export default router;