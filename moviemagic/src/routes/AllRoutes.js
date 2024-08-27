import { Routes, Route } from "react-router-dom";
import { MovieList, MovieDetails, Search, PageNotFound } from "../pages";

export const AllRoutes = () => {
  return (
    <div >
        <Routes>
            <Route path="" element={<MovieList/>} />
            <Route path="movie/:id" element={<MovieDetails/>} />
            <Route path="movies/popular" element={<MovieList/>} />
            <Route path="movies/top" element={<MovieList/>} />
            <Route path="movies/upcoming" element={<MovieList/>} />
            <Route path="search" element={<Search />} />
            <Route path="*" element={<PageNotFound />}/>
        </Routes>
    </div>
  )
}
