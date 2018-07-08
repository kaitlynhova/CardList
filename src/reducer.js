import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import cardFormReducer from './components/CardForm/CardFormReducer';
import cardListReducer from './components/CardList/CardListReducer';
import cardShowReducer from './components/CardShow/CardShowReducer';

const reducer = combineReducers({
  router: routerReducer,
  components: combineReducers({
    cardFlow: cardFormReducer,
    cardList: cardListReducer,
    cardShow: cardShowReducer,
  }),
});

export default reducer;
