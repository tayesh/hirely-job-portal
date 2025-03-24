const Pricing = () => {
    return (
        <div className="py-[120px]">
            <h2 className="roboto text-[14px] font-normal mt-[36px] text-[#1C54E3] text-center">PRICING</h2>
            <p className="text-[#000000DE] roboto font-semibold text-center text-[36px] mt-[33px]">Invest in Talent</p>
            <p className="text-[20px] roboto text-[#605C78] mt-[22px] text-center mx-[140px] ">Only 6 spots remain in your industry—don’t miss the chance to join top leaders benefiting from 3x more qualified candidates with sponsored job placements</p>
            <div className="mx-[110px] mt-[100px] flex gap-32 bg-white border-b-2 rounded-bl-3xl ">
                <div className="py-[160px] flex-1">
                    <p className="text-[36px] roboto text-[#000000DE]">Limited Time Offer <br />Only <span className="text-[#0084FF]">6 spots</span><br />left in your Industry</p>
                    <p className="text-[16px] roboto font-normal text-[#605C78]">Join industry leaders who are already seeing 3x <br />more qualified candidates through sponsored <br />placement.</p>
                </div>
                <div className="bg-[#F7F7FC] flex-1 px-24 py-16 rounded-[8px]">
                    <h2 className="text-[#000000DE] text-[24px] roboto mb-5">Sponsored Job</h2>
                    <p  className="text-[#000000DE] text-[24px] mb-8 roboto">2,980৳ <small>per week</small></p>
                    <ul className="space-y-8">
                        <li className="flex gap-3 items-center text-[18px]"> <img src="https://i.ibb.co.com/C3kw3mqZ/Vector.png" alt="" />Top Position Guaranteed</li>
                        <li className="flex gap-3 items-center text-[18px]"> <img src="https://i.ibb.co.com/C3kw3mqZ/Vector.png" alt="" />3x More Visibility</li>
                        <li className="flex gap-3 items-center text-[18px]"> <img src="https://i.ibb.co.com/C3kw3mqZ/Vector.png" alt="" />Exclusive Category Placement</li>
                        <li className="flex gap-3 items-center text-[18px]"> <img src="https://i.ibb.co.com/C3kw3mqZ/Vector.png" alt="" />Advance Analytics</li>
                        <li className="flex gap-3 items-center text-[18px]"> <img src="https://i.ibb.co.com/C3kw3mqZ/Vector.png" alt="" />Dedicated Customer Support</li>
                    </ul>
                    <button className="btn mt-8 h-[59px] px-[40px] py-3 text-[20px] roboto font-normal rounded-[4px] bg-[#0084FF] text-[#FFFFFF]">Post a sponsored job</button>
                </div>
            </div>
            <div className="divider"></div>
        </div>
    );
};

export default Pricing;