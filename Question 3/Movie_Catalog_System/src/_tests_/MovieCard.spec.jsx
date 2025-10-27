import { render, screen } from '@testing-library/react';
import MovieCard from '../components/MovieCard';

describe('Movie Catalog System', () => {
  test('should render movie title correctly', () => {
    render(<MovieCard title="Inception" genre="Sci-Fi" rating={8.8} isAvailable={true} isTopRated={false} />);
    expect(screen.getByText('Inception')).toBeInTheDocument();
  });

  test('should display TOP RATED badge when isTopRated is true', () => {
    render(<MovieCard title="Avatar" genre="Action" rating={9.2} isAvailable={true} isTopRated={true} />);
    expect(screen.getByText('TOP RATED')).toBeInTheDocument();
  });

  test('should show "Not Available" when isAvailable is false', () => {
    render(<MovieCard title="Titanic" genre="Romance" rating={7.8} isAvailable={false} isTopRated={true} />);
    expect(screen.getByText('Not Available')).toBeInTheDocument();
  });

  test('should render movie rating properly', () => {
    render(<MovieCard title="Joker" genre="Drama" rating={8.4} isAvailable={true} isTopRated={false} />);
    expect(screen.getByText(/8.4/)).toBeInTheDocument();
  });

  test('should show genre text', () => {
    render(<MovieCard title="Inception" genre="Sci-Fi" rating={8.8} isAvailable={true} isTopRated={true} />);
    expect(screen.getByText(/Sci-Fi/)).toBeInTheDocument();
  });
});
