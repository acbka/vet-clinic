import React, {useState, useEffect} from 'react'
import '../css/dream.css'
import dream from '../img/dream.png'
import {getData} from '../api/connect'

export const Dream = () => {

   const [data, setData] = useState([{specName: "", specId: 0}]);

   useEffect(() => {
      getData().then(data => setData(data))
   })

  
 
   return (
      <div className="dream" id="dream">
         <div className="container">
            <div className="row">
               <div className="dream-img">
                  <img className="dream-photo" src={dream} alt="dream"/>
               </div>
               <div className="dream-info">
                  <h2>Dreams!</h2>
                  <p>{data[0].SpecName}</p>
               </div>
            </div>
         </div>
      </div>
   )
}
