import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useState, useEffect } from 'react';
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import CategoryFilter from './Components/CategoryFilter';
import NewsGrid from './Components/NewsGrid';
import { getTopHeadlines, searchNews } from './services/newsService';
import { ThemeProvider } from './context/ThemeContext';

const App = () => {
  const [activeCategory, setActiveCategory] = useState('general');
  const [articles, setArticles] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchNews = async (category) => {
    setIsLoading(true);
    setError(null);
    try {
      const news = await getTopHeadlines(category);
      setArticles(news);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSearch = async (query) => {
    if (!query.trim()) {
      fetchNews(activeCategory);
      return;
    }
    setIsLoading(true);
    setError(null);
    try {
      const results = await searchNews(query);
      setArticles(results);
    } catch (err) {
      setError(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(activeCategory);
  }, [activeCategory]);

  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex flex-col transition-colors duration-200">
          <Header onSearch={handleSearch} />
          <main className="flex-grow">
            <CategoryFilter
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
            />
            <NewsGrid
              articles={articles}
              isLoading={isLoading}
              error={error}
            />
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;