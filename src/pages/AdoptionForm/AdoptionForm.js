/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Col, Form, Row } from "react-bootstrap";
import { useEffect, useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

import PrimaryButton from "../../components/Button/Button";
import {
    adoptionForm,
    coverImages,
    cover,
    formTitle,
    adoptionWrapper,
    adoptionTitle,
    formInput,
    personalData,
    tellUs,
    formSpacing,
    buttonPlacement,
} from "./AdoptionForm.styles";
import rabbit from "../../assets/rabbitCover.png";
import dog from "../../assets/dogCover.png";
import cat from "../../assets/catCover.png";
import hamster from "../../assets/hamsterCover.png";
import bird from "../../assets/birdCover.png";
import Swal from "sweetalert2";

const AdoptionForm = () => {
    const [user, setUser] = useState({
        noHandphone: "",
        detailAddress: "",
        state: "",
        province: "",
        zip_code: "",
        work: "",
        workDuration: "",
        houseStatus: "",
        hasGivenPet: "",
        hasChildrenAtHouse: "",
        willPetBeCaged: "",
        otherPet: "",
        salary: "",
    });
    const [reason, setReason] = useState("");
    let idPet = localStorage.getItem("selectedPet");

    const userData = JSON.parse(localStorage.getItem("user"));
    let id = userData.idUser._id;

    const fetchDataUser = async () => {
        let result = await axios.get(`http://localhost:8000/users/${id}`); //endpoint
        setUser(result.data.result);
    };

    const updateUser = () => {
        return axios.put(`http://localhost:8000/users/${id}`, user);
    };
    const createForm = () => {
        return axios.post("http://localhost:8000/formRequest/create", {
            idUser: user._id,
            idPet,
            reason,
        });
    };
    const history = useHistory();

    const handleSubmitForm = async (event) => {
        event.preventDefault();
        axios
            .all([createForm(), updateUser()])
            .then(
                axios.spread((form, user) => {
                    if (form.status === 200) {
                        Swal.fire("Your request is being processed");
                        history.goBack();
                    }
                })
            )
            .catch((err) => console.log(err));
    };
    const handleChange = (event) => {
        setUser({
            ...user,
            [event.target.name]: event.target.value,
        });
    };
    const reasonChange = (event) => {
        setReason(event.target.value);
    };

    useEffect(() => {
        fetchDataUser();

        //eslint-disable-next-line
    }, []);

    return (
        <div css={adoptionWrapper}>
            <div css={adoptionTitle}>
                <h1>Hello There!</h1>
                <h4>
                    Please Fill Out the Form Below to Continue the Adoption
                    Process
                </h4>
            </div>
            <div css={adoptionForm}>
                <div css={cover}>
                    <div>
                        <img src={dog} css={coverImages} alt="dog"></img>
                    </div>
                    <div>
                        <img src={cat} css={coverImages} alt="cat"></img>
                    </div>
                    <div>
                        <img src={rabbit} css={coverImages} alt="rabbit"></img>
                    </div>
                    <div>
                        <img src={bird} css={coverImages} alt="bird"></img>
                    </div>
                    <div>
                        <img
                            src={hamster}
                            css={coverImages}
                            alt="hamster"
                        ></img>
                    </div>
                </div>
                <div>
                    <div>
                        <h2 css={formTitle}>PET ADOPTION FORM</h2>
                    </div>
                    <div css={formInput}>
                        <h3 css={personalData}>PERSONAL DATA</h3>
                        <Form onSubmit={handleSubmitForm}>
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridEmail">
                                    <Form.Label>Full Name</Form.Label>
                                    <Form.Control
                                        placeholder={userData.fullName}
                                        value={userData.fullName}
                                        disabled
                                    />
                                </Form.Group>

                                <Form.Group
                                    as={Col}
                                    controlId="formGridPassword"
                                >
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder={userData.email}
                                        value={userData.email}
                                        disabled
                                    />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Phone Number</Form.Label>
                                <Form.Control
                                    placeholder="No Handphone"
                                    name="noHandphone"
                                    value={user.noHandphone}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Address</Form.Label>
                                <Form.Control
                                    placeholder="Detail Address"
                                    name="detailAddress"
                                    value={user.detailAddress}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridCity">
                                    <Form.Label>City</Form.Label>
                                    <Form.Control
                                        placeholder="City"
                                        name="state"
                                        value={user.state}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridState">
                                    <Form.Label>Province</Form.Label>
                                    <Form.Control
                                        placeholder="Province"
                                        name="province"
                                        value={user.province}
                                        onChange={handleChange}
                                        required
                                    ></Form.Control>
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridZip">
                                    <Form.Label>Zip</Form.Label>
                                    <Form.Control
                                        placeholder="Zip Code"
                                        name="zip_code"
                                        value={user.zip_code}
                                        onChange={handleChange}
                                        required
                                    />
                                </Form.Group>
                            </Form.Row>

                            <Form.Group controlId="formGridAddress1">
                                <Form.Label>Occupation</Form.Label>
                                <Form.Control
                                    placeholder="Occupation"
                                    name="work"
                                    value={user.work}
                                    onChange={handleChange}
                                    required
                                />
                            </Form.Group>

                            <h3 css={tellUs}>TELL US A BIT ABOUT YOU!</h3>
                            <fieldset>
                                <Form.Group as={Row} css={formSpacing}>
                                    <Form.Label
                                        as="legend"
                                        column
                                        sm={6}
                                        size="lg"
                                    >
                                        1. Duration of working outside of your
                                        home:
                                    </Form.Label>
                                    <Col sm={4}>
                                        <Form.Check
                                            type="radio"
                                            label="<6 hours"
                                            name="workDuration"
                                            id="formHorizontalRadios1"
                                            value="<6 Hours"
                                            onChange={handleChange}
                                            required
                                            // checked={
                                            //     workingDuration === "<6 Hours"
                                            // }
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="6-10 hours"
                                            name="workDuration"
                                            id="formHorizontalRadios2"
                                            value="6-10 Hours"
                                            onChange={handleChange}
                                            required

                                            // checked={
                                            //     workingDuration === "6-10 Hours"
                                            // }
                                        />
                                        <Form.Check
                                            type="radio"
                                            label=">10 hours"
                                            name="workDuration"
                                            id="formHorizontalRadios3"
                                            value=">10 Hours"
                                            onChange={handleChange}
                                            required

                                            // checked={
                                            //     workingDuration === ">10 Hours"
                                            // }
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} css={formSpacing}>
                                    <Form.Label
                                        as="legend"
                                        column
                                        sm={6}
                                        size="lg"
                                    >
                                        2. Do you own or rent your home?
                                    </Form.Label>
                                    <Col sm={4}>
                                        <Form.Check
                                            type="radio"
                                            label="Own"
                                            name="houseStatus"
                                            id="formHorizontalRadios1"
                                            value="Own"
                                            onChange={handleChange}
                                            required

                                            // checked={ownRent === "own"}
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="Rent"
                                            name="houseStatus"
                                            id="formHorizontalRadios2"
                                            value="Rent"
                                            onChange={handleChange}
                                            required

                                            // checked={ownRent === "Rent"}
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} css={formSpacing}>
                                    <Form.Label
                                        as="legend"
                                        column
                                        sm={6}
                                        size="lg"
                                    >
                                        3. Have You Ever Given Pets Up For
                                        Adoption?
                                    </Form.Label>
                                    <Col sm={4}>
                                        <Form.Check
                                            type="radio"
                                            label="Yes"
                                            name="hasGivenPet"
                                            id="formHorizontalRadios1"
                                            value="Yes"
                                            onChange={handleChange}
                                            required

                                            // checked={givenPets === "Yes"}
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="No"
                                            name="hasGivenPet"
                                            id="formHorizontalRadios2"
                                            value="No"
                                            onChange={handleChange}
                                            required

                                            // checked={givenPets === "No"}
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} css={formSpacing}>
                                    <Form.Label
                                        as="legend"
                                        column
                                        sm={6}
                                        size="lg"
                                    >
                                        4. Do You Have Small Children in the
                                        House?
                                    </Form.Label>
                                    <Col sm={4}>
                                        <Form.Check
                                            type="radio"
                                            label="Yes"
                                            name="hasChildrenAtHouse"
                                            id="formHorizontalRadios1"
                                            value="Yes"
                                            onChange={handleChange}
                                            required

                                            // checked={children === "Yes"}
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="No"
                                            name="hasChildrenAtHouse"
                                            id="formHorizontalRadios2"
                                            value="No"
                                            onChange={handleChange}
                                            required

                                            // checked={children === "No"}
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} css={formSpacing}>
                                    <Form.Label
                                        as="legend"
                                        column
                                        sm={6}
                                        size="lg"
                                    >
                                        5. Do You Have Other Pets?
                                    </Form.Label>
                                    <Col sm={4}>
                                        <Form.Check
                                            type="radio"
                                            label="Yes"
                                            name="otherPet"
                                            id="formHorizontalRadios1"
                                            value="Yes"
                                            onChange={handleChange}
                                            required

                                            // checked={otherPets === "Yes"}
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="No"
                                            workduration
                                            name="otherPet"
                                            id="formHorizontalRadios2"
                                            value="No"
                                            onChange={handleChange}
                                            required

                                            // checked={otherPets === "No"}
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group
                                    controlId="formGridAddress1"
                                    css={formSpacing}
                                ></Form.Group>

                                <Form.Group as={Row} css={formSpacing}>
                                    <Form.Label
                                        as="legend"
                                        column
                                        sm={6}
                                        size="lg"
                                    >
                                        6. Do You Tend to Keep Your Pets in a
                                        Cage?
                                    </Form.Label>
                                    <Col sm={4}>
                                        <Form.Check
                                            type="radio"
                                            label="Yes"
                                            name="willPetBeCaged"
                                            id="formHorizontalRadios1"
                                            value="Yes"
                                            onChange={handleChange}
                                            required

                                            // checked={cage === "Yes"}
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="No"
                                            name="willPetBeCaged"
                                            id="formHorizontalRadios2"
                                            value="No"
                                            onChange={handleChange}
                                            required

                                            // checked={cage === "No"}
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="Sometimes"
                                            name="willPetBeCaged"
                                            id="formHorizontalRadios2"
                                            value="Sometimes"
                                            onChange={handleChange}
                                            required

                                            // checked={cage === "Sometimes"}
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group as={Row} css={formSpacing}>
                                    <Form.Label
                                        as="legend"
                                        column
                                        sm={6}
                                        size="lg"
                                    >
                                        7. What is Your Monthly Income?{" "}
                                        <br></br>
                                        (This is to check Pet Maintenance costs)
                                    </Form.Label>
                                    <Col sm={4}>
                                        <Form.Check
                                            type="radio"
                                            label="< Rp. 5.000.000 IDR"
                                            name="salary"
                                            id="formHorizontalRadios1"
                                            value="<5.000.000"
                                            onChange={handleChange}
                                            required

                                            // checked={income === "< 5.000.000"}
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="Rp. 5.000.000 IDR - Rp. 10.000.000 IDR"
                                            name="salary"
                                            id="formHorizontalRadios2"
                                            value="5.000.000-10.000.000"
                                            onChange={handleChange}
                                            required

                                            // checked={
                                            //     income ===
                                            //     "5.000.000-10.000.000"
                                            // }
                                        />
                                        <Form.Check
                                            type="radio"
                                            label="> Rp. 10.000.000 IDR"
                                            name="salary"
                                            id="formHorizontalRadios2"
                                            value=">10.000.000"
                                            onChange={handleChange}
                                            required

                                            // checked={income === "<10.000.000"}
                                        />
                                    </Col>
                                </Form.Group>

                                <Form.Group
                                    controlId="exampleForm.ControlTextarea1"
                                    css={formSpacing}
                                >
                                    <Form.Label>
                                        8. Finally, Tell Us Why You'd Like To
                                        Adopt this Pet!
                                    </Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows="3"
                                        name="reason"
                                        value={reason}
                                        onChange={reasonChange}
                                        placeholder="I'd Like To Adopt This Pet Because..."
                                        required
                                    />
                                </Form.Group>

                                <div css={buttonPlacement}>
                                    <PrimaryButton
                                        css={buttonPlacement}
                                        type="submit"
                                    >
                                        Submit Form
                                    </PrimaryButton>
                                </div>
                            </fieldset>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdoptionForm;
