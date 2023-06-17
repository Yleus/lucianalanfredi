'use client';

import Logo from "./Logo";
import { BiMenuAltRight } from "react-icons/bi";
import { useState } from "react";
import Link from "next/link";

const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    function scrollSmooth(event, id) {
        event.preventDefault();
        const element = document.getElementById(id);
        element.scrollIntoView({ behavior: 'smooth' });
      }


    return (
    
        <div className="flex flex-col w-full top-0 left-0 right-0 z-10 p-3 bg-black">
            <div className="flex justify-between items-center ">
                <Logo />
                <div className="flex gap-1 items-center p-2  md:hidden  rounded-lg hover:bg-orange-500 bg-white ">
                    <p>Menu</p>
                    <BiMenuAltRight onClick={handleClick} size={22}/>              
                </div>        

                <div className="hidden md:flex ">
                    <ul className="flex gap-3 p-2 uppercase text-white ">
                        <Link onClick={(event) => scrollSmooth(event, 'main')} className="hover:text-[#fa7e61]" href="/">Home</Link>
                        <Link onClick={(event) => scrollSmooth(event, 'about')} className="hover:text-[#fa7e61]" href="#about">About</Link>
                        <Link onClick={(event) => scrollSmooth(event, 'services')} className="hover:text-[#fa7e61]" href="#services">Services</Link>
                        <Link onClick={(event) => scrollSmooth(event, 'contact')} className="hover:text-[#fa7e61]" href="#contact">Contact Me</Link>   
                    </ul>
                </div>  
            </div>
            
            {isOpen ? (
            <div className="md:hidden ">
                <ul className="uppercase pt-2 pl-2 flex flex-col gap-3 text-white ">
                    <Link onClick={(event) => scrollSmooth(event, 'main')} href="/">Home</Link>
                    <Link onClick={(event) => scrollSmooth(event, 'about')} href="#about">About</Link>
                    <Link onClick={(event) => scrollSmooth(event, 'services')} href="#services">Services</Link>
                    <Link onClick={(event) => scrollSmooth(event, 'contact')} href="#contact" className="pb-2 border-b-2 border-neutral-100">Contact Us</Link>                    
                </ul>
            </div>
        ): null}  
        </div>  

        
         
    
    )
}
 
export default Menu;





