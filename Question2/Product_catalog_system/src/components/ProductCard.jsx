import React from 'react';

const ProductCard = ({ name, brand, price, originalPrice, category, inStock, discount }) => {
  return (
    <div className="product-card">
      {/* TODO: Render DISCOUNT badge when discount is true */}
      
      {/* TODO: Render product name */}
      
      {/* TODO: Render brand */}
      
      {/* TODO: Render category */}
      
      {/* TODO: Render price and crossed-out original price when applicable */}
      
      {/* TODO: Render stock status ("In Stock" or "Out of Stock") with proper className */}
    </div>
  );
};

export default ProductCard;
