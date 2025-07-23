import Lenis from "lenis";
import Nav from "./components/Nav";
import Home from "./Pages/Home";
import CanvasAnimation from "./components/CanvasAnimation";


const App = () => {
  // Initialize Lenis
  const lenis = new Lenis();

  // Use requestAnimationFrame to continuously update the scroll
  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
  return (
    <>
      <Nav />
      <Home />
      <CanvasAnimation />
    </>
  );
};

export default App;
