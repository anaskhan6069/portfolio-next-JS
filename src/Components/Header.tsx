"use client"

import React, { useState } from "react"
import Link from "next/link"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCode, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState("#home");
    // Function to handle link click and close menu
    const handleLinkClick = (link: string) => {
        setMenuOpen(false);
        setActiveLink(link);
    };

    return (
        <>
            <nav className="bg-[#12123E] text-white flex justify-between items-center py-4 px-[20px] lg:px-[108px] md:px-[60px] z-50 fixed w-full top-0 shadow-[0_6px_10px_rgba(0,0,0,0.2)]">
                <div>
                    <Link href="#home" className="font-bold text-[26px] lg:text-[30px]">
                        <FontAwesomeIcon icon={faCode} className='text-[26px] lg:text-[32px] text-myCustomColor' /> Portfolio
                    </Link>
                </div>
                {/* Desktop Links */}
                <ul className="font-bold hidden lg:flex gap-12 text-[18px]">
                    <li><Link href="#home" className={`${activeLink === "#home" ? 'text-myCustomColor' : 'text-white'} home hover:text-myCustomColor`} onClick={() => handleLinkClick("#home")}>Home</Link></li>

                    <li><Link href="#about" className={`${activeLink === "#about" ? 'text-myCustomColor' : 'text-white'} home hover:text-myCustomColor`} onClick={() => handleLinkClick("#about")}>About</Link></li>

                    <li><Link href="#services" className={`${activeLink === "#services" ? 'text-myCustomColor' : 'text-white'} home hover:text-myCustomColor`} onClick={() => handleLinkClick("#services")}>Services</Link></li>

                    <li><Link href="#projects" className={`${activeLink === "#projects" ? 'text-myCustomColor' : 'text-white'} home hover:text-myCustomColor`} onClick={() => handleLinkClick("#projects")}>Projects</Link></li>

                    <li><Link href="#contact" className={`${activeLink === "#contact" ? 'text-myCustomColor' : 'text-white'} home hover:text-myCustomColor`} onClick={() => handleLinkClick("#contact")}>Contact</Link></li>
                </ul>
                
                {/* Mobile Menu Icon */}
                <div className="block lg:hidden">
                    <FontAwesomeIcon 
                        icon={menuOpen ? faTimes : faBars} 
                        className='text-[26px] cursor-pointer'
                        onClick={() => setMenuOpen(!menuOpen)} // Toggle menu on click
                    />
                </div>
            </nav>


            {/* Mobile Menu */}
            <div className={`lg:hidden bg-secondaryColor text-white fixed w-full z-10 left-0 pt-20 transition-transform duration-300  shadow-[0_6px_10px_rgba(0,0,0,0.2)] 
                ${menuOpen ? "block" : "hidden"}`}>
                <ul className="flex flex-col items-center py-4 gap-6">
                    <li>
                        <Link href="#home" className={`${activeLink === "#home" ? 'text-myCustomColor' : 'text-white'} text-[20px] hover:text-myCustomColor`} onClick={() => handleLinkClick("#home")}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link href="#about" className={`${activeLink === "#about" ? 'text-myCustomColor' : 'text-white'} text-[20px] hover:text-myCustomColor`} onClick={() => handleLinkClick("#about")}>
                            About
                        </Link>
                    </li>
                    <li>
                        <Link href="#services" className={`${activeLink === "#services" ? 'text-myCustomColor' : 'text-white'} text-[20px] hover:text-myCustomColor`} onClick={() => handleLinkClick("#services")}>
                            Services
                        </Link>
                    </li>
                    <li>
                        <Link href="#projects" className={`${activeLink === "#projects" ? 'text-myCustomColor' : 'text-white'} text-[20px] hover:text-myCustomColor`} onClick={() => handleLinkClick("#projects")}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact" className={`${activeLink === "#contact" ? 'text-myCustomColor' : 'text-white'} text-[20px] hover:text-myCustomColor`} onClick={() => handleLinkClick("#contact")}>
                            Contact
                        </Link>
                    </li>
                </ul>
            </div>

            
        </>
    )
}

export default Header;
