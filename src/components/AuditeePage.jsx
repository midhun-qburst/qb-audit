import React, { Component } from 'react';
import '../css/welcome-page.css';
import { Button } from 'rmwc/Button';
import { FormField } from 'rmwc/FormField';
import { TextField } from 'rmwc/TextField';

export default class AuditeePage extends Component {
  render() {
    return (
      <div>
        <h1>Auditee Page</h1>
        <FormField className="login-card">
            <TextField label="Auditee" id="username" />
            <div><TextField label="Password" id="password" type="password" /></div>
            <Button raised theme={['primary-bg', 'text-primary-on-secondary']}>Auditee</Button>
        </FormField>
      </div>
    )
  }
}
