"use client";

import { useState } from "react";

interface DesignFilterProps {
  products: Array<{
    tags: string[];
    _id: string;
  }>;
}

export default function DesignFilter({ products }: DesignFilterProps) {
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Extract unique tags from all products
  const allTags = Array.from(new Set(products.flatMap((p) => p.tags)));

  const handleTagToggle = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="bg-white rounded-lg shadow-sm p-6 sticky top-20">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Filter by Design</h3>

      <div className="space-y-2">
        {allTags.map((tag) => (
          <label key={tag} className="flex items-center space-x-3 cursor-pointer">
            <input
              type="checkbox"
              checked={selectedTags.includes(tag)}
              onChange={() => handleTagToggle(tag)}
              className="w-4 h-4 text-emerald-700 rounded border-gray-300 focus:ring-emerald-500"
            />
            <span className="text-gray-700">{tag}</span>
          </label>
        ))}
      </div>

      {selectedTags.length > 0 && (
        <button
          onClick={() => setSelectedTags([])}
          className="mt-4 w-full text-sm text-emerald-700 hover:text-emerald-800 font-medium"
        >
          Clear Filters
        </button>
      )}
    </div>
  );
}
