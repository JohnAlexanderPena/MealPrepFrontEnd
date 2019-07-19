import React, { Fragment } from 'react';
import { Table } from 'semantic-ui-react'


const NutrientInfo = (props) => {
    return (
      <Fragment>
        <Table.Row >
          <Table.Cell>{props.nutrient.nutrient}</Table.Cell>
          <Table.Cell>{props.nutrient.value}</Table.Cell>
        </Table.Row>
      </Fragment>
    );

}

export default NutrientInfo;
