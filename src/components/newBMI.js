import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Popup, Input } from 'semantic-ui-react'

class newBmi extends Component {

  render() {
    console.log("NEW BMI")

    return (
      <React.Fragment>
        <Popup
          trigger={<Button>Click me</Button>}
          content={
          <Form.Group widths={1}>
            <Form.Input onChange={this.handleChange}  type="password" name='weight' placeholder='Weight(pounds)' />
            <Form.Input onChange={this.handleChange}  type="number" name='age' placeholder='Age' />
            <Form.Input onChange={this.handleChange}  type="number" name='height' placeholder='Height(inches)' />
          </Form.Group>}
          on='click'
          hideOnScroll
        />
      </React.Fragment>
    );
  }

}

export default newBmi;
