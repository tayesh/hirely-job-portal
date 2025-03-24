import { useEffect, useState } from "react";

const CoursesPage = () => {
    const [categories, setCategories] = useState([]);
    const [loading, setLoading] = useState(true);
    const [activeTab, setActiveTab] = useState("Learn & Get Certificates"); // State to track active tab

    useEffect(() => {
        fetch('https://hirely-job-portal-server.vercel.app/course-category')
            .then(res => res.json())
            .then(data => {
                setCategories(data);
                setLoading(false);
            })
            .catch(error => {
                console.error("Error fetching categories:", error);
                setLoading(false);
            });
    }, []);

    const handleTabClick = (tabName) => {
        setActiveTab(tabName);
    };

    return (
        <div>
            <div className="flex items-center rounded-[35px] bg-[#F3F6F7] gap-[106px] justify-center mt-5 mx-[273px] py-2 mb-6">
                <a
                    className={`text-[16px] py-[17px] roboto ${
                        activeTab === "Learn & Get Certificates"
                            ? "text-white bg-[#0079C1] rounded-[25px]  px-4"
                            : "text-[#5D676E]"
                    }`}
                    onClick={() => handleTabClick("Learn & Get Certificates")}
                >
                    Learn & Get Certificates
                </a>
                <a
                    className={`text-[16px] py-[17px] roboto ${
                        activeTab === "Build Your Career"
                            ? "text-white bg-[#0079C1] rounded-[25px]  px-4" 
                            : "text-[#5D676E]"
                    }`}
                    onClick={() => handleTabClick("Build Your Career")}
                >
                    Build Your Career
                </a>
                <a
                    className={`text-[16px] py-[17px] roboto ${
                        activeTab === "Earn On Hirely"
                            ? "text-white bg-[#0079C1] rounded-[25px]  px-4" 
                            : "text-[#5D676E]"
                    }`}
                    onClick={() => handleTabClick("Earn On Hirely")}
                >
                    Earn On Hirely
                </a>
            </div>
            <h2 className="text-[36px] font-normal text-[#2D3941] text-center mb-[23px]">
                Free Online Courses With Certificates & Diplomas
            </h2>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: "url(https://i.ibb.co/20FCjqYC/cv.jpg)",
                }}
            >
                <div className="hero-content text-neutral-content text-center">
                    <div>
                        <div className="absolute top-64 left-0 w-full h-[76px] flex gap-[35px] items-center bg-opacity-100 pl-[448px] bg-[#0B2441]">
                            <div className="flex items-start gap-[17px] border-l-2 border-[#E7F0F5A1] pl-[36px]">
                                <img className="h-5 w-5" src="https://i.ibb.co/N2wgG6SB/society.png" alt="Society Icon" />
                                <p className="roboto text-[15px] text-white font-normal">45 Million + Learners</p>
                            </div>
                            <div className="flex items-start gap-[17px]">
                                <img className="h-5 w-5" src="https://i.ibb.co/XZNdJVtG/cap.png" alt="Graduation Cap" />
                                <p className="roboto text-[15px] text-white font-normal">10 Million + Graduates</p>
                            </div>
                            <div className="flex items-start gap-[17px]">
                                <img className="h-5 w-5" src="https://i.ibb.co/Kc2X5sV6/wrld.png" alt="World Icon" />
                                <p className="roboto text-[15px] text-white font-normal">193 Countries</p>
                            </div>
                        </div>
                        <h1 className="text-[32px] absolute top-[340px] left-7 roboto text-white font-normal">
                            Explore 5,500+ Free Online Courses
                        </h1>
                        <div className="flex justify-center items-center">
                            <div className="mt-[62px] grid grid-cols-5 gap-4">
                                {loading ? (
                                    <p className="text-white">Loading categories...</p>
                                ) : categories.length > 0 ? (
                                    categories.map((categoryDetails) => (
                                        <div
                                            key={categoryDetails.category}
                                            className="rounded-[25px] bg-white p-4 roboto text-[13px] font-normal"
                                        >
                                            <div className="flex justify-center">
                                                <img className="mb-3 h-[32px] w-[35px] " src={categoryDetails.image} alt="" />
                                            </div>
                                            <p className="roboto text-[14px] font-normal text-[#5D676E] mb-[10px]">{categoryDetails.category}</p>
                                            <p className="roboto text-[13px] font-normal text-[#5D676E]">{categoryDetails.courses}</p>
                                        </div>
                                    ))
                                ) : (
                                    <p className="text-white">No categories found.</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-white mt-[78px]">
                <div className="flex justify-center ">
                    <h2 className="text-black text-[20px] roboto font-normal border-2 w-[543px] h-[50px] flex items-center justify-center text-center  border-[#B3BDC0] rounded-[10px]">What do you want to learn today?</h2>
                </div>
                <div className="flex justify-between items-center mt-[63px] mx-[140px] gap-[240px]">
                    <div>
                        <img src="https://i.ibb.co.com/b5Z3vWry/know.png" alt="" className="h-[312px] w-[312px]"/>
                    </div>
                    <div>
                        <img src="https://i.ibb.co.com/WNHZ9qcm/hire.png" alt="" className="h-[312px] w-[312px]"/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoursesPage;