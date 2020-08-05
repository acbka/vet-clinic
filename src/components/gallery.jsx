import React from 'react'
import '../css/gallery.css'
import doct1 from '../img/doctor1.png'
import doct2 from '../img/doctor1.png'
import doct3 from '../img/doctor1.png'
import { GalleryItem } from './galleryitem'


export const Gallery = () => {
   
   const doctors = [
      {name: "John Smith", photo: doct1, title: "Doctor doctor"},
      {name: "Samantha Duglas", photo: doct2, title: "Doctor doctor"},
      {name: "Jane Star", photo: doct3, title: "Doctor doctor"}
   ]

   const list = doctors.map((item, index) => 
      <GalleryItem key={index} doctor={item} />
   )

   return (
      <div className="gallery" id="gallery">
         <div className="container">
            <h2 className="gallery-title">Our doctors</h2>
            <div className="gallery-row">
               {list}
            </div>
         </div>
      </div>
   )
}