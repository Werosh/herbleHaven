import React from "react";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import Background from "./Components/Background";
import Aboutus from "./Components/Aboutus";
import Shop from "./Components/Shop";
import Blog from "./Components/Blog";
import ContactUs from "./Components/ContactUs";

const App = () => {
  return (
    <>
      <Background />
      <Navbar />
      <Home />
      <Aboutus/>
      <Shop/>
      <Blog/>
      <ContactUs/>
    </>
  );
};

export default App;
