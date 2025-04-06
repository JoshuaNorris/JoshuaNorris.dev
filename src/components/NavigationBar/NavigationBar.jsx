import { Outlet } from 'react-router-dom';
import './NavigationBar.styles.scss'
import logo from '../../assets/temp-logo.svg'
import LinksContainer from './LinksContainer';

function NavigationBar() {
  return (
    <>
      <div className='NavigationContainer'>
        <img src={logo} alt='Logo' className='LogoContainer'/>
        <LinksContainer />
      </div>
      <Outlet />
    </>
  )
}

export default NavigationBar