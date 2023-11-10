import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import '@smastrom/react-rating/style.css'


const Testimonials = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch("https://culinary-server-almahmudsarker.vercel.app/reviews")
          .then((res) => res.json())
          .then((data) => setReviews(data));
    }, [])

    return (
      <section className="my-10">
        <SectionTitle
          subHeading="We Believe In Quality"
          heading={"Feedback From Our Clients"}
        ></SectionTitle>

        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="flex flex-col items-center mx-24 mb-5">
                <div className="avatar">
                  <div className="w-24 rounded-xl">
                    <img src={review.image} />
                  </div>
                </div>
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <p className="py-8">{review.details}</p>
                <h3 className="text-2xl text-gray-800">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    );
};

export default Testimonials;