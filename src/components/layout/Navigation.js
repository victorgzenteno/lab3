import React from "react";
import { Navbar, NavItem, Icon } from "react-materialize";
import { LANDING_URL, LOGIN_URL, REGISTER_URL } from "./../../routes";
import { Route, useHistory } from "react-router-dom";

export default function Navigation() {
  const history = useHistory();
  const onLogout = (e) => {
    e.preventDefault()
    localStorage.removeItem('token');
    history.push("/login");
  };

  return (
    <Navbar
      centerChildren
      alignLinks="right"
      brand={
        <a className="brand-logo" href={LANDING_URL}>
          Lab Three
        </a>
      }
      id="mobile-nav"
      menuIcon={<Icon>menu</Icon>}
      options={{
        draggable: true,
        edge: "left",
        inDuration: 250,
        onCloseEnd: null,
        onCloseStart: null,
        onOpenEnd: null,
        onOpenStart: null,
        outDuration: 200,
        preventScrolling: true,
      }}
    >
      <Route render={props => (
          !localStorage.getItem('token') ?
          <span style={{display: 'flex'}}>
            <NavItem href={LOGIN_URL}>Login</NavItem>
            <NavItem href={REGISTER_URL}>Register</NavItem>
          </span>
          : 
          <NavItem 
            onClick={onLogout}
          >
            Log Out
          </NavItem>
      )} />
    </Navbar>
  );
}
