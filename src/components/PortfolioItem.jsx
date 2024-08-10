import React from 'react';

const PortfolioItem = ({ title, url, description }) => {
  return (
    <div className="portfolio-item mb-6">
      <h2 className="text-xl font-bold mb-2">
        {url && url !== "" ? (
          <a href={url} target="_blank" rel="noopener noreferrer">
            {title}
          </a>
        ) : (
          <span>{title}</span>
        )}
      </h2>
      <p className="italic text-gray-600">{description}</p>
    </div>
  );
};

export default PortfolioItem;