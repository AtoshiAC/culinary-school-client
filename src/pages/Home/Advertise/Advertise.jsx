import React from 'react';
import Marquee from "react-fast-marquee";
import img1 from "../../../assets/Payment/01.png";
import img2 from "../../../assets/Payment/02.png";
import img3 from "../../../assets/Payment/03.png";
import img4 from "../../../assets/Payment/04.png";
import img5 from "../../../assets/Payment/05.png";
import img6 from "../../../assets/Payment/06.png";
import img7 from "../../../assets/Payment/07.png";
import img8 from "../../../assets/Payment/08.png";
import img9 from "../../../assets/Payment/09.png";
import SectionTitle from '../../../components/SectionTitle/SectionTitle';
const Advertise = () => {
    return (
      <div>
        <SectionTitle
          heading="Our Payment Partners"
          subHeading="Pick Your Payment Today!"
        ></SectionTitle>
        <Marquee speed={200}>
          <img className="w-3/4" src={img1} />
          <img className="w-3/4" src={img2} />
          <img className="w-3/4" src={img3} />
          <img className="w-3/4" src={img4} />
          <img className="w-3/4" src={img6} />
          <img className="w-3/4" src={img7} />
          <img className="w-3/4" src={img8} />
          <img className="w-3/4" src={img5} />
          <img className="w-3/4" src={img9} />
        </Marquee>
      </div>
    );
};

export default Advertise;