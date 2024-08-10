import React from 'react';

const Photo = () => {
  const importAll = (r) => r.keys().map(r);
  const images = importAll(require.context('../../public/images/film_pics', false, /\.(png|jpe?g|svg)$/));

  return (
    <div className="lg:mx-auto lg:w-1/2">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-4">
          {images.map((image, index) => (
            <div key={index} className="bg-white shadow-md">
              <img
                src={image}
                alt=''
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Photo;