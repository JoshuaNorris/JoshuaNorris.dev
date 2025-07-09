import React from 'react';
import './DesktopNavigation.scss';
import { NavLink } from 'react-router-dom';

export default function DesktopNavigation({ links }) {

    function getLinks() {
        return links.map(
            ({ path, heading }) =>
                <NavLink className="DesktopNavLink" to={ path } key={heading}>
                    { heading }
                </NavLink>
        );
    }

    return (
        <div id='DesktopNav'>
            { getLinks() }
        </div>
    );
}