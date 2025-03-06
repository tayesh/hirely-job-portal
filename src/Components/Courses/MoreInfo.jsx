import { useLocation, useNavigate } from "react-router-dom";

const MoreInfo = () => {
    const { state } = useLocation();
    const navigate = useNavigate();

    if (!state || !state.course) {
        return <p className="text-center text-[18px] text-gray-500">Course not found</p>;
    }

    const { course } = state;

    return (
        <div className="mx-14 my-12 mb-[42px] poppins">
            <div className="bg-white shadow-lg rounded-lg p-6">
                <h2 className="text-[28px] font-bold text-[#1B232E] roboto">{course.title}</h2>
                <div className="flex gap-6 mt-4">
                    <img src={course.image} alt={course.title} className="w-[400px] h-[250px] rounded-lg shadow-md" />
                    <div>
                        <p className="text-[#747C82] text-[16px] roboto">{course.description}</p>
                        <p className="mt-3 text-[16px] text-[#0091C7]">Skill Level: {course.skill_level}</p>
                        <p className="mt-1 text-[16px] text-[#0091C7]">Certification: {course.certification}</p>
                        <p className="mt-1 text-[16px] text-[#0091C7]">Provider: {course.provider}</p>
                        <p className="mt-1 text-[16px] text-[#0091C7]">Language: {course.language}</p>
                        <p className="mt-1 text-[16px] text-[#0091C7]">Duration: {course.duration}</p>
                        <p className="mt-1 text-[16px] text-[#0091C7]">Learners: {course.learners}</p>
                    </div>
                </div>
                <div className="mt-6">
                    <h3 className="text-[22px] font-semibold text-[#1B232E] roboto">Modules Covered:</h3>
                    <ul className="mt-3 list-disc pl-6 text-[#747C82] text-[16px] roboto">
                        {course.modules.map((module, index) => (
                            <li key={index}>{module}</li>
                        ))}
                    </ul>
                </div>
                <div className="flex gap-5 mt-6">
                    <button 
                        className="btn rounded-md text-[16px] roboto bg-white border-[#747C82]"
                        onClick={() => navigate(-1)}
                    >
                        Back
                    </button>
                    <button className="btn rounded-md text-[16px] roboto text-white bg-[#009B5D]">
                        Enroll Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default MoreInfo;
