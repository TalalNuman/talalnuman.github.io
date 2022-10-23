import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.scss";
import { About, Footer, Header, Work, Testimonials, Skills } from "./container";
import { Navbar } from "./components";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default App;
