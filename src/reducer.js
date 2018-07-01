import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import cardFormReducer from './components/CardForm/CardFormReducer';

const reducer = combineReducers({
  router: routerReducer,
  cardFlow: cardFormReducer,
});

export default reducer;
