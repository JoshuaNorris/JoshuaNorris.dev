import React, { useRef } from 'react';
import './MobileNavigation.scss';

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
                    <li><a href="#" onClick={hideMenu}>Home</a></li>
                    <li><a href="#" onClick={hideMenu}>About</a></li>
                    <li><a href="#" onClick={hideMenu}>Gallery</a></li>
                    <li><a href="#" onClick={hideMenu}>Blog</a></li>
                    <li><a href="#" onClick={hideMenu}>Contact</a></li>
                </ul>
            </nav>
        </>
    );
}