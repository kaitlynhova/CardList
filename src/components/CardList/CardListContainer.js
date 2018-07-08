import { connect } from 'react-redux';

import * as CardListActions from './CardListActions';
import { CardListView } from './CardListView';
import { cardListSelectors } from './CardListReducer';

const mapStateToProps = state => ({
  cardList: cardListSelectors.getState(state).cardList,
});

const mapDispatchToProps = dispatch => ({
  updateCardList: (cardList) => {
    dispatch(CardListActions.updateCardList(cardList));
  },
});

const CardList = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardListView);

export { CardList };
