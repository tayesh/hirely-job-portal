const EmployeeTalentCh = () => {
    return (
        <div className="mt-4">
            <div className="shadow-2xl border-2 border-gray-400 rounded-xl">
                <div className="pt-12 pl-8 flex gap-9">
                    <button className="text-[20px] poppins font-normal text-white bg-[#0079C1] py-4 px-12 rounded-sm">Direct Scouting</button>
                    <button className="text-[20px] poppins font-normal text-black bg-[#D9D9D9] py-4 px-12 rounded-sm">General Message</button>
                </div>
                <div className="divider"></div>
                <div className="flex m-12 gap-6">
                    <button className="btn bg-[#D9D9D9] text-black py-4 px">ALL (-)</button>
                    <button className="btn bg-[#D9D9D9] text-black py-4 px">New (-)</button>
                    <button className="btn bg-[#D9D9D9] text-black py-4 px">Read (-)</button>
                    <button className="btn bg-[#D9D9D9] text-black py-4 px">Unread (-)</button>
                </div>
            </div>
            <p className="text-center my-44 text-[36px] font-semibold  text-black">No Message Found</p>
        </div>
    );
};

export default EmployeeTalentCh;