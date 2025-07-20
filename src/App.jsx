import Lenis from "lenis";
import Nav from "./components/Nav";
import Home from "./components/Home";

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
    </>
  );
};

export default App;
