import Header from "./components/Header";
import Footer from "./components/Footer";
import CleverHeader from "./components/CleverHeader";
import SimpleSlider from "./components/MainSlider";
import FastSales from "./components/FastSales";
import GoodsSlider from "./components/GoodsSlider";
import OurDelivers from "./components/OurProviders/index.tsx";
import ContactWithUs from "./components/ContactWithUs";
import AboutUs from "./components/AboutUs.tsx";
import Reviews from "./components/Reviews/index.tsx";
import Delivery from "./components/Delivery/index.tsx";
import GoodsPage from "./components/GoodsPage/index.tsx";

function App() {
  return (
    <>
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <Header />
        <CleverHeader />
        <GoodsPage />
        {/* <SimpleSlider />
        <FastSales />
        <GoodsSlider />
        <GoodsSlider />
        <OurDelivers />
        <ContactWithUs />
        <AboutUs />
        <Reviews />
        <Delivery /> */}
      </div>
      <Footer />
    </>
  );
}

export default App;
