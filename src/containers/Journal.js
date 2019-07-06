import React, { Component } from 'react';
import { Button, Form, Image, List, Search, TextArea, Input, Divider, Header, Icon, Table } from 'semantic-ui-react'
import Modal from '../../src/components/Modal'
import NutrientInfo from '../../src/components/NutrientInfo'

class Journal extends Component {

  state ={
    searchTerm: "",
    foods: [],
    foodId: "",
    foodToFind: "",
    selectedFood: 0,
    singleFood: [],
    journalObj: "",
    newJournals: []
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
        foods: searchObj.list.item,
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
    this.props.journalEntry(this.state.journalObj)
  }

  handleChange = (event) => {
    const searchItem = event.target.value.split(" ").join("+")
    this.setState({
      searchTerm: searchItem
    })
  }

  getNutrients = () => {
    fetch(`https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=4dEPGqueCE4R1FHqcGYyJG5CAqez9cFnPUHMUtMX&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno=${this.state.selectedFood}`)
    .then(resp => resp.json())
    .then(foodObj => {
      if (foodObj.errors){
        alert(" Item Not in Database!")
      }else{
      this.setState({
        singleFood: foodObj.report.foods[0].nutrients
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
      <List divided position="centered">
        <h1>Enter Cheat Food</h1>
          <Input
              onChange={this.handleChange}
              name="searchTerm"
            /><Button onClick={this.findFoods}>Search Foods</Button>
      <select onChange={this.handleOptionChange}>
        {this.state.foods.map(food => {
          return <option value={food.ndbno}>{food.name}</option>
          }
        )}
      </select><Button onClick={this.getNutrients} >Check Nutrients</Button>
      <Divider horizontal>
        <Header as='h4'>
          <Icon name='food' />
          Description
        </Header>
      </Divider>
      <p >
        Check Out The Nutritional Info of Foods
      </p>

      <Divider horizontal>
        <Header as='h4'>
          <Icon name='bar chart' />
          Nutritional Information
        </Header>
      </Divider>
      <Table definition>
          <Table.Body>
    {this.state.singleFood.map(nutrient => {
      return <NutrientInfo nutrient={nutrient}/>
    })}
          </Table.Body>
          </Table>
        <h3>Here are all your journal entries, {this.props.currentUser.name}!</h3>
          {filteredJournals.map(journal => {
          return  <List.Item style={{width: "1000px"}}>
                    <List.Content style={{width: "370px"}}floated='right'>
                    </List.Content>
                  <Image avatar src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/30d19077-7248-43b4-b5e9-eb73e2e2ddbb/d5dmp3t-caf226cb-e3c0-49cb-9c8f-53878cc6b4b2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMwZDE5MDc3LTcyNDgtNDNiNC1iNWU5LWViNzNlMmUyZGRiYlwvZDVkbXAzdC1jYWYyMjZjYi1lM2MwLTQ5Y2ItOWM4Zi01Mzg3OGNjNmI0YjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jZki5TRxpZ3rwNekrKP3k1PdvhFamdSaUlqfgRL_09E' />
                  <List.Content style={{width: "800px"}}>{journal.content}</List.Content>
                  <Button>Edit</Button><h3>Posted at: {this.getCurrentDate()}</h3></List.Item>
                })}
          <Form onSubmit={this.submitEntry}>
             <TextArea onChange={this.addEntry}placeholder='Type Here' />
             <Button onClick={this.handleEntry} >Add New Entry</Button>
          </Form>
    </List>
    );
  }

}

export default Journal;
