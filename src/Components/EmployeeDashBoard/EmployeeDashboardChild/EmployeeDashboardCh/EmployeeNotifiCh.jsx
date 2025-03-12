const EmployeeNotifiCh = () => {
    return (
        <div>
            <div className="mt-6 mx-12">
                <div className="shadow-2xl border-2 border-gray-400 rounded-xl">
                    <div className="flex gap-4 justify-end mr-12 mt-7">
                        <button className="px-6 py-3 rounded epilogue text-[16px] text-[#F8F9FA] bg-[#0079C1]">EARLIER</button>
                        <button className="px-6 py-3 rounded epilogue text-[16px] text-[#0079C1] bg-white border-2 border-[#0079C1]">RECENT</button>
                    </div>
                    <div className="pt-0 pl-8">
                        <h2 className=" text-[32px] font-semibold  text-black">Notifications</h2>
                    </div>
                    <div className="divider"></div>
                    <div className="flex justify-center items-center">
                        <img src="https://i.ibb.co.com/HDLzFmFN/notfound.png" alt="" />
                    </div>
                    <p className="text-center mb-16 text-[36px] font-semibold  text-black">No Result Found!</p>
                </div>
            </div>
        </div>
    );
};

export default EmployeeNotifiCh;