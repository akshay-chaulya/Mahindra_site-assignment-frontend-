import About from "./components/About";
import BookSiteVisit from "./components/BookSiteVisit";
import BottomActionBar from "./components/BottomActionBar";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Location from "./components/Location";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";
import Specification from "./components/Specification";
import Testimonial1 from "./components/Testimonial1";
import Testimonial2 from "./components/Testimonial2";
import { ContextProvider } from "./context/ContextProvider";

const App = () => {
  return (
    <div className=" relative">
      <Navbar />
      <Hero />
      <About />
      <Testimonial1 />
      <Gallery />
      <Testimonial2 />
      <Slider />
      <Specification />
      <Location />
      <Footer />
      <ContextProvider>
        <BookSiteVisit />
        <BottomActionBar />
      </ContextProvider>
    </div>
  );
};

export default App;
