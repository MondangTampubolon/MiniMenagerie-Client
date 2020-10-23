/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Col, Row } from "react-bootstrap";
import { useState, useEffect, useContext } from "react"

import {
    cartItem,
    productName,
    productQuantity,
    cartImage,
} from "./cartItem.styles";

function formatPrice(amount) {
    return `$${(amount * 0.01).toFixed(2)}`
  }
  
  function totalPrice(items) {
    return items.reduce((acc, item) => acc + item.quantity * item.amount, 0.0)
  }

const CartProduct = ({ stripeToken }) => {
    const removeProduct = (event) => {
        event.preventDefault();
        const cart = JSON.parse(localStorage.getItem("cartProduct"));
        let indexToRemove = 1;
        cart.splice(indexToRemove, 1);
        localStorage.setItem("cartProduct", JSON.stringify(cart));
        // window.location.reload ();
    };

    const [stripe, setStripe] = useState(null)
    const ctx = useContext(CartContext)

    useEffect(() => {
        if (window.Stripe) setStripe(window.Stripe(stripeToken))
    }, [stripeToken])

    const checkout = () => {
        stripe.redirectToCheckout({
            lineItems: ctx.items.map(item => ({
                price: item.price,
                quantity: item.quantity
            })),
            mode: 'payment',
            billingAddressCollection: 'required',
            successUrl: 'https://your-website.com/success',
            cancelUrl: 'https://your-website.com/canceled',
        })
            .then(function (result) {
                if (result.error) {
                    var displayError = document.getElementById('error-message');
                    displayError.textContent = result.error.message;
                }
            });
    }

    return (
        <div>
            {ctx.items.map((value) => {
                let totalItemPrice = value.price * value.quantity;

                return (
                    <Row css={cartItem}>
                        <Col xs={3}>
                            <img
                                src={value.image[0].image}
                                css={cartImage}
                                alt="cart_image"
                            />
                        </Col>
                        <Col xs={6} css={productName}>
                            <div>
                                <h5>{value.productName}</h5>
                                <p>{value.quantity} PCS</p>
                            </div>
                            <a
                                href="/#"
                                type="button"
                                className="card-link-secondary small text-uppercase mr-3"
                                onClick={removeProduct}
                            >
                                <i class="fas fa-trash-alt mr-1"></i> Remove
                                item{" "}
                            </a>
                        </Col>
                        <Col xs={3} css={productQuantity}>
                            <h5>Rp {totalItemPrice}</h5>
                        </Col>
                    </Row>
                );
            })}
        </div>
    );
};
export default CartProduct;
