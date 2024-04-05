import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import searchIcon from './search.svg';
import MovieCard from './MovieCard';

//2f4b6f8e

let API_URL = 'http://www.omdbapi.com/?apikey=2f4b6f8e';
const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies();
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>GRT Movies</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={searchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};



































// function App() {

//   let [searchTerm, setSearchTerm] = useState("");
//   let [movies, setMovies] = useState([]);
//   let [allMovies, setAllMovies] = useState([]);
//   useEffect(() => {
//     searchMovies();

//   }, []);

//   let searchMovies = async (title) => {
//     let response = await fetch(`${API_URL}&s=${title}`);
//     let data = await response.json();
//     console.log(data.Search);
//     setMovies(data.Search);
//   };


//   const handleSearchChange = (e) => {
//     const { value } = e.target;
//     setSearchTerm(value);
//     if (value === "") {
//       setMovies(allMovies); // If search input is empty, display all movies
//     }
//   };

//   // Handle search button click
//   const handleSearchClick = () => {
//     searchMovies(searchTerm);
//   };
//   return (
//     <div className="app">
//       <h1>GRT Movies..</h1>
//       <div className='search'>
//         <input
//           placeholder='search for movies'
//           value={searchTerm}
//           onChange={handleSearchChange}
//         />
//         <img
//           src={searchIcon}
//           alt='Search'
//           onClick={handleSearchClick}
//         />
//       </div>
//       {movies?.length > 0 ? (
//         <div className='container'>
//           {movies.map((movie) => (
//             <MovieCard movie={movie} />
//           ))}
//         </div>
//       ) : (
//         <div className='empty'>
//           <h2>oops..!No movie found</h2>
//         </div>
//       )}

//     </div>
//   );
// }

export default App;
