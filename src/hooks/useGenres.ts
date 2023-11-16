import genres from "../data/genre";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = (onSelectedGenre: (genre: Genre) => void | null) => ({
  data: genres,
  isLoading: false,
  error: null,
});
// const useGenres = (onSelecteGenre: Genre | null) => useData<Genre>("/genres");

export default useGenres;
