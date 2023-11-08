import useData from "./useData";
import { Genre } from "./useGenres";
import usePlatforms from "./usePlatforms";

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

const useGames = (
  selectedGenre: Genre | null,
  selectedPlaform: Platform | null
) =>
  useData<Game>(
    "/games",
    { params: { genres: selectedGenre?.id, platforms: selectedPlaform?.id } },
    [selectedGenre?.id, selectedPlaform?.id]
  );

export default useGames;

// building game cards 1:40
