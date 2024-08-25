"use client";

import React from "react";
import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { IoIosArrowDropupCircle } from "react-icons/io";

const BackToTop = () => {

    const [backToTopButton, setBackToTopButton] = useState(false);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 1 ) {
                setBackToTopButton(true);
            } else {
                setBackToTopButton(false);
            };
        });
    }, []);

    const scrollUp = () => {
        window.scrollTo({
            top : 0,
            behavior : "smooth",
        });
    };

    return (
      <div>
            {backToTopButton && (
            <button className="text-4xl text-white/25 hover:text-white mb-8" onClick={scrollUp}><IoIosArrowDropupCircle /></button>
            )}
      </div>
    );
  }
  
  export default BackToTop;