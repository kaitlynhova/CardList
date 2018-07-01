import { connect } from 'react-redux';
import * as CardFormActions from './CardFormActions';
import { CardFormView } from './CardFormView';

const mapStateToProps = state => ({
  name: state.name,
  location: state.location,
});

const mapDispatchToProps = dispatch => ({
  updateName: (name) => {
    dispatch(CardFormActions.updateName(name));
  },
  updateLocation: (location) => {
    dispatch(CardFormActions.updateLocation(location));
  },
});

const CardForm = connect(
  mapStateToProps,
  mapDispatchToProps,
)(CardFormView);

export { CardForm };
