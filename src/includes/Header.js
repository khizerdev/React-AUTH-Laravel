import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from '../components/Home';
import Login from '../components/Login';
import Register from '../components/Register';
import Profile from '../components/Profile';
import ForgetPassword from './../components/ForgetPassword';
import axios from 'axios';

function Header() {

    const [user, setUser] = useState([])

    useEffect(() => {
        findUser();
    }, [])


    const findUser = () => {
        axios.get('/user')
          .then( (response) => {
              console.log(response.data)
            setUser(response.data)
          })
          .catch( (error) => {
            console.log(error)
          });
    }

    const makeUser = (user) => {
        setUser(user)
    }

  

    return (
        <div>
           <Router>
           <Navbar user={user} setUser={makeUser} findUser={findUser}/>
                <div>

                    {/* A <Switch> looks through its children <Route>s and
                        renders the first one that matches the current URL. */}
                    <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route exact path="/login" render={(props) => (
                        <Login  user={user} setUser={makeUser} />
                    )}/>
                    <Route exact path="/register" render={(props) => (
                        <Register  user={user} setUser={makeUser} />
                    )}/>
                    <Route exact path="/profile" render={(props) => (
                        <Profile  user={user} />
                    )}/>
                    <Route exact path="/forget-password" component={ForgetPassword}/>
               
                    </Switch>
                </div>
            </Router>
        </div>
    )
}

export default Header
