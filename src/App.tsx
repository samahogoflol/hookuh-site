import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import CleverHeader from "./components/CleverHeader";
import MainPage from "./pages/MainPage";
import CategoryPage from "./pages/CategoryPage";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import PaymentAndDeliveryPage from "./pages/PaymentAndDeliveryPage";
import ContactsPage from "./pages/ContactsPage";
import Page404 from "./pages/404";
import PartnershipPage from "./pages/PartnershipPage";
import ForWholesalersPage from "./pages/ForWholesalersPage";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="mx-auto max-w-[90rem] px-4 sm:px-6 lg:px-8">
          <ScrollToTop />
          <Header />
          <CleverHeader />

          <Routes>
            <Route path="/" element={<MainPage />} />
            <Route path="/paymentAndDelivery" element={<PaymentAndDeliveryPage />} />
            {/* <Route path="actions" element={}/> */}
            <Route path="/forPartners" element={<PartnershipPage />} />
            <Route path="/forWholesalers" element={<ForWholesalersPage />} />
            <Route path="/contactWithUs" element={<ContactsPage />} />
            <Route path="/:slugs/:brand?/:weight?/:line?" element={<CategoryPage />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
        </div>

        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
