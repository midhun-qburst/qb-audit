import React, { Component } from "react";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import DataTables from "material-ui-datatables";
import Select from 'rmwc/Select';
import { Button } from "rmwc/Button";

const tableColumns = [
    {
      key: "name",
      label: "Auditee",
      sortable: true,

    },
    {
        key: "auditor",
        label: "Auditor",
        render: (name, all) => <Select options={{'1': 'Cookies', '2': 'Pizza', '3': 'Icecream'}}/>,
        style: {
            padding: 5,
          },
      }
    
  ];
  
  const tableData = [
    {
      name: "John",
    },
    {
      name: "Jean",
    }
  ];
export default class Organizer extends Component {
  constructor(props) {
    super();
  }

  render() {
    return (
      <div>
        <h2>Organizer</h2>

        <MuiThemeProvider>
          <DataTables
            height={"auto"}
            selectable={true}
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
            onClick={this.handleSubmit}
          >
           Assign
          </Button>
      </div>
    );
  }
}
