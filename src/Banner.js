import React, { useState, useEffect } from "react";
import requests from "./requests";
import axios from "./axios";
import './Banner.css'

function Banner() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMovieData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovies(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      console.log(
        "Checking Movie",
        Math.random() * request.data.results.length - 1
      );
    }
    getMovieData();
  }, []);
  console.log(movies);

   function truncate(str,n) {
    return str?.length > n ? str.substr(0, n-1 ) + "..." : str;
}
  return (
    <div>
      <header
        className="banner"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original/${movies?.backdrop_path}")`,
          backgroundPosition: "center center",
        }}
      >
        <div className="banner_contents">
          <h1 className="banner_title">
            {movies?.title || movies?.name || movies?.original_name}
            <div className="banner_buttons">
              <button className="banner_button">Play</button>
              <button className="banner_button">My List</button>
              <h1 className="banner_decription">
                  {truncate(movies?.overview,150)}
              </h1>
            </div>
          </h1>
        </div>
        <div className="banner_fadebottom"></div>
      </header>
    </div>
  );
}

export default Banner;
