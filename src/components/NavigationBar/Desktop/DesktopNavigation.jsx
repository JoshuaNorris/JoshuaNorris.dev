import React, { useRef } from 'react';
import './DesktopNavigation.scss';
import { NavLink } from 'react-router-dom';
import { ABOUT_PATH, BLOG_PATH, IM_JOSH_PATH, JOSH_CAN_HELP_PATH, JOSH_WANTS_HELP_PATH } from '../../../Routes';

export default function DesktopNavigation() {

    return (
        <div id='DesktopNav'>
            <NavLink className="DesktopNavLink" to={ ABOUT_PATH } >About this website</NavLink>
            <NavLink className="DesktopNavLink" to={ BLOG_PATH } >Blog</NavLink>
            <NavLink className="DesktopNavLink" to={ IM_JOSH_PATH } >I'm Josh</NavLink>
            <NavLink className="DesktopNavLink" to={ JOSH_CAN_HELP_PATH } >Josh Can Help With</NavLink>
            <NavLink className="DesktopNavLink" to={ JOSH_WANTS_HELP_PATH } >Josh Wants Help With</NavLink>
        </div>
    );
}