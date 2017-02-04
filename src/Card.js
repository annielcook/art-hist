import React, { Component } from 'react';
import Painting from './Painting.js';
import Info from './Info.js';

class Card extends Component {
  constructor(props) {
    super(props);
	this.state = {
	  flipped: false
	};
  }

  flip(){
	this.setState(prevState => ({
	  flipped: !prevState.flipped
	}));
  }

  render() {
	const flipped = this.state.flipped;
	return (
		<div onClick={(e) => this.flip(e)}>
		{!flipped ? (
		  <Painting painting={this.props.painting}/>
		) : (
		  <Info painting={this.props.painting}/> 
		)}

		</div>
    );
  }
}

export default Card;
