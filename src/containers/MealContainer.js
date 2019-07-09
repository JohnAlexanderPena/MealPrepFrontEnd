import React, { Component } from 'react';
import {  Button, Search, Card, Item, Label, Image, Icon } from 'semantic-ui-react'


class MealContainer extends Component {

  render() {
    return (
      <Item.Group divided>

            {this.props.meals.map(meal => {
              return <Item> />
                      <Item.Image src={meal.image} />
                <Item.Content>
                  <Item.Header as='a'>{meal.name}</Item.Header>
                  <Item.Meta>
                    <span className='cinema'>Protein: {meal.protein}</span>
                    </Item.Meta>
                    <Item.Meta>
                    <span className='cinema'>Fat:{meal.fat}</span>
                    </Item.Meta>
                    <Item.Meta>
                    <span className='cinema'>Price:$8</span>
                    </Item.Meta>
                    <Item.Meta>
                    <span className='cinema'>Energy:{meal.energy}</span>
                  </Item.Meta>
                  <Item.Description> Veggies es bonus vobis, proinde vos postulo essum magis kohlrabi welsh onion daikon amaranth tatsoi tomatillo melon azuki bean garlic.!</Item.Description>
                  <Item.Extra>
                    <Button primary floated='right'>
                      Buy Meal
                      <Icon name='right chevron' />
                    </Button>
                    <Label>Limited</Label>
                  </Item.Extra>
                </Item.Content>
              </Item>
                   })}
        </Item.Group>
          );
        }
}

export default MealContainer;

//
// <Search position='right'
//   onSearchChange={this.handleChange}
//   name="searchTerm"/>

// <Item.Group divided>
//     <Item>
//       <Item.Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
//
//       <Item.Content>
//         <Item.Header as='a'>My Neighbor Totoro</Item.Header>
//         <Item.Meta>
//           <span className='cinema'>IFC Cinema</span>
//         </Item.Meta>
//         <Item.Description>{paragraph}</Item.Description>
//         <Item.Extra>
//           <Button primary floated='right'>
//             Buy tickets
//             <Icon name='right chevron' />
//           </Button>
//           <Label>Limited</Label>
//         </Item.Extra>
//       </Item.Content>
//     </Item>
//   </Item.Group>
