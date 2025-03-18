import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserContext } from '../AuthContext/UserContext';

const AccountCreated = () => {
    const nav=useNavigate()
    const {user}=useContext(UserContext);
    return (
        <div className='w-full min-h-screen flex flex-col justify-center items-center gap-5'>
            <div className='w-[300px] h-[300px] rounded-full bg-green-100 flex justify-center items-center'>
                <img className='w-[200px] rounded-full' src="https://i.ibb.co.com/5ggLz1ZN/eec3f4f0f35dd63a942a6182c6a435fd.png" alt="" />
            </div>
            <h2 className='text-4xl font-semibold text-blue-700'>Your account has been created</h2>
            <button className='cursor-pointer text-xl text-white bg-blue-600 px-10 py-2 rounded'>Complete Verification</button>
            <p onClick={()=>{
                user.userRoll==="AGENCY"?
                nav("/employeehome")
                :nav("/")

            }} className='text-blue-700 cursor-pointer'>Skip for now</p>
            
            
        </div>
    );
};

export default AccountCreated;