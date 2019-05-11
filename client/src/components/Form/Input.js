import * as React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import theme from '../../styles/theme';

const Label = styled.label`
  font-size: 15px;
  padding-right: 20px;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: ${theme.gray};
  align-self: flex-start;
`;

const FormContainer = styled.div`
  padding: 20px 20px;
  width: 50%;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`;

const StyledInput = styled.input.attrs({ type: 'text' })`
  width: 75%;
  background-color: ${theme.background};
  color: black;
  padding: 10px 15px;
  margin: 2px 0;
  border: none;
  border-radius: 4px;
  cursor: text;
`;

const Input = props => (
  <FormContainer className="form-group">
    <Label htmlFor={props.name} className="form-label">
      {props.title}
    </Label>
    <StyledInput
      className="form-input"
      id={props.name}
      name={props.name}
      type={props.type}
      value={props.value}
      onChange={props.handleChange}
      placeholder={props.placeholder}
    />
  </FormContainer>
);

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Input;