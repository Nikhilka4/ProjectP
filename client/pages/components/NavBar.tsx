"use client"
import Image from "next/image";
import React, { FC, useEffect, useRef, useState } from "react";
import logo from "../assets/LOGO.svg";
import { Button } from "@/components/ui/button";

type Props = {};

const NavBar:FC<Props> = ( ) => {
    const navRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

    const checkScrollTop = () => {
        setIsScrolled(window.scrollY === 0 ? false : true);
        
    }

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
      }, []);

  return (
    <div ref={navRef} className={`sticky block z-10 top-0 bg-[#fff5ea] w-full transition-all duration-300 `}>
      <div className="flex justify-between items-center mx-[70px]">
        <div className="ml-[20px] my-3">
          <Image src={logo} width={150} height={150} alt="logo" />
        </div>
        <Button variant="primary" className="rounded-[10px] roboto text-[17px]">
          Book Appointment
        </Button>
      </div>
    </div>
  );
};

export default NavBar;


// setIsScrolled(window.pageYOffset > navRef.current.offsetHeight ? true : false);