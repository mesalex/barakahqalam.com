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

const featuredSlides = slides.slice(0, 3);

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

      {/* ===== MOBILE: Carousel (one square slide) ===== */}
      <div className="relative md:hidden max-w-6xl mx-auto px-4 sm:px-6 py-6 sm:py-10">
        <div className="relative" style={{ minHeight: '380px' }}>
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute inset-0 flex flex-col items-center gap-4 sm:gap-6 transition-all duration-700 ease-in-out ${
                index === currentSlide
                  ? 'opacity-100 translate-x-0 z-10'
                  : index < currentSlide
                  ? 'opacity-0 -translate-x-12 z-0'
                  : 'opacity-0 translate-x-12 z-0'
              }`}
            >
              <Link
                href={slide.link}
                className="w-full flex items-center justify-center group"
              >
                <div className="relative w-full max-w-[320px] aspect-square rounded-2xl overflow-hidden shadow-2xl bg-gradient-to-br from-amber-100 to-amber-200 dark:from-gray-700 dark:to-gray-800 group-hover:shadow-amber-500/30 group-hover:scale-[1.02] transition-all duration-300">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-full object-contain"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
                    <span className="text-white bg-amber-500/90 px-4 py-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-sm font-semibold">
                      View Details →
                    </span>
                  </div>
                </div>
              </Link>

              <div className="w-full text-center px-2">
                <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-gray-100 leading-tight">
                  {slide.title}
                </h1>
              </div>
            </div>
          ))}
        </div>

        {/* Nav buttons */}
        <button
          onClick={prevSlide}
          className="absolute left-1 sm:left-3 top-[35%] -translate-y-1/2 bg-white/95 hover:bg-white dark:bg-gray-800/95 dark:hover:bg-gray-700 p-2 sm:p-3 rounded-full shadow-lg transition-all z-20 hover:scale-110"
          aria-label="Previous slide"
        >
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-700 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-1 sm:right-3 top-[35%] -translate-y-1/2 bg-white/95 hover:bg-white dark:bg-gray-800/95 dark:hover:bg-gray-700 p-2 sm:p-3 rounded-full shadow-lg transition-all z-20 hover:scale-110"
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

      {/* ===== DESKTOP: 3-column featured grid ===== */}
      <div className="hidden md:block max-w-6xl mx-auto px-6 lg:px-8 py-12 md:py-16 lg:py-20">
        <div className="text-center mb-10">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 dark:text-gray-100 mb-3">
            Featured Books
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Beautiful Islamic coloring books for relaxation, learning, and spiritual reflection
          </p>
        </div>

        <div className="grid grid-cols-3 gap-6 lg:gap-8">
          {featuredSlides.map((slide) => (
            <Link
              key={slide.link}
              href={slide.link}
              className="group flex flex-col items-center text-center bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-md hover:shadow-xl hover:shadow-amber-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-full aspect-square max-w-[280px] rounded-xl overflow-hidden bg-gradient-to-br from-amber-100 to-amber-200 dark:from-gray-700 dark:to-gray-800 mb-5 group-hover:shadow-lg transition-shadow">
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2 group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors">
                {slide.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">
                {slide.subtitle}
              </p>
              <span className="inline-flex items-center gap-2 bg-amber-500 hover:bg-amber-600 text-white font-semibold py-2.5 px-6 rounded-lg text-sm transition-all">
                {slide.cta}
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </div>

    </div>
  );
}
