const Courses = () => {
    return (
        <div className="mx-14 mb-[42px]">
            <div className="flex items-center justify-between mb-8">
                <a className="btn btn-ghost text-[28px] nunito">Courses</a>
                <a className="text-[20px] roboto">Popular Courses</a>
                <a className="text-[20px] roboto">Top Diplomas</a>
                <a className="text-[20px] roboto">Top Certificates</a>
                <a className="text-[20px] roboto">New Courses</a>
            </div>
            <div className="grid grid-cols-4 gap-3">
                <div className="card bg-base-200 shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/q3nZPJ7K/1.png"
                            alt="Shoes" className="w-full h-[180px]" />
                    </figure>

                    <div className="absolute ml-[197px] mt-[12px]">
                        <p className="bg-[#D9D9D9] roboto text-[#000000] text-[9px] w-[90px] h-[32px] flex items-center pl-2">DIPLOMA</p>
                    </div>

                    <div className="card-body">
                        <h2 className="card-title roboto text-[12px] text-[#747C82]">Health</h2>
                        <p className="text-[#1B232E] roboto text-[14px]">Diploma in Caregiving</p>
                        <div className="flex justify-between mx-8">
                            <p className="text-[#747C82] text-[12px] roboto">6-10 hrs</p>
                            <p className="text-[#747C82] text-[12px] roboto">773,388 learners</p>
                        </div>
                        <div className="flex justify-between gap-5">
                            <button className="btn font-normal rounded-md text-[14px] roboto border-[#747C82] bg-white">More Info</button>
                            <button className="btn font-normal rounded-md text-[14px] roboto text-white bg-[#009B5D]">Take This Course</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-200 shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/nNhY8x0W/2.jpg"
                            alt="Shoes" className="w-full h-[180px]" />
                    </figure>
                    <div className="absolute ml-[197px] mt-[12px]">
                        <p className="bg-[#D9D9D9] roboto text-[#000000] text-[9px] w-[90px] h-[32px] flex items-center pl-2">CERTIFICATE</p>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title roboto text-[12px] text-[#747C82]">Business</h2>
                        <p className="text-[#1B232E] roboto text-[14px]">HACCP Food Safety System for Restaurants and Other Catering Services</p>
                        <div className="flex justify-between mx-8">
                            <p className="text-[#747C82] text-[12px] roboto">3-4 hrs</p>
                            <p className="text-[#747C82] text-[12px] roboto">96,979 learners</p>
                        </div>
                        <div className="flex justify-between gap-5">
                            <button className="btn font-normal rounded-md text-[14px] roboto border-[#747C82] bg-white">More Info</button>
                            <button className="btn font-normal rounded-md text-[14px] roboto text-white bg-[#009B5D]">Take This Course</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-200 shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/Fj3QQMq/3.png"
                            alt="Shoes" className="w-full h-[180px]" />
                    </figure>
                    <div className="absolute ml-[197px] mt-[12px]">
                        <p className="bg-[#D9D9D9] roboto text-[#000000] text-[9px] w-[90px] h-[32px] flex items-center pl-2">CERTIFICATE</p>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title roboto text-[12px] text-[#747C82]">Health</h2>
                        <p className="text-[#1B232E] roboto text-[14px]">Caregiving Skills - Dementia Care</p>
                        <div className="flex justify-between mx-8">
                            <p className="text-[#747C82] text-[12px] roboto ">2-3 hrs</p>
                            <p className="text-[#747C82] text-[12px] roboto ">305,850 learners</p>
                        </div>
                        <div className="flex justify-between gap-5">
                            <button className="btn font-normal rounded-md text-[14px] roboto border-[#747C82] bg-white">More Info</button>
                            <button className="btn font-normal rounded-md text-[14px] roboto text-white bg-[#009B5D]">Take This Course</button>
                        </div>
                    </div>
                </div>
                <div className="card bg-base-200 shadow-xl">
                    <figure>
                        <img
                            src="https://i.ibb.co.com/Sb397Cx/4.png"
                            alt="Shoes" className="w-full h-[180px]" />
                    </figure>
                    <div className="absolute ml-[197px] mt-[12px]">
                        <p className="bg-[#D9D9D9] roboto text-[#000000] text-[9px] w-[90px] h-[32px] flex items-center pl-2">CERTIFICATE</p>
                    </div>
                    <div className="card-body">
                        <h2 className="card-title roboto text-[12px] text-[#747C82]">Education</h2>
                        <p className="text-[#1B232E] text-[14px] roboto">Infection Control in Health Care</p>
                        <div className="flex justify-between ">
                            <p className="text-[#747C82] text-[12px] ml-10 roboto">3-4 hrs</p>
                            <p className="text-[#747C82] text-[12px] roboto">31,706 learners</p>
                        </div>
                        <div className="flex justify-between gap-5">
                            <button className="btn font-normal rounded-md border-[#747C82] text-[14px] roboto bg-white">More Info</button>
                            <button className="btn font-normal rounded-md text-[14px] roboto text-white bg-[#009B5D]">Take This Course</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="divider"></div>
            <div className="flex justify-center">
                <button className="btn rounded-md border-[#007646] bg-white text-[16px] font-normal roboto text-[#007646]">Explore More Courses</button>
            </div>
        </div>

    );
};

export default Courses;