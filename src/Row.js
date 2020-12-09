import React ,{useState,useEffect} from 'react'
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
)
// console.log(movies);
    return (
        <div className="row">
            <h3>{props.title}</h3>
            <div className="row_poster">
               {
                   movies.map(
                      (movie) => (
<img key={movie.id}
 className={`row_posters_image ${props.isLargeRow && "row_posters"}`}
 src={`${BaseUrl}${props.isLargeRow ? movie.poster_path : movie.backdrop_path}`} alt={movie.name}/>
                      ) )
               }
            </div>
        </div>
    )
}

export default Row
