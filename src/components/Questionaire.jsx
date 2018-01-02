import React, { Component } from "react";
import Grid, { GridCell } from "rmwc/Grid";
import StarRatings from "react-star-ratings";



export default class Questionaire extends Component {
  render() {
    return (
      <form action="">
      <div>
       <label htmlFor="">Performance </label> 
       <StarRatings
          rating={1}
          isSelectable={true}
          isAggregateRating={false}
          changeRating={this.changeRating}
          numOfStars={ 10 }
          starWidthAndHeight={ '15px' }
          starSpacing={'2px'}
        />
        </div>
      </form>
    );
  }
}
