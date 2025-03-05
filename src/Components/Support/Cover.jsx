const Cover = () => {
    return (
        <div className="mb-[30px]">
            <div
                className="hero "
                style={{
                    backgroundImage: "url(https://i.ibb.co.com/rG48vbSr/sprt.jpg)",
                    position: 'relative' ,
                    height:"450px"
                }}>
                <div 
                    className="hero-overlay" 
                    style={{
                        backgroundColor: "#D0EFFF", 
                        opacity: 0.8,          
                        position: 'absolute', 
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        
                    }}
                ></div>
                <div className="hero-content text-center" style={{ position: 'relative', zIndex: 1 }}>
                    <p 
                        className="text-[#03254C] text-[42px] font-normal"
                        style={{
                            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
                            color: "#03254C",  
                        }}
                    >
                        Customer Care Support for our valued Clients
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Cover;
