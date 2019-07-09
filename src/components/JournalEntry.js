import React, { Component, Fragment } from 'react';
import { Table } from 'semantic-ui-react'


const JournalEntry = (props) => {
    return (
      <Fragment>
          <Table.Row>
            <Table.HeaderCell>Date Posted</Table.HeaderCell>
            <Table.HeaderCell>Energy(Calories)</Table.HeaderCell>
            <Table.HeaderCell>Protein</Table.HeaderCell>
            <Table.HeaderCell>Sugars</Table.HeaderCell>
            <Table.HeaderCell>Carbs</Table.HeaderCell>
            <Table.HeaderCell>Fat</Table.HeaderCell>
            </Table.Row>
          <Table.Body>
            <Table.Cell>{props.food.content}</Table.Cell>
            <Table.Cell>{props.food.energy}</Table.Cell>
          <Table.Cell>{props.food.protein}</Table.Cell>
          <Table.Cell>{props.food.sugar}</Table.Cell>
              <Table.Cell>{props.food.carbs}</Table.Cell>
              <Table.Cell>{props.food.fat}</Table.Cell>

      </Table.Body>
      </Fragment>
      )
}

export default JournalEntry
