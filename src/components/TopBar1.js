import React from "react";
import { Button, Row } from "react-bootstrap";

function TopBar1(props) {
  return (
    <Row>
      <Col>
        <div>
          <img
            src="https://www.flaticon.com/svg/static/icons/svg/876/876207.svg"
            style={{ width: "20px", height: "20px" }}
          />
        </div>
      </Col>
      <Col>
        <Button>HOME</Button>
        <DropdownButton id="dropdown-basic-button" title="MEN">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <DropdownButton id="dropdown-basic-button" title="WOMEN">
          <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
          <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
          <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
        </DropdownButton>
        <Button>LOOKBOOK</Button>
        <Button>ABOUT</Button>
        <Button>BLOG</Button>
      </Col>
      <Col></Col>
    </Row>
  );
}

export default TopBar1;
