import usesData from "./useData";

export interface Genre {
  id: number;
  name: string;
}

const useGenres = () => usesData<Genre>("/genres");

export default useGenres;
