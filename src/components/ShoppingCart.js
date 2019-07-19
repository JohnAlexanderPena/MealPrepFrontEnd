import React, { Component } from 'react';
import { Image, Item, Grid, Table, Header, Divider   } from 'semantic-ui-react'


class ShoppingCart extends Component {

  render() {
    console.log(this.props.clickedMeals)

    let total = 0

      return(
        <div>
        <Grid centered>
          <Table style={{width: '50%', height: '800px'}} basic='very' centered celled collapsing>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Item</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
              </Table.Row>
            </Table.Header><Table.Body>{this.props.clickedMeals.map(meal => {
          return<Table.Row>
              <Table.Cell>
                <Header as='h4' image>
                  <Image src={meal[0].image} rounded size='huge'/>
                  <Header.Content>
                    {meal[0].name}
                    <Header.Subheader>{meal[0].veggie}</Header.Subheader>
                  </Header.Content>
                </Header>
              </Table.Cell>
              <Table.Cell >${meal[0].price}</Table.Cell>
            </Table.Row>
        })}
        </Table.Body>
  </Table>
    </Grid>
    <div><h3 style={{'text-align': 'center'}}>
        Your Total is:
        <strong>
          <Divider horizontal>
              {this.props.clickedMeals.map( meal => {
                 total += meal[0].price
              })}${total}</Divider></strong>
              </h3></div>
          </div>
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
