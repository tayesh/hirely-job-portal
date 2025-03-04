import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-base-100 px-8">
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
                            <li className="epilogue text-[16px]"><a>Home</a></li>
                            <li className="epilogue text-[16px]"><a>Find Job</a></li>
                            <li className="epilogue text-[16px]"><a>Courses</a></li>
                            <li className="epilogue text-[16px]"><a>Get Support</a></li>
                        </ul>
                    </div>
                    <Link to="/">
                        <a className="belanosima text-[40px]">Hire<span className="text-blue-500 belanosima">ly</span></a>
                    </Link>
                </div>
                <div className="mr-[200px] navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-8 px-1">
                        <li className="epilogue text-[16px]"><a>Home</a></li>
                        <li className="epilogue text-[16px]"><a>Find Job</a></li>
                        <li className="epilogue text-[16px]"><a>Courses</a></li>
                        <li className="epilogue text-[16px]"><a>Get Support</a></li>
                    </ul>
                </div>
                <div className="navbar-end gap-6">
                    <a className="btn bg-white text-[#0079C1] border-[#0079C1]">Login</a>
                    <a className="btn bg-[#0079C1] text-white">Register</a>
                    <a className="btn bg-[#F2F2F2] text-[#424447]">For Agency</a>
                    <a className="btn bg-white text-[#0079C1] border-[#0079C1]">English</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;