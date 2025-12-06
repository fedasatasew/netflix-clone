import React, { useEffect, useState } from "react";
import axios from "../../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";
import './row.css'
function Row({title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] =useState("")

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

     
      setMovies(top20);
    }

    fetchData();
  }, [fetchUrl]);

 const showVideo=(m)=>{
  if(trailerUrl){
    setTrailerUrl('')
  } else{
      movieTrailer(m?.Title)
      .then((url)=>{
        console.log(url)
        const urlparams= new URLSearchParams(new URL(url).search) 
        console.log(urlparams)
        console.log(urlparams.get('v'))
        setTrailerUrl(urlparams.get('v'))
      })
  }
    console.log(m)
  }

  const opts={
    height: '390',
    width:'100%',
    playerVars: {
      autoplay:1,

    },
  }
  return (
    <>
    <div className="row">
        <h1>{title}</h1>
        <div className="row_posters">
            {
                movies?.map((m, i)=>(
                    <img
                    onClick={()=>showVideo(m)}
                     src={m.Poster} alt={m.Title} className={`row_poster $ {isLargeRow && "row_posterLarge"}` }
                    />
                ))
            }
        </div>
        <div style={{padding: '40px'}}>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts}/>}

        </div>
    </div>
    </>
  );
}

export default Row;
