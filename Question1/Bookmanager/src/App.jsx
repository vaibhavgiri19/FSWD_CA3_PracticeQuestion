import React from 'react';
import BookCard from './components/BookCard';

function App() {
  // TODO: Define books array with at least 4 objects
  // Each book should have: id, title, author, price, originalPrice, genre, isAvailable, isBestseller
  const books = [
    // TODO: Add book objects here
  ];

  return (
    <div>
      <h1>Book Library</h1>
      <div className="book-grid">
        {/* TODO: Use map() to render BookCard components */}
        {/* Pass key prop and all required props */}
      </div>
    </div>
  );
}

export default App;
