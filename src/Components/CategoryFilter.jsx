import React from 'react';
import { FiGrid } from 'react-icons/fi';

const categories = [
  { id: 'general', name: 'General' },
  { id: 'business', name: 'Business' },
  { id: 'technology', name: 'Technology' },
  { id: 'sports', name: 'Sports' },
  { id: 'entertainment', name: 'Entertainment' },
  { id: 'health', name: 'Health' },
  { id: 'science', name: 'Science' }
];

const CategoryFilter = ({ activeCategory, onCategoryChange }) => {
  return (
    <div className="bg-white dark:bg-gray-900 shadow-sm transition-colors duration-200">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center space-x-2 overflow-x-auto pb-2 scrollbar-hide">
          <FiGrid className="w-5 h-5 text-gray-600 dark:text-gray-400" />
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => onCategoryChange(category.id)}
              className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 ${
                activeCategory === category.id
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700'
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CategoryFilter; 