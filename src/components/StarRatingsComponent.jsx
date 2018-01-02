import React, { Component } from "react";
import StarRatings from "react-star-ratings";

export default class StarRatingsComponent extends Component {
  render() {
    return (
        <div>
          <label htmlFor="">{this.props.parameter} </label>
          <StarRatings
            rating={1}
            isSelectable={true}
            isAggregateRating={false}
            changeRating={this.changeRating}
            numOfStars={10}
            starWidthAndHeight={"15px"}
            starSpacing={"2px"}
          />
        </div>
    );
  }
}
