import React, { Component } from "react";
import Questionnaire from "./Questionnaire";
import DataTables from "material-ui-datatables";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Redirect } from "react-router-dom";

const tableColumns = [
  {
    key: "name",
    label: "Auditee"
  },
  {
    key: "rating",
    label: "Rating [upon 10]"
  }
];

const tableData = [
  {
    name: "John",
    rating: "9",
    id: 1
  },
  {
    name: "Jean",
    rating: "8",
    id: 2
  }
];
export default class AuditorPage extends Component {
  constructor(props) {
    super(props);
    this.handleCellClick = this.handleCellClick.bind(this);
    this.state = {
      questionnaireIsOpen: false,
      auditeeId: -1
    };
  }
  handleCellClick = (event, dummy, data, nextdummy) => {
    this.setState({ questionnaireIsOpen: true, auditeeId: data.id });
  };

  render() {
    if (this.state.questionnaireIsOpen) {
      return <Redirect from={"/auditor"} to={"q/" + this.state.auditeeId} />;
    }
    return (
      <div>
        <h2>Auditor Page</h2>
        <MuiThemeProvider>
          <DataTables
            height={"auto"}
            selectable={false}
            showRowHover={true}
            columns={tableColumns}
            data={tableData}
            showCheckboxes={false}
            onCellClick={this.handleCellClick}
            page={1}
            count={20}
            headerToolbarMode={"filter"}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}
