import React, { Component } from "react";
import StarRatingsComponent from "./StarRatingsComponent";
import Button from "rmwc/Button";
import "../css/page-card.css";
import TextField from "rmwc/TextField";
export default class Questionnaire extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auditee: -1,
      learning: 5,
      projects: 5,
      ui: 5,
      code: 5,
      testing: 5,
      performance: 5,
      tools: 5,
      comment: ""
    };
  }

  handleRating = (keyLabel, rating) => {
    this.setState(state => {
      let newState = state;
      newState[keyLabel] = rating;
      return newState;
    });
  };
  componentDidMount() {
    return this.setState({ auditee: this.props.match.params.id });
  }
  handleComment = event => {
    this.setState({ comment: event.target.value });
  };
  handleSubmit = () => {
    console.log(this.state);
  };
  render() {
    return (
      <form action="" className="page-card">
        <StarRatingsComponent
          parameter="Learning done in past 6 months  "
          rating={this.state.learning}
          keyLabel="learning"
          handleRating={this.handleRating}
        />
        <StarRatingsComponent
          parameter="Projects in last 6 months "
          rating={this.state.projects}
          keyLabel="projects"
          handleRating={this.handleRating}
        />
        <StarRatingsComponent
          parameter="UI "
          rating={this.state.ui}
          keyLabel="ui"
          handleRating={this.handleRating}
        />
        <StarRatingsComponent
          parameter="Code "
          rating={this.state.code}
          keyLabel="code"
          handleRating={this.handleRating}
        />
        <StarRatingsComponent
          parameter="Testing "
          rating={this.state.testing}
          keyLabel="testing"
          handleRating={this.handleRating}
        />
        <StarRatingsComponent
          parameter="Performance "
          rating={this.state.performance}
          keyLabel="performance"
          handleRating={this.handleRating}
        />
        <StarRatingsComponent
          parameter="Plugins & Tools "
          rating={this.state.tools}
          keyLabel="tools"
          handleRating={this.handleRating}
        />
        <TextField
          textarea
          label="Comment"
          rows="4"
          columns="20"
          onChange={this.handleComment}
        />
        <div>
          <Button
            raised
            theme={["primary-bg", "text-primary-on-secondary"]}
            onClick={this.handleSubmit}
          >
            Save
          </Button>
        </div>
      </form>
    );
  }
}
