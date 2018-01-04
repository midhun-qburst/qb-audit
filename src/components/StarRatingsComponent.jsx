import React, { Component } from "react";
import StarRatings from "react-star-ratings";

export default class StarRatingsComponent extends Component {
  

  sendLabel = (rating)=> {debugger
    this.props.handleRating(this.props.keyLabel, rating);

  }
  render() {
    return (
        <div>
          <label htmlFor="">{this.props.parameter} </label>
          <StarRatings
            rating={this.props.rating}
            isSelectable={true}
            isAggregateRating={false}
            changeRating={this.sendLabel}
            numOfStars={10}
            starWidthAndHeight={"15px"}
            starSpacing={"2px"}
          />
        </div>
    );
  }
}
