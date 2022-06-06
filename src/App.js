import "./App.css";
import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import Services from "./Components/Services";
import Clients from "./Components/Clients";
import Footer from "./Components/Footer";
function App() {
  return (
    <div class="flex flex-col">
      <Navbar />
      <Hero />
      <Services />
      <Clients />
      <Footer />
    </div>
  );
}

export default App;
