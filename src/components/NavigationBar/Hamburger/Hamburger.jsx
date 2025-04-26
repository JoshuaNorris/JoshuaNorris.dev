import './Hamburger.styles.scss';

export default function Hamburger() {
    return (
        <nav className='burger-nav'>
            <div id="menuToggle">
                <input id='burger-input' type="checkbox" />
                    <span className='burger' id='top_burger'></span>
                    <span className='burger' id='middle_burger'></span>
                    <span className='burger' id='bottom_burger'></span>
                <ul id="menu">
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Info</a></li>
                    <li><a href="#">Contact</a></li>
                </ul>
            </div>
        </nav>  
    );
}