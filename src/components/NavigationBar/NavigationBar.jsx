import { Outlet } from 'react-router-dom';
import './NavigationBar.scss';
import Logo from '../../assets/logo';
import { NavLink } from 'react-router-dom';

import { useMediaQuery } from 'react-responsive';
import MobileNavigation from './Mobile/MobileNavigation';
import DesktopNavigation from './Desktop/DesktopNavigation';
import { HOME_PATH } from '../../Routes';

export default function NavigationBar() {
    const isMobile = useMediaQuery({ maxWidth: 767 });

    function getNavigation() {
        return isMobile
            ? <MobileNavigation />
            : <DesktopNavigation />;
    }


    return (
        <>
            <div className='NavigationContainer'>
                <NavLink to={ HOME_PATH }><Logo /></NavLink>
                { getNavigation() }
            </div>
            <Outlet />
        </>
    )
}