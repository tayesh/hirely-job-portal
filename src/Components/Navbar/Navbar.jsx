import { NavLink } from "react-router-dom";

const Navbar = () => {
    const navlinkStyles = ({ isActive }) => ({
        border: isActive ? "2px solid #DCEFFF" : "2px solid white",
        backgroundColor: isActive ? "#DCEFFF" : "white",
        color: isActive ? "#00457C" : "black",
        fontWeight: isActive ? "normal" : "normal",
        padding: "8px 16px",
        borderRadius: "5px",
        textDecoration: "none"
    });

    const links = (
        <>
            <NavLink to="/" style={navlinkStyles}>
                <li className="epilogue font-normal text-[16px]">Home</li>
            </NavLink>
            <NavLink to="/findjob" style={navlinkStyles}>
                <li className="epilogue font-normal text-[16px]">Find Job</li>
            </NavLink>
            <NavLink to="/coursepage" style={navlinkStyles}>
                <li className="epilogue font-normal text-[16px]">Courses</li>
            </NavLink>
            <NavLink to="/support" style={navlinkStyles}>
                <li className="epilogue font-normal text-[16px]">Get Support</li>
            </NavLink>
            {/* <NavLink to="/employeedashboard" style={navlinkStyles}>
                <li className="epilogue font-normal text-[16px]">Emp Dash</li>
            </NavLink>
            <NavLink to="/employeehome" style={navlinkStyles}>
                <li className="epilogue font-normal text-[16px]">Emp Home</li>
            </NavLink>
            <NavLink to="/candidate" style={navlinkStyles}>
                <li className="epilogue font-normal text-[16px]">Candidate</li>
            </NavLink> */}
        </>
    );

    return (
        <div className="">
            <div className="navbar bg-base-100 shadow-lg px-8 ">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="epilogue menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {links}
                        </ul>
                    </div>
                    <NavLink to="/" className="belanosima text-[40px]">
                        Hire<span className="text-[#0079C1] belanosima">ly</span>
                    </NavLink>
                </div>
                <div className="mr-[200px] navbar-center hidden lg:flex">
                    <ul className="menu font-normal menu-horizontal gap-1 px-1">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end  gap-4">
                    <NavLink to="/login"><a  className="btn font-normal bg-white text-[#0079C1] border-[#0079C1]">Login</a></NavLink>
                    <NavLink to="/register"><a className="btn bg-[#0079C1] text-white font-normal">Register</a></NavLink>
                    <NavLink to="/agency"><a className="btn font-normal w-28 bg-[#F2F2F2] text-[#424447]">For Agency</a></NavLink>
                    <a className="btn bg-white text-[#0079C1] font-normal border-[#0079C1]">English</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
