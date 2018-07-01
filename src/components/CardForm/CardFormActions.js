import { throwUndefinedProperties } from '../../utils/object';

export const types = throwUndefinedProperties({
  UPDATE_NAME: 'CardForm/UPDATE_NAME',
  UPDATE_LOCATION: 'CardForm/UPDATE_LOCATION',
});

export const updateName = name => ({
  type: types.UPDATE_NAME,
  name,
});

export const updateLocation = location => ({
  type: types.UPDATE_LOCATION,
  location,
});
