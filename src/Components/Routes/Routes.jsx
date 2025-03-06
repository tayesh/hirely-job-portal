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
          path:"/jobdetails",
          element:<JobDetails></JobDetails>
        }
      ]
    },
  ]);

  export default router;