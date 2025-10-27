import { render, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import BookCard from '../components/BookCard';
import App from '../App';

describe('Book Library System Assessment', () => {

  describe('BookCard Component Props', () => {

    it('should accept and display book title prop', () => {
      render(
        <BookCard
          title="The Great Gatsby"
          author="F. Scott Fitzgerald"
          price={9.99}
          originalPrice={14.99}
          genre="Fiction"
          isAvailable={true}
          isBestseller={true}
        />
      );
      expect(screen.getByText('The Great Gatsby')).toBeInTheDocument();
    });

    it('should display author correctly', () => {
      render(
        <BookCard
          title="1984"
          author="George Orwell"
          price={12.99}
          originalPrice={15.99}
          genre="Dystopian"
          isAvailable={true}
          isBestseller={false}
        />
      );
      expect(screen.getByText(/Author:.*George Orwell/)).toBeInTheDocument();
    });

    it('should display genre correctly', () => {
      render(
        <BookCard
          title="Notebook"
          author="Author Name"
          price={5.99}
          originalPrice={7.99}
          genre="Stationery"
          isAvailable={false}
          isBestseller={true}
        />
      );
      expect(screen.getByText(/Genre:.*Stationery/)).toBeInTheDocument();
    });

    it('should display current price correctly', () => {
      render(
        <BookCard
          title="Book A"
          author="Author A"
          price={8.99}
          originalPrice={10.99}
          genre="Fiction"
          isAvailable={true}
          isBestseller={true}
        />
      );
      expect(screen.getByText(/\$8\.99/)).toBeInTheDocument();
    });

    it('should show original price when on sale (bestseller)', () => {
      render(
        <BookCard
          title="Book B"
          author="Author B"
          price={7.99}
          originalPrice={12.99}
          genre="Fiction"
          isAvailable={true}
          isBestseller={true}
        />
      );
      expect(screen.getByText(/\$12\.99/)).toBeInTheDocument();
    });
  });

  describe('Conditional Rendering Features', () => {

    it('should show BESTSELLER badge when isBestseller is true', () => {
      render(
        <BookCard
          title="Bestseller Book"
          author="Author"
          price={15.99}
          originalPrice={20.99}
          genre="Fiction"
          isAvailable={true}
          isBestseller={true}
        />
      );
      expect(screen.getByText('BESTSELLER')).toBeInTheDocument();
    });

    it('should not show BESTSELLER badge when isBestseller is false', () => {
      render(
        <BookCard
          title="Regular Book"
          author="Author"
          price={15.99}
          originalPrice={15.99}
          genre="Fiction"
          isAvailable={true}
          isBestseller={false}
        />
      );
      expect(screen.queryByText('BESTSELLER')).not.toBeInTheDocument();
    });

    it('should show "Available" when isAvailable is true', () => {
      render(
        <BookCard
          title="Available Book"
          author="Author"
          price={10.99}
          originalPrice={12.99}
          genre="Fiction"
          isAvailable={true}
          isBestseller={false}
        />
      );
      expect(screen.getByText('Available')).toBeInTheDocument();
    });

    it('should show "Not Available" when isAvailable is false', () => {
      render(
        <BookCard
          title="Unavailable Book"
          author="Author"
          price={12.99}
          originalPrice={12.99}
          genre="Fiction"
          isAvailable={false}
          isBestseller={false}
        />
      );
      expect(screen.getByText('Not Available')).toBeInTheDocument();
    });
  });

  describe('App Component List Rendering', () => {

    it('should render multiple BookCard components', () => {
      render(<App />);
      const bookCards = screen.getAllByText(/Genre:/);
      expect(bookCards.length).toBeGreaterThanOrEqual(4);
    });

    it('should display unique book titles', () => {
      render(<App />);
      const headings = screen.getAllByRole('heading', { level: 3 });
      const titles = headings.map(h => h.textContent);
      const uniqueTitles = [...new Set(titles)];
      expect(uniqueTitles.length).toBe(titles.length);
    });

    it('should show BESTSELLER badges for appropriate books', () => {
      render(<App />);
      const badges = screen.queryAllByText('BESTSELLER');
      expect(badges.length).toBeGreaterThan(0);
      expect(badges.length).toBeLessThan(4);
    });

    it('should display various genres across books', () => {
      render(<App />);
      const genreElements = screen.getAllByText(/Genre:/);
      const genres = genreElements.map(el => el.textContent.replace('Genre: ', ''));
      const uniqueGenres = [...new Set(genres)];
      expect(uniqueGenres.length).toBeGreaterThan(1);
    });
  });

});
