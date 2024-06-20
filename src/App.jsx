import React from 'react';
import './App.css';
import ArticleList from './components/ArticleList';
import Header from './components/Header';
import Nav from './components/Nav';
import ArticlePage from './components/ArticlePage';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Nav />
        <Routes>
          <Route path="/" element={<ArticleList />} />
          <Route path= "/articles/:article_id" element= {<ArticlePage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;

