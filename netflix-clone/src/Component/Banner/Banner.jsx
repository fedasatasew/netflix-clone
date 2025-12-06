
import React, { useEffect, useState } from "react";
import axios from "../../utils/axios"; // your axios instance
import { requests } from "../../utils/requests";
// import "./banner.css";
import "./banner.css";
const Banner = () => {
    const [movie, setMovie]=useState({});
   
useEffect(() => {
  async function fetchData() {
    let allMovies = [];
  console.log(requests.trending)
    // Loop through all trending URLs
    for (const url of requests.trending) {
      const response = await axios.get(url);
      if (response.data.Search) {
        // Filter only movies
        
        const movies = response.data.Search.filter(item => item.Type === "movie");
        allMovies = [...allMovies, ...movies];
      }
    }

    // Remove duplicates based on imdbID
    const uniqueMovies = allMovies.filter(
      (movie, index, self) =>
        index === self.findIndex(m => m.imdbID === movie.imdbID)

    );
  
    // Pick a random movie
    let randomMovie = uniqueMovies[Math.floor(Math.random() * uniqueMovies.length)];

    // Replace _SX300 with _SX1000 for higher quality
    if (randomMovie && randomMovie.Poster) {
        // console.log(randomMovie)
      randomMovie.Poster = randomMovie.Poster.replace("_SX300", "_SX1000");
    }

    setMovie(randomMovie);
  }

  fetchData();
}, []);

  return (
    <div className="banner"
        style={{
          backgroundSize: "cover",
          
          backgroundImage:movie ? `url(${movie.Poster})` : "",
          backgroundPosition: "top center",
          backgroundRepeat: "no-repeat",
        
        }}>
          <div className="banner_contents">
            <h1 className="banner_title">{movie ? movie.Title : "Loading..."}</h1>
            <div className="banner_buttons">
              <button className="banner_btn play">Play</button>
              <button className="banner_btn">My List</button>
            </div>
          </div>
        <div className="banner_fadeBottom" />
    </div>
  )
}

export default Banner