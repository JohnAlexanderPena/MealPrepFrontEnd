import React, { Component } from 'react';
import { Image, Item, Grid, Table, Header, Divider, Button } from 'semantic-ui-react'
import StripeCheckout from 'react-stripe-checkout';

class ShoppingCart extends Component {

  state = {
    clicked: false
  }

  checkout = () => {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  onToken = (token) => {
    fetch('http://localhost:3000/charge', {
      method: 'POST',
      body: JSON.stringify(token),
    }).then(response => {
      response.json().then(data => {
        alert(`We are in business, ${data.email}`);
      });
    });
  };

  render() {
    let total = 0
  console.log(this.state.clicked)
      return(
        <div>
        <Grid centered>
          <Table style={{width: '50%', height: '800px'}} basic='very' centered celled collapsing>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>Item</Table.HeaderCell>
                <Table.HeaderCell>Price</Table.HeaderCell>
              </Table.Row>
            </Table.Header><Table.Body>{this.props.clickedMeals === undefined ||this.props.clickedMeals.length <= 0 ? null : this.props.clickedMeals.map(meal => {
          return <Table.Row>
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
              {this.props.clickedMeals === undefined ||this.props.clickedMeals.length <= 0 ? <h2>Error</h2> : this.props.clickedMeals.map( meal => {
                 total += meal[0].price
              })}${total}</Divider>
            <Button onClick ={ this.checkout} color='blue' content='Checkout' />
            { this.state.clicked ? <StripeCheckout
                                      amount={total*100}
                                      stripeKey= {process.env.REACT_APP_TEST_KEY}
                                      token={this.onToken}
                                      /> :
                          null
                        }
              </strong>
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
