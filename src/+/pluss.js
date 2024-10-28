// Home
// Work
// VFX Demo Reel
// Resumé & Credits
// About Me
// Contact
import React, { useState } from 'react';

const ImageGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Képek kategóriák szerint
  const images = [
    { src: 'image1.jpg', categories: ['nature'] },
    { src: 'image2.jpg', categories: ['food', 'nature'] },
    { src: 'image3.jpg', categories: ['animals'] },
    { src: 'image4.jpg', categories: ['food', 'animals'] },
    // ... további képek
  ];

  // Kategóriák lekérése
  const categories = ['all', 'nature', 'food', 'animals'];

  // Kategória kiválasztása
  const selectCategory = (category) => {
    setSelectedCategory(category);
  };

  // Képek szűrése a kiválasztott kategória alapján
  const filteredImages = selectedCategory === 'all'
    ? images
    : images.filter((image) => image.categories.includes(selectedCategory));

  return (
    <div>
      <div>
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => selectCategory(category)}
            style={{
              fontWeight: selectedCategory === category ? 'bold' : 'normal',
            }}
          >
            {category}
          </button>
        ))}
      </div>
      <div>
        {filteredImages.map((image, index) => (
          <img key={index} src={image.src} alt={`Image ${index}`} />
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;