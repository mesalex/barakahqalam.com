"use client";

import { notFound } from "next/navigation";
import { useState } from "react";
import ProductGrid from "@/components/products/ProductGrid";
import DesignFilter from "./components/DesignFilter";

// Mock data - will be replaced with Sanity CMS
const mockProducts = [
  {
    _id: "1",
    title: "Islamic Geometric Pattern T-Shirt",
    displayImage: {
      url: "/images/apparel/islamic-geometric.jpg",
    },
    category: "apparel",
    tags: ["geometric", "islamic", "minimalist"],
    amazonMerchLink: "https://amazon.com/dp/example1",
    gumroadLink: "https://gumroad.com/example1",
  },
  {
    _id: "2",
    title: "Arabic Calligraphy Hoodie",
    displayImage: {
      url: "/images/apparel/arabic-calligraphy.jpg",
    },
    category: "apparel",
    tags: ["calligraphy", "arabic", "minimalist"],
    amazonMerchLink: "https://amazon.com/dp/example2",
  },
  {
    _id: "3",
    title: "Minimalist Crescent Moon Tee",
    displayImage: {
      url: "/images/apparel/crescent-moon.jpg",
    },
    category: "apparel",
    tags: ["minimalist", "moon", "symbolic"],
    amazonMerchLink: "https://amazon.com/dp/example3",
  },
  {
    _id: "4",
    title: "Geometric Flower Mandala Shirt",
    displayImage: {
      url: "/images/apparel/geometric-flower.jpg",
    },
    category: "apparel",
    tags: ["geometric", "flower", "mandala"],
    amazonMerchLink: "https://amazon.com/dp/example4",
  },
  {
    _id: "5",
    title: "Islamic Star Pattern Hoodie",
    displayImage: {
      url: "/images/apparel/islamic-star.jpg",
    },
    category: "apparel",
    tags: ["geometric", "islamic", "star"],
    amazonMerchLink: "https://amazon.com/dp/example5",
  },
  {
    _id: "6",
    title: "Arabic Blessing Typography",
    displayImage: {
      url: "/images/apparel/arabic-blessing.jpg",
    },
    category: "apparel",
    tags: ["calligraphy", "arabic", "typography"],
    amazonMerchLink: "https://amazon.com/dp/example6",
  },
  {
    _id: "7",
    title: "Islamic Archway Design Tee",
    displayImage: {
      url: "/images/apparel/islamic-archway.jpg",
    },
    category: "apparel",
    tags: ["geometric", "islamic", "arch"],
    amazonMerchLink: "https://amazon.com/dp/example7",
  },
  {
    _id: "8",
    title: "Minimalist Dove Peace Shirt",
    displayImage: {
      url: "/images/apparel/dove-peace.jpg",
    },
    category: "apparel",
    tags: ["minimalist", "dove", "peace"],
    amazonMerchLink: "https://amazon.com/dp/example8",
  },
];

export default function ApparelPage() {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Filter products by selected tags
  const filteredProducts =
    selectedTags.length === 0
      ? mockProducts
      : mockProducts.filter((product) =>
          selectedTags.some((tag) => product.tags.includes(tag))
        );

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Apparel Collection
          </h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Explore our premium collection of minimalist Islamic designs on apparel
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filter Sidebar */}
          <aside className="lg:w-64 flex-shrink-0">
            <DesignFilter
              products={mockProducts}
            />
          </aside>

          {/* Products Grid */}
          <main className="flex-1">
            {filteredProducts.length === 0 ? (
              <div className="text-center py-12">
                <p className="text-gray-500 text-lg">
                  No products found matching your filters
                </p>
              </div>
            ) : (
              <ProductGrid products={filteredProducts} />
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
