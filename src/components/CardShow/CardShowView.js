import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';

class CardShowView extends PureComponent {
  componentDidMount() {
    const cardId = this.props.match.params.id;
    fetch(`https://supportcards-bb694.firebaseio.com/cards/${cardId}.json`)
      .then(response => response.json())
      .then(body => this.props.loadCard(body))
      .catch(err => console.error('oh noez', err));
  }
  render() {
    return <div>{JSON.stringify(this.props.cardObject)}</div>;
  }
}

CardShowView.propTypes = {
  // eslint-disable-next-line react/no-typos
  match: ReactRouterPropTypes.match.isRequired,
  cardObject: PropTypes.object.isRequired,
  loadCard: PropTypes.func.isRequired,
};

export { CardShowView };
