import React from 'react';

const parseMarkdownLinks = (text) => {
  const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = linkRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      parts.push(text.slice(lastIndex, match.index));
    }
    parts.push(
      <a key={match.index} href={match[2]} target="_blank" rel="noopener noreferrer" className="underline">
        {match[1]}
      </a>
    );
    lastIndex = match.index + match[0].length;
  }

  if (lastIndex < text.length) {
    parts.push(text.slice(lastIndex));
  }

  return parts.length > 0 ? parts : text;
};

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
      <p className="italic text-gray-600">{parseMarkdownLinks(description)}</p>
      <hr className="my-6 border-t border-gray-300" />
    </div>
  );
};

export default PortfolioItem;