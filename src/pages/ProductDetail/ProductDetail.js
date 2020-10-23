/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { connect } from "react-redux";
import axios from "axios";
import { Container, Row, Col } from "react-bootstrap";

import { addToCart } from "../../redux/actions/addToCart";

import {
    container,
    row_quantity,
    info_col,
    description_col,
    info_row,
    info_name,
    priceAndStock,
} from "./ProductDetail.styles";
import RecommendedProducts from "../../components/RecommendedProducts/RecommendedProducts";
import ActionButton from "../../components/Button/ActionButton";

const ProductDetail = (props) => {
    let { id } = useParams();
    const [product, setProduct] = useState([]);
    const [productImage, setProductImage] = useState([]);

    useEffect(() => {
        const getProduct = async () => {
            // setLoading(true);
            const response = await axios.get(
                `http://localhost:8000/product/${id}`
            );
            setProduct(response.data.result);
            setProductImage(response.data.result.image[0].image);
            // setLoading(false);
        };

        getProduct();

        //eslint-disable-next-line
    }, [id]);

    if (product.stock <= 10) {
        return (
            <div>
                <Container css={container}>
                    <Row>
                        <Col>
                            <Row css={info_row}>
                                <Col>
                                    <img
                                        src={productImage}
                                        alt="product_image"
                                        style={{ width: "100%" }}
                                    />
                                </Col>
                                <Col xs={9} css={info_col}>
                                    <Row css={info_name}>
                                        <h4>{product.productName}</h4>
                                        <p>by Mini Menagerie</p>
                                    </Row>
                                    <Row></Row>
                                    <Row>
                                        <p css={priceAndStock}>
                                            Rp. {product.price}
                                        </p>
                                    </Row>
                                    <Row>
                                        <p>
                                            Less than 10 items left, buy now!
                                        </p>
                                    </Row>
                                    <Row css={row_quantity}>
                                        {/* <Col xs={2} css={info_quantity}>
                                            <input
                                                type="number"
                                                id="quantity"
                                                placeholder="1"
                                                name="quantity"
                                                min="1"
                                                max="5"
                                            />
                                        </Col> */}
                                        <Col>
                                            <ActionButton
                                                onClick={() => {
                                                    props.addToCart(
                                                        product._id
                                                    );
                                                }}
                                            />
                                        </Col>
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <h4>Product Detailsx</h4>
                                <Row>
                                    <Col>
                                        <h6>Description:</h6>
                                    </Col>
                                    <Col xs={9} css={description_col}>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Quisque
                                            molestie consectetur lacus, vitae
                                            rutrum sem tincidunt ut. Praesent at
                                            eleifend diam, ut tincidunt libero.
                                            Nam ultrices maximus sem non
                                            scelerisque. Etiam vehicula vitae
                                            arcu viverra consectetur. Aliquam
                                            sed ligula fringilla, placerat ipsum
                                            eu, malesuada arcu.
                                        </p>
                                    </Col>
                                </Row>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <RecommendedProducts />
            </div>
        );
    } else {
        return (
            <div>
                <Container css={container}>
                    <Row>
                        <Col>
                            <Row css={info_row}>
                                <Col>
                                    <img
                                        src={productImage}
                                        alt="product_image"
                                        style={{ width: "100%" }}
                                    />
                                </Col>
                                <Col xs={9} css={info_col}>
                                    <Row css={info_name}>
                                        <h4>{product.productName}</h4>
                                        <p>by Mini Menagerie</p>
                                    </Row>
                                    <Row></Row>
                                    <Row>
                                        <p css={priceAndStock}>
                                            Rp. {product.price}
                                        </p>
                                    </Row>
                                    <Row>
                                        <p css={priceAndStock}>In Stock</p>
                                    </Row>
                                    <Row>
                                        <ActionButton
                                            onClick={() => {
                                                props.addToCart(
                                                    product._id
                                                );
                                            }}
                                        />
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <h4>Product Details</h4>
                                <Row>
                                    <Col>
                                        <h6>Description:</h6>
                                    </Col>
                                    <Col xs={9} css={description_col}>
                                        <p>
                                            Lorem ipsum dolor sit amet,
                                            consectetur adipiscing elit. Quisque
                                            molestie consectetur lacus, vitae
                                            rutrum sem tincidunt ut. Praesent at
                                            eleifend diam, ut tincidunt libero.
                                            Nam ultrices maximus sem non
                                            scelerisque. Etiam vehicula vitae
                                            arcu viverra consectetur. Aliquam
                                            sed ligula fringilla, placerat ipsum
                                            eu, malesuada arcu.
                                        </p>
                                    </Col>
                                </Row>
                            </Row>
                        </Col>
                    </Row>
                </Container>
                <Container>
                    <h2>Also Get</h2>
                    <RecommendedProducts />
                </Container>
            </div>
        );
    }
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

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail);
