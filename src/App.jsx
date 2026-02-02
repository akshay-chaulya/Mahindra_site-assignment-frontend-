import About from "./components/About";
import BottomActionBar from "./components/BottomActionBar";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Testimonial1 from "./components/Testimonial1";
import Testimonial2 from "./components/Testimonial2";

const App = () => {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <About/>
      <Testimonial1/>
      <Gallery/>
      <Testimonial2/>
      <Slider/>
      <BottomActionBar />
    </div>
  );
};

export default App;
