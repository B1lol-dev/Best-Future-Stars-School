import About from "./components/About";
import Classes from "./components/Classes";
import Contact from "./components/Contact";
import Features from "./components/Features";
import Hero from "./components/Hero";
import { Toaster } from "react-hot-toast";

const Home = () => {
  return (
    <>
      <Toaster />
      <Hero />
      <About />
      <Features />
      <Classes />
      <Contact />
    </>
  );
};

export default Home;
