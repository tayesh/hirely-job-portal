const steps = [
    {
        title: "Register/Login",
        description: "• If you're already an employer with us, simply log in to your account. <br /> • If you're new, register for an account—it takes less than a minute!",
        image: "https://i.ibb.co.com/N6B3FdBL/login.jpg"
    },
    {
        title: "Choose or Create a Job Post",
        description: "• Click 'Post A Job' from the menu and select 'Post a Sponsored Job.' Choose your desired start date for the sponsorship. The job will automatically run for 7 days from the chosen date. <br /> • Select an existing job post or create a new one, If you create a new job, you'll be redirected back to the same page to proceed. <br /> • Add a few benefits of the job details and upload a banner for your ad to make it stand out. <br /> • Once done, click 'Continue with Payment.'",
        image: "https://i.ibb.co.com/99rWW159/apply.jpg"
    },
    {
        title: "Make Payment and Publish Job",
        description: "Pay using any major payment methods in Bangladesh, including Bank Transfer, Credit/Debit Card, bKash, or other Mobile Financial Services (MFS). <br /> • Once payment is successful, your job will be published and will be visible to job seekers.",
        image: "https://i.ibb.co.com/nNsXbGfp/p.jpg"
    }
];

const Process = () => {
    return (
        <div className="mx-26 my-[80px] px-6">
            <h2 className="roboto text-[14px] font-normal mt-[36px] text-[#1C54E3] text-center">PROCESS</h2>
            <p className="text-[#000000DE] roboto font-semibold text-center text-[36px] mt-[33px]">How to Start</p>
            <p className="text-[20px] roboto text-[#605C78] mt-[22px] text-center mx-[140px] ">Easily post jobs by creating an account and following simple on-screen instructions to enter your company details and job descriptions. Effortlessly connect with top talent in just a few clicks!</p>

            <div className="flex flex-col items-center px-10 mt-16 relative w-full">
                {/* Vertical Line */}
                <div className="absolute top-[60px] bottom-[120px] left-[50%] w-[4px] bg-[#1C54E3]"></div>

                {steps.map((step, index) => (
                    <div key={index} className="flex items-center w-full mb-16">
                        {/* Image Section (Left) */}
                        <div className="w-1/3 flex justify-center">
                            <img src={step.image} alt={`Step ${index + 1}`} className="w-[300px] h-[200px]  rounded-lg shadow-md" />
                        </div>

                        {/* Step Indicator (Center) */}
                        <div className="w-1/3 flex flex-col items-center relative">
                            {/* Connecting Line (Only after the first step)
                            {index > 0 && <div className="w-[4px] h-8 bg-[#1C54E3] absolute top-[-40px]"></div>} */}
                            
                            {/* Step Number */}
                            <div className="bg-[#1C54E3] flex justify-center items-center roboto text-[20px] h-[100px] w-[100px] text-white px-4 py-2 rounded-md  font-normal">
                                Step {index + 1}
                            </div>
                        </div>

                        {/* Description Section (Right) */}
                        <div className="w-1/3">
                            <div className="bg-white p-4 rounded-lg shadow-md">
                                <h3 className="roboto text-[18px] font-normal text-[#000000DE]">{step.title}</h3>
                                <p className="text-gray-600 mt-2" dangerouslySetInnerHTML={{ __html: step.description }}></p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Process;
