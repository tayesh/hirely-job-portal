const Looking = () => {
    return (
        <div className="bg-[#1F2131] w-full h-[231px] ">
            <div className="flex gap-[145px] px-12 py-12">
                <div className="space-y-3 ">
                    <p className="text-white epilogue text-[20px] font-normal">Are you looking for a job?</p>
                    <p className="text-white epilogue text-[24px] font-normal">Hirely is Your Gateway to Success Starts Here <br /> !</p>
                    <p className="text-[20px] epilogue font-normal  text-[#0275D8] ">Our goal is to make your job search as easy as possible.</p>
                </div>
                <div className="flex items-center gap-8">
                    <button className="btn text-white text-[14px] epilogue font-normal w-[133px] h-[45px] bg-[#1F2131] px-4">
                        Sign In
                    </button>
                    <button className="btn text-white w-[250px] text-[14px] epilogue font-normal h-[49px] bg-[#0275D8] px-12">
                        Register as Candidate
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Looking;