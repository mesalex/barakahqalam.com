'use client';

import { useState, useEffect } from 'react';

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    {
      title: "99 Names of Allah",
      subtitle: "A beautiful collection of Islamic calligraphy coloring pages featuring the 99 Names of Allah.",
      image: "/carousel/3.png",
      cta: "View Book",
      link: "#"
    },
    {
      title: "Islamic Geometric Patterns",
      subtitle: "Master the art of Islamic geometric design with these intricate coloring pages.",
      image: "/carousel/009.png",
      cta: "View Book",
      link: "#"
    },
    {
      title: "Arabic Calligraphy Basics",
      subtitle: "Learn the fundamentals of Arabic calligraphy with beginner-friendly coloring exercises.",
      image: "/carousel/011.png",
      cta: "View Book",
      link: "#"
    },
    {
      title: "Mosque Architecture",
      subtitle: "Explore stunning mosque designs from around the world with detailed coloring pages.",
      image: "/carousel/16.png",
      cta: "View Book",
      link: "#"
    },
    {
      title: "Prophetic Stories",
      subtitle: "Beautiful illustrations of beloved Islamic stories with educational coloring pages.",
      image: "/carousel/009.png",
      cta: "View Book",
      link: "#"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-amber-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="relative max-w-5xl mx-auto px-4">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          >
            <div className="relative h-full flex flex-col items-center justify-center">
              <img
                src={slide.image}
                alt={slide.title}
                className="w-full h-auto max-h-[50vh] object-contain mb-6 rounded-lg shadow-2xl"
              />
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-4 text-center">
                {slide.title}
              </h1>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto text-center">
                {slide.subtitle}
              </p>
              <a
                href={slide.link}
                className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-8 rounded-lg text-lg transition-all transform hover:scale-105"
              >
                {slide.cta}
              </a>
            </div>
          </div>
        ))}

        {/* Navigation Buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-0 md:left-4 top-1/2 transform -translate-y-1/2 -translate-x-1/2 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-700 p-3 rounded-full shadow-lg transition-all z-50"
          aria-label="Previous slide"
        >
          <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-0 md:right-4 top-1/2 transform -translate-y-1/2 translate-x-1/2 bg-white/80 hover:bg-white dark:bg-gray-800/80 dark:hover:bg-gray-700 p-3 rounded-full shadow-lg transition-all z-50"
          aria-label="Next slide"
        >
          <svg className="w-6 h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 z-50">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-2 h-2 rounded-full transition-all ${
                index === currentSlide
                  ? 'bg-amber-500 w-6'
                  : 'bg-gray-400 hover:bg-gray-500'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}