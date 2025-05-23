import React, { useRef } from 'react';
import './MobileNavigation.scss';
import { NavLink } from 'react-router-dom';
import { ABOUT_PATH, BLOG_PATH, IM_JOSH_PATH, JOSH_CAN_HELP_PATH, JOSH_WANTS_HELP_PATH } from '../../../Routes';

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
                <NavLink className = "MobileNavLink"to={ ABOUT_PATH } onClick={hideMenu}>About this website</NavLink>
                <NavLink className = "MobileNavLink"to={ BLOG_PATH } onClick={hideMenu}>Blog</NavLink>
                <NavLink className = "MobileNavLink"to={ IM_JOSH_PATH } onClick={hideMenu}>I'm Josh</NavLink>
                <NavLink className = "MobileNavLink"to={ JOSH_CAN_HELP_PATH } onClick={hideMenu}>Josh Can Help With</NavLink>
                <NavLink className = "MobileNavLink"to={ JOSH_WANTS_HELP_PATH } onClick={hideMenu}>Josh Wants Help With</NavLink>
            </nav>
        </>
    );
}