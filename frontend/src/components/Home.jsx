import hotel from './images/hotel.jpeg'
import hotel1 from './images/hotel1.jpeg'
import hotel2 from './images/hotel2.jpeg'
import './Home.css'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'


function Home(){
    return(
        <div className="home">
            
            <h1 className='motto'>Begin your next journey with us.</h1>
            <div className='deal-containers'>
                
                <div className="hotel-example">
                    <img src= {hotel} className = "hotelimg" alt='hotel'/>
                    <div className='lower-box'>
                        <div className='price-bar'>
                            <FontAwesomeIcon icon = {faLocationDot} className="pinicon" />
                            <p className='location'> San Juan</p>
                            <p className='hotel-name'>Wyndham Resort</p>
                        </div>
                    </div>

                </div>

                <div className='hotel-example'>
                    <img src= {hotel1} className = "hotelimg" alt='hotel'/>
                    <div className='lower-box'>
                        <div className='price-bar'>
                            <FontAwesomeIcon icon = {faLocationDot} className="pinicon" />
                            <p className='location'>Shanghai</p>
                            <p className='hotel-name'>Shangri-La Resort</p>
                        </div>
                    </div>
                </div>

                <div className='hotel-example'>
                    <img src= {hotel2} className = "hotelimg" alt='hotel'/>
                    <div className='lower-box'>
                        <div className='price-bar'>
                            <FontAwesomeIcon icon = {faLocationDot} className="pinicon" />
                            <p className='location'>Paris</p>
                            <p className='hotel-name'>Monsieur Helder</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>


    );
}

export default Home;