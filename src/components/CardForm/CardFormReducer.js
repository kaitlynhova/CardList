import { types } from './CardFormActions';

const defaultState = {
  reason: "It's the right thing to do",
  name: 'Cat Hova',
  email: 'email@email.com',
  location: 'home',
};

const cardFormReducer = (state = defaultState, action) => {
  switch (action.type) {
    case types.UPDATE_FORM_FIELD:
      return { ...state, [action.field]: action.value };
    default:
      return state;
  }
};

const getState = globalState => globalState.components.cardFlow;
export const cardFormSelectors = { getState };
export default cardFormReducer;
