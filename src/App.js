import React, { Component } from 'react';
import './App.css';
import Card from './Card.js';

class App extends Component {
  getPaintings () {
	return [
	  {_id: 1, img: "stefano-veneziano.jpg", artist: "Stefano Veneziano", title: "Madonna and Child Enthroned", year: "1369", place: "Museo Correr, Venice"},
	  {_id: 2, img: "doges.jpg", artist: "idk", title: "Doges Palace", year: "begun 1340", place: "Venice"} 
	]
  }

  renderCards() {
      return this.getPaintings().map((painting) => (
			      <Card key={painting._id} painting={painting} />
			));
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Art History Flashcards</h2>
        </div>
        <p className="App-intro">
		  {this.renderCards()}
        </p>
      </div>
    );
  }
}

export default App;
