import React, { useCallback, useEffect, useState} from "react";
import Navbar from "./pages/navbar_footer/navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import ProductPage from "./pages/productPage";
import Footer from "./pages/navbar_footer/footer";
import { products_slider } from "./db/showCase_slider";

export const InnerWidthContext = React.createContext();
export const ProductInfo = React.createContext();

function App() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [product, setProduct] = useState(products_slider[0][0]);

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
        <ProductInfo.Provider value={{product,setProduct}}>
          <Navbar />
          <Routes>
            <Route path="product" element={<HomePage />} />
            <Route path="/" element={<ProductPage />} />
          </Routes>
          <Footer />
        </ProductInfo.Provider>
      </InnerWidthContext.Provider>
    </div>
  );
}

export default App;
