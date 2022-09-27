import MovieCard from '../movie-card/MovieCard';

import movies from '../../data/movies.json';

export default function MovieGrid () {
    return (
        <div className="movie-grid">
            {
                movies.map (movie => (
                    <MovieCard movie={movie} key={movie.id} />
                ))
            }
        </div>
    );
}