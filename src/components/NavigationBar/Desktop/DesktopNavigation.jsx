import React, { useRef } from 'react';
import './DesktopNavigation.scss';
import { NavLink } from 'react-router-dom';

export default function DesktopNavigation() {

    return (
        <>
            <div id='DesktopNav'>
                <div><NavLink className='DesktopNavLink' to="#">Home</NavLink></div>
                <div><NavLink className='DesktopNavLink' to="#">About</NavLink></div>
                <div><NavLink className='DesktopNavLink' to="#">Gallery</NavLink></div>
                <div><NavLink className='DesktopNavLink' to="#">Blog</NavLink></div>
                <div><NavLink className='DesktopNavLink' to="#">Contact</NavLink></div>
            </div>
        </>
    );
}