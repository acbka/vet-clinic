import React, {useState, useEffect} from 'react'
import '../css/dream.css'
import dream from '../img/dream.png'


export const Dream = () => {


   const [error, setError] = useState(null);
   const [isLoaded, setIsLoaded] = useState(false);
   const [specName, setItems] = useState([]);
 
   // Примечание: пустой массив зависимостей [] означает, что
   // этот useEffect будет запущен один раз
   // аналогично componentDidMount()
   useEffect(() => {
     fetch("http://localhost:8081/specs")
       .then(res => res.json())
       .then(
         (result) => {
           setIsLoaded(true);
           setItems(result.specName);
         },
         // Примечание: Обрабатывать ошибки необходимо именно здесь
         // вместо блока catch(), чтобы не пропустить
         // исключения из реальных ошибок в компонентах.
         (error) => {
           setIsLoaded(true);
           setError(error);
         }
       )
   }, [])

   return (
      <div className="dream" id="dream">
         <div className="container">
            <div className="row">
               <div className="dream-img">
                  <img className="dream-photo" src={dream} alt="dream"/>
               </div>
               <div className="dream-info">
                  <h2>It all started with a dream!</h2>
               <p>{specName}</p>
               </div>
            </div>
            
         </div>
         
      </div>
   )
}
