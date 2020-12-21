import React from "react";
import { Row, Col } from "react-bootstrap";
import Typical from "react-typical";

function Header() {
  return (
    <div className="container my-5 py-5">
      <Row className="">
        <Col className="my-auto">
          <img
            className="w-100"
            src="./assets/propic.png"
            alt="Portrait of Joanne"
          />
        </Col>
        <Col className="my-auto">
          <h1 className="display-5 pb-2 text-uppercase">
            Hi, I'm{" "}
            <span className="bg-dark text-light ml-1 px-3">Joanne Cheong</span>
          </h1>
          <h3>
            <Typical
              className="highlight-text text-uppercase"
              steps={[
                "Creator",
                1000,
                "Web Developer",
                1000,
                "Technical Analyst",
                1000,
              ]}
              loop={Infinity}
              wrapper="p"
            />
          </h3>
        </Col>
      </Row>
    </div>
  );
}

export default Header;
export { default as Header } from "./Header";
