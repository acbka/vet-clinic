import React from 'react'
import '../css/gallery.css'

import { GalleryItem } from './galleryitem'
import {doctors} from './doctors'

export const Gallery = () => {
   
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