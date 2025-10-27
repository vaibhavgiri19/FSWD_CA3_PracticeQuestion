import React from 'react';
import ProductCard from './components/ProductCard';

function App() {
  // TODO: Define an array of product objects
  // Each object should include:
  // name, brand, price, originalPrice, category, inStock, discount
  const products = [
    // TODO: Add sample product objects here
  ];

  return (
    <div>
      <h1>Product Catalog</h1>
      <div className="product-list">
        {/* TODO: Use map() to render ProductCard components */}
        {/* Remember to use a key prop and pass all required props */}
      </div>
    </div>
  );
}

export default App;
