/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Button, Col, Modal, Table } from "react-bootstrap";
import PrimaryButton from "../Button/Button";
import { useState } from "react";

import { wrapperStyles } from "./adoptionFormPopup.styles";
import axios from "../../helpers/axios";

const FormPopUp = ({ data }) => {
    const [lgShow, setLgShow] = useState(false);
    // const [approve] = useState({ status: "Approval" });
    const [deny] = useState({ status: "Deny" });
    const [waiting] = useState({ status: "Waiting for Payment" });

    const url = `formRequest/${data._id}`;

    const changeWaiting = () => {
        axios.put(url, waiting).then(function (result) {
            console.log(result);
            window.location.reload();
        });
        return waiting;
    };

    const changeDeny = async () => {
        await axios.put(url, deny).then(function (result) {
            console.log(result);
            window.location.reload();
        });
        return deny;
    };
    return (
        <div>
            <PrimaryButton onClick={() => setLgShow(true)}>
                Request Data Form
            </PrimaryButton>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Form Request
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body css={wrapperStyles}>
                    <div>
                        <h1>Form Submission</h1>
                    </div>
                    <div>
                        <Col xs={12}>
                            <Table style={{ borderStyle: "hidden" }}>
                                <tbody>
                                    <tr style={{ borderStyle: "hidden" }}>
                                        <td>
                                            1. Duration working outside of your
                                            home:
                                        </td>
                                        <td>{data.idUser.workDuration}</td>
                                    </tr>
                                    <tr style={{ borderStyle: "hidden" }}>
                                        <td>
                                            2. Do You Own Or Rent Your Home:
                                        </td>
                                        <td> {data.idUser.houseStatus}</td>
                                    </tr>
                                    <tr style={{ borderStyle: "hidden" }}>
                                        <td>
                                            {" "}
                                            3. Have You Ever Given Pets Up For
                                            Adoption?
                                        </td>
                                        <td>{data.idUser.hasGivenPet}</td>
                                    </tr>
                                    <tr style={{ borderStyle: "hidden" }}>
                                        <td>
                                            4. Do You Have Small Children in the
                                            House?
                                        </td>
                                        <td>
                                            {data.idUser.hasChildrenAtHouse}
                                        </td>
                                    </tr>
                                    <tr style={{ borderStyle: "hidden" }}>
                                        <td>5. Do You Have Other Pets?</td>
                                        <td>{data.idUser.otherPet}</td>
                                    </tr>
                                    <tr style={{ borderStyle: "hidden" }}>
                                        <td>
                                            6. Do You Tend to Keep Your Pets in
                                            a Cage?
                                        </td>
                                        <td>{data.idUser.willPetBeCaged}</td>
                                    </tr>
                                    <tr style={{ borderStyle: "hidden" }}>
                                        <td>7. What is Your Monthly Income?</td>
                                        <td>{data.idUser.salary}</td>
                                    </tr>
                                    <tr style={{ borderStyle: "hidden" }}>
                                        <td>
                                            8. Finally, Tell Us Why You'd Like
                                            To Adopt this Pet!
                                        </td>
                                        <td>{data.reason}</td>
                                    </tr>
                                </tbody>
                                <div>
                                    <span>
                                        <Button
                                            variant="success"
                                            onClick={changeWaiting}
                                        >
                                            Approve
                                        </Button>
                                    </span>
                                    &nbsp;&nbsp;&nbsp;&nbsp;
                                    <span>
                                        <Button
                                            variant="danger"
                                            onClick={changeDeny}
                                        >
                                            Deny
                                        </Button>
                                    </span>
                                </div>
                            </Table>
                        </Col>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    );
};

export default FormPopUp;
