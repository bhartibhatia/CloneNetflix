import React from 'react'
import './App.css';
// import { requests } from './Requests';
import requests from './requests'
import Row from './Row'

function App() {
  return (
    <div className="App">
    <h1>Hey Now I am becoming full stack developer...!!</h1>
    <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}/>
    {/* <Row title="HorrorMovies" fetchUrl ={requests.fetchRomanceMovies}/> */}
    </div>
  );
}

export default App;
