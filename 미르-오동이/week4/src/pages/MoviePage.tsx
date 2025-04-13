import MovieCard from "../components/MovieCard";
import useCustomFetch from "../hooks/useCustomFetch"; 
import { Movie } from "../types/movie";

interface MovieApiResponse {
  results: Movie[];
}

export default function MoviePage(): Element {
  const {
    data,
    loading,
    error
  } = useCustomFetch<MovieApiResponse>(
    `https://api.themoviedb.org/3/movie/popular?language=en-US&page=1&api_key=${import.meta.env.VITE_TMDB_KEY}`
  );

  if (loading) return <div className="p-10 text-center">로딩 중...</div>;
  if (error) return <div className="p-10 text-red-500 text-center">에러 발생: {error}</div>;

  return (
    <div className='p-10 grid gap-4 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6'>
      {data?.results.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
