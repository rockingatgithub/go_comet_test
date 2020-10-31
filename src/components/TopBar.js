import React from "react";
import { Button, Col } from "react-bootstrap";
import ReactFlagsSelect from "react-flags-select";
import "react-flags-select/css/react-flags-select.css";

function TopBar(props) {
  return (
    <Row>
      <Col>
        <ReactFlagsSelect
          defaultCountry="US"
          searchable={true}
          onSelect={this.onSelectFlag}
          showSelectedLabel={false}
          className="my-flag"
        />
      </Col>
      <Col>BONFIRE</Col>
      <Col>
        {" "}
        <Button variant="secondary">
          Cart <Badge variant="light">{props.cartCount}</Badge>
        </Button>{" "}
      </Col>
    </Row>
  );
}

export default TopBar;
