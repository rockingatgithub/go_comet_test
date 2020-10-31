import React, { Component } from "react";
import {
  Row,
  Col,
  Button,
  Form,
  Container,
  Badge,
  Modal,
  ListGroup,
} from "react-bootstrap";
import ReactFlagsSelect from "react-flags-select";
import { toast } from "react-toastify";
import "react-flags-select/css/react-flags-select.css";

import "react-toastify/dist/ReactToastify.css";
import TopBar1 from "./TopBar1";
import img1 from "../images/image1.jpeg";
import img2 from "../images/image2.jpeg";
import img3 from "../images/image3.jpeg";
import img4 from "../images/image4.jpeg";
import stars from "../images/ratingstars.PNG";
import share from "../images/shareto.PNG";

class MainSection extends Component {
  constructor(props) {
    super(props);
    const imgarr = [img1, img2, img3, img4];
    this.state = {
      imagearray: imgarr,
      curimage: 0,
      productSize: "Select size",
      productColor: "Select color",
      productQty: 1,
      cart: [],
      showCart: false,
    };
    this.sizeRef = React.createRef();
    this.colorRef = React.createRef();
    this.qtyRef = React.createRef();
  }

  changeImageHandler = (ind) => {
    this.setState({
      curimage: ind,
    });
  };

  resetHandler = () => {
    this.setState({
      productSize: "Select size",
      productColor: "Select color",
      productQty: 1,
    });
  };

  sizeHandler = (e) => {
    this.setState(
      {
        productSize: e.target.value,
      },
      () => {
        console.log(this.state.productSize);
      }
    );
  };

  colorHandler = (e) => {
    this.setState(
      {
        productColor: e.target.value,
      },
      () => {
        console.log(this.state.productColor);
      }
    );
  };

  qtyHandler = (e) => {
    this.setState(
      {
        productQty: e.target.value,
      },
      () => {
        console.log(this.state.productQty === "" ? "null" : "not null");
      }
    );
  };

  addCartHandler = () => {
    const { productSize, productColor, productQty } = this.state;
    if (productSize === "Select size") {
      toast("Select a size of item", {
        position: "top-right",
        type: "info",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (productColor === "Select color") {
      toast("Select color of item", {
        position: "top-right",
        type: "info",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    if (productQty === "") {
      toast("Select quantity of item", {
        position: "top-right",
        type: "info",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      return;
    }
    let obj = {
      name: "The Atelier Tailored Coat",
      size: productSize,
      color: productColor,
      qty: productQty,
    };
    this.setState(
      (state, props) => ({
        cart: [obj, ...state.cart],
      }),
      () => {
        toast("Item added to cart", {
          position: "top-right",
          type: "info",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        console.log(this.state.cart.length);
      }
    );
  };

  showCartList = () => {
    this.setState({
      showCart: true,
    });
  };

  handleClose = () => {
    this.setState({
      showCart: false,
    });
  };

  render() {
    const { imagearray, curimage } = this.state;
    return (
      <Container fluid>
        <Row>
          <Modal
            show={this.state.showCart}
            onHide={this.handleClose}
            animation={false}
          >
            <Modal.Header closeButton>
              <Modal.Title>Cart List</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <ListGroup>
                {this.state.cart.map((product) => (
                  <ListGroup.Item>
                    <span className="product-name">{product.name}</span>
                    <span className="product-name">{product.size}</span>
                    <span className="product-name">{product.color}</span>
                    <span className="product-name">{product.qty}</span>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Modal.Body>
          </Modal>
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
            <Button variant="secondary" onClick={this.showCartList}>
              Cart <Badge variant="light">{this.state.cart.length}</Badge>
            </Button>{" "}
          </Col>
        </Row>
        <TopBar1 />
        <Row>
          <Col lg={6}>
            <div>
              <img
                alt="maindisplay"
                src={imagearray[curimage]}
                style={{ height: "400px", width: "300px" }}
              />
            </div>
            <div>
              <img
                alt="thumbnail"
                src={img1}
                onClick={() => this.changeImageHandler(0)}
                className={curimage === 0 && "thumbnail-image"}
                style={{ height: "100px", width: "80px" }}
              />
              <img
                alt="thumbnail"
                src={img2}
                onClick={() => this.changeImageHandler(1)}
                className={curimage === 1 && "thumbnail-image"}
                style={{ height: "100px", width: "80px" }}
              />
              <img
                alt="thumbnail"
                src={img3}
                onClick={() => this.changeImageHandler(2)}
                className={curimage === 2 && "thumbnail-image"}
                style={{ height: "100px", width: "80px" }}
              />
              <img
                alt="thumbnail"
                src={img4}
                onClick={() => this.changeImageHandler(3)}
                className={curimage === 3 && "thumbnail-image"}
                style={{ height: "100px", width: "80px" }}
              />
            </div>
          </Col>
          <Col lg={6}>
            <div>
              <span>Back to Women</span>
            </div>
            <h3>The Atelier Tailored Coat</h3>
            <div>
              <img src={stars} /> <span>3 Review(s)</span> |{" "}
              <span>ADD A REVIEW</span>
            </div>
            <div>$499.00</div>
            <div>
              <span>Availability:</span>
              <span>In stock</span>
            </div>
            <div>#46657</div>
            <div>
              Tags: <span>Fashion, Hood, Classic</span>
            </div>
            <div>
              By tailored, or constructed, jacket we mean the frame with which
              the jacket is put together. ... In a tailored jacket adhesives are
              not used, but the front parts of the garment are strengthened by
              using horse hair and with the use of a so-called canvas.
            </div>
            <ul>
              <li>Dark blue suit for a tone-on-tone lock.</li>
              <li>Regular Fit.</li>
              <li>100% Cotton.</li>
              <li>Free shipping with 4 days delivery.</li>
            </ul>

            <Form>
              <Form.Row>
                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Size:</Form.Label>
                  <Form.Control
                    as="select"
                    ref={this.sizeRef}
                    onChange={this.sizeHandler}
                    value={this.state.productSize}
                  >
                    <option>Select size</option>
                    <option>32</option>
                    <option>34</option>
                    <option>36</option>
                    <option>38</option>
                    <option>40</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridState">
                  <Form.Label>Color:</Form.Label>
                  <Form.Control
                    as="select"
                    ref={this.colorRef}
                    onChange={this.colorHandler}
                    value={this.state.productColor}
                  >
                    <option>Select color</option>
                    <option>Black</option>
                    <option>Blue</option>
                    <option>Grey</option>
                    <option>Brown</option>
                  </Form.Control>
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label>Qty:</Form.Label>
                  <Form.Control
                    as="input"
                    type="number"
                    min={1}
                    max={10}
                    ref={this.qtyRef}
                    onChange={this.qtyHandler}
                    value={this.state.productQty}
                  />
                </Form.Group>
              </Form.Row>
            </Form>
            <div>
              <Button value="reset" onClick={this.resetHandler}>
                {" "}
                Clear Selection{" "}
              </Button>
            </div>
            <div>
              <Button onClick={this.addCartHandler}>ADD TO CART</Button>
              <Button>♡ ADD TO WISHLIST</Button>
            </div>
            <div>
              <span>SHARE THIS </span>{" "}
              <img src={share} style={{ height: "20px", width: "300px" }} />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainSection;
