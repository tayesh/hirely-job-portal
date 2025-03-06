import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Courses = () => {
    const [activeTab, setActiveTab] = useState("Popular Courses");

    const courses = [
        {
            "id": 1,
            "category": "DIPLOMA",
            "title": "Diploma in Caregiving",
            "image": "https://i.ibb.co.com/q3nZPJ7K/1.png",
            "duration": "6-10 hrs",
            "learners": "773,388 learners",
            "type": "Top Diplomas",
            "description": "This course covers essential caregiving skills, including personal care, nutrition, and communication techniques, to support individuals in need.",
            "skill_level": "Beginner to Intermediate",
            "certification": "Diploma Certificate",
            "provider": "Alison",
            "language": "English",
            "modules": [
                "Introduction to Caregiving",
                "Personal Hygiene & Nutrition",
                "Communication & Emotional Support",
                "Safety Procedures & Emergency Response"
            ]
        },
        {
            "id": 2,
            "category": "CERTIFICATE",
            "title": "HACCP Food Safety System",
            "image": "https://i.ibb.co.com/nNhY8x0W/2.jpg",
            "duration": "3-4 hrs",
            "learners": "96,979 learners",
            "type": "Top Certificates",
            "description": "Learn about Hazard Analysis and Critical Control Points (HACCP) principles and how to ensure food safety and hygiene in the food industry.",
            "skill_level": "Beginner",
            "certification": "Certificate of Completion",
            "provider": "Alison",
            "language": "English",
            "modules": [
                "Introduction to HACCP",
                "Food Contamination & Prevention",
                "HACCP Principles & Implementation",
                "Compliance & Legal Requirements"
            ]
        },
        {
            "id": 3,
            "category": "CERTIFICATE",
            "title": "Caregiving Skills - Dementia Care",
            "image": "https://i.ibb.co.com/Fj3QQMq/3.png",
            "duration": "2-3 hrs",
            "learners": "305,850 learners",
            "type": "Top Certificates",
            "description": "Gain essential caregiving skills focused on dementia care, including communication strategies and behavioral support techniques.",
            "skill_level": "Beginner to Intermediate",
            "certification": "Certificate of Completion",
            "provider": "Alison",
            "language": "English",
            "modules": [
                "Understanding Dementia & Its Stages",
                "Effective Communication with Patients",
                "Behavioral Support & Coping Strategies",
                "Caregiving Ethics & Patient Rights"
            ]
        },
        {
            "id": 4,
            "category": "CERTIFICATE",
            "title": "Infection Control in Health Care",
            "image": "https://i.ibb.co.com/Sb397Cx/4.png",
            "duration": "3-4 hrs",
            "learners": "31,706 learners",
            "type": "Top Certificates",
            "description": "Learn infection prevention techniques, hygiene protocols, and best practices for maintaining a safe healthcare environment.",
            "skill_level": "Beginner",
            "certification": "Certificate of Completion",
            "provider": "Alison",
            "language": "English",
            "modules": [
                "Introduction to Infection Control",
                "Hand Hygiene & Personal Protective Equipment (PPE)",
                "Disinfection & Sterilization",
                "Handling Infectious Waste & Patient Safety"
            ]
        }
    ];

    const navigate = useNavigate();
    

    const newCourses = [];

    const filteredCourses = activeTab === "Popular Courses"
        ? courses
        : activeTab === "Top Diplomas"
            ? courses.filter(course => course.category === "DIPLOMA")
            : activeTab === "Top Certificates"
                ? courses.filter(course => course.category === "CERTIFICATE")
                : newCourses.length > 0
                    ? newCourses
                    : [];

    return (
        <div className="mx-14 mb-[42px]">
            <div className="flex items-center justify-between mb-8">
                <a className="btn btn-ghost text-[28px] nunito">Courses</a>
                {[
                    "Popular Courses",
                    "Top Diplomas",
                    "Top Certificates",
                    "New Courses"
                ].map(tab => (
                    <a
                        key={tab}
                        className={`text-[20px] roboto cursor-pointer relative 
                ${activeTab === tab ? "text-[#0091C7] font-normal after:content-[''] after:absolute after:left-1/2 after:bottom-[-3px] after:w-1/2 after:h-[3px] after:bg-[#0091C7] after:-translate-x-1/2 after:rounded-full" : "text-black"}`}
                        onClick={() => setActiveTab(tab)}
                    >
                        {tab}
                    </a>

                ))}
            </div>
            <div className="grid grid-cols-4 gap-3">
                {filteredCourses.length > 0 ? (
                    filteredCourses.map(course => (
                        <div key={course.id} className="card bg-base-200 shadow-xl">
                            <figure>
                                <img src={course.image} alt={course.title} className="w-full h-[180px]" />
                            </figure>
                            <div className="absolute ml-[197px] mt-[12px]">
                                <p className="bg-[#D9D9D9] roboto text-[#000000] text-[9px] w-[90px] h-[32px] flex items-center pl-2">
                                    {course.category}
                                </p>
                            </div>
                            <div className="card-body">
                                <p className="text-[#1B232E] roboto text-[14px]">{course.title}</p>
                                <div className="flex justify-between mx-8">
                                    <p className="text-[#747C82] text-[12px] roboto">{course.duration}</p>
                                    <p className="text-[#747C82] text-[12px] roboto">{course.learners}</p>
                                </div>
                                <div className="flex justify-between gap-5">
                                    <button className="btn font-normal rounded-md text-[14px] roboto border-[#747C82] bg-white" onClick={() => navigate(`/more-info/${course.id}`, { state: { course } })}>More Info</button>
                                    <button className="btn font-normal rounded-md text-[14px] roboto text-white bg-[#009B5D]">Take This Course</button>
                                </div>
                            </div>
                        </div>
                    ))
                ) : (
                    <p className="text-center text-[18px] text-gray-500">No New Course Found</p>
                )}
            </div>
        </div>
    );
};

export default Courses;
