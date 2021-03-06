import React from 'react';
import { v4 } from 'uuid';
import { PropTypes } from 'prop-types';

const formFields = ['reason', 'name', 'email', 'location'];
const CardFormView = props => (
  <div>
    <form
      onSubmit={(e) => {
        e.preventDefault();
        // TODO, instead create cardForm prop to hold the cardform state
        const formBodyObject = {};
        formFields.forEach((formField) => {
          formBodyObject[formField] = props[formField];
        });
        formBodyObject.id = v4();

        fetch(`https://supportcards-bb694.firebaseio.com/cards/${formBodyObject.id}.json`, {
          method: 'PUT',
          body: JSON.stringify(formBodyObject),
          headers: {
            'Content-Type': 'application/json',
          },
        })
          .then(reply => reply.json())
          .then((json) => {
            props.onShowCard(json.id);
          })
          .catch(ex => console.error('wtf', ex));
      }}
    >
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
      <input type="submit" name="submit" value="Submit" />
    </form>
  </div>
);
CardFormView.propTypes = {
  onShowCard: PropTypes.func.isRequired,
};
export { CardFormView };
