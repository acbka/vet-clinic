import React from 'react'
//import {Button} from './button';
import '../css/nav.css'
import logo from '../img/domvet3.png'


export const Nav = () => {

   return (
      <nav className="nav">
         <div className="brand">
            <a href="#home"><img src={logo} alt="logo" /></a>
         </div>
      </nav>
   )
}
