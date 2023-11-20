import React from 'react';

const MarqueeNews = () => {
  const newsItems = [
    'Breaking News: Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    'New Study Reveals Surprising Results About Sleep Patterns.',
    'Tech Giants Announce Collaboration on Environmental Initiatives.',
    'Sports Update: Exciting Matches Lined Up for the Weekend.',
    'Entertainment News: Blockbuster Movie Hits Theaters Tomorrow.',
  ];

  // Duplicate the news items to create a seamless loop
  const duplicatedNewsItems = [...newsItems, ...newsItems];

  return (
    <div className="overflow-hidden border border-sdmis-primary-600 py-4 w-screen bg-sdmis-primary-100">
      <div className="whitespace-nowrap animate-marquee">
        {duplicatedNewsItems.map((news, index) => (
          <span key={index}>| {news} | </span>
        ))}
      </div>
    </div>
  );
};

export default MarqueeNews;
