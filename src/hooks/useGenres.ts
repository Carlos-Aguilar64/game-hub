import useData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = (onSelectedGenre: (genre: Genre) => void | null) =>
  useData<Genre>("/genres");
// const useGenres = (onSelecteGenre: Genre | null) => useData<Genre>("/genres");

export default useGenres;
