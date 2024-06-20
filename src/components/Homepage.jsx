import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import ArticleList from './ArticleList';

const HomePage = () => {
  return (
    <div>
      <Header />
      <div className="content">
        <Sidebar />
        <ArticleList />
      </div>
    </div>
  );
};

export default HomePage;
