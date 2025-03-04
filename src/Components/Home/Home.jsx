import Banner from "../Banner/Banner";
import Courses from "../Courses/Courses";
import LiveJobs from "./LiveJobs";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <LiveJobs></LiveJobs>
           <Courses></Courses>
        </div>
    );
};

export default Home;