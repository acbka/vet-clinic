import React from 'react'
import '../css/sidemenu.css'
import {SideMenuItem} from './sidemenuitem'
import sm1 from '../img/cm1.png'
import sm2 from '../img/cm2.png'
import sm3 from '../img/cm3.png'
import sm4 from '../img/cm4.png'

export const SideMenu = () => {

   const sideMenu = [
      {img: sm1, text: "Clinic", alt: "clinic"}, 
      {img: sm2, text: "Hotel", alt: "hotel"}, 
      {img: sm3, text: "Beauty salon", alt: "salon"}, 
      {img: sm4, text: "Ambulance", alt: "ambulance"}
   ]
   
   const list = sideMenu.map((item, index) =>
      <SideMenuItem key={index} item={item} />
   );

   return (
      <div className="sidemenu">
         {list}
      </div>
   )
}
