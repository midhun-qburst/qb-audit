import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import DataTables from "material-ui-datatables";
import Select from "rmwc/Select";
import Button from "rmwc/Button";
import Snackbar from "rmwc/Snackbar";

const tableColumns = [
  {
    key: "name",
    label: "Auditee",
    sortable: true
  },
  {
    key: "auditor",
    label: "Auditor",
    render: (name, all) => (
      <Select options={{ "1": "Rupert", "2": "Henry", "3": "Shaun" }} />
    ),
    style: {
      padding: 5
    }
  }
];

const tableData = [
  {
    name: "John"
  },
  {
    name: "Jean"
  }
];
export default class Organizer extends Component {
  constructor(props) {
    super();
    this.state = {
      snackbarIsOpen: false
    }
  }

  render() {
    return (
      <div>
        <h2>Organizer</h2>
        <h3>Auditees for next month</h3>

        <MuiThemeProvider>
          <DataTables
            height={"auto"}
            selectable={true}
            enableSelectAll={true}
            showRowHover={true}
            multiSelectable={true}
            columns={tableColumns}
            data={tableData}
            showCheckboxes={true}
            onCellClick={this.handleCellClick}
            page={1}
            count={20}
          />
        </MuiThemeProvider>
        <Button
          raised
          theme={["primary-bg", "text-primary-on-secondary"]}
          onClick={()=> {this.setState({snackbarIsOpen: true})}}
        >
          Assign
        </Button>
        <Snackbar
          show={this.state.snackbarIsOpen}
          onClose={evt => this.setState({ snackbarIsOpen: false })}
          message="Assigned"
          actionText="Dismiss"
          actionHandler={() => {}}
        />
      </div>
    );
  }
}
