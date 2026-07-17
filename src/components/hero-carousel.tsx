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
    <div className="relative w-full overflow-hidden bg-gradient-to-br from-amber-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="relative max-w-6xl mx-auto px-4 py-8 sm:py-12 md:py-16">
        {/* Slides container with fixed aspect ratio for stability */}
        <div className="relative" style={{ minHeight: '380px' }}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col md:flex-row items-center gap-6 md:gap-12 transition-all duration-700 ease-in-out ${
                index === currentSlide
                  ? 'opacity-100 translate-x-0 z-10'
                  : index < currentSlide
                  ? 'opacity-0 -translate-x-8 z-0'
                  : 'opacity-0 translate-x-8 z-0'
              }`}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 flex-shrink-0 flex items-center justify-center">
                <div className="w-48 h-64 sm:w-56 sm:h-72 md:w-64 md:h-80 rounded-xl overflow-hidden shadow-2xl bg-gradient-to-br from-amber-100 to-amber-200 dark:from-gray-700 dark:to-gray-800">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-contain"
                  />
                </div>
              </div>

              {/* Text */}
              <div className="w-full md:w-1/2 text-center md:text-left px-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 dark:text-gray-100 mb-3">
                  {slide.title}
                </h1>
                <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-md">
                  {slide.subtitle}
                </p>
                <Link
                  href={slide.link}
                  className="inline-block bg-amber-500 hover:bg-amber-600 text-white font-semibold py-3 px-6 rounded-lg text-base transition-all transform hover:scale-105"
                >
                  {slide.cta}
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Buttons — positioned relative to the section, not absolute slides */}
        <button
          onClick={prevSlide}
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-700 p-2 sm:p-3 rounded-full shadow-lg transition-all z-20"
          aria-label="Previous slide"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white dark:bg-gray-800/90 dark:hover:bg-gray-700 p-2 sm:p-3 rounded-full shadow-lg transition-all z-20"
          aria-label="Next slide"
        >
          <svg className="w-5 h-5 sm:w-6 sm:h-6 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>

        {/* Indicators */}
        <div className="flex justify-center gap-2 mt-6">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === currentSlide
                  ? 'bg-amber-500 w-6'
                  : 'bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 w-2'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
