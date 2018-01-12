import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import DataTables from "material-ui-datatables";
import Select from "rmwc/Select";
import Button from "rmwc/Button";
import Snackbar from "rmwc/Snackbar";
import "../css/page-card.css";

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
      <Select
        style={{ width: 400 }}
        options={{ "1": "Rupert", "2": "Henry", "3": "Shaun" }}
      />
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
//Status table

const statusTableColumns = [
  {
    key: "name",
    label: "Auditee",
    sortable: true
  },
  {
    key: "auditor",
    label: "Auditor"
  },
  {
    key: "status",
    label: "Status"
  },
  {
    key: "rating",
    label: "Rating"
  },
  {
    key: "finalStatus",
    label: "Final Status"
  }
];

export default class Organizer extends Component {
  constructor(props) {
    super();
    this.state = {
      snackbarIsOpen: false,
      statusTableData: [
        {
          name: "John",
          auditor: "Rupert",
          status: "In progress",
          rating: 10,
          finalStatus: "Good"
        },
        {
          name: "Jenna",
          auditor: "Rupert",
          status: "In progress",
          rating: 10,
          finalStatus: "Good"
        },
        {
          name: "Alex",
          auditor: "Rupert",
          status: "In progress",
          rating: 10,
          finalStatus: "Good"
        }
      ],
      newArray: []
    };
  }
  handleFilterValueChange = searchText => {
    let newArray = this.state.statusTableData.filter(data =>
      data.name.includes(searchText)
    );
    this.setState({ newArray: newArray });
    console.log(this.state.newArray);
  };
  componentDidMount() {
    this.setState({ newArray: this.state.statusTableData });
  }
  render() {
    return (
      <div>
        <h2>Organizer</h2>
        <div className="page-card">
          <MuiThemeProvider>
            <DataTables
              title="Auditees for next month"
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
              showHeaderToolbar={true}
            />
          </MuiThemeProvider>
          <Button
            raised
            theme={["primary-bg", "text-primary-on-secondary"]}
            onClick={() => {
              this.setState({ snackbarIsOpen: true });
            }}
          >
            Assign
          </Button>
        </div>
        <Snackbar
          show={this.state.snackbarIsOpen}
          onClose={evt => this.setState({ snackbarIsOpen: false })}
          message="Assigned"
          actionText="Dismiss"
          actionHandler={() => {}}
        />

        <div className="page-card">
          <MuiThemeProvider>
            <DataTables
              title="Status"
              height={"auto"}
              selectable={true}
              enableSelectAll={true}
              showRowHover={true}
              multiSelectable={true}
              columns={statusTableColumns}
              data={this.state.newArray}
              showCheckboxes={true}
              onCellClick={this.handleCellClick}
              page={1}
              count={20}
              filterHintText
              filterValue="John"
              showHeaderToolbar={true}
              onFilterValueChange={this.handleFilterValueChange}
            />
          </MuiThemeProvider>
        </div>
      </div>
    );
  }
}
