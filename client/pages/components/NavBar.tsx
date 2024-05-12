"use client"
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import logo from "../../public/LOGO (1)-1 1.svg";
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
      <div className="flex justify-between items-center">
        <div className="mx-[15px] my-3">
          <Image src={logo} width={150} height={150} alt="logo" />
        </div>
        <Button variant="primary" className="mr-[70px] mb-[20px] rounded-[10px]">
          Book Appointment
        </Button>
      </div>
    </div>
  );
};

export default NavBar;
