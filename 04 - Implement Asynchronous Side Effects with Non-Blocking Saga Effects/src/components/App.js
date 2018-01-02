import React, { Component } from 'react';

import './App.css'

class App extends Component {

  handleFetchClick = () => {
    this.props.fetchStarWarsRequest()
    this.setState({open: true})
  }

  render() {
    return (
      <div>
        <h1>Redux Saga</h1>
        <div>
          { 
            this.props.starWars.people.map((person, i) => 
            <h4 key={i}>{person.name}</h4>
            )
          }
        </div>
        <button onClick={this.handleFetchClick}>Load More</button>
      </div>
    );
  }
}

export default App;
