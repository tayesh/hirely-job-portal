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
import Dashboard from "../Dashboard/Dashboard";
import DashboardCh from "../Dashboard/Dashboard Childrens/DashboardCh";
import Profile from "../Dashboard/Dashboard Childrens/Profile";
import CreateCV from "../Dashboard/Dashboard Childrens/CreateCV";
import AppliedJobs from "../Dashboard/Dashboard Childrens/AppliedJobs";
import SavedJobs from "../Dashboard/Dashboard Childrens/SavedJobs";
import Company from "../Dashboard/Dashboard Childrens/Company";
import Recruiting from "../Dashboard/Dashboard Childrens/Recruiting";
import Message from "../Support/Message";
import GetAJobAlert from "../Dashboard/Dashboard Childrens/GetAJobAlert";
import Settings from "../Dashboard/Dashboard Childrens/Settings";
import CompanyProfile from "../Home/CompanyProfile";
import EmployerHome from "../Employer/EmployerHome";
import Candidate from "../Candidate/Candidate";
import EmployeeDashboard from "../EmployeeDashBoard/EmployeeDashboard";
import EmployeeDashboardCh from "../EmployeeDashBoard/EmployeeDashboardChild/EmployeeDashboardCh/EmployeeDashboardCh";
import EmployeeMessage from "../EmployeeDashBoard/EmployeeDashboardChild/EmployeeDashboardCh/EmployeeMessage";
import EmployeeTalentCh from "../EmployeeDashBoard/EmployeeDashboardChild/EmployeeTalentCh";
import EmployeeNotifiCh from "../EmployeeDashBoard/EmployeeDashboardChild/EmployeeDashboardCh/EmployeeNotifiCh";
import EmployeeAccSettCh from "../EmployeeDashBoard/EmployeeDashboardChild/EmployeeDashboardCh/EmployeeAccSettCh";
import CompanyProfilech from "../EmployeeDashBoard/EmployeeDashboardChild/EmployeeDashboardCh/CompanyProfilech";
import AgencyVarification from "../EmployeeDashBoard/AgencyVarification";
import EmployeeApliedJobs from "../EmployeeDashBoard/EmployeeDashboardChild/EmployeeDashboardCh/EmployeeApliedJobs";
import HowtoStart from "../EmployeeDashBoard/HowtoStart";
import PricingEmp from "../EmployeeDashBoard/EmployeeDashboardChild/PricingEmp";
import Direct from "../EmployeeDashBoard/Direct";
import EmployeeAddjob from "../EmployeeDashBoard/EmployeeDashboardChild/EmployeeDashboardCh/EmployeeAddjob";
import EmployeepostedJob from "../EmployeeDashBoard/EmployeeDashboardChild/EmployeeDashboardCh/EmployeepostedJob";
import CandidateProfile from "../EmployeeDashBoard/EmployeeDashboardChild/EmployeeDashboardCh/CandidateProfile";
import OTPverification from "../Agency/OTPverification";
import AccountCreated from "../Agency/AccountCreated";
import VerifyAccount from "../Agency/VerifyAccount";
import Verified from "../Agency/Verified";
import Terms from "../Terms";
import Privacy from "../Privacy";
import Refund from "../Refund";
import About from "../About";
import Faqcand from "../Faqcand";
import Faqcom from "../Faqcom";
import AdminDashboard from "../AdminDashboard/AdminDashboard";
import AdminAllApplied from "../AdminDashboard/AdminDashboardCh/AdminAllApplied";
import AdminAllCOmpany from "../AdminDashboard/AdminDashboardCh/AdminAllCOmpany";
import AdminAllCand from "../AdminDashboard/AdminDashboardCh/AdminAllCand";
import AdminAllAgency from "../AdminDashboard/AdminDashboardCh/AdminAllAgency";
import AdminPostJob from "../AdminDashboard/AdminPostJob";
import AdminAllJobs from "../AdminDashboard/AdminDashboardCh/AdminAllJobs";
import AdminSettings from "../AdminDashboard/AdminSettings";
import AdminDashboardCh from "../AdminDashboard/AdminDashboardCh/AdminDashboardCh";


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('https://hirely-job-portal-server.vercel.app/jobs'),
      },
      {
        path: "/findjob",
        element: <FindJob></FindJob>,
      },
      {
        path: "/coursepage",
        element: <CoursesPage></CoursesPage>,
        loader: () => fetch('https://hirely-job-portal-server.vercel.app/courses')
      },
      {
        path: "/support",
        element: <Support></Support>
      },
      {
        path: "/terms",
        element: <Terms></Terms>
      },
      {
        path: "/privacy",
        element: <Privacy></Privacy>
      },
      {
        path: "/refund",
        element: <Refund></Refund>
      },
      {
        path: "/about",
        element: <About></About>
      },
      {
        path: "/faqcan",
        element: <Faqcand></Faqcand>
      },
      {
        path: "/faqcom",
        element: <Faqcom></Faqcom>
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
        path: "/otp",
        element: <OTPverification></OTPverification>
      },
      {
        path: "/accCreated",
        element: <AccountCreated></AccountCreated>
      },
      {
        path: "/verifyacc",
        element: <VerifyAccount></VerifyAccount>
      },
      {
        path: "/verified",
        element: <Verified></Verified>
      },
      {
        path: "/register",
        element: <Registration></Registration>
      },
      {
        path: '/jobdetails/:id',
        element: <JobDetails></JobDetails>,
        loader: ({ params }) => fetch(`https://hirely-job-portal-server.vercel.app/jobs/${params.id}`)
      },
      {
        path: '/companyprofile/:id',
        element: <CompanyProfile></CompanyProfile>,
        loader: ({ params }) => fetch(`https://hirely-job-portal-server.vercel.app/companies/${params.id}`)
      },
      {
        path: "/more-info/:courseId",
        element: <MoreInfo />,
        loader: async ({ params }) => {
          const { courseId } = params;
          const response = await fetch(`https://hirely-job-portal-server.vercel.app/courses/${courseId}`);
          if (!response.ok) {
            throw new Error("Course not found");
          }
          return response.json();
        }
      },
      {
        path: "/employeehome",
        element: <EmployerHome></EmployerHome>
      },
      {
        path: "/candidate",
        element: <Candidate></Candidate>
      },
      {
        path: "/howtostart",
        element: <HowtoStart></HowtoStart>
      },
      {
        path: "/employeepricing",
        element: <PricingEmp></PricingEmp>
      },
      {
        path: "/employeerecruit",
        element: <Direct></Direct>
      },
      {
        path: "/users/email/:email",
        element: <CandidateProfile></CandidateProfile>
      },
      {
        path: "/admindashboard",
        element: <AdminDashboard></AdminDashboard>,
        children: [
          {
            path: "/admindashboard",
            element: <AdminDashboardCh></AdminDashboardCh>
          },
          {
            path: "allappliedjobs",
            element: <AdminAllApplied></AdminAllApplied>
          },
          {
            path: "allcompany",
            element: <AdminAllCOmpany></AdminAllCOmpany>
          },
          {
            path: "alljobs",
            element: <AdminAllJobs></AdminAllJobs>
          },
          {
            path: "allusers",
            element: <AdminAllCand></AdminAllCand>
          },
          {
            path: "allagencies",
            element: <AdminAllAgency></AdminAllAgency>
          },
          {
            path: "newjob",
            element: <AdminPostJob></AdminPostJob>
          },
          {
            path: "adsettings",
            element: <AdminSettings></AdminSettings>
          }
        ]
      },
      {
        path: "/employeedashboard",
        element: <EmployeeDashboard></EmployeeDashboard>,
        children: [
          {
            path: "/employeedashboard",
            element: <EmployeeDashboardCh></EmployeeDashboardCh>
          },
          {
            path: "messages",
            element: <EmployeeMessage></EmployeeMessage>
          },
          {
            path: "talentmanagement",
            element: <EmployeeTalentCh></EmployeeTalentCh>
          },
          {
            path: "notifications",
            element: <EmployeeNotifiCh></EmployeeNotifiCh>
          },
          {
            path: "settings",
            element: <EmployeeAccSettCh></EmployeeAccSettCh>
          },
          {
            path: "companyprofile",
            element: <CompanyProfilech></CompanyProfilech>
          },
          {
            path: "agencyverification",
            element: <AgencyVarification></AgencyVarification>
          },
          {
            path: "allapplied",
            element: <EmployeeApliedJobs></EmployeeApliedJobs>
          },
          {
            path: "newjobpost",
            element: <EmployeeAddjob></EmployeeAddjob>
          },
          {
            path: "postedjob",
            element: <EmployeepostedJob></EmployeepostedJob>
          }
        ]
      },
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children: [
          {
            path: "/dashboard",
            element: <DashboardCh></DashboardCh>
          },
          {
            path: "profile",
            element: <Profile></Profile>
          },
          {
            path: "createcv",
            element: <CreateCV></CreateCV>
          },
          {
            path: "appliedjobs",
            element: <AppliedJobs></AppliedJobs>
          },
          {
            path: "savedjobs",
            element: <SavedJobs></SavedJobs>
          },
          {
            path: "company",
            element: <Company></Company>
          },
          {
            path: "recruiting",
            element: <Recruiting></Recruiting>
          },
          {
            path: "message",
            element: <Message></Message>
          },
          {
            path: "getjobalert",
            element: <GetAJobAlert></GetAJobAlert>
          },
          {
            path: "settings",
            element: <Settings></Settings>
          }
        ]
      }
    ]
  },

]);

export default router;