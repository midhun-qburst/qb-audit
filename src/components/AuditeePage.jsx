import React, { Component } from 'react';
import '../css/welcome-page.css';
import DataTables from 'material-ui-datatables';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider'

import { Button } from 'rmwc/Button';
import { FormField } from 'rmwc/FormField';
import { TextField } from 'rmwc/TextField';

const tableColumns = [
  {
    key: 'rating',
    label: 'Rating',
  }, {
    key: 'duration',
    label: 'Duration',
  },
];

const tableData = [
  {
    rating: '10/10',
    duration: 'Jan - Jun',
  },
  {
    rating: '6/10',
    duration: 'Jul - Dec',
  }
];
export default class AuditeePage extends Component {
  render() {
    return (
      <div>
        <h1>Auditee Page</h1>
        <MuiThemeProvider>
        <DataTables
        height={'auto'}
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
              </MuiThemeProvider>

      </div>
    )
  }
}
