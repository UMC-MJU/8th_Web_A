    import { useState , useEffect } from "react"
    import axios from "axios";
import MovieCard from "../components/MovieCard";

    export default function MoviePage(): Element {
        const [movies, setMovies] =  useState<Movie[]>([]);

        useEffect(() : void => {
            const fetchMovies = async (): Promise<void> => {
                const { data } = await axios(
                `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${import.meta.env.VITE_TMDB_KEY}`
                );
            setMovies(data.results);
        };    
            fetchMovies();
        }, []);

 //   console.log(movies[0]?.adult);

    return( 
      <div className='p-10 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 
      lg:gird-cols-5 xl:grid-cols-6'>
        {movies.map((movie) : Element => 
            <MovieCard key={movie.id} movie={movie}/>
        )}
    </div>
    );
}