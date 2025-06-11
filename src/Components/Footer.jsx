import React from 'react';
import { Github, Instagram, Youtube, Send, Linkedin, Heart } from 'lucide-react';
import { FiHeart } from 'react-icons/fi';

const Footer = () => {
    return (
        <footer className="bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 transition-colors duration-200">
            <div className="container mx-auto px-4 py-6">
                <div className="flex flex-col items-center justify-center space-y-2">
                    <p className="text-gray-600 dark:text-gray-400 text-sm">
                        Made with <FiHeart className="inline-block text-red-500" /> using React and Tailwind CSS
                    </p>
                    <p className="text-gray-500 dark:text-gray-500 text-xs">
                        © {new Date().getFullYear()} NewsHub. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
