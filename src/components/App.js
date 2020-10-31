import React, { Component } from "react";
import { Container } from "react-bootstrap";
import TopBar from "./TopBar";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  render() {
    return (
      <Container>
        <TopBar cartCount={this.state.cart.length} />
      </Container>
    );
  }
}

export default App;
