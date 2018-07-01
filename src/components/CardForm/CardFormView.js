import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardFormView extends Component {
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={(e) => {
              this.props.updateName(e.target.value);
            }}
            value={this.props.name}
            placeholder="name"
          />
          <input
            type="text"
            onChange={(e) => {
              this.props.updateLocation(e.target.value);
            }}
            value={this.props.location}
            placeholder="location"
          />
          <h1>Name: {this.state.name}</h1>
          <p>Location: {this.state.location}</p>
        </form>
      </div>
    );
  }
}
CardFormView.propTypes = {
  name: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  updateLocation: PropTypes.func.isRequired,
  updateName: PropTypes.func.isRequired,
};

export { CardFormView };
