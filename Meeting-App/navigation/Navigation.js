import React from 'react';
import './Navbar.css';


import { Link} from 'react-router-dom';

const Navbar=()=>(
    <header >
    {/* <ul className="App-header"> */}
    <ul className="menu cf">
        <li className="list">
            <Link to='/dashbord'>Dashbord</Link>
            </li>
         <li className="list1">
            <Link to='/profile'>Profile</Link>
            </li>
      {/*  <li className="list2">
            <Link to='/maps'>Maps</Link>
            </li>
        <li className="list3">
            <Link to='/login'>Login</Link>
        </li> */}
        </ul>
    {/* </ul> */}
    </header>

)
export default Navbar;
