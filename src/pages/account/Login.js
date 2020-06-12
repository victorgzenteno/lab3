import React, {useEffect, useState} from 'react';
import { Route, Redirect, useHistory } from "react-router-dom";
import { Section, Row, Col, TextInput, Icon, Button } from 'react-materialize';
import axios from 'axios';

export default function Login() {
  const initialFormData = Object.freeze({
    email: "",
    password: ""
  });
  const history = useHistory();
  const [formData, updateFormData] = React.useState(initialFormData);
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
  const onLoginClick = (e) => {
    e.preventDefault()
    axios.post('http://localhost:5000/api/users/login', {
      email: formData.email,
      password: formData.password
    })
    .then(function (response) {
      localStorage.setItem("token", response.data);
      history.push("/dashboard");
    })
    .catch(async function (error) {
      let data = await error.response.data;
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
          className="z-depth-4 card-panel border-radius-6 login-card bg-opacity-8"
        >
          <div className="login-form">
            <Row>
              <h4 className="header center-align">Login</h4>
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
                type="password"
                name="password"
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
                  onClick={onLoginClick}
                >
                  Login
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
