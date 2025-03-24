import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../AuthContext/UserContext";
import Switch from '@mui/material/Switch';

const Navbar = ({ darkmode, changeTheme }) => {
    const navlinkStyles = ({ isActive }) => ({
        border: isActive ? "2px solid #DCEFFF" : "2px solid white",
        backgroundColor: isActive ? "#DCEFFF" : "transparent",
        color: isActive ? "#00457C" : "inherit",
        fontWeight: isActive ? "normal" : "normal",
        padding: "8px 16px",
        borderRadius: "5px",
        textDecoration: "none",
    });

    const { isLoggedIn, user } = useContext(UserContext);
    const nav = useNavigate();

    // Common links for all users
    const commonLinks = (
        <>
            <NavLink to="/" style={navlinkStyles}>
                <li className="epilogue font-normal text-[16px]">Home</li>
            </NavLink>
            <NavLink to="/findjob" style={navlinkStyles}>
                <li className="epilogue font-normal text-[16px]">Find Job</li>
            </NavLink>
            <NavLink to="/support" style={navlinkStyles}>
                <li className="epilogue font-normal text-[16px]">Get Support</li>
            </NavLink>
        </>
    );

    // Links for Agency users
    const agencyLinks = (
        <>
            <NavLink to="/employeehome" style={navlinkStyles}>
                <li className="epilogue font-normal text-[16px]">Home</li>
            </NavLink>
            <NavLink to="/howtostart" style={navlinkStyles}>
                <li className="epilogue font-normal text-[16px]">How to Start</li>
            </NavLink>
            <NavLink to="/employeepricing" style={navlinkStyles}>
                <li className="epilogue font-normal text-[16px]">Pricing</li>
            </NavLink>
            <NavLink to="/employeerecruit" style={navlinkStyles}>
                <li className="epilogue font-normal text-[16px]">Direct Recruiting</li>
            </NavLink>
            <NavLink to="/support" style={navlinkStyles}>
                <li className="epilogue font-normal text-[16px]">Get Support</li>
            </NavLink>
        </>
    );

    // Links for Admin users
    const adminLinks = (
        <NavLink to="/admindashboard">
            <li className="epilogue font-normal text-[16px]">Admin Dashboard</li>
        </NavLink>
    );

    return (
        <div className="fixed top-0 w-full z-50">
            <div className="navbar bg-base-100 shadow-lg px-8">
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
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="epilogue menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {user?.userRoll === "AGENCY" ? agencyLinks : user?.userRoll === "ADMIN" ? adminLinks : commonLinks}
                        </ul>
                    </div>
                    <NavLink
                        to={user?.userRoll === "AGENCY" ? "/employeehome" : user?.userRoll === "ADMIN" ? "/admindashboard" : "/"}
                        className="belanosima text-[40px] mr-6"
                    >
                        Hire<span className="text-[#0079C1] belanosima">ly</span>
                    </NavLink>
                </div>
                <div className="mr-[50px] navbar-center hidden lg:flex">
                    <ul className="menu font-normal menu-horizontal gap-6 px-1">
                        {user?.userRoll === "AGENCY" ? agencyLinks : user?.userRoll === "ADMIN" ? adminLinks : commonLinks}

                        {isLoggedIn && user?.userRoll !== "AGENCY" && user?.userRoll !== "ADMIN" && (
                            <div className="flex gap-5 justify-center items-center">
                                <img
                                    onClick={() => nav("/dashboard/getjobalert")}
                                    className="w-10 mx-10 cursor-pointer"
                                    src="https://i.ibb.co.com/MDPGFFLj/5954d2569e42aff975cf471cc740f66c.png"
                                    alt=""
                                />
                                <img
                                    onClick={() => nav("/dashboard")}
                                    className="w-10 p-[2px] border-2 rounded-full cursor-pointer"
                                    src="https://i.ibb.co.com/S4J9jhj1/image.png"
                                    alt=""
                                />
                                <div>
                                    <h2 className="text-[15px]">{user.name}</h2>
                                    <p className="text-[11px] text-gray-600">{user.userRoll}</p>
                                </div>
                            </div>
                        )}
                    </ul>
                </div>
                <div className="navbar-end">
                    {user?.userRoll === "AGENCY" ? (
                        <img
                            onClick={() => nav("/employeedashboard")}
                            className="w-14 p-[2px] border-2 rounded-full cursor-pointer"
                            src="https://i.ibb.co.com/S4J9jhj1/image.png"
                            alt=""
                        />
                    ) : user?.userRoll === "ADMIN" ? (
                        <img
                            onClick={() => nav("/admindashboard")}
                            className="w-14 p-[2px] border-2 rounded-full cursor-pointer"
                            src="https://i.ibb.co.com/S4J9jhj1/image.png"
                            alt=""
                        />
                    ) : isLoggedIn ? (
                        <a className="btn bg-white text-[#0079C1] mr-5 font-normal border-[#0079C1]">
                            English
                        </a>
                    ) : (
                        <>
                            <NavLink to="/login">
                                <a className="btn font-normal bg-white w-28 mr-5 text-[#0079C1] border-[#0079C1]">
                                    Login
                                </a>
                            </NavLink>
                            <NavLink to="/register">
                                <a className="btn bg-[#0079C1] w-28 mr-5 text-white font-normal">
                                    Register
                                </a>
                            </NavLink>
                            <NavLink to="/agency">
                                <a className="btn font-normal w-28 mr-5 bg-[#F2F2F2] text-[#424447]">
                                    For Agency
                                </a>
                            </NavLink>
                            <a className="btn bg-white text-[#0079C1] mr-5 font-normal border-[#0079C1]">
                                English
                            </a>
                        </>
                    )}
                    <Switch checked={darkmode} onChange={changeTheme} color="default" />
                </div>
            </div>
        </div>
    );
};

export default Navbar;