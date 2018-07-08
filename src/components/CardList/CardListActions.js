import { throwUndefinedProperties } from '../../utils/object';

export const types = throwUndefinedProperties({
  UPDATE_CARD_LIST: 'CardList/UPDATE_CARD_LIST',
});

export const updateCardList = cardList => ({
  type: types.UPDATE_CARD_LIST,
  cardList,
});
