"use client";
import Navlinks from "./Navlinks";
import HamburgerMenu from "./HamburgerMenu";
import React from "react";
import Navlogo from "./Navlogo";

export default function Header() {
  
    return (
        <>
            <nav className="bg-quaternary shadow-md absolute top-0 right-0 left-0 py-2 px-4 flex items-center justify-between z-50">
               <Navlogo />
                <Navlinks />                
                <HamburgerMenu  />
                <div className="hidden md:flex">
                </div>
            </nav>
        </>
    )
}


