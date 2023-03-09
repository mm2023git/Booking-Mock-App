import './Navbar.css'


function Navbar(){


    return(
        <div className = "topBar">
            <div className="brand">
                <h1>BookingBuddy</h1>
            </div>
            <div className="nav-hold">
                <h3 className='nav-items'></h3>
                <h3 className='nav-items'>Trips</h3>
                <h3 className='nav-items'>Login</h3>
            </div>
        </div>
    );
}

export default Navbar;