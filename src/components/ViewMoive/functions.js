import React, { useState } from 'react';
import axios from 'axios';
import './functions.css';

function Movies() {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [searchValue, setSearchValue] = useState('');

  function searchMovies(e) {
    const nombre = e.target.value;
    setSearchValue(nombre);
    const url = `http://www.omdbapi.com/?i=tt3896198&apikey=feaad8d4&s=${nombre}`;

    axios.get(url)
      .then((response) => {
        setMovies(response.data.Search || []);
        setTotalPages(Math.ceil(response.data.totalResults / 12)); // 10 películas por página
        setCurrentPage(1); // Cambiar a la primera página al buscar
      })
      .catch((error) => console.error(error));
  }

  function handleNextPage() {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  }

  function handlePrevPage() {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  const moviesPerPage = 12; // número de películas por página
  const startIndex = (currentPage - 1) * moviesPerPage;
  const endIndex = startIndex + moviesPerPage;

  const filteredMovies = movies.filter(movie => movie.Title.toLowerCase().includes(searchValue.toLowerCase()));

  return (
    <div>
      <input type="text" className='search-bar' value={searchValue} onChange={searchMovies} placeholder="Search movies..." />
      <div className="movie-container">
        {
          filteredMovies.slice(startIndex, endIndex).map((movie, index) => (
            <div className="card-body">
              <div key={index} className="card">
                <img src={movie.Poster} className="card-img-top" alt={`Poster of ${movie.Title}`} />
                  <h5 className="card-title">{movie.Title}</h5>
                  <p className="card-text">{movie.Year}</p>
                  <a href="#" className="btn btn-primary">Visit movie page</a>
              </div>
            </div>
          ))
        }
      </div>
      <div className="d-flex justify-content-between">
        {/* <button className="btn btn-primary1" onClick={handlePrevPage}>Previous Page</button>
        <button className="btn btn-primary1" onClick={handleNextPage}>Next Page</button> */}
      </div>
    </div>
  );
}

export default Movies;
