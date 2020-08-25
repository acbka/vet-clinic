import React from 'react'
import '../css/galleryitem.css'


export const GalleryItem = ({doctor}) => {


   return (
      <div className="card">
         <div className="gallery-img">
            <img className="doctor-photo" src={doctor.photo} alt={doctor.name}/>
         </div>
         <div className="gallery-info">
            <h3 className="card-title">{doctor.name}</h3>
            <p>{doctor.title}</p>
         </div>

      </div>
   )
}