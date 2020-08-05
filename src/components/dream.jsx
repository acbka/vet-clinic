import React from 'react'
import '../css/dream.css'
import dream from '../img/dream.png'
import pets from '../img/pet2.png'

export const Dream = () => {

   return (
      <div className="dream" id="dream">
         <div className="container">
            <div className="row">
               <div className="dream-img">
                  <img className="dream-photo" src={dream} alt="dream"/>
               </div>
               <div className="dream-info">
                  <h2>It all started with a dream!</h2>

               </div>
            </div>
            
         </div>
         
      </div>
   )
}
