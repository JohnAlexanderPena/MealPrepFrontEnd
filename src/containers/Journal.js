import React, { Component, Fragment } from 'react';
import { Button, Input, Divider, Header, Icon, Table } from 'semantic-ui-react'
import NutrientInfo from '../../src/components/NutrientInfo'
// import JournalEntry from '../../src/components/JournalEntry'

// const colors = ["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black","facebook","google plus","instagram","linkedin","twitter","vk","youtube"]
class Journal extends Component {

  state ={
    searchTerm: "", //captures food search item
    foods: [], //array of found food items
    foodId: "", //id of single selected food from dropdown
    foodToFind: "", //
    added: "",
    selectedFood: 0, //selected food ID
    singleFood: [], //found fetched food
    journalObj: [], //text for journal entry
    newJournals: [], //newJournals to filter through
    journals: [],
    newObj: {energy: 0,
      protein: 0,
      sugar: 0,
      fat: 0,
      carbs: 0,
      content: "",
      }
    }

    getNutrients = () => {
      fetch(`https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=4dEPGqueCE4R1FHqcGYyJG5CAqez9cFnPUHMUtMX&nutrients=205&nutrients=203&nutrients=204&nutrients=208&nutrients=269&ndbno=${this.state.selectedFood}`)
      .then(resp => resp.json())
      .then(foodObj => {
        if (foodObj.errors || foodObj.report.foods[0].nutrients.length === 0){
          alert("Item Has No Nutritional Info!")
        }else{
          this.setState({
            singleFood: foodObj.report.foods[0].nutrients,
            newObj: {
              content: foodObj.report.foods[0].name,
              energy: foodObj.report.foods[0].nutrients[0].value,
              protein: foodObj.report.foods[0].nutrients[1].value,
              sugar: foodObj.report.foods[0].nutrients[2].value,
              fat: foodObj.report.foods[0].nutrients[3].value,
              carbs: foodObj.report.foods[0].nutrients[4].value,
            }
          })
        }
      })
    }


  findFoods = (event) => {
    event.preventDefault()
    fetch(`https://api.nal.usda.gov/ndb/search/?format=json&q=${this.state.searchTerm}&sort=n&max=25&offset=0&api_key=4dEPGqueCE4R1FHqcGYyJG5CAqez9cFnPUHMUtMX`)
    .then(resp => resp.json())
    .then(searchObj => {
      if (searchObj.errors){
        alert(" Item Not in Database!")
      }else{
      this.setState({
        foods: searchObj.list.item
      })
    }
  })
}

  handleOptionChange = (event) => {
    this.setState({
      selectedFood: event.target.value
    }, () => this.getNutrients())
  }


  addEntry = (event) => {
    this.setState({
      journalObj: event.target.value
    })
  }
  //
  // componentDidMount() {
  //   fetch(`http://localhost:3000/users/${this.props.currentUser.id}/get_journals`)
  //     .then(value => value.json())
  //       .then(response => {
  //         this.setState({
  //           journals: response
  //         })
  //       })
  // }

  journalEntry = () => {
    fetch('http://localhost:3000/journals', {
      method: "POST",
      headers: {
        "Accept":"application/json",
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        energy: this.state.newObj.energy,
        content: this.state.newObj.content,
        protein: this.state.newObj.protein,
        sugar: this.state.newObj.sugar,
        carbs: this.state.newObj.carbs,
        fat: this.state.newObj.fat,
        user_id: this.props.currentUser.id
        })
      })
    }


  handleChange = (event) => {
    const searchItem = event.target.value.split(" ").join("+")
    this.setState({
      searchTerm: searchItem
    })
  }



  // componentDidMount(){
  //
  //   fetch(`http://localhost:3000/users/${this.props.currentUser.id}/get_journals` )
  //   .then(resp => resp.json())
  //   .then(response => {
  //     console.log(response)
  //   })
  // }

render() {
  console.log(this.state, "MOUNTED JOURNAL")

    return (
      <div style={{textAlign: 'center'}}>
        <h3 style={{textAlign: 'center', color: 'rgb(41,135,205)'}}><strong>Search for and add foods to keep track of your macros!</strong></h3>
          <Input
              placeholder="Search Foods"
              onChange={this.handleChange}
              name="searchTerm"
            /><Button color='blue' onClick={this.findFoods}>Search Foods</Button>
      <select onChange={this.handleOptionChange}>
        {this.state.foods.map(food => {
          return <option value={food.ndbno}>{food.name}</option>
          }
        )}
      </select>
    <Button color='blue' onClick={this.journalEntry }>Add To Food Journal Entry</Button>
      <Divider horizontal>
        <Header as='h4'>
          <Icon color='blue' name='bar chart' />
          Nutritional Information
        </Header>
      </Divider>
<div style={{display: 'inline-block'}}>
    {this.state.singleFood.map(nutrient => {
      return <NutrientInfo key={nutrient} nutrient={nutrient}/>
    })}
  </div>
          <Divider color='blue' horizontal>
            <Header as='h2'>
              <Icon color='blue' name='book' />
              Here Are Your Journal Entries {this.props.currentUser.username}!
            </Header>
          </Divider>
          <Table definition>
            <Table.Body color='blue'>
              <Table color='blue'>
          {
            this.props.journals.map(food =>{
              return <Fragment key={food.id}>
                  <Table.Row>
                    <Table.HeaderCell>Food</Table.HeaderCell>
                    <Table.HeaderCell>Energy(Calories)</Table.HeaderCell>
                    <Table.HeaderCell>Protein</Table.HeaderCell>
                    <Table.HeaderCell>Sugars</Table.HeaderCell>
                    <Table.HeaderCell>Carbs</Table.HeaderCell>
                    <Table.HeaderCell>Fat</Table.HeaderCell>
                    </Table.Row>
                  <Table.Body>
                      <Table.Cell>{food.content}</Table.Cell>
                      <Table.Cell>{food.energy}</Table.Cell>
                      <Table.Cell>{food.protein}</Table.Cell>
                      <Table.Cell>{food.sugar}</Table.Cell>
                      <Table.Cell>{food.carbs}</Table.Cell>
                      <Table.Cell>{food.fat}</Table.Cell>
                </Table.Body>
              <h4 color='blue'>Date Posted: {food.created_at.slice(0, -14)}</h4>
              </Fragment>
            })
          }
        </Table>
        </Table.Body>
        </Table>
    </div>
    );
  }

}

export default Journal;
