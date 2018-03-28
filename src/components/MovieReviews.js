// // Code MovieReviews Here
//
// import React, { Component } from "react";
// import LatestMovieReviewsContainer from "./LatestMovieReviewsContainer";
// import SearchableMovieReviewsContainer from "./SearchableMovieReviewsContainer";
//
//
// class MovieReviews extends Component{
//
// state = {
//   searchLetter: ""
// }
// search = (letter)=>{
//   this.setState({
//     searchLetter: letter
//   })
// }
//
//   render(){
//
//     return (
//       <div>
//        <SearchableMovieReviewsContainer handleSearch={this.search} />
//       <LatestMovieReviewsContainer renderThis={this.state.searchLetter}/>
//       </div>
//
//     )
//   }
// }
//
//
// export default MovieReviews



import React from 'react';

const Review = ({
  headline,
  byline,
  link,
  summary_short
}) => {
  return (

    <div
      key={headline}
      className="review"
    >
      <header>
        <a
          className="review-link"

          href={link.url}
        >
          {headline}
        </a>
        <br/>
        <span className="author">{byline}</span>
      </header>
      <blockquote>{summary_short}</blockquote>
    </div>
  );
};

const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(Review)}</div>;

MovieReviews.defaultProps = {
  reviews: []
};

export default MovieReviews;
