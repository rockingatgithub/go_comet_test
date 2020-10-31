import React, { Component } from "react";
import { Container } from "react-bootstrap";
import TopBar from "./TopBar";
import TopBar1 from "./TopBar1";
import MainSection from "./MainSection";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cart: [],
    };
  }

  render() {
    return (
      <Container fluid>
        <TopBar cartCount={this.state.cart.length} />
        <TopBar1 />
        <MainSection />
      </Container>
    );
  }
}

export default App;
