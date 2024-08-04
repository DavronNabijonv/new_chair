import React, { useCallback, useEffect, useState , useRef} from "react";
import Navbar from "./pages/navbar_footer/navbar";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homePage";
import ProductPage from "./pages/productPage";
import Footer from "./pages/navbar_footer/footer";
import { products_slider } from "./db/showCase_slider";

export const InnerWidthContext = React.createContext();
export const ProductInfo = React.createContext();
export const AnimatedTogle = React.createContext();

function App() {
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);
  const [product, setProduct] = useState(products_slider[0][0]);
  const [isVisible, setIsVisible] = useState(false);
  const animatedDivRef = useRef(null);


  const isElementInViewport = (el) => {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  };

  const onScroll = () => {
    if (animatedDivRef.current) {
      setIsVisible(isElementInViewport(animatedDivRef.current));
    }
  };

  const handleResize = useCallback(() => {
    setInnerWidth(window.innerWidth);
  }, [innerWidth]);


  useEffect(() => {
    document.addEventListener("scroll", onScroll);
    window.addEventListener("resize", ()=>{
      handleResize();
      onScroll();
    });

    onScroll();

    return () => {
      document.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", ()=>{
        handleResize();
        onScroll();
      });
    };
  }, [handleResize, onScroll]);


  return (
    <div className="App">
      <InnerWidthContext.Provider value={innerWidth}>
        <ProductInfo.Provider value={{product,setProduct}}>
        <AnimatedTogle.Provider value={{ isVisible, animatedDivRef }}>
              <Navbar />
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="product" element={<ProductPage />} />
              </Routes>
              <Footer />
          </AnimatedTogle.Provider>
        </ProductInfo.Provider>
      </InnerWidthContext.Provider>
    </div>
  );
}

export default App;
