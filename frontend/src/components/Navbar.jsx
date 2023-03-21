import './Navbar.css'
import logo from './images/logo.png'
import {Link} from "react-router-dom"


function Navbar(){


    return(
        <div className = "topBar">
            <div className="brand">
                <img src={logo} className="plane" alt='logo'></img>
            </div>
            <div className="nav-hold">
                <Link className='nav-items'>Trips</Link>
                <Link className='nav-items'>Support</Link>
                <Link className='nav-items'>Login</Link>
            </div>
            
        </div>
    );
}

export default Navbar;