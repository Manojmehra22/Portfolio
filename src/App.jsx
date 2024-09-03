import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";

import Skills from "./components/Skills";
import Footer from "./components/Footer.jsx";
import Contact from "./components/Contact.jsx";
import Projects from "./components/Projects.jsx";
import Darkmode from "./components/Darkmode.jsx";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <div>
        <Darkmode />
        <Navbar />
        <Home />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
      <Toaster />
    </>
  );
}

export default App;
