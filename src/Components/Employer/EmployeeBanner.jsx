import axios from "axios";
import Swal from "sweetalert2";

import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../AuthContext/UserContext";
const EmployeeBanner = () => {
    const { user } = useContext(UserContext);
        const navigate = useNavigate();
    
        const handleCreatePayment = async () => {
            if (!user) {
                Swal.fire({
                    title: 'Login Required',
                    text: 'You need to be logged in to take this course.',
                    icon: 'warning',
                    confirmButtonText: 'Login',
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/login');
                    }
                });
                return;
            }
    
            try {
                const response = await axios.post('http://localhost:5000/create-payment', {
                    name: user.name,
                    email: user.email,
                    phoneNumber: user.phoneNumber,
                    course: 'Sponsored Job',
                    category: 'Top Position Guaranteed',
                    amount: '2980',
                    currency: 'BDT'
                });
    
                const redirectUrl = response.data.paymentUrl;
    
                if (redirectUrl) {
                    window.location.replace(redirectUrl);
                }
            } catch (error) {
                console.error('Error creating payment:', error);
                Swal.fire({
                    title: 'Error',
                    text: 'Failed to create payment. Please try again.',
                    icon: 'error',
                    confirmButtonText: 'OK',
                });
            }
        };
    return (
        <div className="mx-10 flex gap-[50px]">
            <div className="flex-1">
                <h2 className="text-[#000000DE] text-[60px] mt-[80px] roboto">Find <br />High-Potential Candidates with <span className="text-[#0084FF]">Sponsored Jobs</span></h2>
                <p className="mt-[46px] text-[20px] mb-[67px] roboto text-[#000000DE]">Maximize your reach with Sponsored Jobs. Highlight your opportunities, attract top-tier talent, and connect with high-potential candidates ready to drive your business forward.</p>
                <div className="flex gap-4 mb-[67px]">
                    <button onClick={handleCreatePayment} className="btn h-[59px] px-[30px] py-3 text-[20px] roboto font-normal rounded-[4px] bg-[#0084FF] text-[#FFFFFF]">Post a sponsored job</button>
                </div>
                <p className="text-[25px] font-medium mb-10">More than <span className="text-[#E7A652]">10,000+</span> Bangladesh’s Best Companies</p>
            </div>
            <div className="flex-1">
                <img src="https://i.ibb.co.com/8gSR1spP/man.jpg" alt="" className="w-[930px] p-10 mt-4 h-[650px]" />
                <div className="bg-[#D9D9D9] h-[34px] w-[530px] ml-7 mt-[80px]"></div>
            </div>
        </div>
    );
};

export default EmployeeBanner;