import {FontAwesomeIcon} from "@fortawesome/react-fontawesome"
import { faUser } from '@fortawesome/free-solid-svg-icons'
import {Link, useNavigate} from "react-router-dom"
import { useState } from 'react'
import './css/Login.css'

function Login(){

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    
    const handleSubmit = async (event) => {
        event.preventDefault();
    
        try {
            const response = await fetch("http://localhost:5000/submit-seach-term", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
        
            if (!response.ok) {
                throw new Error("Failed to submit search term");
            }
        
            const data = await response.json();
            console.log(data); // do something with the response data
            navigate("/"); // redirect to login page
        } catch (error) {
            console.error(error);
        }


        
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    };


    return(
        <div className="parent-login">
            <div className="login-block">
                <form onSubmit= {handleSubmit} className='login-form'>
                    <h1 className="header">Login</h1>
                    <div className="inside-block">
                        <div className="block-rows">
                            <p className="label-text">Email</p>
                            <input type="text" placeholder="Email" className="text-input" 
                                value={email} onChange={handleEmailChange}/>
                        </div>
                        <div className="block-rows">
                            <p className="label-text">Password</p>
                            <input type="text" placeholder="Password" className="text-input" 
                                value={password} onChange={handlePasswordChange}/>
                        </div>
                        <div className="block-rows1">
                            <input type="checkbox" placeholder="" className="text-input" 
                                value={password} onChange={handlePasswordChange}/>
                            <p className="label-text">Remember me</p>
                            <button onClick={SubmitEvent} className="login-button">Login</button>
                        </div>
                    </div>
                </form>      
            </div>
            <Link to="/register"><p className="register-link">Need an account? Signup here.</p></Link>
        </div>
    );
}

export default Login;