import { Outlet } from 'react-router-dom';
import './NavigationBar.scss';
import Logo from '../../assets/logo';

import { useMediaQuery } from 'react-responsive';
import MobileNavigation from './Mobile/MobileNavigation';
import DesktopNavigation from './Desktop/DesktopNavigation';

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
                <Logo />
                { getNavigation() }
            </div>
            <Outlet />
        </>
    )
}