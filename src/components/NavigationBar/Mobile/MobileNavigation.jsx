import React, { useRef } from 'react';
import './MobileNavigation.scss';
import { NavLink } from 'react-router-dom';

export default function MobileNavigation() {

    const nav = useRef(null);
    const menuIcon = useRef(null);

    function toggleMenu() {
        nav.current?.classList.toggle('active');
        menuIcon.current?.classList.toggle('active');
    }

    function hideMenu() {
        console.log('hiding')
        nav.current?.classList.remove('active');
        menuIcon.current?.classList.remove('active');
    }

    return (
        <>
            <div id="hamburger-icon" ref={menuIcon} onClick={toggleMenu}>
                <div className='hamburger-line' id="line1"></div>
                <div className='hamburger-line' id="line2"></div>
                <div className='hamburger-line' id="line3"></div>
            </div>
            <nav id='MobileNav' ref={nav}>
                <ul id='nav-ul'>
                    <li><NavLink to="#" onClick={hideMenu}>Home</NavLink></li>
                    <li><NavLink to="#" onClick={hideMenu}>About</NavLink></li>
                    <li><NavLink to="#" onClick={hideMenu}>Gallery</NavLink></li>
                    <li><NavLink to="#" onClick={hideMenu}>Blog</NavLink></li>
                    <li><NavLink to="#" onClick={hideMenu}>Contact</NavLink></li>
                </ul>
            </nav>
        </>
    );
}