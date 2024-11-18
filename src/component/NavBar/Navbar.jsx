import React, {} from 'react';
import { IoMenu } from "react-icons/io5";
import { BiMenuAltRight } from "react-icons/bi";
// import { Club_logo } from '../../constant';

import "./Navbar.css"

const Navbar = () => {
    
    const [toggleMenu, setToggleMenu] = React.useState(false);

    
    return (
    <div className="club__navbar-container">

        <nav className="club__navbar">
            <div className="club__navbar-headline-content">
                {/* <img src={} width={50} alt="clubLogo" /> */}
                <p className='club__navbar-headline-club'>AI CLUB</p>
            </div>

            
            <ul className="club__navbar-links">
                <li><a href="#home">Home</a></li>
                <li><a href="#mission">Mission</a></li>
                <li><a href="#officer">Officer</a></li>
                <li><a href="#advisor">Advisor</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="club__navbar-join">
                    {/* <a href="#join">Subscribe</a> */}
            </div>

            <div className="club__navbar-smallscreen">
                <IoMenu color ="fff" fontSize={27} cursor={'pointer'} onClick={() => setToggleMenu(true)}></IoMenu>

                {toggleMenu &&(
                    <div className="club__navbar-smallscreen_overlay flex__center slide-bot">
                        <BiMenuAltRight color ="fff" fontSize={30} className="overlay__close" onClick={() => setToggleMenu(false)}></BiMenuAltRight>
                        <ul className="club__navbar-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#mission">Mission</a></li>
                            <li><a href="#officer">Officer</a></li>
                            <li><a href="#advisor">Advisor</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                    </div>
                )}

            </div>
        </nav> 
    </div>
);}

export default Navbar;