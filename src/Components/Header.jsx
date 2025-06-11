import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FiSun, FiMoon, FiSearch, FiHome } from 'react-icons/fi';
import { useTheme } from '../context/ThemeContext';

const Header = ({ onSearch }) => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const location = useLocation();
    const { isDarkMode, toggleTheme } = useTheme();

    const isActive = (path) => location.pathname === path ? 'text-blue-600 dark:text-blue-400' : '';

    const handleSearch = (e) => {
        e.preventDefault();
        onSearch(searchQuery);
    };

    return (
        <header className="sticky top-0 z-50 bg-white dark:bg-gray-900 shadow-md transition-colors duration-200">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <Link to="/" className="flex items-center space-x-2">
                        <img src="/image.png" alt="News App Logo" className='w-10 h-10 md:w-12 md:h-12' />
                        <h1 className="text-xl md:text-2xl font-bold text-blue-600 dark:text-blue-400">NewsHub</h1>
                    </Link>

                    {/* Search and Theme Toggle */}
                    <div className="flex items-center space-x-4">
                        <form onSubmit={handleSearch} className="relative hidden md:block">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search news..."
                                className="w-64 pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                            />
                            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </form>
                        <button
                            onClick={toggleTheme}
                            className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200"
                            aria-label="Toggle theme"
                        >
                            {isDarkMode ? (
                                <FiSun className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                            ) : (
                                <FiMoon className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className='md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors duration-200'
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <div className="w-6 h-6 flex flex-col justify-center items-center">
                            <span className={`block w-5 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all ${isMenuOpen ? 'rotate-45 translate-y-0.5' : '-translate-y-1'}`}></span>
                            <span className={`block w-5 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
                            <span className={`block w-5 h-0.5 bg-gray-700 dark:bg-gray-300 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-0.5' : 'translate-y-1'}`}></span>
                        </div>
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMenuOpen && (
                <div className='md:hidden border-t border-gray-200 dark:border-gray-700 transition-colors duration-200'>
                    <div className="container mx-auto px-4 py-4">
                        <form onSubmit={handleSearch} className="relative mb-4">
                            <input
                                type="text"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                placeholder="Search news..."
                                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-colors duration-200"
                            />
                            <FiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                        </form>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Header;