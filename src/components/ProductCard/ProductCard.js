/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import NumberFormat from 'react-number-format';
import Swal from "sweetalert2";

import Skeleton from './Skeleton'
import { addToCart } from "../../redux/actions/addToCart";
import {
    card_img,
    product_name,
    product_list,
    product_price,
} from "./ProductCard.styles";
import ActionButton from "../Button/ActionButton";

const ProductCard = ({ products, loading, ...props }) => {
    return (
        <div css={product_list}>
            {loading
                ? new Array(9).fill(1).map((_, i) => {
                    return <Skeleton key={i} />;
                })
                : products.map((value) => {
                    return (
                        <Card
                            key={value._id}
                            style={{ width: "20rem", marginBottom: "80px", marginLeft: "5px", marginRight: "5px", borderRadius: "10px" }}
                        >
                            <div style={{ padding: "10px" }}>
                                <Link to={`/product/${value._id}`}>
                                    <Card.Img
                                        css={card_img}
                                        variant="top"
                                        src={value.image[0].image}
                                    />
                                </Link>
                            </div>
                            <Card.Body>
                                <p css={product_name}>{value.productName}</p>
                                <p css={product_price}><NumberFormat value={value.price} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} /></p>
                                <ActionButton
                                    onClick={() => {
                                        const userLogin = JSON.parse(localStorage.getItem("user"));
                                        let timerInterval
                                        if (userLogin === null) {
                                            Swal.fire({
                                                title: 'You Are Not Logged In',
                                                text: 'Please Login or Register',
                                                timer: 3000,
                                                timerProgressBar: true,
                                                willOpen: () => {
                                                    timerInterval = setInterval(() => {
                                                        const content = Swal.getContent()
                                                        if (content) {
                                                            const b = content.querySelector('b')
                                                            if (b) {
                                                                b.textContent = Swal.getTimerLeft()
                                                            }
                                                        }
                                                    }, 100)
                                                },
                                                onClose: () => {
                                                    clearInterval(timerInterval)
                                                    window.location.replace("/")
                                                }
                                            }).then((result) => {
                                                if (result.dismiss === Swal.DismissReason.timer) {
                                                    console.log('I was closed by the timer')
                                                }
                                            })
                                        } else {
                                            props.addToCart(value._id);
                                            window.scrollTo(0, 0);
                                        }
                                    }}
                                />
                            </Card.Body>
                        </Card>
                    );
                })
            }
        </div>
    );
};

const mapStateToProps = (state) => {
    return {
        data: state.addToCart,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        addToCart: (id) => dispatch(addToCart(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductCard);
