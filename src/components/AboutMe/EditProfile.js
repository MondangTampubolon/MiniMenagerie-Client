/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Col, Row, Form } from "react-bootstrap";
import axios from "axios";
import ReactFilestack from "filestack-react";

import PrimaryButton from "../Button/Button";
import { useState, useEffect } from "react";

import { upload, uploadPhoto, fs } from "./EditProfile.styles";

const EditProfile = ({ edit, handleClose }) => {
    const [, setUser] = useState([]);
    const [form, setForm] = useState({
        fullName: "",
        email: "",
        noHandphone: "",
        state: "",
        province: "",
        zip_code: "",
        country: "",
        detailAddress: "",
        avatar: "",
    });

    let userData = JSON.parse(localStorage.getItem("user"));

    const fetchProfile = async () => {
        let response = await axios.get(
            `http://localhost:8000/users/${userData.idUser._id}` //if let id=userData.id then ${id}
        ); //endpoint
        setUser(response.data.result);
    };

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleEditProfile = async (event) => {
        event.preventDefault();
        return axios
            .put(`http://localhost:8000/users/${userData.idUser._id}`, form)
            .then(() => window.location.reload());
    };

    useEffect(() => {
        fetchProfile();

        //eslint-disable-next-line
    }, []);

    return (
        <div>
            <Form onSubmit={handleEditProfile}>
                <Form.Row>
                    <div css={fs}>
                        <ReactFilestack
                            apikey={"AXQPEAHiQTeMTIKzisgugz"}
                            customRender={({ onPick }) => (
                                <div css={uploadPhoto}>
                                    <PrimaryButton
                                        style={{ margin: "10px 40%" }}
                                        css={upload}
                                        onClick={onPick}
                                    >
                                        Upload Photo
                                    </PrimaryButton>
                                </div>
                            )}
                            onSuccess={(res) =>
                                setForm({
                                    ...form,
                                    avatar: res.filesUploaded[0].url,
                                })
                            }
                        />
                    </div>

                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="5">
                            Name:
                        </Form.Label>
                        <Col sm="7">
                            <Form.Control
                                style={{ width: "400px" }}
                                type="text"
                                placeholder={
                                    edit.idUser !== undefined &&
                                    edit.idUser.fullName
                                }
                                value={form.fullName}
                                name="fullName"
                                onChange={handleChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="5">
                            Email:
                        </Form.Label>
                        <Col sm="7">
                            <Form.Control
                                style={{ width: "400px" }}
                                type="text"
                                placeholder={edit.email}
                                value={edit.email}
                                disabled
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="4">
                            Phone Number:
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control
                                style={{ width: "400px", marginLeft: "14px" }}
                                type="text"
                                placeholder={edit.idUser.noHandphone}
                                value={form.noHandphone}
                                name="noHandphone"
                                onChange={handleChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="4">
                            Location:
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control
                                style={{ width: "400px", marginLeft: "25px" }}
                                type="text"
                                placeholder={edit.idUser.country}
                                value={form.country}
                                name="country"
                                onChange={handleChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="4">
                            Province:
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control
                                style={{ width: "400px", marginLeft: "25px" }}
                                type="text"
                                placeholder={edit.idUser.province}
                                value={form.province}
                                name="province"
                                onChange={handleChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="5">
                            City:
                        </Form.Label>
                        <Col sm="7">
                            <Form.Control
                                style={{ width: "400px", marginLeft: "5px" }}
                                type="text"
                                placeholder={edit.idUser.state}
                                value={form.state}
                                name="state"
                                onChange={handleChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="4">
                            Zip Code:
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control
                                style={{ width: "400px", marginLeft: "25px" }}
                                type="text"
                                placeholder={edit.idUser.zip_code}
                                value={form.zip_code}
                                name="zip_code"
                                onChange={handleChange}
                            />
                        </Col>
                    </Form.Group>
                    <Form.Group as={Row} controlId="formPlaintextPassword">
                        <Form.Label column sm="4">
                            Address:
                        </Form.Label>
                        <Col sm="8">
                            <Form.Control
                                style={{ width: "400px", marginLeft: "25px" }}
                                type="text"
                                placeholder={edit.idUser.detailAddress}
                                value={form.detailAddress}
                                name="detailAddress"
                                onChange={handleChange}
                            />
                        </Col>
                    </Form.Group>
                    {/* <Form.Group as={Row} controlId="formPlaintextPassword">
                            <Form.Label column sm="2">
                                Location:
                            </Form.Label>
                            <Col sm="10">
                                <Form.Control type="text" placeholder={edit.idUser.country} value={form.country} name="country" onChange={handleChange}/>
                            </Col>
                        </Form.Group> */}
                </Form.Row>
                <PrimaryButton
                    style={{ margin: "0 40%" }}
                    type="submit"
                    onClick={() => {
                        handleClose();
                    }}
                >
                    Submit
                </PrimaryButton>
            </Form>
        </div>
    );
};

export default EditProfile;
