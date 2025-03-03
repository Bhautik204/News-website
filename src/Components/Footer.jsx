import React from 'react';
import { Github, Instagram, Youtube, Send, Linkedin, Heart } from 'lucide-react';

const Footer = () => (
    <footer className="w-full bg-gray-800 text-white py-6 mt-auto">
        <div className="max-w-6xl mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                <div className="text-center md:text-left space-y-2">
                    <div className="flex items-center justify-center md:justify-start gap-2">
                    <img src="/image.png" alt="News App Logo" className='w-12 md:w-16' />
                    <h1 className='text-white font-bold text-xl md:text-3xl'>News App</h1>
                    </div>
                    <div className="text-sm text-gray-400">
                        <p>Contact us: info@newscompany.com | (123) 456-7890</p>
                    </div>
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <a href="/about" className="text-gray-400 hover:text-white">About Us</a>
                            <a href="/privacy" className="text-gray-400 hover:text-white">Privacy Policy</a>
                            <a href="/terms" className="text-gray-400 hover:text-white">Terms of Service</a>
                        </div>
                    </div>
                    <p className="text-sm text-gray-400">© {new Date().getFullYear()} All rights reserved</p>
                </div>

                    <div className="flex flex-wrap items-center justify-between gap-6">

                        <a
                            href="https://www.instagram.com/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-pink-500 transition-colors"
                            aria-label="Instagram (Personal)"
                        >
                            <Instagram className="w-6 h-6" />
                        </a>

                        <a
                            href="https://www.youtube.com/"
                            target="_blank"
                        aria-label="YouTube"
                    >
                        <Youtube className="w-5 h-5" />
                    </a>
                    <a
                        href="https://telegram.me/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-500 transition-colors"
                        aria-label="Telegram"
                    >
                        <Send className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-600 transition-colors"
                        aria-label="LinkedIn"
                    >
                        <Linkedin className="w-5 h-5" />
                    </a>
                    <a
                        href="https://www.instagram.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-pink-400 transition-colors"
                        aria-label="Instagram (Dev)"
                    >
                        <Instagram className="w-5 h-5" />
                    </a>
                    <a
                        href="https://github.com/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hover:text-blue-400 transition-colors"
                        aria-label="GitHub"
                    >
                        <Github className="w-5 h-5" />
                    </a>
                </div>
            </div>
        </div>
    </footer>
);

export default Footer;
