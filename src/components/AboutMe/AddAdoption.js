/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Col, Row, Form } from "react-bootstrap";
import axios from "../../helpers/axios";
import ReactFilestack from "filestack-react";
import Swal from "sweetalert2";
import { useHistory } from "react-router-dom";



import PrimaryButton from "../Button/Button";
import { useState, useEffect } from "react";

import { upload, uploadPhoto, fs } from "./EditProfile.styles";

const AddAdoption = ({ edit }) => {
    console.log(edit);
    const [formPet, setFormPet] = useState({
        idCategoryPet: "",
        idBreed: "",
        idUser: "",
        petName: "",
        gender: "",
        age: "",
        weight: "",
        size: "",
        location: "",
        about: "",
        image: "",
        fee: "",
    });

    let userData = JSON.parse(localStorage.getItem("user"));

    const [petCategory, setPetCategory] = useState([]);
    const [breed, setBreed] = useState([]);
    const history = useHistory();

    const getCategory = async () => {

        let category = await axios.get("categoryPet");
        if (category.status === 200) {
            let categoryPet = category.data.result.map((item) => { 
                let dataCategory = {
                    id: item._id,
                    categoryName: item.categoryName,
                };
                return dataCategory;
            });
            setPetCategory(categoryPet);
        }
    };

    const getBreed = async () => {
        let breeds = await axios.get("breed");
        let dataBreeds = breeds.data.result.map((item) => {
            let tes = {
                id: item.idCategoryPet._id,
                idBreed: item._id,
                categoryName: item.idCategoryPet.categoryName,
                breedName: item.breedName,
            };
            return tes;
        });
        setBreed(dataBreeds);
    };
   
    const getUser = async () => {
        let dataUser = await JSON.parse(localStorage.getItem("user"));
        let idUser = dataUser.idUser._id;
        return idUser;
    };

    const addNewPet = async (event) => {
        event.preventDefault();
        let idUser = await getUser();
        const newPet = await axios.post("pet/create", {
            idCategoryPet: formPet.idCategoryPet,
            idBreed: formPet.idBreed,
            idUser: idUser,
            petName: formPet.petName,
            gender: formPet.gender,
            age: formPet.age,
            weight: formPet.weight,
            size: formPet.size,
            location: formPet.location,
            about: formPet.about,
            image: formPet.image,
            fee: formPet.fee,
        });
        if (newPet.status === 200) {
            const newPetForAdoption = await axios.post(
                "petUpForAdoption/create",
                {
                    idUser: idUser,
                    idPet: newPet.data.result._id,
                    fee: formPet.fee,
                    status: "Available",
                }
            );
            if (newPetForAdoption.status === 200) {
                Swal.fire({
                    title: "Your request has been sent",
                    icon: "success",
                });
                history.goBack();
            }
        }
    };

    const handleChange = (event) => {
        setFormPet({
            ...formPet,
            [event.target.name]: event.target.value,
        });
    };
    const [, setShow] = useState(false);
    const handleClose = () => setShow(false);

    useEffect(() => {
        getCategory();
        getBreed();
        getUser();       
    }, []);

    return (
        <div>
            <Form onSubmit={addNewPet}>
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
                                setFormPet({
                                    ...formPet,
                                    image: res.filesUploaded[0].url,
                                })
                            }
                        />
                    </div>
                    <Row
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Col>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label column sm="5">
                                        Pet Name:
                                    </Form.Label>
                                    <Col sm="7">
                                        <Form.Control
                                            placeholder="Pet Name"
                                            style={{ width: "350px" }}
                                            type="text"
                                            value={formPet.petName}
                                            name="petName"
                                            onChange={handleChange}
                                            required
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label column sm="5">
                                        Fee:
                                    </Form.Label>
                                    <Col sm="7">
                                        <Form.Control
                                            placeholder="Rp.100.000 "
                                            style={{ width: "350px" }}
                                            type="text"
                                            value={formPet.fee}
                                            name="fee"
                                            prefix="Rp."
                                            allowDecimals={true}
                                            onChange={handleChange}
                                            required
                                        ></Form.Control>                                       
                                    </Col>
                                </Form.Group>
                            </Form.Row>
                        </Col>
                    </Row>
                    <Row
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Col>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label column sm="5">
                                        Category Pet:
                                    </Form.Label>

                                    <Col sm="7">
                                        <Form.Control
                                            style={{ width: "350px" }}
                                            onChange={handleChange}
                                            name="idCategoryPet"
                                            onClick=""
                                            as="select"
                                            defaultValue="Category Pet"
                                            required
                                        >
                                            <option selected>
                                                Select
                                            </option>
                                            {petCategory.map((item) => {
                                                return (
                                                    <option value={item.id}>
                                                        {item.categoryName}
                                                    </option>
                                                );
                                            })}
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label column sm="5">
                                        Breeds:
                                    </Form.Label>
                                    <Col sm="7">
                                        <Form.Control
                                            style={{ width: "350px" }}
                                            onChange={handleChange}
                                            onClick=""
                                            as="select"
                                            defaultValue="idBreed"
                                            name="idBreed"
                                            required
                                        >
                                            <option selected>
                                                Select
                                            </option>
                                            {breed
                                                .filter((item) => {
                                                    return (
                                                        item.id ===
                                                        formPet.idCategoryPet
                                                    );
                                                })
                                                .map((items) => {
                                                    return (
                                                        <option
                                                            value={
                                                                items.idBreed
                                                            }
                                                        >
                                                            {items.breedName}
                                                        </option>
                                                    );
                                                })}
                                        </Form.Control>
                                    </Col>
                                </Form.Group>
                            </Form.Row>
                        </Col>
                    </Row>
                    <Row
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Col>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label column sm="5">
                                        Size:
                                    </Form.Label>
                                    <Col sm="7">
                                        <Form.Control
                                            placeholder="Size"
                                            style={{ width: "350px" }}
                                            as="select"
                                            value={formPet.size}
                                            name="size"
                                            onChange={handleChange}
                                            required
                                        ><option selected>Select</option>
                                         <option value="Small">Small</option>
                                         <option value="Medium">Medium</option>
                                         <option value="Large">Large</option>
                                         </Form.Control>
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label column sm="5">
                                        Gender:
                                    </Form.Label>
                                    <Col sm="7">
                                        <Form.Control
                                            placeholder="Gender"
                                            style={{ width: "350px" }}
                                            value={formPet.gender}
                                            name="gender"
                                            as="select"
                                            onChange={handleChange}
                                            required
                                        >    <option selected>Select</option>
                                             <option value="Female">Female</option>
                                             <option value="Male">Male</option>
                                        </Form.Control>   
                                    </Col>
                                </Form.Group>
                            </Form.Row>
                        </Col>
                    </Row>
                    <Row
                        style={{
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Col>
                            <Form.Row>
                                <Form.Group as={Col}>
                                    <Form.Label column sm="5">
                                        Age :
                                    </Form.Label>
                                    <Col sm="7">
                                        <Form.Control
                                            placeholder="Years old"
                                            style={{ width: "350px" }}
                                            type="text"
                                            value={formPet.age}
                                            name="age"
                                            onChange={handleChange}
                                            required
                                        />
                                    </Col>
                                </Form.Group>
                                <Form.Group as={Col}>
                                    <Form.Label column sm="5">
                                        Weight :
                                    </Form.Label>
                                    <Col sm="7">
                                        <Form.Control
                                            placeholder="Weight"
                                            style={{ width: "350px" }}
                                            type="text"
                                            value={formPet.weight}
                                            name="weight"
                                            onChange={handleChange}
                                            required
                                        />
                                    </Col>
                                </Form.Group>
                            </Form.Row>
                        </Col>
                    </Row>
                    <Row>
                        <Form.Group as={Col}>
                            <Form.Label column sm="5">
                                Location :
                            </Form.Label>
                            <Col sm="5">
                                <Form.Control
                                    placeholder="Location"
                                    style={{ width: "735px", height: "60px" }}
                                    type="text"
                                    value={formPet.location}
                                    name="location"
                                    onChange={handleChange}
                                    required
                                >
                                 </Form.Control>
                            </Col>
                        </Form.Group>
                    </Row>
                    <Row>
                        <Form.Group as={Col}>
                            <Form.Label column sm="5">
                                About :
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control
                                    placeholder="About"
                                    style={{ width: "735px", height: "60px" }}
                                    type="textarea"
                                    value={formPet.about}
                                    name="about"
                                    onChange={handleChange}
                                    required
                                />
                            </Col>
                        </Form.Group>
                        <Form.Group as={Col}>
                            <Form.Label column sm="5">
                                Email :
                            </Form.Label>
                            <Col sm="7">
                                <Form.Control
                                    type="email"
                                    placeholder={userData.email}
                                    value={userData.email}
                                    disabled                            
                                />
                            </Col>
                        </Form.Group>
                    </Row>
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

export default AddAdoption;
