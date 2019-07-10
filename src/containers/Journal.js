import React, { Component, Fragment } from 'react';
import { Button, Form, TextArea, Input, Divider, Header, Icon, Table } from 'semantic-ui-react'
import NutrientInfo from '../../src/components/NutrientInfo'
import JournalEntry from '../../src/components/JournalEntry'

// const colors = ["red","orange","yellow","olive","green","teal","blue","violet","purple","pink","brown","grey","black","facebook","google plus","instagram","linkedin","twitter","vk","youtube"]
class Journal extends Component {

  state ={
    searchTerm: "", //captures food search item
    foods: [], //array of found food items
    foodId: "", //id of single selected food from dropdown
    foodToFind: "", //
    selectedFood: 0, //selected food ID
    singleFood: [], //found fetched food
    journalObj: [], //text for journal entry
    newJournals: [], //newJournals to filter through
    newObj: {energy: 0,
      protein: 0,
      sugar: 0,
      fat: 0,
      carbs: 0,
      content: "",
      }
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
    })
  }


  addEntry = (event) => {
    this.setState({
      journalObj: event.target.value
    })
  }

  submitEntry = () => {
    this.props.journalEntry(this.state.newObj)
    // alert('Succesfully Added Entry!')
  }

  handleChange = (event) => {
    const searchItem = event.target.value.split(" ").join("+")
    this.setState({
      searchTerm: searchItem
    })
  }

  getNutrients = () => {
    fetch(`https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=4dEPGqueCE4R1FHqcGYyJG5CAqez9cFnPUHMUtMX&nutrients=205&nutrients=203&nutrients=204&nutrients=208&nutrients=269&ndbno=${this.state.selectedFood}`)
    .then(resp => resp.json())
    .then(foodObj => {
      if (foodObj.errors){
        alert("Item Not in Database!")
      }else{
      this.setState({
          singleFood: foodObj.report.foods[0].nutrients,
          newObj: {
          content: foodObj.report.foods[0].name,
          energy: foodObj.report.foods[0].nutrients[0].value,
          protein: foodObj.report.foods[0].nutrients[1].value,
          sugars: foodObj.report.foods[0].nutrients[2].value,
          fat: foodObj.report.foods[0].nutrients[3].value,
          carbs: foodObj.report.foods[0].nutrients[4].value,
          }
        })
      }
    })
  }


  getCurrentDate(separator=''){
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}/${month<10?`0${month}`:`${month}`}/${date}`
  }


render() {
  const filteredJournals = this.props.journals.filter(entry => entry.user_id === this.props.currentUser.id)
    return (
      <div>
        <h1>Enter Cheat Food</h1>
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
      </select><Button color='blue' onClick={this.getNutrients} >Check Nutrients</Button>
    <Button color='blue' onClick={this.submitEntry }>Add To Food Journal Entry</Button>
      <Divider horizontal>
        <Header as='h4'>
          <Icon color='blue' name='bar chart' />
          Nutritional Information
        </Header>
      </Divider>

    {this.state.singleFood.map(nutrient => {
      return <NutrientInfo key={nutrient} nutrient={nutrient}/>
    })}
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
            filteredJournals.map(food =>{
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

// <Form onSubmit={this.submitEntry}>
// <TextArea onChange={this.addEntry}placeholder='Type Here' />
// <Button color={colors} onClick={this.handleEntry} >Add New Entry</Button>
// </Form>


// <h3>Posted at: {this.getCurrentDate()}</h3>

// <Button>Edit</Button><h3>Posted at: {this.getCurrentDate()}</h3>
