import React from 'react'
import './App.css';
// import { requests } from './Requests';
import requests from './requests'
import Row from './Row'
import Banner from './Banner'
import Nav from './Nav'

function App() {
  return (
    <div className="App">
      <Nav/>
    <Banner/>
    <Row title="NETFLIX ORIGINALS" fetchUrl={requests.fetchNetflixOriginals}
    isLargeRow/>
    <Row title="Trending Movies" fetchUrl ={requests.fetchTrending} />
    <Row title="Romance Movies" fetchUrl ={requests.fetchRomanceMovies}  />
    <Row title="TopRated Movies" fetchUrl ={requests.fetchTopRated} />
    <Row title="Horror Movies" fetchUrl ={requests.fetchHorrorMovies} />
    <Row title="Comedy Movies" fetchUrl ={requests.fetchComedyMovies} />
    <Row title="Documentaries" fetchUrl ={requests.fetchDocumentaries} />
    
    
    </div>
  );
}

export default App;
