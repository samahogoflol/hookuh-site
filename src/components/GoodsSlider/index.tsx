import "./slick.css";
import "./slick-theme.css";

import Slider from "react-slick";

import { ButtonBuy, ButtonHeart } from "../Buttons/Buttons";

import lirra_50_gr_usa_potekshy from "../../utils/imgs/tabaks/lirra/lirra_50_gr_usa_potekshy-.webp";
import lirra_amsterdam_50gr_potekshy from "../../utils/imgs/tabaks/lirra/lirra_amsterdam_50gr_potekshy.webp";
import lirra_berry_star_50gr_potekshy from "../../utils/imgs/tabaks/lirra/lirra_berry_star_50gr_potekshy.webp";
import lirra_crazy_lemon_50gr_potekshy from "../../utils/imgs/tabaks/lirra/lirra_crazy_lemon_50gr_potekshy.webp";
import lirra_loop_50gr_potekshy from "../../utils/imgs/tabaks/lirra/lirra_loop_50gr_potekshy.webp";
import lirra_pink_lemonade_50gr_potekshy from "../../utils/imgs/tabaks/lirra/lirra_pink_lemonade_50gr_potekshy.webp";
import lirra_ruby_crash_50gr_potekshy from "../../utils/imgs/tabaks/lirra/lirra_ruby_crash_50gr_potekshy.webp";
import lirra_secret_50gr_potekshy from "../../utils/imgs/tabaks/lirra/lirra_secret_50gr_potekshy-.webp";
import lirra_tropical_punch_50gr_potekshy from "../../utils/imgs/tabaks/lirra/lirra_tropical_punch_50gr_potekshy.webp";

const NewGoodsSlider = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
  };
  return (
    <>
      <h2 className="text-center text-4xl font-medium mt-15 mb-7">Новинки</h2>
      <Slider {...settings}>
        <div className=" border-gray-200 border-1 border-r-1 p-5 font-bold text-center">
          <img className="ml-8.5 " src={lirra_50_gr_usa_potekshy} alt="" />
          <p className="mt-5">Тютюн Lirra USA (США) 50гр (ПОТЕКШИЙ)</p>
          <p className="mt-6 font-bold text-[1.2rem]">70₴</p>
          <div className="flex justify-center items-center ml-5">
            <ButtonBuy />
            <ButtonHeart />
          </div>
        </div>
        <div className=" border-gray-200 border-1  p-5 font-bold text-center  ">
          <img className="ml-8.5" src={lirra_amsterdam_50gr_potekshy} alt="" />
          <p className="mt-5">Тютюн Lirra USA (США) 50гр (ПОТЕКШИЙ)</p>
          <p className="mt-6 font-bold text-[1.2rem]">70₴</p>
          <div className="flex justify-center items-center ml-5">
            <ButtonBuy />
            <ButtonHeart />
          </div>
        </div>
        <div className=" border-gray-200 border-1  p-5 font-bold text-center  ">
          <img className="ml-8.5" src={lirra_berry_star_50gr_potekshy} alt="" />
          <p className="mt-5">Тютюн Lirra USA (США) 50гр (ПОТЕКШИЙ)</p>
          <p className="mt-6 font-bold text-[1.2rem]">70₴</p>
          <div className="flex justify-center items-center ml-5">
            <ButtonBuy />
            <ButtonHeart />
          </div>
        </div>
        <div className=" border-gray-200 border-1  p-5 font-bold text-center  ">
          <img className="ml-8.5" src={lirra_crazy_lemon_50gr_potekshy} alt="" />
          <p className="mt-5">Тютюн Lirra USA (США) 50гр (ПОТЕКШИЙ)</p>
          <p className="mt-6 font-bold text-[1.2rem]">70₴</p>
          <div className="flex justify-center items-center ml-5">
            <ButtonBuy />
            <ButtonHeart />
          </div>
        </div>
        <div className=" border-gray-200 border-1  p-5 font-bold text-center  ">
          <img className="ml-8.5" src={lirra_berry_star_50gr_potekshy} alt="" />
          <p className="mt-5">Тютюн Lirra USA (США) 50гр (ПОТЕКШИЙ)</p>
          <p className="mt-6 font-bold text-[1.2rem]">70₴</p>
          <div className="flex justify-center items-center ml-5">
            <ButtonBuy />
            <ButtonHeart />
          </div>
        </div>
        <div className=" border-gray-200 border-1  p-5 font-bold text-center  ">
          <img className="ml-8.5" src={lirra_ruby_crash_50gr_potekshy} alt="" />
          <p className="mt-5">Тютюн Lirra USA (США) 50гр (ПОТЕКШИЙ)</p>
          <p className="mt-6 font-bold text-[1.2rem]">70₴</p>
          <div className="flex justify-center items-center ml-5">
            <ButtonBuy />
            <ButtonHeart />
          </div>
        </div>
        <div className=" border-gray-200 border-1  p-5 font-bold text-center  ">
          <img className="ml-8.5" src={lirra_pink_lemonade_50gr_potekshy} alt="" />
          <p className="mt-5">Тютюн Lirra USA (США) 50гр (ПОТЕКШИЙ)</p>
          <p className="mt-6 font-bold text-[1.2rem]">70₴</p>
          <div className="flex justify-center items-center ml-5">
            <ButtonBuy />
            <ButtonHeart />
          </div>
        </div>
        <div className=" border-gray-200 border-1  p-5 font-bold text-center  ">
          <img className="ml-8.5" src={lirra_tropical_punch_50gr_potekshy} alt="" />
          <p className="mt-5">Тютюн Lirra USA (США) 50гр (ПОТЕКШИЙ)</p>
          <p className="mt-6 font-bold text-[1.2rem]">70₴</p>
          <div className="flex justify-center items-center ml-5">
            <ButtonBuy />
            <ButtonHeart />
          </div>
        </div>
        <div className=" border-gray-200 border-1  p-5 font-bold text-center  ">
          <img className="ml-8.5" src={lirra_secret_50gr_potekshy} alt="" />
          <p className="mt-5">Тютюн Lirra USA (США) 50гр (ПОТЕКШИЙ)</p>
          <p className="mt-6 font-bold text-[1.2rem]">70₴</p>
          <div className="flex justify-center items-center ml-5">
            <ButtonBuy />
            <ButtonHeart />
          </div>
        </div>
        <div className=" border-gray-200 border-1  p-5 font-bold text-center  ">
          <img className="ml-8.5" src={lirra_loop_50gr_potekshy} alt="" />
          <p className="mt-5">Тютюн Lirra USA (США) 50гр (ПОТЕКШИЙ)</p>
          <p className="mt-6 font-bold text-[1.2rem]">70₴</p>
          <div className="flex justify-center items-center ml-5">
            <ButtonBuy />
            <ButtonHeart />
          </div>
        </div>
      </Slider>
    </>
  );
};

export default NewGoodsSlider   ;
