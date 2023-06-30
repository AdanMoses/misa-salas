"use client"
import React, { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "./router/AllRoutes";
import styles from './page.module.css'
import ScrollToTop from "./components/ScrollToTop";
import AnimatedCursor from "react-animated-cursor";
import AOS from "aos";

export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <BrowserRouter>
        <AnimatedCursor
          innerSize={8}
          outerSize={44}
          color="255, 147, 1"
          outerAlpha={0.3}
          innerScale={0.7}
          outerScale={1.4}
        />
        <ScrollToTop />
        <AllRoutes />
      </BrowserRouter>
    </>
  )
}
