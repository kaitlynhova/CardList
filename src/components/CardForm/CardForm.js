import React, { Component } from 'react';

class CardForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
    };
    this.updateName = this.updateName.bind(this);
    this.updateLocation = this.updateLocation.bind(this);
  }
  updateName(event) {
    this.setState({ name: event.target.value });
  }
  updateLocation(event) {
    this.setState({ location: event.target.value });
  }
  render() {
    return (
      <div>
        <form>
          <input
            type="text"
            onChange={this.updateName}
            value={this.state.name}
            placeholder="Name"
          />
          <input
            type="text"
            onChange={this.updateLocation}
            value={this.state.location}
            placeholder="Location"
          />
          <h1>Name: {this.state.name}</h1>
          <p>Location: {this.state.location}</p>
        </form>
      </div>
    );
  }
}
export { CardForm };
