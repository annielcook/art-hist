import React, { Component } from 'react';

class Painting extends Component {

  render() {
	const src = `${process.env.PUBLIC_URL}/img/${this.props.painting.img}`;
	return (
	  <img alt={this.props.painting.title} src={src}/>
    );
  }
}


export default Painting;
