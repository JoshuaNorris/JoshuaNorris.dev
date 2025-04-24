import { Outlet } from 'react-router-dom';
import './NavigationBar.styles.scss';
import Logo from '../../assets/logo';

import LinksContainer from './LinksContainer';

export default function NavigationBar() {
    return (
        <>
            <div className='NavigationContainer'>
                <Logo />
                <LinksContainer />
            </div>
            <Outlet />
        </>
    )
}