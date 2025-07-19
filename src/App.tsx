import Header from "./components/Header";
import CleverHeader from "./components/CleverHeader";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <Header />
        <CleverHeader />
      </div>
      <Footer />
    </>
  );
}

export default App;
