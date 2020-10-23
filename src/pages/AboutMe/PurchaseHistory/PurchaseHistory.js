/** @jsx jsx */
import { jsx } from "@emotion/core";
import {
    Card,
    Col,
    Row,
    Container,
    Accordion,
    OverlayTrigger,
    Tooltip,
} from "react-bootstrap";
import { useState, useEffect } from "react";
import format from "date-fns/format";
import axios from "../../../helpers/axios";

import ColoredLine from "../../../components/ColoredLine";
import { head } from "./PurchaseHistory.styles";

const PurchaseHistory = () => {
    const [purchaseHistory, setPurchaseHistory] = useState([]);

    const getTransactionDetails = async () => {
        const user = JSON.parse(localStorage.getItem("user"));
        let id = user.idUser._id

        const url = `transactionDetails`
        const response = await axios.get(url)

        let filteredResponse = await response.data.result.map(item => item).filter(f => {
            return f.idTransaction.idUser._id === id
        })
        setPurchaseHistory(filteredResponse)
    }
    useEffect(() => {
        getTransactionDetails()
    }, [])


    return (
        <Container>
            <div css={head}>
                <h3 style={{paddingTop:"5px"}}>History Purchase</h3>
            </div>

            <Row>
                {purchaseHistory.map((value) => (
                    <Accordion style={{ width: "100%", marginBottom: "10px" }}>
                        <Card>
                            <OverlayTrigger placement={'left'} overlay={<Tooltip id="tooltip-disabled">Click for transaction details</Tooltip>}>
                                <Row style={{ display: 'flex' }}>
                                    <Col style={{ paddingRight: '0px' }}>
                                        <Accordion.Toggle as={Card.Header} eventKey="0" style={{ width: '100%' }}>Detail Transaction</Accordion.Toggle>
                                    </Col>
                                    <Col
                                        style={{
                                            textAlign: "right",
                                            paddingLeft: "0px",
                                        }}
                                    >
                                        <Accordion.Toggle
                                            as={Card.Header}
                                            eventKey="0"
                                            style={{ width: "100%" }}
                                        >
                                            {format(
                                                new Date(
                                                    value.idTransaction !==
                                                    null &&
                                                    value.idTransaction !==
                                                    undefined &&
                                                    value.idTransaction
                                                        .createdAt
                                                ),
                                                "HH:mm, dd MMMM yyyy"
                                            )}
                                        </Accordion.Toggle>
                                    </Col>
                                </Row>
                            </OverlayTrigger>
                            <Accordion.Collapse eventKey="0">
                                <Card.Body>
                                    {
                                        value.idProduct.map((value) => (
                                            console.log(value.image)
                                        ))
                                    }
                                    {value.idProduct.map((value) => (
                                        <Row key={value._id}>
                                            <Col xs={3}>
                                                <img
                                                    src={value.image[0].image}
                                                    alt={value.productName}
                                                    style={{
                                                        objectFit: "cover",
                                                        height: "200px",
                                                    }}
                                                />
                                            </Col>
                                            <Col xs={7}>
                                                <h6>{value.productName}</h6>
                                            </Col>
                                            <Col xs={2}>
                                                <h6>Rp. {value.price}</h6>
                                            </Col>
                                            <ColoredLine />
                                        </Row>
                                    ))}
                                    <Row>
                                        <Col xs={10}>
                                            <h6
                                                style={{
                                                    textAlign: "right",
                                                    fontWeight: "600",
                                                }}
                                            >
                                                Total:{" "}
                                            </h6>
                                        </Col>
                                        <Col xs={2}>
                                            <h6 style={{ fontWeight: "600" }}>
                                                Rp.{" "}
                                                {value.idTransaction !== null &&
                                                    value.idTransaction !==
                                                    undefined &&
                                                    value.idTransaction
                                                        .totalPrice}
                                            </h6>
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Accordion.Collapse>
                        </Card>
                    </Accordion>
                ))}
            </Row>
        </Container>
    );
};

export default PurchaseHistory;
