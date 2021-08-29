import React, { useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Link
  } from "react-router-dom";
import axios from 'axios';

function Login({setUser,findUser}) {


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [LoggedIn, setLoggedIn] = useState(false);

    const Login = (e) => {
        e.preventDefault();

        const data = {
            email:email,
            password:password,
        }
        console.log(data)

        axios.post('/login', data)
          .then( (response) => {
            localStorage.setItem('token' , response.data.token);
            setLoggedIn(true);

            setUser(response.data.user)
            findUser()

            console.log(setUser)
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
                            <form className="text-center" onSubmit={Login}>

                                <p className="h4 mb-4">Sign in</p>
                                {/* Email */}
                                <input type="email" name="email" className="form-control mb-4" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} />
                                {/* Password */}
                                <input type="password" name="password" className="form-control mb-4" placeholder="Password" required onChange={(e) => setPassword(e.target.value)}/>
                                <div className="d-flex justify-content-around">
                                
                                    <div>
                                    {/* Forgot password */}
                                    <Link to="/forget-password">Forgot password?</Link>
                                    </div>
                                </div>
                                {/* Sign in button */}
                                <button className="btn btn-info btn-block my-4" type="submit">Sign in</button>
                                {/* Register */}
                                <p>Not a member?
                                    <Link to="/register">Register</Link>
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

export default Login
