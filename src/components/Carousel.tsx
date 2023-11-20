import React from 'react';
import { Carousel, CarouselStylesType } from "@material-tailwind/react";
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/20/solid';
import Image from 'next/image';

const imageWidth = 1920;
const imageHeight = 1080;

const dynamicImageUrls = [
  "https://sdmis.dsrvsindia.ac.in/banner_images/c6e68e430e299aebcdfa4ffa42e45f92.jpg",
  "https://sdmis.dsrvsindia.ac.in/banner_images/bf4257bdc8a7e7e3f61a08435c8c9fad.jpg",
  "https://sdmis.dsrvsindia.ac.in/banner_images/8679beef9776e18e083829f38a35c27d.jpg",
];

const CarouselTransition = () => {
  // Your image data here

  return (
    <Carousel
      transition={{ duration: 2 }}
      className="text-black h-96"
      prevArrow={({ handlePrev, firstIndex }) => (
        <button
          onClick={handlePrev}
          disabled={firstIndex}
          className="absolute top-2/4 left-4 bg-black -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-sdmis-neutral-500 active:bg-black/30 grid place-items-center"
        >
          <ChevronLeftIcon strokeWidth={3} className="-ml-1 h-7 w-7" />
        </button>
      )}
      nextArrow={({ handleNext, lastIndex }) => (
        <button
          onClick={handleNext}
          disabled={lastIndex}
          className="absolute top-2/4 right-4 bg-black -translate-y-2/4 rounded-full select-none transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none w-12 max-w-[48px] h-12 max-h-[48px] text-white hover:bg-sdmis-neutral-500 active:bg-black/30 grid place-items-center"
        >
          <ChevronRightIcon strokeWidth={3} className="ml-1 h-7 w-7" />
        </button>
      )}
      navigation={({ setActiveIndex, activeIndex, length }) => (
        <div className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
          {new Array(length).fill("").map((_, i) => (
            <span
              key={i}
              className={`block h-3 w-3 cursor-pointer rounded-full transition-colors content-[''] ${
                activeIndex === i ? "bg-black" : " bg-sdmis-neutral-400"
              }`}
              onClick={() => setActiveIndex(i)}
            />
          ))}
        </div>
      )}
    >
      {dynamicImageUrls.map((imageUrl, index) => (
        <Image
          key={index}
          width={imageWidth}
          height={imageHeight}
          src={imageUrl}
          alt={`image ${index + 1}`}
          className="h-full w-full object-cover "
        />
      ))}
    </Carousel>
  );
};

export default CarouselTransition;
