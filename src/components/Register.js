import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Redirect,
    Route,
    Link
  } from "react-router-dom";
  import axios from 'axios';

function Register({setUser}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [LoggedIn, setLoggedIn] = useState(false);

    useEffect(() => {
        
    }, [])

    const Register = (e) => {
        e.preventDefault();

        const data = {
            name:name,
            email:email,
            password:password,
            password_confirmation:confirmPassword,
        }
        

        axios.post('/register', data)
          .then( (response) => {
            localStorage.setItem('token' , response.data.token);
            setLoggedIn(true);
            console.log(setLoggedIn)
            setUser(response.data.user)
          })
          .catch( (error) => {
            console.log(error);
          });
    }

    return (
        <div>

            {LoggedIn ? <Redirect to={'/profile'} /> : (
                <div className="container my-5 py-5 z-depth-1">
                {/*Section: Content*/}
                <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
                    {/*Grid row*/}
                    <div className="row d-flex justify-content-center">
                    {/*Grid column*/}
                        <div className="col-md-6">
                            {/* Default form login */}
                            <form className="text-center" onSubmit={Register}>
                                <p className="h4 mb-4">Sign Up</p>
                                {/* Email */}
                                <input type="text" name="name" className="form-control mb-4" placeholder="Username"  onChange={(e) => setName(e.target.value)} />
                                {/* Email */}
                                <input type="email" name="email" className="form-control mb-4" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)}/>
                                {/* Password */}
                                <input type="password" name="password" className="form-control mb-4" placeholder="Password" onChange={(e) => setPassword(e.target.value)}/>
                                {/* Password */}
                                <input type="password" name="password_confirmation" className="form-control mb-4" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />
                              
                                {/* Sign in button */}
                                <button className="btn btn-info btn-block my-4" type="submit">Sign Up</button>
                                {/* Register */}
                                <p>Already a member?
                                    <Link to="/login">Login</Link>
                                </p>
                               
                            </form>
                            {/* Default form login */}
                        </div>
                        {/*Grid column*/}
                    </div>
                    {/*Grid row*/}
                </section>
                {/*Section: Content*/}
                </div>
        
            )}
        </div>
       
    )
}

export default Register
