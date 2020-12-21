import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";

function NavBar() {
  return (
    <Navbar fixed="top">
      <Nav className="ml-auto">
        <Nav.Link href="mailto:joanne.ye@uconn.edu" target="_blank">
          <EmailIcon />
        </Nav.Link>
        <Nav.Link href="https://github.com/joannecheong" target="_blank">
          <GitHubIcon />
        </Nav.Link>
        <Nav.Link
          href="https://www.linkedin.com/in/joanne-cheong/"
          target="_blank"
        >
          <LinkedInIcon />
        </Nav.Link>
      </Nav>
    </Navbar>
  );
}

export default NavBar;
