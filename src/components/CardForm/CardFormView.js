import React from 'react';
import PropTypes from 'prop-types';

const formFields = ['reason', 'name', 'email', 'location'];
const CardFormView = props => (
  <div>
    <form>
      {formFields.map(field => (
        <input
          type="text"
          name={field}
          onChange={(e) => {
            props.updateFormField(e.target.value, field);
          }}
          value={props[field]}
        />
      ))}
    </form>
  </div>
);
CardFormView.propTypes = {
  // eslint-disable-next-line
  updateFormField: PropTypes.func.isRequired,
};

export { CardFormView };
