import React from 'react';
import { FiClock, FiExternalLink } from 'react-icons/fi';

const NewsCard = ({ article }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        return date.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    return (
        <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-colors duration-200 hover:shadow-lg">
            <div className="relative aspect-video">
                <img
                    src={article.urlToImage || 'https://via.placeholder.com/400x225?text=No+Image'}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/400x225?text=No+Image';
                    }}
                />
                {article.source && (
                    <span className="absolute top-2 left-2 px-2 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                        {article.source.name}
                    </span>
                )}
            </div>
            <div className="p-4">
                <h2 className="text-lg font-semibold text-gray-900 dark:text-white mb-2 line-clamp-2">
                    {article.title}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 line-clamp-3">
                    {article.description}
                </p>
                <div className="flex items-center justify-between text-sm">
                    <div className="flex items-center text-gray-500 dark:text-gray-400">
                        <FiClock className="w-4 h-4 mr-1" />
                        <span>{formatDate(article.publishedAt)}</span>
                    </div>
                    <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors duration-200"
                    >
                        Read More
                        <FiExternalLink className="w-4 h-4 ml-1" />
                    </a>
                </div>
            </div>
        </article>
    );
};

export default NewsCard;