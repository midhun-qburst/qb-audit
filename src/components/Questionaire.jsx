import React, { Component } from "react";
import StarRatingsComponent from './StarRatingsComponent';

export default class Questionaire extends Component {
  render() {
    return (
      <form action="">
          <StarRatingsComponent parameter="Learning done in past 6 months  "/>
          <StarRatingsComponent parameter="Projects in last 6 months "/>
          <StarRatingsComponent parameter="UI "/>
          <StarRatingsComponent parameter="Code "/>
          <StarRatingsComponent parameter="Testing "/>
          <StarRatingsComponent parameter="Performance "/>
          <StarRatingsComponent parameter="Plugins & Tools "/>

      </form>
    );
  }
}
