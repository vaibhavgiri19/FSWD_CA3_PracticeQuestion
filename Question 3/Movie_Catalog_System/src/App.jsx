import React from 'react';
import MovieCard from './components/MovieCard';

function App() {
  const movies = [
    { title: 'Inception', genre: 'Sci-Fi', rating: 8.8, isAvailable: true, isTopRated: true },
    { title: 'Titanic', genre: 'Romance', rating: 7.8, isAvailable: false, isTopRated: true },
    { title: 'Joker', genre: 'Drama', rating: 8.4, isAvailable: true, isTopRated: false },
    { title: 'Avatar', genre: 'Action', rating: 7.9, isAvailable: true, isTopRated: false },
  ];

  return (
    <div>
      {movies.map((movie, index) => (
        <MovieCard key={index} {...movie} />
      ))}
    </div>
  );
}

export default App;
