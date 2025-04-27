import './Hamburger.styles.scss';

export default function Hamburger() {
    return (
        <nav id="hamburger-navigation">
        <input type="checkbox" />
        <span className="burger"></span>
        <span className="burger"></span>
        <span className="burger"></span>
  
        <ul id="menu">
          <li><a href="#">Home</a></li>
          <li><a href="#">About</a></li>
          <li><a href="#">Info</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    );
}