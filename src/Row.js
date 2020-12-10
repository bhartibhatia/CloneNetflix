import React ,{useState,useEffect} from 'react'
import YouTube from 'react-youtube';
import axios from "./axios"
import "./Row.css"

const BaseUrl="https://image.tmdb.org/t/p/original/"

function Row(props) {
    const [movies,setMovies]=useState([]);

useEffect(
    () =>{
async function fetchData()
{
const request = await axios.get(props.fetchUrl)
// console.log("GetRequest",request.data.results);
setMovies(request.data.results);
return request;
}
fetchData().catch( (error)=>{
console.log(error)
})
    },[props.fetchUrl]
);

const opts = {
    height:"390",
    width:"100%",
    playerVars:
    {autoplay:1},

}
 const handelClick = (movie) =>{

 }
// console.log(movies);
    return (
        <div className="row">
            <h3 >{props.title}</h3>
            <div className="row_poster">
               {
                   movies.map(
                      (movie) => (
<img key={movie.id}
onClick={() => handelClick(movie)}
 className={`row_posters_image ${props.isLargeRow && "row_posters"}`}
 src={`${BaseUrl}${props.isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                      ) )
               }
            </div>
            <YouTube videoId={trailerUrl} opts={opts}/>
        </div>
    )
}

export default Row
