import React, { Component } from "react";
import StarRatingsComponent from './StarRatingsComponent';

export default class Questionnaire extends Component {
  constructor(props) {
    super(props) ;
    this.state = {
      learning: 5,
      projects: 5,
      ui: 5,
      code: 5,
      testing: 5,
      performance: 5,
      tools: 5
    }
  }
  
  render() {
    return (
      <form action="">
          <StarRatingsComponent parameter="Learning done in past 6 months  " rating={this.state.learning}/>
          <StarRatingsComponent parameter="Projects in last 6 months " rating={this.state.projects}/>
          <StarRatingsComponent parameter="UI " rating={this.state.ui}/>
          <StarRatingsComponent parameter="Code " rating={this.state.code}/>
          <StarRatingsComponent parameter="Testing " rating={this.state.testing}/>
          <StarRatingsComponent parameter="Performance " rating={this.state.performance}/>
          <StarRatingsComponent parameter="Plugins & Tools " rating={this.state.tools}/>

      </form>
    );
  }
}
