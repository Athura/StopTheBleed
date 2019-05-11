import React from 'react';
import PropTypes from 'prop-types';

const Select = props => (
  <div className="form-group">
    <label htmlFor={props.name}> {props.title} </label>
    <select name={props.name} value={props.value} onChange={props.onChange}>
      <option value="" disabled>
        {props.placeholder}
      </option>
      {props.options.map(opt => (
        <option key={opt} value={opt} label={opt}>
          {opt}
        </option>
      ))}
    </select>
  </div>
);

Select.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  opt: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default Select;