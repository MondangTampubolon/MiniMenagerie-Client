/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Col, Row, Container, Modal, Table } from "react-bootstrap";

import { useState } from "react";

import PrimaryButton from "../Button/Button";
import {
    rowMargin,
    containerWrapper,
    avatar,
    editProfile,
    first,
    welcomeText,second,
} from "./aboutMeTab.styles";
import EditProfile from "./EditProfile";

const AboutMeTab = ({ profile }) => {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <Container fluid css={containerWrapper}>
            <div>
                <h1 css={welcomeText}>
                    Welcome,{" "}
                    {profile.idUser !== undefined && profile.idUser.fullName}!{" "}
                </h1>
            </div>
            <div css={first}>
                <Modal
                    show={show}
                    centered
                    onHide={handleClose}
                    size="lg"
                    aria-labelledby="example-modal-sizes-title-lg"
                >
                    <Modal.Header closeButton>
                        <Modal.Title>Edit Profile</Modal.Title>
                    </Modal.Header>
                    <Modal.Body className="modal-body modal-md">
                        <EditProfile
                            edit={profile}
                            handleClose={handleClose}
                        />
                    </Modal.Body>
                </Modal>

                <Row css={rowMargin}>
                    <Col xs={6}>
                        {
                            profile.idUser ? (
                                <img
                                    css={avatar}
                                    src={
                                        profile.idUser !== undefined &&
                                        profile.idUser.avatar
                                    }
                                    alt="avatar"
                                />
                            ) : (
                                <p>Loading...</p>
                            )
                        }
                    </Col>
                    <Col xs={6}>
                        <Table style={{ borderStyle: "hidden" }}>
                            <tbody>
                                <tr style={{ borderStyle: "hidden" }}>
                                    <td>
                                        <b>Name:</b>
                                    </td>
                                    <td>
                                        {profile.idUser !== undefined &&
                                            profile.idUser.fullName}
                                    </td>
                                </tr>
                                <tr style={{ borderStyle: "hidden" }}>
                                    <td>
                                        <b>Email:</b>
                                    </td>
                                    <td>{profile.email}</td>
                                </tr>
                                <tr style={{ borderStyle: "hidden" }}>
                                    <td>
                                        <b>Phone Number:</b>
                                    </td>
                                    <td>
                                        {profile.idUser !== undefined &&
                                            profile.idUser.noHandphone}
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
            <div>
                <Row css={second}>
                    <Col xs={6}>
                        <Table style={{ borderStyle: "hidden" }}>
                            <tbody>
                                <tr style={{ borderStyle: "hidden" }}>
                                    <td>
                                        <b>Location:</b>
                                    </td>
                                    <td>
                                        {profile.idUser !== undefined &&
                                            profile.idUser.country}
                                    </td>
                                </tr>
                                <tr style={{ borderStyle: "hidden" }}>
                                    <td>
                                        <b>Province:</b>
                                    </td>
                                    <td>
                                        {profile.idUser !== undefined &&
                                            profile.idUser.province}
                                    </td>
                                </tr>
                                <tr style={{ borderStyle: "hidden" }}>
                                    <td>
                                        <b>City:</b>
                                    </td>
                                    <td>
                                        {profile.idUser !== undefined &&
                                            profile.idUser.state}
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                    <Col xs={6}>
                        <Table style={{ borderStyle: "hidden" }}>
                            <tbody>
                                <tr style={{ borderStyle: "hidden" }}>
                                    <td>
                                        <b>Zip Code:</b>
                                    </td>
                                    <td>
                                        {profile.idUser !== undefined &&
                                            profile.idUser.zip_code}
                                    </td>
                                </tr>
                                <tr style={{ borderStyle: "hidden" }}>
                                    <td>
                                        <b>Address:</b>
                                    </td>
                                    <td>
                                        {profile.idUser !== undefined &&
                                            profile.idUser.detailAddress}
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </div>
            <PrimaryButton css={editProfile} onClick={handleShow}>
                Edit Profile
            </PrimaryButton>
        </Container>
    );
};

export default AboutMeTab;
//put edit profile here
