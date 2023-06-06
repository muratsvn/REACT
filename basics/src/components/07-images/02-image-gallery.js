import React from 'react'
import "./02-image-gallery.scss"
import images from "../../assets/data/images.json"

const ImageGallery = () => {
    console.log(images)

  return (
    <div className='image-gallery'>
        {
            images.map((image)=> 
                (<div key={image.title}>
                    <img src={require(`../../assets/img/${image.name}`)} 
                         alt={image.title}
                         title={image.title} />
                </div>))       
        }
        
    
    </div>
  )
}

export default ImageGallery