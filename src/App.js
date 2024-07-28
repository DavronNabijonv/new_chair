import React, { useCallback, useEffect, useState, useContext } from "react";
import AsosiySwiper from "./mainPartsOfPage/swiper_slider/asosiy";
import PastkiSlider from "./mainPartsOfPage/swiper_slider/b_of_asosiy";
import Product from "./mainPartsOfPage/swiper_slider/product";
import About from "./pages/page_items/about";
import Navbar from "./pages/page_items/navbar";
import Xizmat from "./pages/page_items/xizmat";
import Tarmoq from "./pages/page_items/tarmoq";
import Aloqa from "./pages/page_items/aloqa";
import Footer from "./pages/page_items/footer";

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
        <AsosiySwiper />
        <PastkiSlider />
        <Product />
        <Xizmat />
        <About />
        <Tarmoq/>
        <Aloqa/>
        <Footer/> 
      </InnerWidthContext.Provider>
    </div>
  );
}

export default App;
