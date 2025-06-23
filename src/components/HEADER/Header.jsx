import {Link} from 'react-router-dom'
import'./Header.css';

const Header = () => {
    return(
      <header className="navbar">
    <div className="logo"><h1>Vivekanand College</h1></div>
    <ul className="nav-menu">
      <li><Link to="/">Home</Link></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/courses">Courses</Link></li>
      <li><Link to="/contact">Contact</Link></li>
      <li><Link to="/apply" className="apply-btn">Apply now</Link></li>
     </ul>
  </header>
    )
}
export default Header;
