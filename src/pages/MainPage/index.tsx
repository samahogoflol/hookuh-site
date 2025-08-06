import ContactWithUs from "../../components/ContactWithUs";
import FastSales from "../../components/FastSales";
import MainSlider from "../../components/MainSlider";
import NewGoodsSlider from "../../components/NewGoodsSlider";
import OurProviders from "../../components/OurProviders";
import AboutUs from "../../components/AboutUs";
import Reviews from "../../components/Reviews";
import Delivery from "../../components/Delivery";

const MainPage = () => {
  return (
    <>
      <MainSlider />
      <FastSales />
      <NewGoodsSlider />
      <OurProviders />
      <ContactWithUs />
      <AboutUs />
      <Reviews />
      <Delivery />
    </>
  );
};

export default MainPage;
