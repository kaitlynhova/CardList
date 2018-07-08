import { throwUndefinedProperties } from '../../utils/object';

export const types = throwUndefinedProperties({
  LOAD_CARD: 'CardShow/LOAD_CARD',
});

export const loadCard = cardObject => ({
  type: types.LOAD_CARD,
  cardObject,
});
