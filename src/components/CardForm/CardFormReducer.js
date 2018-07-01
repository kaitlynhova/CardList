import { types } from './CardFormActions';

const cardFormReducer = (state = { name: 'Cat Hova', location: 'home' }, action) => {
  switch (action.type) {
    case types.UPDATE_NAME:
      return { ...state, name: action.name };
    case types.UPDATE_LOCATION:
      return { ...state, location: action.location };
    default:
      return state;
  }
};

export default cardFormReducer;
