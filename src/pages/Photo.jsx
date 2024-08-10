import React, { useState, useEffect } from 'react';

const Photo = () => {
  const [loadedImages, setLoadedImages] = useState([]);
  const importAll = (r) => r.keys().map(r);
  const images = importAll(require.context('../../public/images/film_pics', false, /\.(png|jpe?g|svg)$/));

  useEffect(() => {
    const loadImage = (image) => {
      return new Promise((resolve, reject) => {
        const loadImg = new Image();
        loadImg.src = image;
        loadImg.onload = () => resolve(image);
        loadImg.onerror = err => reject(err);
      });
    };

    Promise.all(images.map(image => loadImage(image)))
      .then(setLoadedImages)
      .catch(err => console.log("Failed to load images", err));
  }, [images]);

  return (
    <div className="lg:mx-auto lg:w-1/2">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-4">
          {images.map((image, index) => (
            <div key={index} className="bg-white shadow-md relative" style={{ paddingBottom: '75%' }}>
              {loadedImages.includes(image) ? (
                <img
                  src={image}
                  alt=''
                  className="absolute top-0 left-0 w-full h-full object-cover"
                />
              ) : (
                <div className="absolute top-0 left-0 w-full h-full bg-gray-200 animate-pulse"></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photo;