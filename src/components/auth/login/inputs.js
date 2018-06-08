import React from 'react';
import { PropTypes } from 'prop-types';
import { Col, FormGroup, Label, Input } from 'reactstrap';

const TextInput = ({name, label, onChange, placeholder, value, error, type="text"}) => {

  return (
    <FormGroup row>
      <Label for={name} sm={2}>{label}</Label>
      <Col sm={10}>
        <Input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange}/>
        {error && <div className="alert alert-danger">{error}</div>}
      </Col>
    </FormGroup>
  );
};

TextInput.propTypes = {
  email: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  error: PropTypes.string
};

export default TextInput;
