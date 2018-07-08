import { types } from './CardShowActions';

const defaultState = {
  cardObject: {
    email: '',
    location: '',
    name: '',
    reason: '',
  },
};

const cardShowReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.LOAD_CARD:
      return {
        ...state,
        cardObject: action.cardObject,
      };
    default:
      return state;
  }
};

const getState = globalState => globalState.components.cardShow;
export const cardShowSelectors = { getState };
export default cardShowReducer;
