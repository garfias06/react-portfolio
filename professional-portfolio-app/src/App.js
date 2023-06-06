import React from "react";
import Portfolio from "./components/Portfolio";
import Header from "./components/Header";
import AboutMe from "./components/AboutMe";
import Resume from "./components/Resume";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

export default function App() {

  return (
    <div>
      <Header/>
      <Portfolio/>
      {/* <AboutMe/> */}
      {/* <Resume/> */}
      {/* <ContactForm /> */}
      <Footer />
    </div>
  )
}

// Change browser tab title that says REACT to your name, using useEffect
// Conditional rendering to jump from page to page