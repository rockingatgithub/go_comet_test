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
        type: "error",
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
        type: "error",
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
        type: "warning",
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
          type: "success",
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
      <Container>
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
              {this.state.cart.length === 0 && <span>No item in Cart!</span>}
              <ListGroup>
                {this.state.cart.map((product) => (
                  <ListGroup.Item>
                    <div>
                      <img
                        alt="itempics"
                        src={img1}
                        style={{ height: "40px", width: "25px" }}
                        className="product-image"
                      />
                      <span className="product-name">{product.name}</span>
                    </div>
                    <div>
                      <span className="product-size">
                        <span className="tag-bold">Size:</span>
                        {product.size}
                      </span>
                      <span className="product-color">
                        <span className="tag-bold">Color:</span>
                        {product.color}
                      </span>
                      <span className="product-qty">
                        <span className="tag-bold">Qty:</span>
                        {product.qty}
                      </span>
                    </div>
                  </ListGroup.Item>
                ))}
              </ListGroup>
            </Modal.Body>
          </Modal>
          <Col lg={4} sm={4} xs={4}>
            <div id="flag-column">
              <ReactFlagsSelect
                defaultCountry="US"
                searchable={true}
                onSelect={this.onSelectFlag}
                showSelectedLabel={false}
                className="my-flag"
              />
            </div>
          </Col>
          <Col lg={4} sm={4} xs={4}>
            <div id="main-heading">BONFIRE</div>
          </Col>
          <Col lg={4} sm={4} xs={4}>
            {" "}
            <div id="cart-column">
              <button onClick={this.showCartList} id="cart-button">
                Cart <Badge variant="light">{this.state.cart.length}</Badge>
              </button>
            </div>{" "}
          </Col>
        </Row>
        <TopBar1 />
        <Row id="row-three">
          <Col lg={6}>
            <div id="image-container">
              <div>
                <img
                  alt="maindisplay"
                  src={imagearray[curimage]}
                  id="maindisplay"
                />
              </div>
              <div id="thumbnail-container">
                <img
                  alt="thumbnail"
                  src={img1}
                  onClick={() => this.changeImageHandler(0)}
                  className={
                    curimage === 0
                      ? "thumbnail-image thumbnail-item"
                      : "thumbnail-item"
                  }
                />
                <img
                  alt="thumbnail"
                  src={img2}
                  onClick={() => this.changeImageHandler(1)}
                  className={
                    curimage === 1
                      ? "thumbnail-image thumbnail-item"
                      : "thumbnail-item"
                  }
                />
                <img
                  alt="thumbnail"
                  src={img3}
                  onClick={() => this.changeImageHandler(2)}
                  className={
                    curimage === 2
                      ? "thumbnail-image thumbnail-item"
                      : "thumbnail-item"
                  }
                />
                <img
                  alt="thumbnail"
                  src={img4}
                  onClick={() => this.changeImageHandler(3)}
                  className={
                    curimage === 3
                      ? "thumbnail-image thumbnail-item"
                      : "thumbnail-item"
                  }
                />
              </div>
            </div>
          </Col>
          <Col lg={6}>
            <div>
              <span>
                {" "}
                &lt; Back to <span className="blue-text">Women</span>{" "}
              </span>
            </div>
            <h3 id="item-name">The Atelier Tailored Coat</h3>
            <div id="star-box">
              <img src={stars} alt="itempics" /> <span>3 Review(s)</span> &nbsp;
              | &nbsp;
              <span id="review-box">ADD A REVIEW</span>
            </div>
            <div id="item-price">$499.00</div>
            <div id="item-info">
              <span className="bold-texts">Availability:</span>
              <span className="blue-text">In stock</span>
            </div>

            <div>
              <span className="bold-texts">Product Code:</span>
              <span className="blue-text">#46657</span>
            </div>
            <div id="last-info">
              <span className="bold-texts">Tags:</span>{" "}
              <span className="blue-text">Fashion, Hood, Classic</span>
            </div>
            <div>
              By tailored, or constructed, jacket we mean the frame with which
              the jacket is put together. In a tailored jacket adhesives are not
              used, but the front parts of the garment are strengthened by using
              horse hair and with the use of a so-called canvas.
            </div>
            <ul id="features-list">
              <li>Dark blue suit for a tone-on-tone lock.</li>
              <li>Regular Fit.</li>
              <li>100% Cotton.</li>
              <li>Free shipping with 4 days delivery.</li>
            </ul>

            <Form id="main-form">
              <Form.Row id="main-form-row">
                <Form.Group
                  as={Col}
                  controlId="formGridState"
                  className="formDropdown"
                >
                  <Form.Label className="form-labels">COLOR</Form.Label>
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

                <Form.Group
                  as={Col}
                  controlId="formGridDropdown"
                  className="formDropdown"
                >
                  <Form.Label className="form-labels" id="dropdownLabel">
                    SIZE
                  </Form.Label>
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

                <Form.Group as={Col} controlId="formGridZip">
                  <Form.Label className="form-labels" id="formGridLabel">
                    QTY
                  </Form.Label>
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
            <div id="reset-button-container">
              <Button
                id="reset-button"
                variant="light"
                value="reset"
                onClick={this.resetHandler}
              >
                {" "}
                CLEAR SELECTION{" "}
              </Button>
            </div>

            <div id="form-actions">
              <Button
                variant="light"
                onClick={this.addCartHandler}
                id="add-to-cart-button"
              >
                ADD TO CART
              </Button>
              <Button variant="light" id="add-to-wishlist">
                <span id="heart-text"> ♡ </span>{" "}
                <span id="wishlist-text"> ADD TO WISHLIST</span>
              </Button>
            </div>
            <div id="share-block">
              <span>SHARE THIS </span>{" "}
              <img src={share} id="share-image" alt="itempics" />
            </div>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MainSection;
