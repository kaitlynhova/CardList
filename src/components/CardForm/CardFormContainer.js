import { connect } from 'react-redux';
import * as CardFormActions from './CardFormActions';
import { CardFormView } from './CardFormView';
import { cardFormSelectors } from './CardFormReducer';

const mapStateToProps = state => ({
  ...cardFormSelectors.getState(state),
});

const mapDispatchToProps = dispatch => ({
  updateFormField: (value, field) => {
    dispatch(CardFormActions.updateFormField(value, field));
  },
});

const CardForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardFormView);

export { CardForm };
