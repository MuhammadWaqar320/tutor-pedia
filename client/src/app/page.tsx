"use client";
import Image from 'next/image';
import SliderSection from "../components/SliderSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";

const Home = () => {
 
  return (
        <main>
          <Header />
          <SliderSection />
          <div>{/* Additional content */}</div>
          <div>{/* Additional content */}</div>
          <Footer />
        </main>
  );
};

export default Home;

