import Hero from "./components/hero/Hero";
import Header from "./components/header/Header";
import About from "./components/about/About";
import Skill from "./components/skill/Skill";
import Contact from "./components/contact/Contact";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";

function App() {
  const [showScrollBTN, setShowScrollBTN] = useState(false);
  useEffect(() => {
    window.onscroll = () => {
      if (window.scrollY > 500) {
        setShowScrollBTN(true);
      } else {
        setShowScrollBTN(false);
      }
    };
  }, []);
  return (
    <div className="container">
      <Header />
      
      <Hero />
      <div className="divider" />

      <About />
      <div className="divider" />

      <Skill />
      <div className="divider" />

      <Main />
      <div className="divider" />

      <Contact />
      <div className="divider" />

      <Footer />

      {/* Scroll to top */}
      {showScrollBTN && (
        <a href="#">
          <button className="scrollToTop icon-keyboard_arrow_up"></button>
        </a>
      )}
    </div>
  );
}

export default App;
