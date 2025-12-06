import React, { useEffect, useState } from "react";
import axios from "../../../utils/axios";
import './row.css'
function Row({title, fetchUrl }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      let allMovies = [];

      for (const url of fetchUrl)
        {
           try {
                const response = await axios.get(url);
      
                if (response.data.Search) {
                  // Filter only movies from each API request
                  const onlyMovies = response.data.Search.filter(
                    item => item.Type === "movie"
                  );
      
                  allMovies = [...allMovies, ...onlyMovies];
                }
           } catch (err) {
             console.error("Error fetching:", err);
           }
       }

      // remove duplicates
      const uniqueMovies = allMovies.filter(
        (movie, index, self) =>
          index === self.findIndex(m => m.imdbID === movie.imdbID)
      );

      // Select only first 20
      const shuffled = [...uniqueMovies].sort(() => Math.random() - 0.5);
      const top20 = shuffled.slice(0, 20);

      console.log("Top 20 movies:", top20);
      setMovies(top20);
    }

    fetchData();
  }, []);

  return (
    <>
    <h2>       {title}</h2>
    <div className="row">
      
      {movies.map(m => (
        <div key={m.imdbID} className="movie-item">
          <img src={m.Poster} alt={m.Title} />
          <p>{m.Title}</p>
        </div>
      ))}
    </div>
    </>
  );
}

export default Row;
