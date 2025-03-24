import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const skillData = [
    { skill: "Sales", image: "https://i.ibb.co.com/5gjYyzkp/1.png" },
    { skill: "Education & Training", image: "https://i.ibb.co.com/fGv5LqQL/2.png" },
    { skill: "Operations Management", image: "https://i.ibb.co.com/DfwShp7V/3.png" },
    { skill: "Legal Services", image: "https://i.ibb.co.com/21VHw3dh/4.png" },
    { skill: "Medical Services", image: "https://i.ibb.co.com/FbZD4HLd/5.png" },
    { skill: "Accounting & Finance", image: "https://i.ibb.co.com/nqqBCnRZ/6.png" },
    { skill: "IT & Software Development", image: "https://i.ibb.co.com/cXpzjHNy/7.png" },
    { skill: "Engineering", image: "https://i.ibb.co.com/RTHqgmfr/8.png" },
    { skill: "Office Management", image: "https://i.ibb.co.com/nNGFsbtr/9.png" },
    { skill: "Transportation & Logistics", image: "https://i.ibb.co.com/1GMpLrjx/10.png" },
    { skill: "Security & Protection", image: "https://i.ibb.co.com/PscFwhxS/11.png" },
    { skill: "Administrative & Office Support", image: "https://i.ibb.co.com/pBJxyQJw/12.png" },
];

const Explored = () => {
    const [jobCounts, setJobCounts] = useState({});
    const navigate = useNavigate();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await fetch("http://localhost:5000/jobs");
                const jobs = await response.json();

                // Initialize counts with all skills set to 0
                const initialCounts = {};
                skillData.forEach(({ skill }) => {
                    initialCounts[skill] = 0;
                });

                // Count jobs for each skill
                jobs.forEach(job => {
                    if (job.skill && initialCounts.hasOwnProperty(job.skill)) {
                        initialCounts[job.skill]++;
                    }
                });

                setJobCounts(initialCounts);
            } catch (error) {
                console.error("Error fetching job data:", error);
            }
        };

        fetchJobs();
    }, []);

    const handleSkillClick = (skill) => {
        navigate(`/findjob?skill=${encodeURIComponent(skill)}`);
    };

    return (
        <div className="mx-[44px] mb-16 nunito">
            <div>
                <div className="flex justify-between mb-6">
                    <p className="text-[28px] text-[#424447]">Explore By Skills</p>
                </div>
            </div>
            <div className="grid grid-cols-3 gap-6">
                {skillData.map(({ skill, image }, index) => (
                    <div
                        key={index}
                        className="flex items-center gap-3 hover:border-2 hover:shadow-2xl hover:rounded-xl p-2 cursor-pointer"
                        onClick={() => {
                            handleSkillClick(skill);
                            scrollToTop();
                        }}
                    >
                        <img src={image} alt={skill} className="h-[64px] w-[64px]" />
                        <div>
                            <p className="text-[15px] text-[#232323]">{skill}</p>
                            <p className="text-[#0079C1] text-[16px]">{jobCounts[skill] || 0} Jobs</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Explored;