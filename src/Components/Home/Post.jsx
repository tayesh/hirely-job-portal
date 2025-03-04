const Post = () => {
    return (
        <div className="bg-[#00457C] h-[460px] py-10 mb-0 w-full">
            <div className="flex gap-[48px] px-10">
                <div className=" space-y-4 my-[60px] w-[497px] h-[343px]">
                    <p className="text-white poppins font-normal text-[18px]">The REAL candidates you seek, are REALLY looking for YOU!</p>
                    <h2 className="text-white text-[45px] font-normal epilogue">Post your vacancy today.</h2>
                    <p className="text-white text-[18px] poppins font-normal">Quick Results. Real People. Completely Free.</p>
                    <button className="btn text-white bg-[#0079C1] text-[16px] font-normal epilogue px-20">Post Job For Free</button>
                </div>
                <div className="">
                    <img src="https://i.ibb.co.com/dwG873qp/98cf9531a54d677306d520230a619b31.png" alt="" className="h-[411px] w-[478.29px] ml-[60px] pb-[50px]"/>
                </div>
            </div>
        </div>
    );
};

export default Post;