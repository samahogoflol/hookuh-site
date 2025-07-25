import "./slick.css";
import "./slick-theme.css";

import atom from "../../imgs/bannerImgs/Atom.webp";
import banner_lostmary_os12000 from "../../imgs/bannerImgs/banner_lostmary_os12000.webp";
import banner_vapeshot from "../../imgs/bannerImgs/banner_vapeshot.webp";
import gedonist from "../../imgs/bannerImgs/gedonist.webp";
import hqd_10ml from "../../imgs/bannerImgs/hqd_10ml.webp";
import jibiar_50g from "../../imgs/bannerImgs/jibiar_50g.webp";
import katana_20000 from "../../imgs/bannerImgs/katana_20000.webp";
import molfar_liquid from "../../imgs/bannerImgs/molfar_liquid.webp";
import space_tea from "../../imgs/bannerImgs/space_tea.webp";

import Slider from "react-slick";

const SimpleSlider = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <Slider {...settings}>
      <div>
        <img className="rounded-[1rem]" width={1600} src={atom} alt="" />
      </div>
      <div>
        <img className="rounded-[1rem]" width={1600} src={banner_lostmary_os12000} alt="" />
      </div>
      <div>
        <img className="rounded-[1rem]" width={1600} src={banner_vapeshot} alt="" />
      </div>
      <div>
        <img className="rounded-[1rem]" width={1600} src={gedonist} alt="" />
      </div>
      <div>
        <img className="rounded-[1rem]" width={1600} src={hqd_10ml} alt="" />
      </div>
      <div>
        <img className="rounded-[1rem]" width={1600} src={jibiar_50g} alt="" />
      </div>
      <div>
        <img className="rounded-[1rem]" width={1600} src={katana_20000} alt="" />
      </div>
      <div>
        <img className="rounded-[1rem]" width={1600} src={molfar_liquid} alt="" />
      </div>
      <div>
        <img className="rounded-[1rem]" width={1600} src={space_tea} alt="" />
      </div>
    </Slider>
  );
};

export default SimpleSlider;
