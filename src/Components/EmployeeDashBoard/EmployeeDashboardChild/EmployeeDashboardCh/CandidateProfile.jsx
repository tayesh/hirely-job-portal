import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const CandidateProfile = () => {
    const [candidate, setCandidate] = useState(null);
    const { email } = useParams(); // Assuming you pass the email as a URL parameter

    useEffect(() => {
        fetchCandidateDetails();
    }, [email]);

    const fetchCandidateDetails = async () => {
        try {
            const response = await fetch(`http://localhost:5000/users/email/${email}`);
            if (!response.ok) {
                throw new Error("Failed to fetch candidate details");
            }
            const data = await response.json();
            setCandidate(data);
        } catch (error) {
            console.error("Error fetching candidate details:", error);
        }
    };

    if (!candidate) {
        return <div>Loading...</div>;
    }

    return (
        <div className="min-h-screen roboto p-8">
            <h2 className="text-4xl font-semibold mb-6 roboto ml-4">Candidate Profile</h2>
            <div className="bg-white p-6 rounded-lg shadow-md">

                <div className="flex justify-between gap-12 mx-12">
                    <div className="flex-1 p-6 shadow-2xl rounded-xl bg-gradient-to-r from-sky-50 to-green-50">
                        <div className="flex justify-center mr-6 mb-4">
                            <img
                                className="w-40 border-2 rounded-full cursor-pointer"
                                src="https://i.ibb.co.com/S4J9jhj1/image.png"
                                alt=""
                            />
                        </div>
                        <div className="mb-4 border shadow-lg py-4  px-7 rounded-xl">
                            <h3 className="text-2xl font-semibold">Basic Details</h3>
                            <p><strong>Name:</strong> {candidate.name}</p>
                            <p><strong>Email:</strong> {candidate.email}</p>
                            <p><strong>Phone Number:</strong> {candidate.phoneNumber}</p>
                        </div>
                        <div className="mb-4 border shadow-lg py-4  px-7 rounded-xl">
                            <h3 className="text-2xl font-semibold">Personal Info</h3>
                            <p><strong>Father's Name:</strong> {candidate.UserDescription?.PersonalInfo?.fathersName}</p>
                            <p><strong>Mother's Name:</strong> {candidate.UserDescription?.PersonalInfo?.mothersName}</p>
                            <p><strong>Date of Birth:</strong> {candidate.UserDescription?.PersonalInfo?.dob}</p>
                            <p><strong>Gender:</strong> {candidate.UserDescription?.PersonalInfo?.gender}</p>
                            <p><strong>Marital Status:</strong> {candidate.UserDescription?.PersonalInfo?.maritalStatus}</p>
                            <p><strong>Nationality:</strong> {candidate.UserDescription?.PersonalInfo?.nationality}</p>
                            <p><strong>Religion:</strong> {candidate.UserDescription?.PersonalInfo?.religion}</p>
                            <p><strong>Present Address:</strong> {candidate.UserDescription?.PersonalInfo?.presentAddress}</p>
                            <p><strong>Permanent Address:</strong> {candidate.UserDescription?.PersonalInfo?.permanentAddress}</p>
                        </div>

                    </div>
                    <div className="flex-1 p-8 pl-20 shadow-2xl rounded-xl bg-gradient-to-r from-blue-50 to-purple-50">
                        <div className="mb-4 border shadow-lg py-4  px-7 rounded-xl">
                            <h3 className="text-2xl font-semibold">Education</h3>
                            <p><strong>Degree:</strong> {candidate.UserDescription?.Education?.degree}</p>
                            <p><strong>Institute Name:</strong> {candidate.UserDescription?.Education?.instituteName}</p>
                            <p><strong>Graduation Year:</strong> {candidate.UserDescription?.Education?.graduationYear}</p>
                            <p><strong>Grade:</strong> {candidate.UserDescription?.Education?.grade}</p>
                            <p><strong>Field of Study:</strong> {candidate.UserDescription?.Education?.fieldOfStudy}</p>
                            <p><strong>Currently Studying:</strong> {candidate.UserDescription?.Education?.currentlyStudying ? "Yes" : "No"}</p>
                        </div>
                        <div className="mb-4 border shadow-lg py-4  px-7 rounded-xl">
                            <h3 className="text-2xl font-semibold">Key Skills</h3>
                            <ul>
                                {Array.isArray(candidate.UserDescription?.KeySkills) &&
                                    candidate.UserDescription.KeySkills.map((skill, index) => (
                                        <li key={index}>
                                            <strong>Skill:</strong> {skill.name} ({skill.years} years)
                                        </li>
                                    ))}
                            </ul>
                        </div>
                        <div className="mb-4 border shadow-lg py-4  px-7 rounded-xl">
                            <h3 className="text-2xl font-semibold">Work Experience</h3>
                            <ul>
                                {Array.isArray(candidate.UserDescription?.WorkExp) &&
                                    candidate.UserDescription.WorkExp.map((exp, index) => (
                                        <li key={index}>
                                            <p><strong>Designation:</strong> {exp.designation}</p>
                                            <p><strong>Employment Type:</strong> {exp.employmentType}</p>
                                            <p><strong>Company Name:</strong> {exp.companyName}</p>
                                            <p><strong>Industry Type:</strong> {exp.industryType}</p>
                                            <p><strong>Department:</strong> {exp.department}</p>
                                            <p><strong>Company Location:</strong> {exp.companyLocation}</p>
                                            <p><strong>Work Type:</strong> {exp.workType}</p>
                                            <p><strong>Start Date:</strong> {exp.startDate}</p>
                                            <p><strong>End Date:</strong> {exp.endDate}</p>
                                        </li>
                                    ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CandidateProfile;