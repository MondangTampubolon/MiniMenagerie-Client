/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Container, Row, Col, Button, Form } from 'react-bootstrap';
// import Swal from 'sweetalert2';

import axios from '../../../helpers/axios'
import {
    buttonCheckoutNow,
    //   buttonCheckoutLater,
    buttonRemove,
    itemDetails,
    paymentDetails,
    userDetails,
    container,
    containerDetails,
    quantity
} from "./AdoptionFeeCart.styles";

const stripePromise = loadStripe("pk_test_51HUN7sAjKylxkZ24d0YxRuxiDVNFIoEAsNmyg8WFxzcExHz1cPsfdouNHOsw3E9SJQpQ19rG2TFByvkQ3MNzAXey00DUfRySaY");

const ShoppingCart = () => {
    const [user, setUser] = useState({});
    const [state, dispatch] = useState({
        loading: false,
        error: null,
    });

    const userLogin = JSON.parse(localStorage.getItem("user"));

    const getUser = async () => {
        const response = await axios.get(`userAccount/${userLogin.id}`);
        setUser(response.data.result);
    };

    useEffect(() => {
        getUser();

        //eslint-disable-next-line
    }, []);

    const arrayAdoptData = []
    const adoptData = JSON.parse(localStorage.getItem("adoptform"));
    arrayAdoptData.push(adoptData)

    console.log(arrayAdoptData)

    const adoptFee = parseInt(adoptData.idPet.fee)

    const handleFeePayment = async (event) => {
        // Call your backend to create the Checkout session.
        dispatch({ type: 'setLoading', payload: { loading: true } });
        // When the customer clicks on the button, redirect them to Checkout.
        const stripe = await stripePromise;
        const { error } = await stripe.redirectToCheckout({
            mode: 'payment',
            lineItems: arrayAdoptData.map(item => (
            {
                price: item.idPet.stripe,
                quantity: 1
            })),
            successUrl: `${window.location.origin}/adoptpayment?session_id={CHECKOUT_SESSION_ID}`,
            cancelUrl: `${window.location.origin}/adoptcart`,
        });
        if (error) {
            dispatch({ type: 'setError', payload: { error } });
            dispatch({ type: 'setLoading', payload: { loading: false } });
        }
    };

    //   let itemPrice = data.map((item) => {
    //     return item.price * item.quantity;
    //   });

    //   let totalPrice = itemPrice.reduce((a, b) => a + b, 0);
    // const setTotalPrice = localStorage.setItem("totalPrice", totalPrice);
    const HandlingFee = 50000

    //   const removeProduct = indexToRemove => {
    //     let cart = JSON.parse(localStorage.getItem("cartProduct"));
    //     if (cart.length > 1) {
    //       cart.splice(indexToRemove, 1)
    //       localStorage.setItem("cartProduct", JSON.stringify(cart));
    //       window.location.reload();
    //     } else {
    //       localStorage.removeItem("cartProduct")
    //       window.location.replace('/shop')
    //     }
    //   };

    //   const removeCart = () => {
    //     Swal.fire({
    //       title: 'Are you sure??',
    //       text: "You won't be able to revert this!",
    //       icon: 'warning',
    //       showCancelButton: true,
    //       confirmButtonColor: '#3085d6',
    //       cancelButtonColor: '#d33',
    //       confirmButtonText: 'Yes, remove it!'
    //     }).then((result) => {
    //       if (result.isConfirmed) {
    //         localStorage.removeItem('cartProduct');
    //         window.location.replace('/shop');
    //         Swal.fire(
    //           'Deleted!',
    //           'Your file has been deleted.',
    //           'success'
    //         )
    //       }
    //     })
    //   }

    return (
        <Container css={container}>
            <Container>
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
                            <Form.Control
                                value={
                                    user.idUser !== undefined &&
                                    user.idUser.detailAddress
                                }
                                type="text"
                                placeholder="Address"
                            />
                        </Form.Group>

                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridCity">
                                <Form.Label>City</Form.Label>
                                <Form.Control
                                    value={
                                        user.idUser !== undefined &&
                                        user.idUser.state
                                    }
                                    type="text"
                                    placeholder="City"
                                />
                            </Form.Group>
                            <Form.Group as={Col} controlId="formGridProvince">
                                <Form.Label>Province</Form.Label>
                                <Form.Control
                                    value={
                                        user.idUser !== undefined &&
                                        user.idUser.province
                                    }
                                    type="text"
                                    placeholder="Province"
                                />
                            </Form.Group>
                        </Form.Row>

                        <div css={buttonRemove}>
                            <Button onClick={()=>{}}>Use Address</Button>
                        </div>
                    </Form>
                </Col>
            </Container>

            <Container css={containerDetails}>
                <Col xs={7} css={itemDetails}>
                    <div>
                        <Row style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                            <Col xs={2}>
                                <img src={adoptData.idPet.image[0]} alt="product" style={{ width: '100%' }} />
                            </Col>
                            <Col xs={7} style={{ display: 'flex', flexDirection: 'column' }}>
                                <Row>
                                    <h6>{adoptData.idPet.petName}</h6>
                                </Row>
                                <Row xs={5} css={quantity}>
                                    <p>1</p>
                                </Row>
                            </Col>
                            <Col xs={3}>
                                <div>
                                    <h6 style={{ textAlign: 'right' }}>Rp. {adoptFee}</h6>
                                </div>
                            </Col>


                        </Row>
                    </div>
                    <div>
                        <p className="text-primary">
                            <i className="fas fa-info-circle mr-1"></i>
          Do not delay the purchase, adding items to your cart does not mean booking them.
          </p>
                    </div>
                    {/* <div css={buttonRemove} onClick={removeCart}>
            <Button>Empty Cart</Button>
          </div> */}
                </Col>

                <Col xs={4} css={paymentDetails}>
                    <Row style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <Col xs={7}>
                            <h6>Total Price: </h6>
                        </Col>
                        <Col xs={2}>
                            <h6>Rp.</h6>
                        </Col>
                        <Col xs={3}>
                            <h6 style={{ textAlign: 'right' }}>
                                {adoptFee}
                            </h6>
                        </Col>
                        <Col xs={7}>
                            <h6>Handling Fee: </h6>
                        </Col>
                        <Col xs={2}>
                            <h6>Rp.</h6>
                        </Col>
                        <Col xs={3}>
                            <h6 style={{ textAlign: 'right' }}>{HandlingFee}</h6>
                        </Col>
                    </Row>
                    <div>
                        <hr />
                    </div>
                    <Row style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                        <Col xs={7}>
                            <h6 style={{ fontWeight: '600' }}>Final Price: </h6>
                        </Col>
                        <Col xs={2}>
                            <h6 style={{ fontWeight: '600' }}>Rp.</h6>
                        </Col>
                        <Col xs={3}>
                            <h6 style={{ fontWeight: '600', textAlign: 'right' }}>{adoptFee + HandlingFee}</h6>
                        </Col>
                    </Row>
                    <Row style={{ display: 'flex', justifyContent: 'space-around' }}>
                        {/* <div css={buttonCheckoutLater} onClick={handleCheckoutLater} disabled={state.loading}>
              <Button>Checkout Later</Button>
            </div> */}
                        <div css={buttonCheckoutNow} onClick={handleFeePayment} disabled={state.loading}>
                            <Button onClick={()=>{}}>Pay Now</Button>
                        </div>
                    </Row>
                </Col>
            </Container>


        </Container>
    );
}

export default ShoppingCart;
