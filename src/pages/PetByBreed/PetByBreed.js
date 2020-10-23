/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useEffect } from "react";
import { Formik, Form } from "formik";
import { useParams, Link } from "react-router-dom";
// import Skeleton from 'react-loading-skeleton';

import {
    Card,
    Button,
    Row,
    Col,
    ToggleButton,
    ToggleButtonGroup,
} from "react-bootstrap";

import {
    toggle,
    buttonGroup,
    widthButton,
    wrapperCover,
    collections,
    filter,
    card,
    cardcss,
    cardcss1,
    wrapperCover1
} from "../BreedByCategory/BreedByCategory.styles"

const PetByBreed = () => {
    const [collection, setCollection] = useState([]);
    const { category, breed } = useParams();

    const size = [
        { name: "Small", value: "Small" },
        { name: "Medium", value: "Medium" },
        { name: "Large", value: "Large" },
        { name: "Extra Large", value: "ExtraLarge" },
    ];
    const gender = [
        { name: "Female", value: "Female" },
        { name: "Male", value: "Male" },
    ];
    const alphabet = [
        { name: "Ascending Order", value: "asc" },
        { name: "Descending Order", value: "desc" },
    ];

    const fetchCollection = async () => {
        const url = `${process.env.REACT_APP_API_URL}/petdetails/?category=${category}&search=${breed}`;
        const response = await fetch(url);
        const result = await response.json();
        setCollection(result.result);
    };

    useEffect(() => {
        fetchCollection();

        //eslint-disable-next-line
    }, []);

    console.log(collection)

    return (
        <div>
            <div css={category === "dog" ? wrapperCover : wrapperCover1}>
                <div>
                    <h1 style={{ color: "white", paddingLeft: "80px", fontWeight: "500" }}>You're Looking For : <br /><p style={{ fontSize: "50px", fontWeight: "600" }}>{breed}</p></h1>
                </div>
            </div>
            <Formik
                initialValues={{ size: "", gender: "", alphabet: "" }}
                onSubmit={async (values) => {
                    const url = `${process.env.REACT_APP_API_URL}/pet/breed/${category}/${breed}/filter?size=${values.size}&gender=${values.gender}&alphabet=${values.alphabet}`;
                    const response = await fetch(url);
                    const result = await response.json();

                    setCollection(result.result);
                }}
            >
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit,
                }) => (
                        <div css={filter}>
                            <h2 style={{ fontWeight: "600", textAlign: "center", color: "#494949", paddingBottom: "20px" }}>Filter By Breed</h2>
                            <p style={{ fontSize: "20px", textAlign: "center", color: "#494949" }}>By Size</p>
                            <Form>
                                <div css={buttonGroup}>
                                    <ToggleButtonGroup
                                        css={widthButton}
                                        name="size"
                                        type="radio"
                                        value={values.size}
                                    >
                                        {size.map((radio, idx) => {
                                            return (
                                                <ToggleButton
                                                    css={toggle}
                                                    key={idx}
                                                    onChange={handleChange}
                                                    value={radio.value}
                                                    variant="success"
                                                    onClick={() => { }}
                                                >
                                                    {radio.name}
                                                </ToggleButton>
                                            );
                                        })}
                                    </ToggleButtonGroup>
                                </div>
                                <p style={{ fontSize: "20px", textAlign: "center", color: "#494949" }}>By Gender</p>
                                <div
                                    css={buttonGroup}
                                    className="justify-content-md-center"
                                >
                                    <ToggleButtonGroup
                                        css={widthButton}
                                        name="gender"
                                        type="radio"
                                        value={values.gender}
                                    >
                                        {gender.map((radio, idx) => (
                                            <ToggleButton
                                                css={toggle}
                                                key={idx}
                                                variant="success"
                                                value={radio.value}
                                                onChange={handleChange}
                                                onClick={() => { }}
                                            >
                                                {radio.name}
                                            </ToggleButton>
                                        ))}
                                    </ToggleButtonGroup>
                                </div>
                                <p style={{ fontSize: "20px", textAlign: "center", color: "#494949" }}>Find By Alphabetical Order</p>
                                <div css={buttonGroup}>
                                    <ToggleButtonGroup
                                        css={widthButton}
                                        name="alphabet"
                                        type="radio"
                                        value={values.gender}
                                        onClick={() => { }}
                                    >
                                        {alphabet.map((radio, idx) => (
                                            <ToggleButton
                                                css={toggle}
                                                key={idx}
                                                variant="success"
                                                name="alphabet"
                                                value={radio.value}
                                                onChange={handleChange}
                                                onClick={() => { }}
                                            >
                                                {radio.name}
                                            </ToggleButton>
                                        ))}
                                    </ToggleButtonGroup>
                                </div>
                                <Row className="justify-content-center">
                                    <Button type="submit" onClick={() => { }} variant="success" style={{ marginTop: "50px", fontSize: "20px" }}>
                                        Filter Result
                                </Button>
                                </Row>
                            </Form>
                        </div>
                    )}
            </Formik>
            <div css={collections}>
                <Row>
                    {
                        collection.length ? (
                            collection.map((item) => {
                                return (
                                    <Col
                                        xs={12}
                                        md={4}
                                        key={item.idPet._id}
                                        css={card}
                                    >
                                        <Link
                                            to={`/pets-detail/${item.idPet._id}`}
                                        >
                                            <Card style={{ borderRadius: "20px", width: "25rem" }}>
                                                <Card.Img
                                                    variant="top"
                                                    src={item.idPet.image[0]}
                                                    style={{
                                                        objectFit: "cover",
                                                        height: "350px",
                                                        borderTopLeftRadius: "20px",
                                                        borderTopRightRadius: "20px"
                                                    }}
                                                />
                                                <Card.Title css={cardcss1}>
                                                    <h4>
                                                        <b>{item.idPet.petName}</b>
                                                    </h4>
                                                </Card.Title>
                                                <Card.Text css={cardcss}>
                                                    {item.idPet.gender}, {item.idPet.age} Years Old
                                            <br />
                                                    {item.idPet.location}
                                                </Card.Text>
                                            </Card>
                                        </Link>
                                    </Col>
                                );
                            })
                        ) : (
                                <div>
                                    <p>Loading Content, Please Wait...</p>
                                </div>
                            )
                    }
                </Row>
            </div>
        </div>
    );
};

export default PetByBreed;
