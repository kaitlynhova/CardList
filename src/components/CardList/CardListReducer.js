import { types } from './CardListActions';

const defaultState = {
  cardList: {},
};

const cardListReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.UPDATE_CARD_LIST:
      return { ...state, cardList: action.cardList };
    default:
      return state;
  }
};

const getState = globalState => globalState.components.cardList;
export const cardListSelectors = { getState };
export default cardListReducer;
