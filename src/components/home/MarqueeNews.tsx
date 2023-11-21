import React from 'react';

const MarqueeNews = () => {
  const newsItems = [
    'Breaking News: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Breaking News: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Breaking News: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Breaking News: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Breaking News: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Breaking News: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'Breaking News: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',

  ];

  // Duplicate the news items to create a seamless loop
  const duplicatedNewsItems = [...newsItems, ...newsItems];

  return (
    <div className="overflow-hidden border border-sdmis-primary-600 py-4 bg-sdmis-primary-100">
      <div className="whitespace-nowrap animate-marquee">
        {duplicatedNewsItems.map((news, index) => (
          <span key={index}> &#x2022; {news}  </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeNews;
