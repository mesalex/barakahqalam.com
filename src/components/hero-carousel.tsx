'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

const slides = [
  {
    title: "99 Names of Allah",
    subtitle: "A beautiful collection of Islamic calligraphy coloring pages featuring the 99 Names of Allah.",
    image: "/carousel/3.png",
    cta: "Explore the Book",
    link: "/books/99-names-of-allah"
  },
  {
    title: "Islamic Geometric Patterns",
    subtitle: "Master the art of Islamic geometric design with these intricate coloring pages.",
    image: "/carousel/009.png",
    cta: "Explore the Book",
    link: "/books/islamic-geometric-patterns"
  },
  {
    title: "Arabic Calligraphy Basics",
    subtitle: "Learn the fundamentals of Arabic calligraphy with beginner-friendly coloring exercises.",
    image: "/carousel/011.png",
    cta: "Explore the Book",
    link: "/books/arabic-calligraphy-basics"
  },
  {
    title: "Mosque Architecture",
    subtitle: "Explore stunning mosque designs from around the world with detailed coloring pages.",
    image: "/carousel/16.png",
    cta: "Explore the Book",
    link: "/books/mosque-architecture"
  },
  {
    title: "Prophetic Stories",
    subtitle: "Beautiful illustrations of beloved Islamic stories with educational coloring pages.",
    image: "/carousel/009.png",
    cta: "Explore the Book",
    link: "/books/prophetic-stories"
  }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => setCurrentSlide((prev) => (prev + 1) % slides.length);
  const prevSlide = () => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-amber-50 via-white to-amber-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 md:py-14 lg:py-20">
        {/* Slides container */}
        <div className="relative" style={{ minHeight: '340px' }}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-10 lg:gap-16 transition-all duration-700 ease-in-out ${
                index === currentSlide
                  ? 'opacity-100 translate-x-0 z-10'
                  : index < currentSlide
                  ? 'opacity-0 -translate-x-12 z-0'
                  : 'opacity-0 translate-x-12 z-0'
              }`}
            >
              {/* Image — clickable, links to book page */}
              <Link
                href={slide.link}
                className="w-full md:w-2/5 lg:w-[42%] flex-shrink-0 flex items-center justify-center group"
              >
                <div className="relative w-40 h-52 sm:w-52 sm:h-64 md:w-72 md:h-88 lg:w-80 lg:h-[420px] rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-amber-100 to-amber-200 dark:from-gray-700 dark:to-gray-800 group-hover:shadow-amber-500/30 group-hover:scale-[1.02] transition-all duration-300">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-contain"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white bg-amber-500/90 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-semibold">
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>

              {/* Text */}
              <div className="w-full md:w-3/5 lg:w-[58%] text-center md:text-left px-2 sm:px-0">
                <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-2 sm:mb-4 leading-tight">
                  {slide.title}
                </h1>
                <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-300 mb-4 sm:mb-6 lg:mb-8 max-w-lg md:max-w-none">
                  {slide.subtitle}
                </p>
                <Link
                  href={slide.link}
                  className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 sm:px-8 rounded-xl text-sm sm:text-base transition-all transform hover:scale-105 hover:shadow-lg hover:shadow-amber-500/25"
                >
                  {slide.cta}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Nav buttons — vertically centered on the image area */}
        <button
          onClick={prevSlide}
          className="absolute left-1 sm:left-3 top-[45%] sm:top-[40%] -translate-y-1/2 bg-white/95 hover:bg-white dark:bg-gray-800/95 dark:hover:bg-gray-700 p-2 sm:p-3 rounded-full shadow-lg transition-all z-20 hover:scale-110"
          aria-label="Previous slide"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-1 sm:right-3 top-[45%] sm:top-[40%] -translate-y-1/2 bg-white/95 hover:bg-white dark:bg-gray-800/95 dark:hover:bg-gray-700 p-2 sm:p-3 rounded-full shadow-lg transition-all z-20 hover:scale-110"
          aria-label="Next slide"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6 sm:mt-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-amber-500 w-8'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
