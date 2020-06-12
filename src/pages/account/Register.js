import React, {useEffect, useState} from 'react';
import { Section, Row, Col, TextInput, Icon, Button } from 'react-materialize';
import { Redirect, Route, useHistory } from "react-router-dom";
import axios from 'axios';

export default function Register() {
const initialFormData = Object.freeze({
  name: "",
  email: "",
  password: "",
  password2: ""
});
const history = useHistory();
const [formData, updateFormData] = useState(initialFormData);
const [message, setMessage] = useState([]);

const handleChange = (e) => {
  updateFormData({
    ...formData,
    // Trimming any whitespace
    [e.target.name]: e.target.value.trim()
  });
};
const setErrorMessage = (err) => {
  setMessage(err);
};
const validateEmail = (email) => {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
};
const onRegisterClick = (e) => {
  e.preventDefault()
  
  // I know this kind of validations can be done through binding, I'll keep it simple for time and maybe a v2 release.
  if (formData.password !== formData.password2) {
    setErrorMessage('Password does not match.');
    return;
  }
  if (!validateEmail(formData.email)) {
    setErrorMessage('Email is not properly formatted.');
    return;
  }

  axios.post('http://localhost:5000/api/users/register', formData, {
    headers:  {}
  }).then(function (response) {
    history.push("/login");
  })
  .catch(async function (error) {
    debugger;
    let data;
    data = await error.response.data;
    setErrorMessage(data);
  });
};

useEffect(() => {
  setErrorMessage();
}, []); 

  return (
  <Route render={props => (
    localStorage.getItem('token') ?
        <Redirect to="/dashboard" />
    : <Section className="container">
      <Row>
        <Col
          s={12}
          m={4}
          xl={4}
          offset="m4 xl4"
          className="z-depth-4 card-panel border-radius-6 register-card bg-opacity-8"
        >
          <div className="register-form">
            <Row>
              <h4 className="header center-align">Register</h4>
            </Row>
            <Row>
              <TextInput
                id="name"
                name="name"
                icon={<Icon>account_circle</Icon>}
                onChange={handleChange}
                label="name"
                s={12}
              />
            </Row>
            <Row>
              <TextInput
                id="email"
                name="email"
                icon={<Icon>email</Icon>}
                onChange={handleChange}
                label="Email"
                s={12}
              />
            </Row>
            <Row>
              <TextInput
                id="password"
                name="password"
                type="password"
                icon={<Icon>lock_outline</Icon>}
                onChange={handleChange}
                label="Password"
                s={12}
              />
            </Row>
            <Row>
              <TextInput
                id="password2"
                name="password2"
                type="password"
                icon={<Icon>lock_outline</Icon>}
                onChange={handleChange}
                label="Password"
                s={12}
              />
            </Row>
            <Row>
              <Col s={12} className="input-field">
                <Button
                  waves="light"
                  className="col s12"
                  onClick={onRegisterClick}
                >
                  Register
                </Button>
              </Col>
            </Row>
            <Row>
              <Col s={12} className="error-message">
                <span style={{color: 'red'}}>{message}</span>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Section>
    )} />
  );
}
