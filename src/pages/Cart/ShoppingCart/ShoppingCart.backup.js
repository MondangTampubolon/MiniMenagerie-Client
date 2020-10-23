/** @jsx jsx */
import { jsx } from "@emotion/core";
// import { useState, useEffect } from "react";
// import axios from "axios";
import { Container, Row, Col, Button } from "react-bootstrap";
import Swal from 'sweetalert2'

import {
    listCheckoutProduct,
    listCheckoutDetails,
    button,
    // userDetails,
    // payment,
} from "./ShoppingCart.styles";
import CartProduct from "../../components/cartItem/cartItem";


const ShoppingCart = () => {

    // const [user, setUser] = useState({});
    // const userLogin = JSON.parse(localStorage.getItem("user"));

    // const getUser = async () => {
    //     const response = await axios.get(
    //         `http://localhost:8000/userAccount/${userLogin.id}`
    //     );
    //     setUser(response.data.result);
    // };

    // useEffect(() => {
    //     getUser();
    // }, []);

    const cart = JSON.parse(localStorage.getItem("cartProduct"));

    if (cart === null) {
        Swal.fire({
            imageUrl:
                "https://thumbs.gfycat.com/AccurateAgreeableDairycow.webp",
            title: "You Dont Have Any Purchases",
            text: "This Page Will Be Redirected Automatically",
            timerProgressBar: true,
        });

        setTimeout(() => {
            window.location.replace("/");
        }, 1000);
    }

    const price =
        cart.length > 0 &&
        cart.map((item) => {
            return item.price * item.quantity;
        });

    let totalPrice = price.reduce((a, b) => a + b);
    let cartProduct = JSON.parse(localStorage.getItem("cartProduct"));

    return (
        <Container>
            {/* <Row style={{ marginTop: "10px" }}>
                <h1>User Details</h1>
            </Row>
            <Row style={{ display: "flex", justifyContent: "space-between" }}>
                <Col xs={7} css={userDetails}>
                    <Form>
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control
                                    value={
                                        user.idUser !== undefined &&
                                        user.idUser.fullName
                                    }
                                    type="text"
                                    placeholder="Enter name"
                                    disabled
                                />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control
                                    value={
                                        user.email !== undefined && user.email
                                    }
                                    type="email"
                                    placeholder="Email"
                                    disabled
                                />
                            </Form.Group>
                        </Form.Row>

                        <Form.Group controlId="formGridAddress">
                            <Form.Label>Address</Form.Label>
                            <Form.Control placeholder="Address" />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridState">
                                <Form.Label>State</Form.Label>
                                <Form.Control as="select" defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Control>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridZip">
                                <Form.Label>Zip</Form.Label>
                                <Form.Control />
                            </Form.Group>
                        </Form.Row>

                        <div css={button}>
                            <Button>Save Address</Button>
                        </div>
                    </Form>
                </Col>
            </Row> */}

            <Row style={{ display: "flex", justifyContent: "space-between" }}>
                <Col xs={7} css={listCheckoutProduct}>
                    <CartProduct data={cart} />
                    <p className="text-primary">
                        <i class="fas fa-info-circle mr-1"></i>Do not delay the
                        purchase, adding items to your cart does not mean
                        booking them.
                    </p>
                </Col>
                <Col xs={4} css={listCheckoutDetails}>
                    <Col>
                        <Row style={{ marginBottom: "15px" }}>
                            <h5 style={{ fontWeight: "600" }}>
                                Payment Details
                            </h5>
                        </Row>
                        <Row
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: "10px",
                            }}
                        >
                            <Col xs={7} style={{ paddingLeft: "0px" }}>
                                <p>Subtotal ({cartProduct.length} items):</p>
                            </Col>
                            <Col xs={5}>
                                <p>Rp. {totalPrice}</p>
                            </Col>
                        </Row>
                        <Row
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                marginBottom: "10px",
                            }}
                        >
                            <Col xs={7} style={{ paddingLeft: "0px" }}>
                                <p>Shipping Fee:</p>
                            </Col>
                            <Col xs={5}>
                                <p>Rp. 10000</p>
                            </Col>
                        </Row>
                        <hr />
                        <Row>
                            <Col xs={7} style={{ paddingLeft: "0px" }}>
                                <p style={{ fontWeight: "600" }}>Total:</p>
                            </Col>
                            <Col xs={5}>
                                <p style={{ fontWeight: "600" }}>
                                    Rp {totalPrice + 10000}
                                </p>
                            </Col>
                        </Row>
                        <div css={button}>
                            <Button variant="primary">Buy Now</Button>
                        </div>
                    </Col>
                </Col>
            </Row>
        </Container>
    );
};

export default ShoppingCart;
