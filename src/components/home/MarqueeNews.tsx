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
    <div className="overflow-x-hidden  bg-sdmis-primary-100 py-2 w-full">
      <div className="animate-marquee whitespace-nowrap ">
        {newsItems.map((news, index) => (
          <span className="mx-2 text-base" key={index}> &#x2022; {news}  </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeNews;
