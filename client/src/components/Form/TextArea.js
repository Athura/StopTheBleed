import React from 'react';
import PropTypes from 'prop-types';
import { StyledError } from '../../styles/common/error';

const TextArea = ({
  name,
  rows,
  cols,
  placeholder,
  value,
  error,
  info,
  onChange,
}) => (
  <>
    <h1>{name}</h1>
    <textarea
      rows={rows}
      cols={cols}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
    {info && <small>{info}</small>}
    {error && <StyledError>{error}</StyledError>}
  </>
);

TextArea.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};

export default TextArea;