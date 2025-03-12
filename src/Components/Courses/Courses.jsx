import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
    const [activeTab, setActiveTab] = useState("Popular Courses");
    const [courses, setCourses] = useState([]); // State to store fetched courses
    const [loading, setLoading] = useState(true); // State to handle loading
    const [error, setError] = useState(null); // State to handle errors
    const navigate = useNavigate();

    // Fetch courses from the API
    useEffect(() => {
        const fetchCourses = async () => {
            try {
                const response = await fetch("https://hirely-job-portal-server.vercel.app/courses"); // Fetch data from your API
                if (!response.ok) {
                    throw new Error("Failed to fetch courses");
                }
                const data = await response.json();
                setCourses(data); // Set the fetched courses
            } catch (error) {
                setError(error.message); // Set error message if something goes wrong
            } finally {
                setLoading(false); // Set loading to false after fetching
            }
        };

        fetchCourses();
    }, []);

    // Filter courses based on the active tab
    const filteredCourses =
        activeTab === "Popular Courses"
            ? courses // Show all courses for "Popular Courses"
            : activeTab === "Top Diplomas"
            ? courses.filter((course) => course.category === "DIPLOMA") // Filter for diplomas
            : activeTab === "Top Certificates"
            ? courses.filter((course) => course.category === "CERTIFICATE") // Filter for certificates
            : []; 
    if (loading) {
        return <p className="text-center text-[18px] text-gray-500">Loading courses...</p>;
    }

    if (error) {
        return <p className="text-center text-[18px] text-red-500">Error: {error}</p>;
    }

    return (
        <div className="mx-14 mb-[42px]">
            <div className="flex items-center justify-between mb-8">
                <a className="btn btn-ghost text-[28px] nunito">Courses</a>
                {["Popular Courses", "Top Diplomas", "Top Certificates", "New Courses"].map((tab) => (
                    <a
                        key={tab}
                        className={`text-[20px] roboto cursor-pointer relative 
                ${activeTab === tab
                                ? "text-[#0091C7] font-normal after:content-[''] after:absolute after:left-1/2 after:bottom-[-3px] after:w-1/2 after:h-[3px] after:bg-[#0091C7] after:-translate-x-1/2 after:rounded-full"
                                : "text-black"
                            }`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </a>
                ))}
            </div>
            <div className="grid grid-cols-4 gap-3">
                {filteredCourses.length > 0 ? (
                    filteredCourses.map((course) => (
                        <div key={course.id} className="card bg-base-200 shadow-xl">
                            <figure>
                                <img src={course.image} alt={course.title} className="w-full h-[180px]" />
                            </figure>
                            <div className="absolute right-0 top-2">
                                <p className="bg-[#D9D9D9] roboto text-[#000000] text-[9px] w-[90px] h-[32px] flex items-center pl-2">
                                    {course.category}
                                </p>
                            </div>
                            <div className="card-body">
                                <p className="text-[#1B232E] roboto text-[14px]">{course.title}</p>
                                <div className="flex justify-between mx-8">
                                    <p className="text-[#747C82] text-[12px] roboto">{course.duration}</p>
                                    <p className="text-[#747C82] text-[12px] roboto">{course.learners} learners</p>
                                </div>
                                <div className="flex justify-between gap-5">
                                    <button
                                        className="btn font-normal rounded-md text-[14px] roboto border-[#747C82] bg-white"
                                        onClick={() => navigate(`/more-info/${course._id}`, { state: { course } })}
                                    >
                                        More Info
                                    </button>
                                    <button className="btn font-normal rounded-md text-[14px] roboto text-white bg-[#009B5D]">
                                        Take This Course
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-[18px] text-gray-500">No courses found</p>
                )}
            </div>
        </div>
    );
};

export default Courses;