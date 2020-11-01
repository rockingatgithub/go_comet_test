import React from "react";
import { Button, Row, Col, Dropdown, DropdownButton } from "react-bootstrap";

function TopBar1(props) {
  return (
    <Row id="second-row">
      <Col lg={3} sm={2} xs={1}>
        <div>
          <img
            alt="icon"
            src="https://www.flaticon.com/svg/static/icons/svg/876/876207.svg"
            className="topbarone-icon-ham"
          />
        </div>
      </Col>
      <Col lg={6} sm={8} xs={11}>
        <div id="second-bar">
          <button className="topbar-button">HOME</button>
          <DropdownButton
            id="dropdown-basic-button"
            title="MEN"
            className="topbar-dropbutton"
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          <DropdownButton
            id="dropdown-basic-button"
            title="WOMEN"
            className="topbar-dropbutton"
          >
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </DropdownButton>
          <button className="topbar-button">LOOKBOOK</button>
          <button className="topbar-button">ABOUT</button>
          <button className="topbar-button">BLOG</button>
        </div>
      </Col>
      <Col lg={3} sm={2} xs={0}>
        <div id="search-icon">
          <img
            alt="icon"
            src="https://www.flaticon.com/svg/static/icons/svg/833/833300.svg"
            className="topbarone-icon"
          />
          <span id="pipe">|</span>
          <img
            alt="icon"
            src="https://www.flaticon.com/svg/static/icons/svg/93/93642.svg"
            className="topbarone-icon"
          />
        </div>
      </Col>
    </Row>
  );
}

export default TopBar1;
