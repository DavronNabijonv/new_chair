import AsosiySwiper from "./mainPartsOfPage/swiper_slider/asosiy";
import PastkiSlider from "./mainPartsOfPage/swiper_slider/b_of_asosiy";
import Product from "./mainPartsOfPage/swiper_slider/product";
import Navbar from "./pages/page_items/navbar";
import Xizmat from "./pages/page_items/xizmat";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AsosiySwiper/>
      <PastkiSlider/>
      <Product/>
      <Xizmat/>
    </div>
  );
}

export default App;
