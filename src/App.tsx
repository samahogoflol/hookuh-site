import Header from "./components/Header";
import Footer from "./components/Footer";
import CleverHeader from "./components/CleverHeader";
import FormLeaveReview from "./components/FormLeaveReview/index.tsx";


function App() {
  return (
    <>
      <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
        <Header />
        <CleverHeader />
        <FormLeaveReview />
      </div>
      <Footer />
    </>
  );
}

export default App;
