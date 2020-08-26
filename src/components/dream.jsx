import React, {useState} from 'react'
import '../css/dream.css'
import dream from '../img/dream.png'

export const Dream = () => {

   const [data, setData] = useState([{specName: "", specId: 0}]);

   fetch('http://localhost:8081/specs', {
      method: 'GET', 
      type: 'opaque',
      mode: 'cors', 
      cache: 'no-cache', 
      headers: {
         'Content-Type': 'application/x-www-form-urlencoded', //'application/json'
         'Accept': '*/*',
      }, 
      credentials: 'omit'
   })
   .then(response => {
      return response.json();
   })
   .then(data => { 
      console.log("2222",data); // тут можно задать state
      setData(data);
      return data;
   });
  console.log("aaaa", data[0].SpecName)
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
