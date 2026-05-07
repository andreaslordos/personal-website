import React, { useState, useEffect } from 'react';
import Page from '../components/Page';

const Home = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = "/images/face2.png";
    img.onload = () => setImageLoaded(true);
  }, []);

  return (
    <Page>
      <div
        className="w-full max-w-96 mx-auto mb-14 opacity-0 animate-fade-up"
        style={{ animationDelay: '0.15s' }}
      >
        <div className="relative" style={{ paddingBottom: '75%' }}>
          {imageLoaded ? (
            <img
              src="/images/face2.png"
              alt="Andreas Lordos"
              className="absolute inset-0 w-full h-full object-contain animate-float-slow transition-transform duration-500 ease-out hover:scale-[1.025]"
            />
          ) : (
            <div className="absolute inset-0 w-full h-full bg-neutral-200/60 animate-pulse" />
          )}
        </div>
      </div>

      <p className="mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.45s' }}>
        Working on applying AI to transform American service industries.
      </p>
      <p className="mb-6 opacity-0 animate-fade-up" style={{ animationDelay: '0.6s' }}>
        Previously, I built enterprise software at Zip, iOS products at Meta, and loyalty systems at Alphamega. I grew up in Cyprus and studied CS and Economics at Harvard.
      </p>
      <p className="opacity-0 animate-fade-up" style={{ animationDelay: '0.75s' }}>
        I also discovered <a href="https://www.minorplanetcenter.net/db_search/show_object?utf8=%E2%9C%93&object_id=2018+PG3" target="_blank" rel="noreferrer">this asteroid</a>.
      </p>
    </Page>
  );
};

export default Home;
