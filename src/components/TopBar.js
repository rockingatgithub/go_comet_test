import React, { Component } from "react";
import { Button, Col, Row, Badge } from "react-bootstrap";
import ReactFlagsSelect from "react-flags-select";
import "react-flags-select/css/react-flags-select.css";

class TopBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      countryCode: "+1",
    };
  }

  onSelectFlag = (countryCode) => {
    this.setState({
      countryCode: `${countryCode}`,
    });
  };

  render() {
    return (
      <Row>
        <Col lg={4}>
          <ReactFlagsSelect
            defaultCountry="US"
            searchable={true}
            onSelect={this.onSelectFlag}
            showSelectedLabel={false}
            className="my-flag"
          />
        </Col>
        <Col lg={4}>BONFIRE</Col>
        <Col lg={4}>
          {" "}
          <Button variant="secondary">
            Cart <Badge variant="light">{this.props.cartCount}</Badge>
          </Button>{" "}
        </Col>
      </Row>
    );
  }
}

export default TopBar;
