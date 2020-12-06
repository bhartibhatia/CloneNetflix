import React ,{useState,useEffect} from 'react'
import axios from "./axios"

function Row(props) {
    const [movies,setMovies]=useState([]);

useEffect(
    () =>{
async function fetchData()
{
const request = await axios.get(props.fetchUrl)
console.log("GetRequest",request.data.results);
setMovies(request.data.results);
return request;
}
fetchData().catch( (error)=>{
console.log(error)
})
    },[props.fetchUrl]
)
console.log(movies);
    return (
        <div>
            <h3>{props.title}</h3>
        </div>
    )
}

export default Row
