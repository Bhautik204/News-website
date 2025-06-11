import React from 'react';
import NewsCard from './NewsCard';
import { FiLoader, FiAlertCircle, FiInbox } from 'react-icons/fi';

const NewsGrid = ({ articles, isLoading, error }) => {
    if (isLoading) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col items-center justify-center space-y-4 text-gray-600 dark:text-gray-400">
                    <FiLoader className="w-8 h-8 animate-spin" />
                    <p className="text-lg">Loading news...</p>
                </div>
            </div>
        );
    }

    if (error) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col items-center justify-center space-y-4 text-red-600 dark:text-red-400">
                    <FiAlertCircle className="w-8 h-8" />
                    <p className="text-lg">Error loading news. Please try again later.</p>
                </div>
            </div>
        );
    }

    if (!articles || articles.length === 0) {
        return (
            <div className="container mx-auto px-4 py-8">
                <div className="flex flex-col items-center justify-center space-y-4 text-gray-600 dark:text-gray-400">
                    <FiInbox className="w-8 h-8" />
                    <p className="text-lg">No news articles found.</p>
                </div>
            </div>
        );
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {articles.map((article, index) => (
                    <NewsCard key={article.url + index} article={article} />
                ))}
            </div>
        </div>
    );
};

export default NewsGrid; 