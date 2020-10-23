/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Col, Row, Container, Form } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";

import PrimaryButton from "../../components/Button/Button";
import { margin, changePassword } from "./accountSettings.styles";
import Swal from "sweetalert2";

const AccountSettings = ({ account }) => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState({
        passwordLama: "",
        passwordBaru: "",
    });
    const [form, setForm] = useState({
        email: "",
    });

    let userData = JSON.parse(localStorage.getItem("user"));

    const fetchData = async () => {
        let response = await axios.get(
            `http://localhost:8000/userAccount/${userData.id}` //if let id=userData.id then ${id}
        ); //endpoint
        setEmail(response.data.result.email);
    };

    const handleEditAccount = async (event) => {
        event.preventDefault();
        return axios
            .put(`http://localhost:8000/userAccountEmail/${userData.id}`, form)
            .then((result) => setEmail(result.data.result.email))
            .then(() => window.location.reload())
            .catch((err) => console.log(err));
    };

    const handleEditPassword = async (event) => {
        event.preventDefault();
        return axios
            .put(
                `http://localhost:8000/userAccountPassword/${userData.id}`,
                password
            )
            .then((result) => {
                if (result.status === 200) {
                    //liat di backend res
                    Swal.fire("Password Changed Succesfully!");
                }
            })
            .then(() => window.location.reload())
            .catch((err) => {
                if (err.message === "Request failed with status code 400") {
                    Swal.fire({
                        title: "Wrong Current Password",
                        icon: "warning",
                    });
                }
            });
    };

    const handleChangePassword = (event) => {
        event.preventDefault();
        setPassword({
            ...password,
            [event.target.name]: event.target.value,
        });
    };

    const handleChange = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    useEffect(() => {
        fetchData();
    });

    return (
        <Container fluid css={margin}>
            <div>
                <Col xs={8}>
                    <Form onSubmit={handleEditAccount}>
                        <Row>
                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Email: {email}</Form.Label>
                            </Form.Group>
                        </Row>
                        <Row>
                            <h5>Change Email:</h5>
                        </Row>
                        <Row>
                            <Form.Group controlId="formGridAddress1">
                                <Form.Control
                                    placeholder="New Email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                />
                            </Form.Group>
                        </Row>
                        <Row>
                            <PrimaryButton type="submit" onClick={() => { }}>
                                Update Email
                            </PrimaryButton>
                        </Row>
                    </Form>
                    <Form onSubmit={handleEditPassword}>
                        <Row css={changePassword}>
                            <h5>Change Password:</h5>
                        </Row>
                        <Row>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control
                                    type="password"
                                    placeholder="Current Password"
                                    name="passwordLama"
                                    onChange={handleChangePassword}
                                />
                            </Form.Group>
                        </Row>
                        <Row>
                            <Form.Group controlId="formBasicPassword">
                                <Form.Control
                                    type="password"
                                    placeholder="New Password"
                                    name="passwordBaru"
                                    onChange={handleChangePassword}
                                />
                            </Form.Group>
                        </Row>
                        <Row>
                            <PrimaryButton type="submit" onClick={() => { }}>
                                Update Password
                            </PrimaryButton>
                        </Row>
                    </Form>
                </Col>
            </div>
        </Container>
    );
};

export default AccountSettings;
