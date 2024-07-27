import AsosiySwiper from "./mainPartsOfPage/swiper_slider/asosiy";
import PastkiSlider from "./mainPartsOfPage/swiper_slider/b_of_asosiy";
import Product from "./mainPartsOfPage/swiper_slider/product";
import Navbar from "./pages/page_items/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AsosiySwiper/>
      <PastkiSlider/>
      <Product/>
    </div>
  );
}

export default App;
