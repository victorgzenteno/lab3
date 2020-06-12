import React, {useEffect, useState} from 'react';
import { Section, Row, Col, CardPanel } from 'react-materialize';
import { Route, Redirect } from 'react-router-dom';
import axios from 'axios';

export default function UserDashboard() {
  let [info, setInfo] = useState([]);

  async function getUserInfo() {
    await axios.get('http://localhost:5000/api/users/current', {
      headers: {
        Authorization: 'Bearer ' + localStorage.getItem('token') //the token is a variable which holds the token
      }
    })
    .then(async function (response) {
      let data = await response.data;
      setInfo(data);
    })
    .catch(function (error) {
      console.log(error);
    }); 
  };

  useEffect(() => {
    getUserInfo();
  }, []); 

  return (
    <Route render={props => (
      !localStorage.getItem('token') ?
          <Redirect to="/login" />
      : <Section className="container">
        <Row>
          <Col s={12}>
            <h4 className="header center-align">User Dashboard</h4>
            <CardPanel>
              <Row>
                <Col>
                  <div href="#!" className="avatar">
                    <img
                      src="https://www.managedhealthcareexecutive.com/sites/default/files/Technology%20Power%20Button_2.png"
                      alt="users view avatar"
                      className="z-depth-4 circle"
                      height="64"
                      width="64"
                    />
                  </div>
                </Col>
                <Col>
                  <h6 className="media-heading">
                    {/* Display the Name of the User */}
                    <span> {info.name} </span>
                    <span className="grey-text">@</span>
                    {/* Display the Email of the User */}
                    <span className="grey-text">{info.email}</span>
                  </h6>
                  <span>ID: </span>
                  {/* Display the ID of the User */}
                  <span>{info._id}</span>
                </Col>
              </Row>
            </CardPanel>
          </Col>
        </Row>
      </Section>
    )} />
  );
}
