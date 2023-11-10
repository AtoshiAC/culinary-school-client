import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import PopularMenu from "../PopularMenu/PopularMenu";
import Testimonials from "../Testimonials/Testimonials";
import Instructors from "../Instructors/Instructors";
import Advertise from "../Advertise/Advertise";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Culinary School | Home</title>
            </Helmet>
            <Banner></Banner>
            <PopularMenu></PopularMenu>
            <Instructors></Instructors>
            <Advertise></Advertise>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;