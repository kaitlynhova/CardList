import { throwUndefinedProperties } from '../../utils/object';

export const types = throwUndefinedProperties({
  UPDATE_FORM_FIELD: 'CardForm/UPDATE_FORM_FIELD',
});

export const updateFormField = (value, field) => ({
  type: types.UPDATE_FORM_FIELD,
  value,
  field,
});
