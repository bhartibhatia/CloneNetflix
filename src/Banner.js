import React, { useState, useEffect } from "react";
import requests from "./requests";
import axios from "./axios";

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
          <h1>
            {movies?.title || movies?.name || movies?.original_name}
            <div className="banner_buttons">
              <button className="banner_butoon">Play</button>
              <button className="banner_butoon">My List</button>
              <h1 className="banner_decription">
                  {movies?.overview}
              </h1>
            </div>
          </h1>
        </div>
      </header>
    </div>
  );
}

export default Banner;
