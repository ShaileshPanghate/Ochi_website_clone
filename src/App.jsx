// eslint-disable-next-line no-unused-vars
import React from "react";
import Navbar from "./components/Navbar";
import Landing from "./components/Landing";
import Marquee from "./components/Marquee";
import Footer from "./components/Footer";
import About from './components/About'
import Eyes from './components/Eyes'
import Fetured from './components/Fetured'
import Cards from './components/Cards'
import Ready from './components/Ready'
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const locomotiveScroll = new LocomotiveScroll();

  return (
    <div className="w-full min-h-screen bg-zinc-900 text-white">
      <Navbar />
      <Landing />
      <Marquee />
      <About />
      <Eyes />
      <Fetured />
      <Cards />
      <Ready />
      <Footer />
    </div>
  );
}

export default App;
