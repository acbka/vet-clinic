import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import {Nav} from './nav'
//import {Button} from './button';
import '../css/header.css'
import paw from '../img/paw.png'
import overlay from '../img/overlay.png'


export const Header = () => {

   return (
      <div className="header" id="home">
         <div className="top">
            <p>
               Operating mode: 24/7
            </p>
            <p>
               <FontAwesomeIcon icon={faPhoneAlt} />
               +38(044)-229-39-39 (г. Киев, ул. Братиславская, 14-Б)
            </p>
         </div>
         <Nav />
         <div className="title">
            <h1>Modern hospital</h1>
            <img className="paw" src={paw} alt="paw" />
            <p className="subtitle">Welcome to the Domvet veterinary center. We have a veterinarian clinic, a day and round-a-clock hospital,  and a modern laboratory. Your pet will always be provided with qualified assistance.</p>
         </div>
         <img className="header-bottom" src={overlay} alt="overlay" />
      </div>
   )
}
