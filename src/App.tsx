import Header from "./components/Header";
import CleverHeader from "./components/CleverHeader";
import Footer from "./components/Footer";
import SimpleSlider from "./components/MainSlider";

function App() {
  return (
    <>
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <Header />
        <CleverHeader />
        <SimpleSlider />
      </div>
      <Footer />
    </>
  );
}

export default App;
