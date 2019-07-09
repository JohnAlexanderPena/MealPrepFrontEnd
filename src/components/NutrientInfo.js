import React from 'react';
import { Table } from 'semantic-ui-react'


const NutrientInfo = (props) => {
    return (
  <React.Fragment>
        <Table.Row>
          <Table.Cell width={2}>{props.nutrient.nutrient}</Table.Cell>
          <Table.Cell>{props.nutrient.value}</Table.Cell>
        </Table.Row>
  </React.Fragment>
    );

}

export default NutrientInfo;
