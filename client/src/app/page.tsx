"use client";
import Image from 'next/image';
import SliderSection from "../components/SliderSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import LandingInfoSection from "@/components/LandingInfoSection"
import { useState, useEffect } from "react";

const Home = () => {
 
  return (
        <main>
          <Header />
          <SliderSection />
          <LandingInfoSection />
          <Footer />
        </main>
  );
};

export default Home;

