import React, { useRef } from 'react';
import './DesktopNavigation.scss';

export default function DesktopNavigation() {

    return (
        <>
            <div id='DesktopNav'>
                <div><a className='DesktopNavLink' href="#">Home</a></div>
                <div><a className='DesktopNavLink' href="#">About</a></div>
                <div><a className='DesktopNavLink' href="#">Gallery</a></div>
                <div><a className='DesktopNavLink' href="#">Blog</a></div>
                <div><a className='DesktopNavLink' href="#">Contact</a></div>
            </div>
        </>
    );
}