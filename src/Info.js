import React, { Component, PropTypes } from 'react';

class Info extends Component {

  render() {
	return (
	  <div>
  		<p>{this.props.painting.title}</p>
		<p>{this.props.painting.artist}</p>
		<p>{this.props.painting.year}</p>
	  </div>
	);
  }
}


export default Info;
