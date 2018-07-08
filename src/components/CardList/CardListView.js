import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

class CardListView extends PureComponent {
  componentDidMount() {
    fetch('https://supportcards-bb694.firebaseio.com/cards.json')
      .then(response => response.json())
      .then(body => this.props.updateCardList(body))
      .catch(err => console.error('oh noez', err));
  }
  render() {
    console.log(this.props.cardList);
    return (
      <div>
        <div>THE CARD LIST!!!</div>
        <div>
          {Object.values(this.props.cardList).map(card => (
            <div style={{ background: '#f5f5f5', margin: 5, padding: 5 }}>
              <p>{card.reason}</p>
              <p>{card.name}</p>
              <p>{card.location}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
CardListView.propTypes = {
  cardList: PropTypes.objectOf(PropTypes.Object).isRequired,
  updateCardList: PropTypes.func.isRequired,
};

export { CardListView };
