import React from "react";
import { Row, Col } from "react-bootstrap";

function Header() {
  return (
    <div className="container my-5 py-5">
      <Row className="">
        <Col className="my-auto">
          <img
            className="w-100"
            src="./assets/propic.png"
            alt="Profile Picture"
          />
        </Col>
        <Col className="my-auto">
          <h1 className="display-5 pb-2 text-uppercase">
            Hi, I'm{" "}
            <span className="bg-dark text-light px-2">Joanne Cheong</span>!
          </h1>
          <h3 className="highlight-text text-uppercase">
            A Creator. Web Developer. Technical Analyst.
          </h3>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
export { default as Header } from "./Header";
