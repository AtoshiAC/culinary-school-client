
import img1 from '../../../assets/home/01.jpg';
import img2 from '../../../assets/home/02.jpg';
import img3 from '../../../assets/home/03.jpg';
import img4 from '../../../assets/home/04.jpg';
import img5 from '../../../assets/home/05.jpg';
import img6 from '../../../assets/home/06.jpg';

const Banner = () => {
    return (
      <>
        <div className="carousel w-full">
          <div id="item1" className="carousel-item w-full">
            <img src={img1} className="w-full" />
          </div>
          <div id="item2" className="carousel-item w-full">
            <img
              src={img2}
              className="w-full"
            />
          </div>
          <div id="item3" className="carousel-item w-full">
            <img
              src={img3}
              className="w-full"
            />
          </div>
          <div id="item4" className="carousel-item w-full">
            <img
              src={img4}
              className="w-full"
            />
          </div>
          <div id="item5" className="carousel-item w-full">
            <img
              src={img5}
              className="w-full"
            />
          </div>
          <div id="item6" className="carousel-item w-full">
            <img
              src={img6}
              className="w-full"
            />
          </div>
        </div>
        <div className="flex justify-center w-full py-2 gap-2">
          <a href="#item1" className="btn btn-xs">
            1
          </a>
          <a href="#item2" className="btn btn-xs">
            2
          </a>
          <a href="#item3" className="btn btn-xs">
            3
          </a>
          <a href="#item4" className="btn btn-xs">
            4
          </a>
          <a href="#item4" className="btn btn-xs">
            5
          </a>
          <a href="#item4" className="btn btn-xs">
            6
          </a>
        </div>
      </>
    );
};

export default Banner;