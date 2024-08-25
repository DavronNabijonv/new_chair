import React, { useCallback, useEffect, useState, useRef } from "react";
import Navbar from "./pages/navbar_footer/navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import ProductPage from "./pages/productPage";
import Footer from "./pages/navbar_footer/footer";
import { products_slider } from "./db/showCase_slider";
import Load from "./pages/loading_page/load";

export const InnerWidthContext = React.createContext();
export const ProductInfo = React.createContext();

function App() {
  const [mainInnerWidth, setMainInnerWidth] = useState(window.innerWidth);
  const [product, setProduct] = useState(products_slider[0][0]);

  const handleResize = useCallback(() => {
    setMainInnerWidth(window.innerWidth);
  }, [mainInnerWidth]);

  useEffect(() => {
    window.addEventListener("resize", handleResize());


    return () => {
      window.removeEventListener("resize",handleResize());
    };
  }, []);

  return (
    <div className="App">
      <Load/>
      {/* <InnerWidthContext.Provider value={mainInnerWidth}>
        <ProductInfo.Provider value={{ product, setProduct }}>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="product" element={<ProductPage />} />
          </Routes>
          <Footer />
        </ProductInfo.Provider>
      </InnerWidthContext.Provider> */}
    </div>
  );
}

export default App;
