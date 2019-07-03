import React, { Component } from 'react';
import { Button, Form, Grid, Header, Image, Message, Segment, List, Search } from 'semantic-ui-react'


class Journal extends Component {

  state ={
    searchTerm: "",
    foods: [],
    foodId: "",
    foodToFind: "",
    selectedFood: "",
    singleFood: []
  }

  findFoods = (event) => {
    event.preventDefault()
    fetch(`https://api.nal.usda.gov/ndb/search/?format=json&q=${this.state.searchTerm}&sort=n&max=25&offset=0&api_key=4dEPGqueCE4R1FHqcGYyJG5CAqez9cFnPUHMUtMX`)
    .then(resp => resp.json())
    .then(searchObj => {
      this.setState({
        foods: searchObj.list.item,
      })
    })
  }

  handleOptionChange = (event) => {
    this.setState({
      selectedFood: event.target.value
    })
  }

  getFoodInfo = () => {

    fetch('https://api.nal.usda.gov/ndb/nutrients/?format=json&api_key=4dEPGqueCE4R1FHqcGYyJG5CAqez9cFnPUHMUtMX&nutrients=205&nutrients=204&nutrients=208&nutrients=269&ndbno=45084373')
    .then(resp => resp.json())
    .then(foodObj => {
      this.setState({
        singleFood: foodObj
      })
    })
  }


  handleChange = (event) => {
    console.log("CHANING  STATE")
    this.setState({
      searchTerm: event.target.value
    })
  }

  // handleSearchSubmit = (event) =>{
  //   event.preventDefault()
  //   this.setState({
  //     foodToFind: this.state.searchTerm
  //   })
  // }
  getCurrentDate(separator=''){

  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${month<10?`0${month}`:`${month}`}${separator}${date}`
  }


render() {
const filteredJournals = this.props.journals.filter(entry => entry.user_id === this.props.currentUser.id)

    return (
      <List divided verticalAlign='middle'>
        <h3>Here are all your journal entries, {this.props.currentUser.name}!</h3>
          {filteredJournals.map(journal => {
          return  <List.Item style={{width: "1000px"}}>
                    <List.Content style={{width: "370px"}}floated='right'>
                    </List.Content>
                  <Image avatar src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/30d19077-7248-43b4-b5e9-eb73e2e2ddbb/d5dmp3t-caf226cb-e3c0-49cb-9c8f-53878cc6b4b2.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzMwZDE5MDc3LTcyNDgtNDNiNC1iNWU5LWViNzNlMmUyZGRiYlwvZDVkbXAzdC1jYWYyMjZjYi1lM2MwLTQ5Y2ItOWM4Zi01Mzg3OGNjNmI0YjIucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.jZki5TRxpZ3rwNekrKP3k1PdvhFamdSaUlqfgRL_09E' />
                  <List.Content style={{width: "800px"}}>{journal.content}</List.Content>
                  Posted at: {this.getCurrentDate()}
                  <Button>Edit</Button></List.Item>
                })}
      <form>
        <h1>Enter Cheat Food</h1>
          <Search
              onSearchChange={this.handleChange}
              name="searchTerm"
            />
        <button onClick={this.findFoods}>Search Foods</button>
      </form>
      <select onChange={this.handleOptionChange}>
        {this.state.foods.map(food => {
          return <option >{food.name}</option>
          }
        )}
      </select>
    </List>
    );
  }

}

export default Journal;
