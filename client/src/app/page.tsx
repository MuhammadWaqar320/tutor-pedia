"use client";
import Image from 'next/image';
import SliderSection from "../components/SliderSection";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useState, useEffect } from "react";
import { Vortex } from 'react-loader-spinner';

const styles = {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "100vh"
};

const Home = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 2000);
  }, []);

  return (
    <>
      {isLoading ? (
        <div style={styles}>
          <Vortex
            visible={true}
            height="150"
            width="150"
            ariaLabel="vortex-loading"
            wrapperStyle={{}}
            wrapperClass="vortex-wrapper"
            colors={['red', 'green', 'blue', 'yellow', 'orange', 'purple']}
          />
        </div>
      ) : (
        <main>
          <Header />
          <SliderSection />
          <div>{/* Additional content */}</div>
          <div>{/* Additional content */}</div>
          <Footer />
        </main>
      )}
    </>
  );
};

export default Home;

