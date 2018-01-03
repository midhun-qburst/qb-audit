import React, { Component } from "react";
import Questionnaire from "./Questionnaire";
import DataTables from "material-ui-datatables";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Dialog, {
  DialogRoot,
  DialogSurface,
  DialogHeader,
  DialogHeaderTitle,
  DialogBody,
  DialogFooter,
  DialogFooterButton,
  DialogBackdrop
} from "rmwc/Dialog";

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
    this.handleCellClick = this.handleCellClick.bind(this);
    this.state = {
      questionnaireIsOpen: false
    };
  }
  handleCellClick = event => {
    this.setState({ questionnaireIsOpen: true });
  };

  render() {
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
          />
        </MuiThemeProvider>

        <Dialog
          open={this.state.questionnaireIsOpen}
          onClose={evt => this.setState({ questionnaireIsOpen: false })}
        >
          <DialogRoot>
            <DialogSurface>
              <DialogHeader>
                <DialogHeaderTitle>Audit Parameters</DialogHeaderTitle>
              </DialogHeader>
              <DialogBody>
                <Questionnaire />
              </DialogBody>
              <DialogFooter>
                <DialogFooterButton cancel>Cancel</DialogFooterButton>
                <DialogFooterButton accept>Save</DialogFooterButton>
              </DialogFooter>
            </DialogSurface>
            <DialogBackdrop />
          </DialogRoot>
        </Dialog>
      </div>
    );
  }
}
