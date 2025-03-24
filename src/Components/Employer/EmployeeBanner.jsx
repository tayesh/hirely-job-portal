const EmployeeBanner = () => {
    return (
        <div className="mx-10 flex gap-[50px]">
            <div className="flex-1">
                <h2 className="text-[#000000DE] text-[60px] mt-[80px] roboto">Find <br />High-Potential Candidates with <span className="text-[#0084FF]">Sponsored Jobs</span></h2>
                <p className="mt-[46px] text-[20px] mb-[67px] roboto text-[#000000DE]">Maximize your reach with Sponsored Jobs. Highlight your opportunities, attract top-tier talent, and connect with high-potential candidates ready to drive your business forward.</p>
                <div className="flex gap-4 mb-[67px]">
                    <button className="btn h-[59px] px-[30px] py-3 text-[20px] roboto font-normal rounded-[4px] bg-[#0084FF] text-[#FFFFFF]">Post a sponsored job</button>
                    <button className="btn bg-[#075E54] py-3 px-[29px] h-[59px]  rounded-[4px]  flex  items-center">
                        <p className=" roboto font-normal text-[20px] text-white">Talk on Whatsapp</p>
                        <img src="https://i.ibb.co.com/ksFfrShL/whatsapp.png" alt="" />
                    </button>
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