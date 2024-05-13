"use client"
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logo from "../assets/LOGO.svg";
import { Button } from "@/components/ui/button";

type Props = {};

const NavBar = (props: Props) => {
    const navRef = useRef(null);
    const [isScrolled, setIsScrolled] = useState(false);

    const checkScrollTop = () => {
        setIsScrolled(window.scrollY === 0 ? false : true);
        // setIsScrolled(window.pageYOffset > navRef.current.offsetHeight ? true : false);
    }

    useEffect(() => {
        window.addEventListener('scroll', checkScrollTop);
        return () => window.removeEventListener('scroll', checkScrollTop);
      }, []);

  return (
    <div ref={navRef} >
      {/* className={`fixed block  top-0 w-full transition-all duration-300 ${isScrolled ? 'bg-white' : 'bg-transparent'}`} */}
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
