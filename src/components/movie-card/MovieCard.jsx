export default function MovieCard ( {movie} ) {
    const imgUrl = "https://image.tmdb.org/t/p/w300" + movie.poster_path;
    
    return (
        <div className="movie-card">
            <img src={imgUrl} alt={movie.original_title} />
            <h3>{movie.original_title}</h3>
        </div>
    );
}