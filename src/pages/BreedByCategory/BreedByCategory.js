/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "react-multi-carousel/lib/styles.css";

import {
    Card,
    Row,
    Col,
    Container,
} from "react-bootstrap";

import {
    wrapperCover,
    collections,
    centertext,
    card,
    cards,
    cover,
    wrapperCover1
} from "./BreedByCategory.styles";

const BreedByCategory = () => {
    const [, setCollection] = useState([]);
    const [breed, setBreed] = useState([]);
    const { category } = useParams();
    const [search, setSearch] = useState("");

    // const responsive = {
    //     superLargeDesktop: {
    //         breakpoint: { max: 4000, min: 3000 },
    //         items: 5,
    //     },
    //     desktop: {
    //         breakpoint: { max: 3000, min: 1024 },
    //         items: 3,
    //     },
    //     tablet: {
    //         breakpoint: { max: 1024, min: 464 },
    //         items: 2,
    //     },
    //     mobile: {
    //         breakpoint: { max: 464, min: 0 },
    //         items: 1,
    //     },
    // };

    const fetchCollection = async () => {
        // const url = `${process.env.REACT_APP_API_URL}/pet/category/${category}`;
        // const url = `${process.env.REACT_APP_API_URL}/petdata/collection/${collection}`;
        const url = `${process.env.REACT_APP_API_URL}/petCollection`;
        const response = await fetch(url);
        const result = await response.json();

        setCollection(result.result);
    };

    const fetchBreed = async () => {
        const url = `${process.env.REACT_APP_API_URL}/pet/category/${category}`;
        const response = await fetch(url);

        const result = await response.json();
        function removeDuplicates(originalArray, prop) {
            var newArray = [];
            var lookupObject = {};

            for (var i in originalArray) {
                lookupObject[originalArray[i]["idBreed"][prop]] =
                    originalArray[i];
            }

            for (i in lookupObject) {
                newArray.push(lookupObject[i]);
            }
            return newArray;
        }

        var uniqueArray = removeDuplicates(result.result, "_id");

        setBreed(uniqueArray);
    };

    const searchBar = (event) => {
        event.preventDefault();

        localStorage.setItem("search", search);
        window.location.href = "/search-page";
    };

    const handleSearch = (event) => {
        setSearch(event.target.value);
    };
    useEffect(() => {
        fetchCollection();
        fetchBreed();
   
        //eslint-disable-next-line
    }, []);
    console.log(category);
    return (
        <div>
            <div css={category === "dog" ? wrapperCover : wrapperCover1}>
                <div css={cover}>
                
                    <p style={{fontWeight:"600", fontSize:"50px", color:"white"}}>Let Us Help You!</p>
                  
                    <Card css={cards}>
                        <Row style={{alignItems:"center"}}>
                            <form>
                                 <input style={{border:"none", outline:"none"}}
                                    type="text"
                                    css={cards}
                                    placeholder="Enter Breed Name"
                                    onChange={handleSearch}
                                    value={search}
                                ></input>
                                <button
                                    type="submit"
                                    onClick={searchBar}
                                    style={{border:"none", backgroundColor:"#FFF", color:"#8E8B8B", outline:"none", verticalAlign:"middle"}}
                                >
                                    <i className="fas fa-search fa-2x"></i>
                                </button>
                            </form>
                                </Row>
                    </Card>
                </div>
            </div>
            {/* <Formik
                initialValues={{ size: "", gender: "", alphabet: "" }}
                onSubmit={async (values) => {
                    const url = `${process.env.REACT_APP_API_URL}/pet/breed/${category}/filter?size=${values.size}&gender=${values.gender}&alphabet=${values.alphabet}`;
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
                        <h2 style={{fontWeight:"600", textAlign:"center", color:"#494949", paddingBottom:"20px"}}>Filter By Breed</h2>
                        <p style={{fontSize:"20px", textAlign:"center", color:"#494949"}}>By Size</p>
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
                                            >
                                                {radio.name}
                                            </ToggleButton>
                                        );
                                    })}
                                </ToggleButtonGroup>
                            </div>
                            <p style={{fontSize:"20px", textAlign:"center", color:"#494949"}}>By Gender</p>
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
                                        >
                                            {radio.name}
                                        </ToggleButton>
                                    ))}
                                </ToggleButtonGroup>
                            </div>
                            <p style={{fontSize:"20px", textAlign:"center", color:"#494949"}}>Find By Alphabetical Order</p>
                            <div css={buttonGroup}>
                                <ToggleButtonGroup
                                    css={widthButton}
                                    name="alphabet"
                                    type="radio"
                                    value={values.gender}
                                >
                                    {alphabet.map((radio, idx) => (
                                        <ToggleButton
                                        css={toggle}
                                            key={idx}
                                            variant="success"
                                            name="alphabet"
                                            value={radio.value}
                                            onChange={handleChange}
                                        >
                                            {radio.name}
                                        </ToggleButton>
                                    ))}
                                </ToggleButtonGroup>
                            </div>
                            <Row className="justify-content-center">
                                <Button type="submit" variant="success" style={{marginTop:"50px", fontSize:"20px"}}>
                                    Filter Result
                                </Button>
                            </Row>
                        </Form>
                    </div>
                )}
            </Formik> */}
            <div css={collections}>
                <Container fluid>
                    <div>
                        <h1 style={{textAlign:"center", fontWeight:"600", color:"#464646", fontSize:"50px"}}>All Breeds</h1>
                    </div>
                    <Row>
                        {breed.length > 0 &&
                            breed.map((item) => {
                                return (
                                    <Col
                                        xs={12}
                                        md={4}
                                        key={item._id}
                                        css={card}
                                    >
                                        <Link
                                            to={`/all-breeds/category/${category}/${item.idBreed.breedName}`}
                                        >
                                            <Card style={{borderRadius:"20px", margin:"30px", marginTop:"50px"}}>
                                                <Card.Img
                                                    variant="top"
                                                    src={item.image[0]}
                                                    style={{
                                                        objectFit: "cover",
                                                        height: "350px",
                                                        borderTopLeftRadius:"20px",
                                                        borderTopRightRadius:"20px"
                                                    }}
                                                />
                                                <Card.Title css={centertext} style={{color:"#46464"}}>
                                                    {item.idBreed.breedName}
                                                </Card.Title>
                                            </Card>
                                        </Link>
                                    </Col>
                                );
                            })}
                    </Row>
                </Container>
            </div>
        </div>
    );
};

export default BreedByCategory;
