import React, { useCallback, useEffect, useState, useContext } from "react";
import Navbar from "./pages/navbar_footer/navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import ProductPage from "./pages/productPage";
import Footer from "./pages/navbar_footer/footer";

export const InnerWidthContext = React.createContext();

function App() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const handleResize = useCallback(() => {
    setInnerWidth(window.innerWidth);
  }, [innerWidth]);
  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className="App">
      <InnerWidthContext.Provider value={innerWidth}>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="product/:product_info" element={<ProductPage />} />
        </Routes>
        <Footer />
      </InnerWidthContext.Provider>
    </div>
  );
}

export default App;
