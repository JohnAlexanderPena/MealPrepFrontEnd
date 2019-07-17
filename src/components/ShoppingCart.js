import React, { Component } from 'react';
import { Image, Item, Grid, Table, Header, semanticUIReact   } from 'semantic-ui-react'


class ShoppingCart extends Component {

  render() {
    let total = 0

      return(
        <Grid centered>
          <Table style={{width: '800px', height: '800px' , textAlign: 'center'}} basic='very' centered celled collapsing>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Item</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
              </Table.Row>
            </Table.Header><Table.Body>{this.props.clickedMeals.map(meal => {
          return<Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                  <Image src={meal[0].image} rounded size='mini' />
                  <Header.Content>
                    {meal[0].name}
                    <Header.Subheader>{meal[0].veggie}</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell >${meal[0].price}</Table.Cell>
            </Table.Row>

        })}
        <h3 style={{'text-align': 'center'}}>
        Your Total is:
        <strong>
              {this.props.clickedMeals.map( meal => {
                 total += meal[0].price
              })}${total}</strong>
              </h3>
        </Table.Body>
  </Table>
    </Grid>
    )
  }
}

export default ShoppingCart;

// <Table basic='very' celled collapsing>
//   <Table.Header>
//     <Table.Row>
//       <Table.HeaderCell>Item</Table.HeaderCell>
//       <Table.HeaderCell>Price</Table.HeaderCell>
//     </Table.Row>
//   </Table.Header>
//
//   <Table.Body>
//     <Table.Row>
//       <Table.Cell>
//         <Header as='h4' image>
//           <Image src={meal[0].image} rounded size='mini' />
//           <Header.Content>
//             {meal[0].name}
//             <Header.Subheader>{meal[0].veggie}</Header.Subheader>
//           </Header.Content>
//         </Header>
//       </Table.Cell>
//       <Table.Cell>${meal[0].price}</Table.Cell>
//     </Table.Row>
//   </Table.Body>
// </Table>
