import React, { Fragment } from 'react';
import { Table } from 'semantic-ui-react'


const NutrientInfo = (props) => {

    return (
      <Fragment>
        <Table.Row >
          <Table.Cell style={{color: 'rgb(41,135,205)',}}><strong> {props.nutrient.nutrient} </strong></Table.Cell>
          <Table.Cell style={{color: 'rgb(41,135,205)'}}><strong> {props.nutrient.value} {props.nutrient.unit} </strong></Table.Cell>
        </Table.Row>
      </Fragment>
    );

}

export default NutrientInfo;
