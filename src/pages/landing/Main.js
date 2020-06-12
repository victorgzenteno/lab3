import React from "react";
import {
  Section,
  Collection,
  CollectionItem,
  Badge,
  Row,
  Col,
} from "react-materialize";
export default function Main() {
  return (
    <Section>
      <Row>
        <h4 className="header center-align">Task List</h4>
        <Col s={12} m={4} xl={4} offset="m4 xl4">
          <Collection header="Backend: Server Side" className="hoverable">
            <CollectionItem>
              Create register route
              <a className="secondary-content" href="#!">
                <Badge className="red white-text" caption="Backend" />
              </a>
            </CollectionItem>
            <CollectionItem>
              Create login route
              <a className="secondary-content" href="#!">
                <Badge className="red white-text" caption="Backend" />
              </a>
            </CollectionItem>
            <CollectionItem>
              Create secured current user route
              <a className="secondary-content" href="#!">
                <Badge className="red white-text" caption="Backend" />
              </a>
            </CollectionItem>
          </Collection>
        </Col>
        <Col s={12} m={4} xl={4} offset="m4 xl4">
          <Collection header="Frontend: Client Side" className="hoverable">
            <CollectionItem>
              Implement Register
              <a className="secondary-content" href="#!">
                <Badge className="red white-text" caption="Frontend" />
              </a>
            </CollectionItem>
            <CollectionItem>
              Implement Login
              <a className="secondary-content" href="#!">
                <Badge className="red white-text" caption="Frontend" />
              </a>
            </CollectionItem>
            <CollectionItem>
              Create Authentication Provider
              <a className="secondary-content" href="#!">
                <Badge className="red white-text" caption="Frontend" />
              </a>
            </CollectionItem>
            <CollectionItem>
              Implement useAuthentication HOC
              <a className="secondary-content" href="#!">
                <Badge className="red white-text" caption="Frontend" />
              </a>
            </CollectionItem>
          </Collection>
        </Col>
      </Row>
    </Section>
  );
}
