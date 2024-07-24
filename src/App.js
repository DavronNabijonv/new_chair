import AsosiySwiper from "./components/swiper_slider/asosiy";
import PastkiSlider from "./components/swiper_slider/b_of_asosiy";
import Navbar from "./page_items/navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <AsosiySwiper/>
      <PastkiSlider/>
    </div>
  );
}

export default App;
