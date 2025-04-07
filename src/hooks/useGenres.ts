import usesData from "./useData";

export interface Genre {
  id: number;
  name: string;
  image_background: string;
}

const useGenres = () => usesData<Genre>("/genres");

export default useGenres;
