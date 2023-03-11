import hotel from './images/hotel.jpeg'
import hotel1 from './images/hotel1.jpeg'
import hotel2 from './images/hotel2.jpeg'
import './Home.css'

function Home(){
    return(
        <div className="home">
            <h1 className='motto'>Begin your next journey with us.</h1>
            <div className='deal-containers'>
                
                <div className="hotel-example1">
                    <img src= {hotel} className = "hotelimg" alt='hotel'/>
                </div>

                <div className='hotel-example1'>
                    <img src= {hotel1} className = "hotelimg" alt='hotel'/>
                </div>

                <div className='hotel-example1'>
                    <img src= {hotel2} className = "hotelimg" alt='hotel'/>
                </div>

            </div>
        </div>


    );
}

export default Home;