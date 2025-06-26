import {Link} from 'react-router-dom'
import'./Header.css';

const Header = () => {
    return(
        <header>
            <nav>
                <div className="header" ><span style={{fontSize:'50px'}}><b>Vivekanand College </b></span><span className="menubar">    
                        <Link to="/home" className="link">Home </Link>
                        <Link to="/about" className="link">About </Link>
                        <Link to="/courses" className="link">Courses </Link>
                        <Link to="/contact" className="link">Contact </Link>
                        <Link to="/admission" className="link">
                            <button className="my-button" onClick style={{outline:'none'}}>Apply Now!</button>
                        </Link>
                     </span>
                </div>    
            </nav>
        </header>
    )
}
export default Header;
