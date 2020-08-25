import React from 'react'
import '../css/footer.css'

export const Footer = () => {
   
   const currentYear = new Date().getFullYear();

   return(
      <div className="footer" id="footer">
         <div className="container-footer">
            <div className="footer-address">
               <p>85 Airedale Str</p>
               <p>Auckland</p>
            </div>
            <div className="copyright">
               Copyright {currentYear} <small>&copy;</small>  DomVet
            </div>
         </div>
      </div>
   )
}