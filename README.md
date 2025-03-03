# News Application

## Overview
The **News Application** is a dynamic frontend project designed to deliver real-time news updates. It features various functionalities, including Top Headlines, Breaking News, News by Category, and a Search feature. The application is built using **Vite, React, Tailwind CSS, and Lucide React**, ensuring a seamless user experience.

## Key Features
- **Top Headlines**: Access the latest news headlines from multiple sources.
- **Breaking News**: Stay updated with real-time breaking news alerts.
- **News by Category**: Browse news articles categorized by topics such as Technology, Business, Sports, and Health.
- **Search Functionality**: Find specific news articles using keywords.
- **Responsive Design**: Optimized for all devices, including mobile.

## Technology Stack
- **Frontend**: ReactJS, Tailwind CSS, Lucide React
- **Data Source**: NewsAPI

## Getting Started

### Prerequisites
Make sure you have the following installed:
- Node.js (Latest LTS version)
- npm or yarn

### Installation Instructions
1. Clone the repository:
   ```sh
   git clone https://github.com/Harshit-Patle/Project-III-NexusLogic-Technologies.git
   ```
2. Install the required dependencies:
   ```sh
   npm install  # or yarn install
   ```
3. Create a `.env` file in the root directory and include your NewsAPI key:
   ```env
   VITE_NEWS_API_KEY=your_newsapi_key_here
   ```
4. Launch the development server:
   ```sh
   npm run dev  # or yarn dev
   ```
5. Open your browser and navigate to:
   ```sh
   http://localhost:5173
   ```

## Project Structure
```
│-- src/
│   ├── Components/
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── NewsCard.jsx
│   ├── Pages/
│   │   ├── BreakingNews.jsx
│   │   ├── Category.jsx
│   │   ├── SearchNews.jsx
│   │   ├── TopHeadlines.jsx
│   ├── App.jsx
│   ├── index.css
│   ├── main.jsx
│-- .gitignore
│-- components.json
│-- eslint.config.js
│-- index.html
```

## Future Enhancements
- Implement user authentication for personalized news experiences.
- Add features to bookmark and save articles for later reading.
- Introduce dark mode support for better accessibility.

## Live Demo
Explore the live demo of the application:
🔹 **[Live News App](https://project-iii-nexus-logic-technologies.vercel.app/)**
(Note: Data fetching may be limited due to API_KEY restrictions.)
