import React from 'react';
import './Content.css';
import Card from './Card';

const Content = () => {
  return (
    <main className="content">
      <section>
        <h2>Featured Items</h2>
        <div className="featured-items">
          <Card title="Product 1" description="Description for Product 1" />
          <Card title="Product 2" description="Description for Product 2" />
          <Card title="Product 3" description="Description for Product 3" />
        </div>
      </section>
      <section>
        <h2>Latest News</h2>
        <div className="latest-news">
          <div className="news-item">News 1</div>
          <div className="news-item">News 2</div>
          <div className="news-item">News 3</div>
        </div>
      </section>
    </main>
  );
};

export default Content;
