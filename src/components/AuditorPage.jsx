import React, { Component } from "react";
import "../css/welcome-page.css";
import questionnaire from "./questionnaire";
import DataTables from "material-ui-datatables";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

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
    rating: "9"
  },
  {
    name: "Jean",
    rating: "8"
  }
];
export default class AuditorPage extends Component {

  constructor(props) {
    super(props);
  }
  handleCellClick = (event) => {
    <Questionaire/>


  }

  render() {
    return (
      <div>
        <h1>Auditor Page</h1>
        <MuiThemeProvider>
          <DataTables
            height={"auto"}
            selectable={false}
            showRowHover={true}
            columns={tableColumns}
            data={tableData}
            showCheckboxes={false}
            onCellClick={this.handleCellClick}
            //onCellDoubleClick={this.handleCellDoubleClick}
            //onFilterValueChange={this.handleFilterValueChange}
            //onSortOrderChange={this.handleSortOrderChange}
            page={1}
            count={20}
          />
        </MuiThemeProvider>
      </div>
    );
  }
}
