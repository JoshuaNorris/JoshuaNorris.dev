import './NavigationBar.scss';
import Logo from '../../assets/logo';
import { NavLink } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';
import MobileNavigation from './Mobile/MobileNavigation';
import DesktopNavigation from './Desktop/DesktopNavigation';
import { HOME_PATH, BLOG_PATH } from '../../configuration/routes';

export default function NavigationBar() {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    const navigationLinks = [
        { path : BLOG_PATH,            heading : "Blog"}
    ];

    function getNavigation() {
        return isMobile
            ? <MobileNavigation links = {navigationLinks}/>
            : <DesktopNavigation links = {navigationLinks}/>;
    }


    return (
        <>
            <NavLink to={ HOME_PATH }><Logo /></NavLink>
            { getNavigation() }
        </>
    )
}