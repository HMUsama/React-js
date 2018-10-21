import React from 'react';
// import App from '../App';
import Dashbord from '../screens/dashbord/Dashbord';
import Profile from '../screens/profile/Profile';
// import Maps from '../screens/maps/Maps';
// import Login from '../screens/login/Login';

import Navbar from './Navbar';
// import { BrowserRouter as Router,Route } from 'react-router-dom';
import {Router,Route } from 'react-router-dom';
import CreateBrowserHistory from 'history/createBrowserHistory';

const CustomeHistory = CreateBrowserHistory();


const CustumeRoutes =()=>(
    <Router history={CustomeHistory}>
        <div>
            <Navbar/>
            <Route exact path='/dashbord' component={Dashbord}/>
             <Route exact path='/profile' component={Profile}/>
           {/* <Route exact path='/maps' component={Maps}/>
            <Route exact path='/login' component={Login}/> */}
        </div>
    </Router>
)

export default CustumeRoutes;
