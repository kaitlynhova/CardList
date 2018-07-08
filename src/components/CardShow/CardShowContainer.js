import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import * as CardShowActions from './CardShowActions';
import { CardShowView } from './CardShowView';
import { cardShowSelectors } from './CardShowReducer';

const mapStateToProps = state => ({
  ...cardShowSelectors.getState(state),
});

const mapDispatchToProps = dispatch => ({
  loadCard: (cardObject) => {
    dispatch(CardShowActions.loadCard(cardObject));
  },
});

const CardShow = connect(
  mapStateToProps,
  mapDispatchToProps,
)(withRouter(CardShowView));

export { CardShow };
