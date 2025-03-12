import { Outlet } from "react-router-dom";
import EmployeeSideBar from "./EmployeeSideBar";

const EmployeeDashboard = () => {
    return (
        <div className='grid grid-cols-10'>
            <EmployeeSideBar></EmployeeSideBar>
            <div className='col-span-8 pb-10'>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default EmployeeDashboard;