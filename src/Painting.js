import React, { Component, PropTypes } from 'react';

class Painting extends Component {

  render() {
	const src = `${process.env.PUBLIC_URL}/img/${this.props.painting.img}`;
	return (
	  <img src={src}/>
    );
  }
}

Painting.propTypes = {
	painting: PropTypes.object.isRequired,
};

export default Painting;
