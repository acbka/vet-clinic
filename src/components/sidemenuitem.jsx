import React from 'react'
import '../css/sidemenuitem.css'

export const SideMenuItem = ({item}) => {

   return (
      <div className="sidemenu-item">
         <a className="sidemenu-link" href="#menu">
            <div className="box">
               <img className="sidemenu-img" src={item.img} alt={item.alt} />
            </div>
            <p className="sidemenu-text">{item.text}</p>
         </a>
      </div>
   )
}
