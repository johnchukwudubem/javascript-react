import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import AboutSection from "../../components/About/AboutSection";
import Hero from "../../components/HeroSection/Hero";
import SeoFriendly from "../../components/SeoFriendlySection/SeoFriendly";

import PortFolio from "../../components/PortFolio/PortFolio";
import Header from "../../components/Header/Header";
import Product from "../../components/RoughSheet/Product";
import Form from "../../components/Login/Form";
import GetAllUsers from "../../components/ReturnData/GetAllUsers";

const HomePage = () => {
  return (
    <div>
      {/* <Navbar />
      <AboutSection />
      <Header />
      <Hero />
      <SeoFriendly />

      <PortFolio />
      <Product /> */}
      {/* <Form /> */}
      <GetAllUsers />
    </div>
  );
};

export default HomePage;
