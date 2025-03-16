import React from 'react';
import { FiEdit } from "react-icons/fi";
import BasicDetails from './Modals/BasicDetails';
import PersonalInformation from './Modals/PersonalInformation';
import Education from './Modals/Education';
import KeySkills from './Modals/KeySkills';
import WorkExp from './Modals/WorkExp';

const Profile = () => {

    const btn = (id, btntxt,modalID) => {
        return (
            <div id={id} onClick={()=>document.getElementById(modalID).showModal()} className='text-xl flex justify-center items-center gap-3 bg-[#E6ECFF] px-5 py-1 text-[#0079C1] rounded cursor-pointer'>
                <p>{btntxt ? btntxt : "Edit"}</p>
                <FiEdit className='text-sm' />

            </div>
        )
    }
    const detailHeadding = (title, id, btntxt = "",modalID) => {
        return (
            <div className='flex justify-between items-center'>
                <h2 className='text-2xl border-b-2 border-black'>{title}</h2>
                {btn(id, btntxt,modalID)}

            </div>

        )
    }

    return (
        <div className='px-10'>
            <div className="flex justify-around items-center  h-[50vh]">
                <div className='flex justify-around items-center text-2xl text-[#0079C1] font-semibold rounded-xl py-10 shadow-md border-2 w-full'>
                    <h2>Basic Details</h2>
                    <h2>Personal Info</h2>
                    <h2>Education</h2>
                    <h2>Key Skills</h2>
                    <h2>Employement</h2>
                </div>


            </div>
            {/* Basic Details */}
            <div className=''>
                <div className='shadow-md p-10 rounded-md'>
                    {
                        detailHeadding("Basic Details", "BD","","BasicDetails")
                    }
                    <div className='grid grid-cols-2 mt-5'>
                        <div className=' flex flex-col'>
                            <div className="flex items-center px-[100px]  gap-5  h-fit px-5 py-2 w-full">
                                <img className="mt-1 w-[44px]" src="https://i.ibb.co.com/h0WYFVJ/image.png" alt="" />
                                <div className="mt-0">
                                    <h2 className="text-base mt-0">Employment Type</h2>
                                    <p className="text-sm">Applied Jobs</p>
                                </div>
                            </div>
                            <div className="flex items-center px-[100px] gap-5  h-fit px-5 py-2 w-full ">
                                <img className="mt-1 border-[5px] border-[#E6ECFF] rounded-full w-[44px]" src="https://i.ibb.co.com/nsZdY5mQ/salary-Icon.png" alt="" />
                                <div className="mt-0">
                                    <h2 className="text-base mt-0 inline">Expected   Salary:</h2>
                                    <p className="text-sm inline"> {"15000"} Taka/Monthly</p>
                                </div>
                            </div>

                        </div>
                        <div className="flex items-center gap-5  h-fit px-5 py-2  ">
                            <img className="mt-1 w-[44px] border-[5px] border-[#E6ECFF] rounded-full " src="https://i.ibb.co.com/nsZdY5mQ/salary-Icon.png" alt="" />
                            <div className="mt-0">
                                <h2 className="text-base mt-0 inline">Present Salary:</h2>
                                <p className="text-sm inline"> {"15000"} Taka/Monthly</p>
                            </div>
                        </div>

                    </div>

                </div>


            </div>
            {/* Personal Info */}
            <div className='   mt-8 mb-5'>
                <div className='px-10'>
                    {detailHeadding("Personal Info", "PI","","PersonalInfo")}
                </div>
                <div className='h-20 shadow-md rounded-md '>
                    {/* Personal Info Here */}

                </div>
            </div>
            {/* Education  */}
            <div className='   mt-8 mb-5'>
                <div className='px-10'>
                    {detailHeadding("Education", "PI","","Education")}
                </div>
                <div className='px-10 py-5 shadow-md rounded-md '>
                    <div>
                        <h2 className='text-[20px] font-semibold text-[#0079C1]'>Bachelor</h2>
                        <p className='text-[16]'>Daffodill International University</p>
                        <p className='text-[14]'>Bsc in CSE (2022-2025)</p>
                    </div>

                </div>
            </div>
            {/* Key skills */}
            <div className='   mt-8 mb-5'>
                <div className='px-10'>
                    {detailHeadding("Key Skills", "PI", "Add","KeySkils")}
                </div>
                <div className='px-10 py-5 shadow-md rounded-md '>
                    <div className='w-[300px] border-2 text-center py-2 rounded text-[16px] text-[#0079C1] border-[#0079C1]'>
                        <h2>UI/UX Desginer -2 Years</h2>
                    </div>

                </div>

            </div>
            {/* Work Experience */}
            <div className='   mt-8 mb-5'>
                <div className='px-10'>
                    {detailHeadding("Work Experience", "PI", "Add","WorkExp")}
                </div>
                <div className='px-10 py-5 shadow-md rounded-md '>
                    <div className='w-[300px] border-2 text-center py-2 rounded text-[16px] text-[#0079C1] border-[#0079C1]'>
                        <h2>Harbour IT (2022-2024)</h2>
                    </div>

                </div>

            </div>
            {/* BD */}
            <dialog id="BasicDetails" className="modal">
                <div className="modal-box w-11/12 max-w-5xl rounded-2xl">
                    <h2 className='text-xl font-medium text-center mb-10'>Basic Details</h2>
                   <BasicDetails modalID={"BasicDetails"}></BasicDetails>
                    
                </div>
            </dialog>
            {/* PI */}
            <dialog id="PersonalInfo" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="text-xl font-medium text-center mb-10">Personal Info!</h3>
                    <PersonalInformation modalID={"PersonalInfo"}></PersonalInformation>
                    
                </div>
            </dialog>
            {/* E */}
            <dialog id="Education" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                <h3 className="text-xl font-medium text-center mb-10">Personal Info!</h3>
                <Education modalID={"Education"}></Education>
                    
                </div>
            </dialog>
            {/* KS */}
            <dialog id="KeySkils"a className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="text-xl font-medium text-center mb-10">Key Skils!</h3>
                    <KeySkills modalID={"KeySkils"}></KeySkills>
                    
                </div>
            </dialog>
            {/* WE */}
            <dialog id="WorkExp" className="modal">
                <div className="modal-box w-11/12 max-w-5xl">
                    <h3 className="text-xl font-medium text-center mt-10 mb-10">Work Experience!</h3>
                    <WorkExp></WorkExp>
                    
                </div>
            </dialog>
        </div>
    );
};

export default Profile;