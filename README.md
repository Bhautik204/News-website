# NewsHub - Modern News Application

A modern, responsive news application built with React and Tailwind CSS that provides real-time news updates with a beautiful user interface.

![NewsHub Screenshot](public/screenshot.png)

## Features

- 📰 Real-time news updates from various categories
- 🔍 Advanced search functionality
- 🌓 Light/Dark mode support
- 📱 Fully responsive design
- 🎯 Category filtering
- ⚡ Fast and optimized performance
- 🔄 Smooth transitions and animations

## Tech Stack

- **Frontend Framework:** React.js
- **Styling:** Tailwind CSS
- **Icons:** React Icons (Feather Icons)
- **API:** NewsAPI
- **Routing:** React Router
- **State Management:** React Context API

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm or yarn
- NewsAPI API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/News-website.git
   cd News-website
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory and add your NewsAPI key:
   ```
   VITE_NEWS_API_KEY=your_api_key_here
   ```

4. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser.

## Project Structure

```
src/
├── Components/          # Reusable UI components
│   ├── Header.jsx      # Navigation and search
│   ├── CategoryFilter.jsx # News category filters
│   ├── NewsCard.jsx    # Individual news article card
│   ├── NewsGrid.jsx    # Grid layout for news articles
│   └── Footer.jsx      # Footer component
├── context/            # React Context
│   └── ThemeContext.jsx # Theme management
├── services/           # API services
│   └── newsService.js  # News API integration
└── App.jsx            # Main application component
```

## Features in Detail

### News Categories
- General
- Business
- Technology
- Sports
- Entertainment
- Health
- Science

### Search Functionality
- Real-time search results
- Search across all news categories
- Clear and intuitive search interface

### Theme Support
- Light mode (default)
- Dark mode
- System preference detection
- Smooth theme transitions

### Responsive Design
- Mobile-first approach
- Optimized for all screen sizes
- Touch-friendly interface
- Responsive grid layout

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [NewsAPI](https://newsapi.org/) for providing the news data
- [React Icons](https://react-icons.github.io/react-icons/) for the beautiful icons
- [Tailwind CSS](https://tailwindcss.com/) for the utility-first CSS framework

## Contact

Your Name - [@yourtwitter](https://twitter.com/yourtwitter)

Project Link: [https://github.com/yourusername/News-website](https://github.com/yourusername/News-website)

