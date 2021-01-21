import './App.css';
import Header from './Header';
import Banner from  './Banner';
import requests from  './request';
import Row from './Row';


function App() {
  return (
    <div className="App">
      <Header/>
      <Banner/>
      <Row 
        isLargeRow = {true}
        title = "NETFLIX ORIGINALS"
        fetchUrl = {requests.fetchNetflixOriginals}
      />
      <Row
        title = "TRENDING NOW"
        fetchUrl = {requests.fetchTrending}
      />
      <Row
         title = "TOP RATED MOVIES"
        fetchUrl = {requests.fetchTopRated}
      />
      <Row
         title = "ACTION MOVIES"
        fetchUrl = {requests.fetchActionMovies}
      />
      <Row
         title = "HORROR MOVIES"
        fetchUrl = {requests.fetchHorrorMovies}
      />
      <Row 
        title = "ROMANCE MOVIES"
        fetchUrl = {requests.fetchRomanticMovies}/>

      <Row
         title = "COMEDY MOVIES"
        fetchUrl = {requests.fetchComedyMovies}
      />
       <Row
         title = "DOCUMENTARIES"
        fetchUrl = {requests.fetchDocumentaries}
      />
    </div>
  );
}


export default App;
