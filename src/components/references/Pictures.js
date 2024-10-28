import React, { useState, useEffect } from 'react';


const ImageSlider = (props) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
   
    const images = props.data ?? [] ; // Képek tömbje

    useEffect(() => {
     
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
    
        return () => {
          clearInterval(interval);
        };
      }, [images.length]);
    
     
    return (
        <div style={{ position: 'relative' }}>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt="Slideshow"
            style={{
              position: 'absolute',
              top: '0',
              left: '0',
              height: '500px',
              opacity: index === currentImageIndex ? '1' : '0',
              transition: 'opacity 0.5s',
            }}
            
          />
        ))}
        
      </div>
    );
};

export default ImageSlider;
