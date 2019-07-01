import React, { Component } from 'react';

class Journal extends Component {

  render() {

    const filteredJournals = this.props.journals.filter(entry => entry.user_id === this.props.currentUser.id)

    return (
      <div>
      {filteredJournals.map(journal => {
        return <h3>{journal.content}</h3>
        })}
      </div>
    );
  }

}

export default Journal;
