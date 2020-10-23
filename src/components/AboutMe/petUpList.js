/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Col, Row, Container, Card, Modal } from "react-bootstrap";

import { useState, useEffect } from "react";
import AddAdoption from "./AddAdoption";
import NumberFormat from 'react-number-format';

import PrimaryButton from "../Button/Button";
import { container, button, margin, petImage, row } from "./petUpList.styles";
import axios from "../../helpers/axios";

const ListPetUp = () => {
    // let petData = JSON.parse(localStorage.getItem("pet"));
    const [petUp, setPetUp] = useState([]);

    const getUser = () => {
        let userLogin = JSON.parse(localStorage.getItem("user"));
        let idUser = userLogin.idUser._id;
        return idUser;
    };
    const getPetUpForAdoption = async () => {
        let id = await getUser();
        let result = await axios.get("petUpForAdoption");
        console.log(result);
        let datas = await result.data.result.filter(
            (item) => item.idPet !== null && item.idPet.idUser._id === id
        );
        setPetUp(datas);
    };

    useEffect(() => {
        getUser();
        getPetUpForAdoption();

        //eslint-disable-next-line
    }, []);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    console.log(petUp);
    return (
        <Container css={container}>
            <PrimaryButton onClick={handleShow} css={button}>
                Add a Pet
            </PrimaryButton>
            <Modal
                show={show}
                centered
                onHide={handleClose}
                size="lg"
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title>Add a Pet</Modal.Title>
                </Modal.Header>
                <Modal.Body className="modal-body modal-md">
                    <AddAdoption handleClose={handleClose} />
                </Modal.Body>
            </Modal>
            <Row css={row}>
                {petUp.map((item) => {
                    return (
                        <Col md={3} css={margin}>
                            <Card css={petImage}>
                                <Card.Img
                                    src={item.idPet.image[0]}
                                    variant="top"
                                />
                                <Card.Body>
                                    <Card.Title>
                                        <h4>{item.idPet.petName}</h4>
                                    </Card.Title>
                                    <Card.Text>
                                        <tr style={{ borderStyle: "hidden" }}>
                                            <td>Fee </td>
                                            <td>: <NumberFormat value={item.idPet.fee} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} /></td>
                                        </tr>
                                        <tr style={{ borderStyle: "hidden" }}>
                                            <td>Age </td>
                                            <td>: {item.idPet.age} years old</td>
                                        </tr>
                                        <tr style={{ borderStyle: "hidden" }}>
                                            <td>Status </td>
                                            <td style={{ fontWeight: "700" }}>
                                                : {item.status}{" "}
                                            </td>
                                        </tr>
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    );
                })}
            </Row>
        </Container>
    );
};

export default ListPetUp;
