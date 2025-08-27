import ContactWithUs from "./ContactWithUs";
import FastSales from "./FastSales";
import MainSlider from "./MainSlider";
import NewGoodsSlider from "./NewGoodsSlider";
import OurProviders from "./OurProviders";
import AboutUs from "./AboutUs";
import Reviews from "./Reviews";
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
