import About from "./components/about";
import Benefits from "./components/benefits";
import Contact from "./components/contact";
import Hero from "./components/hero";
import Info from "./components/info";
import Results from "./components/results";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <>
    <Hero/>
    <Info/>
    <About/>
    <Benefits/>
    <Results/>
    <Contact/>
    <Testimonials/>
    </>
  );
}
