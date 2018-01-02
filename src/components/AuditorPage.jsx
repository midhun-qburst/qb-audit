import React, { Component } from "react";
import "../css/welcome-page.css";
import Questionaire from "./Questionaire";
import DataTables from "material-ui-datatables";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

import { Button } from "rmwc/Button";
import { FormField } from "rmwc/FormField";
import { TextField } from "rmwc/TextField";

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
  render() {
    return (
      <div>
        <h1>Auditor Page</h1>
        <Questionaire/>
        {/* <MuiThemeProvider>
          <DataTables
            height={"auto"}
            selectable={false}
            showRowHover={true}
            columns={tableColumns}
            data={tableData}
            showCheckboxes={false}
            // onCellClick={this.handleCellClick}
            //onCellDoubleClick={this.handleCellDoubleClick}
            //onFilterValueChange={this.handleFilterValueChange}
            //onSortOrderChange={this.handleSortOrderChange}
            page={1}
            count={100}
          />
        </MuiThemeProvider> */}
      </div>
    );
  }
}
