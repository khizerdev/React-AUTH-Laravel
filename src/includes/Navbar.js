import React, { useEffect, useState} from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function Navbar(props) {

    const [loggedIn, setLoggedIn] = useState(false)

    useEffect(() => {
        if(localStorage.getItem('token')){
            // console.log(localStorage.getItem('token'))
            setLoggedIn(true)
        }
    }, [])

    const Logout = () => {
        localStorage.clear();
        setLoggedIn(false);
        props.setUser(null);
    }

    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
            <Link className="navbar-brand" to="/">React Auth</Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                <Link className="nav-link" to="/">Home</Link>
                </li>
                
                { loggedIn ? (<li className="nav-item">
                    <Link className="nav-link" to="/profile">Profile</Link>
                </li>) :  '' 
            
                    }
                </ul>
                <span className="navbar-text">
                    <ul className="navbar-nav ml-auto">
                    { loggedIn ? (<span><li className="nav-item">
                    <a className="nav-link" onClick={Logout}>Logout</a>
                    </li></span>) : (<span><li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/register">Register</Link>
                    </li></span>)
               
                    
            
                    }
                    
                    </ul>
                </span>
            </div>
        </nav>

    )
}

export default Navbar
