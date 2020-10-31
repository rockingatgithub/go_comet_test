import React, { Component } from "react";
import { Row, Col, Button, Form } from "react-bootstrap";
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
      productSize: 32,
      productColor: "Black",
      productQty: 1,
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
    this.sizeRef.current.value = "Select size";
    this.qtyRef.current.value = 1;
    this.colorRef.current.value = "Select color";
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
        console.log(this.state.productQty);
      }
    );
  };

  render() {
    const { imagearray, curimage } = this.state;
    return (
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
            By tailored, or constructed, jacket we mean the frame with which the
            jacket is put together. ... In a tailored jacket adhesives are not
            used, but the front parts of the garment are strengthened by using
            horse hair and with the use of a so-called canvas.
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
                  defaultValue="Select size"
                  ref={this.sizeRef}
                  onChange={this.sizeHandler}
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
                  defaultValue="Select color"
                  ref={this.colorRef}
                  onChange={this.colorHandler}
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
                  defaultValue={1}
                  ref={this.qtyRef}
                  onChange={this.qtyHandler}
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
            <Button>ADD TO CART</Button>
            <Button>♡ ADD TO WISHLIST</Button>
          </div>
          <div>
            <span>SHARE THIS </span>{" "}
            <img src={share} style={{ height: "20px", width: "300px" }} />
          </div>
        </Col>
      </Row>
    );
  }
}

export default MainSection;
