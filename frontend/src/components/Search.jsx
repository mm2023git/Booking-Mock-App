import "./css/Search.css"
import { useState } from 'react'

function Search(){
    const [price, setPrice] = useState("");
    const [adults, setAdults] = useState("");
    const [children, setChildren] = useState("");


    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    };


    const handleAdultsChange = (event) =>{
        setAdults(event.target.value)
    }

    
    const handleChildrenChange = (event) =>{
        setChildren(event.target.value)
    }

    return(
        <div className="search-container">
            <div className="sidebar">
                <p className="sidebar-text">Filter By:</p>
                <div className="price-slider">
                    <p className="sidebar-label">Price per night:</p>
                    <p className="micro-label">{price}$</p>
                    <input type="range" min="0" max="1000" step="100" value={price} className="price-slider" id="myRange" onChange={handlePriceChange} />       
                </div>
                <div className="guest-slider">
                    <p className="sidebar-label">Travellers:</p>
                    <p className="micro-label travellers">Adults: {adults}</p>
                    <input type="range" min="0" max="10" value={adults} className="price-slider" id="myRange" onChange={handleAdultsChange} />
                    <p className="micro-label travellers">Children {children}</p>
                    <input type="range" min="0" max="10" value={children} className="price-slider" id="myRange" onChange={handleChildrenChange} />
                </div>
            </div>
        </div>
    );



}

export default Search;