import React from 'react';
import ReactDOM from 'react-dom';

import LatestMovieReviewsContainer from './components/LatestMovieReviewsContainer';
import SearchableMovieReviewsContainer from './components/SearchableMovieReviewsContainer';
import MovieReviews from "./components/MovieReviews";
ReactDOM.render(
  <div className="app">
    <MovieReviews />
  </div>,
  document.getElementById('root')
);




// <SearchableMovieReviewsContainer  />
// <ul>
//   <LatestMovieReviewsContainer />
//   </ul>
