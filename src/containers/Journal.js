import React, { Component } from 'react';

class Journal extends Component {

  render() {

    const filteredJournals = this.props.journals.filter(entry => entry.user_id === this.props.currentUser.id)

    return (
      <div>
        <h3>Here are all your journal entries, {this.props.currentUser.name}!</h3>
      <ul>
      {filteredJournals.map(journal => {
        return <div><li>{journal.content}</li><br/></div>
        })}
      </ul>
      </div>
    );
  }

}

export default Journal;
