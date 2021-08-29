import React, { useEffect, useState } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Redirect,
    Link
  } from "react-router-dom";

function Profile(props) {

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [loggedIn, setLoggedIn] = useState(true)

    useEffect(() => {
        if(localStorage.getItem('token')){
            setLoggedIn(true)
        }
        getUserDetail()
    }, [])

    const getUserDetail = () => {
        if(props){
            setName(props.user.name)
            setEmail(props.user.email)
            
        }
    }

    return (
        <div>
            { loggedIn ? ( <div className="container my-5 py-5 z-depth-1">
            {/*Section: Content*/}
            <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
                {/*Grid row*/}
                <div className="row d-flex justify-content-center">
                {/*Grid column*/}
                    <div className="col-md-6">
            
                            <p className="h4 mb-4">Profile</p>
                            
                            <ul class="list-group">
                                <li class="list-group-item">Name : {name}</li>
                                <li class="list-group-item">Email : {email}</li>
                            </ul>
                        
                    
            
                    </div>
                    {/*Grid column*/}
                </div>
                {/*Grid row*/}
            </section>
            {/*Section: Content*/}
            </div>
            )  :  ( <div className="container my-5 py-5 z-depth-1">
            {/*Section: Content*/}
            <section className="px-md-5 mx-md-5 text-center text-lg-left dark-grey-text">
                {/*Grid row*/}
                <div className="row d-flex justify-content-center">
                {/*Grid column*/}
                    <div className="col-md-6">
            
                            <p className="h4 mb-4">Profile</p>
                            
                            <ul class="list-group">
                                <li class="list-group-item">Name : {name}</li>
                                <li class="list-group-item">Email : {email}</li>
                            </ul>
                        
                    
            
                    </div>
                    {/*Grid column*/}
                </div>
                {/*Grid row*/}
            </section>
            {/*Section: Content*/}
            </div>
            ) }
        </div>


    )
}

export default Profile
