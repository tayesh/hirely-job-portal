import Banner from "../Banner/Banner";
import Courses from "../Courses/Courses";
import Expire from "./Expire";
import Explored from "./Explored";
import Featured from "./Featured";
import LiveJobs from "./LiveJobs";
import Looking from "./Looking";
import Post from "./Post";

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <LiveJobs></LiveJobs>
           <Courses></Courses>
           <Featured></Featured>
           <Explored></Explored>
           <Expire></Expire>
           <Post></Post>
           <Looking></Looking>
        </div>
    );
};

export default Home;