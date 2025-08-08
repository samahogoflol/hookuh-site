import Header from "./components/Header";
import Footer from "./components/Footer";
import CleverHeader from "./components/CleverHeader";
import MainPage from "./pages/MainPage";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ContactsPage from "./pages/ContactsPage";
import ForWholesalersPage from "./pages/ForWholesalersPage";
import PartnershipPage from "./pages/PartnershipPage";
import PaymentAndDeliveryPage from "./pages/PaymentAndDeliveryPage";
import GoodsList from "./components/GoodsList";
import TabaccoPage from "./pages/TabaccoPage";
import ElectronCigarettePage from "./pages/ElectronCigarette";

function App() {
  return (
    <>
      <Router>
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <Header />
          <CleverHeader />
          <TabaccoPage />
          {/* <ElectronCigarettePage /> */}
          {/* <GoodsPage /> */}
          {/* <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/paymentAndDelivery" element={<PaymentAndDeliveryPage />} />
            <Route path="/actions" element={<Actions></Actions>}></Route>
            <Route path="forPartners" element={<PartnershipPage />} />
            <Route path="forWholesalers" element={<ForWholesalersPage />} />
            <Route path="/contactWithUs" element={<ContactsPage />} />
          </Routes> */}
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;
