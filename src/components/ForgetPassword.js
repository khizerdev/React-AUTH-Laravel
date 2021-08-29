import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";

function ForgetPassword() {
    return (
        <div className="container my-5 py-5 z-depth-1">
        {/*Section: Content*/}
        <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
            {/*Grid row*/}
            <div className="row d-flex justify-content-center">
            {/*Grid column*/}
                <div className="col-md-6">
                    {/* Default form login */}
                    <form className="text-center" action="#!">
                        <p className="h4 mb-4">Forget Password</p>
                        {/* Email */}
                        <input type="email" id="defaultLoginFormEmail" className="form-control mb-4" placeholder="E-mail" />
                       
                        {/* Sign in button */}
                        <button className="btn btn-info btn-block my-4" type="submit">Send Link</button>
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

    )
}

export default ForgetPassword
