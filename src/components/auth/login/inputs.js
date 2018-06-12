import React from 'react';
import { Col, FormGroup, Label, Input } from 'reactstrap';

const TextInput = ({name, label, onChange, placeholder, value, error, type="text", required}) => {

  return (
    <FormGroup row>
      <Label for={name} sm={2}>{label}</Label>
      <Col sm={10}>
        <Input type={type} name={name} placeholder={placeholder} value={value} onChange={onChange} required={required}/>
        {error && <div className="alert alert-danger">{error}</div>}
      </Col>
    </FormGroup>
  );
};

export default TextInput;
