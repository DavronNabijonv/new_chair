import AsosiySwiper from "./components/swiper_slider/asosiy";
import PastkiSlider from "./components/swiper_slider/b_of_asosiy";
import Product from "./components/swiper_slider/product";
import Navbar from "./page_items/navbar";

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
