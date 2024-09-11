import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ProductsPage from "./pages/ProductsPage";
import ResearchPage from "./pages/ResearchPage";
import CareersPage from "./pages/CareersPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <>
      <Router>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about-us" element={<AboutUsPage />} />
              <Route path="/products" element={<ProductsPage />} />
              <Route path="/research" element={<ResearchPage />} />
              <Route path="/careers" element={<CareersPage />} />
              <Route path="/contact" element={<ContactPage />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
