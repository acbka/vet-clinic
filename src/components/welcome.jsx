import React from 'react'
import '../css/welcome.css'

export const Welcome = () => {


   return(
      <div className="welcome" id="welcome">
         <div className="container">
            <h2>Welcome</h2>
            <div className="wrap">
               <div className="map">
                  <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3192.4495345647215!2d174.7652699475355!3d-36.85565737164729!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6d0d47e67b801555%3A0x3039ad874ff3ec2a!2s85%20Airedale%20Street%2C%20Auckland%20CBD%2C%20Auckland%201010!5e0!3m2!1sru!2snz!4v1597706570685!5m2!1sru!2snz" width="600" height="450" frameBorder="0" title="map"></iframe>
               </div>
            <div className="hours">
               <p>We are open for you 24/7</p>
            </div>
            </div>
         </div>

      </div>
   )
}