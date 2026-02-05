import "./App.css";
import About from "./section/About/About";
import Contact from "./section/Contact/Contact";
import Footer from "./section/Footer/Footer";
import Header from "./section/Header/Header";
import Hero from "./section/Hero/Hero";
import Portfolio from "./section/Portfolio/Portfolio";
import Services from "./section/Services/Services";
import Working from "./section/Working/Working";
function App() {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
