import { render, screen } from '@testing-library/react';
import ProductCard from '../components/ProductCard.jsx';

describe('Product Catalog System', () => {
  test('should render product name correctly', () => {
    render(<ProductCard name="MacBook Air" brand="Apple" price={999} originalPrice={1199} category="Electronics" inStock={true} discount={true} />);
    expect(screen.getByText('MacBook Air')).toBeInTheDocument();
  });

  test('should display DISCOUNT badge when discount is true', () => {
    render(<ProductCard name="MacBook Air" brand="Apple" price={999} originalPrice={1199} category="Electronics" inStock={true} discount={true} />);
    expect(screen.getByText('DISCOUNT')).toBeInTheDocument();
  });

  test('should show "Out of Stock" when inStock is false', () => {
    render(<ProductCard name="T-Shirt" brand="Zara" price={19.99} originalPrice={29.99} category="Clothing" inStock={false} discount={true} />);
    expect(screen.getByText('Out of Stock')).toBeInTheDocument();
  });

  test('should not display DISCOUNT badge when discount is false', () => {
    render(<ProductCard name="Headphones" brand="Sony" price={249.99} originalPrice={249.99} category="Electronics" inStock={true} discount={false} />);
    const badge = screen.queryByText('DISCOUNT');
    expect(badge).toBeNull();
  });
});
