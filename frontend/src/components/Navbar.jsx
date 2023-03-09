import './Navbar.css'
import logo from './images/logo.png'

function Navbar(){


    return(
        <div className = "topBar">
            <div className="brand">
                <img src={logo} className="plane"></img>
            </div>
            <div className="nav-hold">
                <h3 className='nav-items'></h3>
                <h3 className='nav-items'>Trips</h3>
                <h3 className='nav-items'>Support</h3>
                <h3 className='nav-items'>Login</h3>
            </div>
            
        </div>
    );
}

export default Navbar;