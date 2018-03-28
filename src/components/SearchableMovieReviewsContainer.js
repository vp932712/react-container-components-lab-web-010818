// Code SearchableMovieReviewsContainer Here

// import React, { Component } from "react";
//
// class SearchableMovieReviewsContainer extends Component {
//
//
//
//   handleSearch = (event)=>{
//     this.props.handleSearch(event.target.value);
//   }
//
//
//   render() {
//     return (
//       <nav className="navbar navbar-inverse">
//         <a className="navbar-brand">Reviews</a>
//         <form className="form-inline" >
//           <input
//             className="form-control mr-sm-2"
//             onChange = {this.handleSearch}
//             type="search"
//             placeholder="Search"
//             aria-label="Search"
//           />
//           <button
//             className="btn btn-outline-success my-2 my-sm-0"
//             type="submit"
//           >
//             Search
//           </button>
//         </form>
//       </nav>
//     );
//   }
// }
//
// export default SearchableMovieReviewsContainer;



import React, { Component } from 'react';
import 'isomorphic-fetch';

import MovieReviews from './MovieReviews';

const NYT_API_KEY = 'f98593a095b44546bf4073744b540da0';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
                 + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {

  constructor() {
    super();

    this.state = {
      searchTerm: '',
      reviews: []
    };
  }

  handleSearchInputChange = event => this.setState({ searchTerm: event.target.value });

  handleSubmit = event => {
    event.preventDefault();

    fetch(BASE_URL.concat(this.state.searchTerm))
      .then(res => res.json())
      .then(res => this.setState({ reviews: res.results }));
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          <label htmlFor='search-input'>Search Movie Reviews</label>

          <input
            id='search-input'
            type="text"
            style={{width: 300}}

            onChange={this.handleSearchInputChange} />
          <button type="submit">Submit</button>
        </form>
        {this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}


export default SearchableMovieReviewsContainer;
