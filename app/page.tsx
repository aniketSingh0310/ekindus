import About from "./components/about";
import Benefits from "./components/benefits";
import Contact from "./components/contact";
import Disclaimer from "./components/Disclaimer";
import Hero from "./components/hero";
import MobHero from "./components/hero/mobIndex";
import Info from "./components/info";
import Results from "./components/results";
import Testimonials from "./components/testimonials";

export default function Home() {
  return (
    <>
    <Hero/>
    <MobHero/>
    <Info/>
    <About/>
    <Benefits/>
    <Results/>
    <Disclaimer/>
    <Contact/>
    <Testimonials/>
    </>
  );
}
