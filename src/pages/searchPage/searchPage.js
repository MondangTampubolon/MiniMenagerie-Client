/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Pagination from '../../components/Pagination'

import {
    Card,
    FormControl,
    Row,
    Col,
    Form,
    Container,
} from "react-bootstrap";

import {
    wrapperCover,
    img,
    whitecolor,
    card,
    margin,
    sortby,
    title,
    result,
    petsAvailable,
    cardCss,
    marginTop,
    cardstyle,
    rowmargin,
} from "./searchPage.styles";

const SearchPage = () => {
    const [searchPet, setSearchPet] = useState([]);
    const [search, setSearch] = useState("");
    const [, setFilter] = useState("");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const searchBar = localStorage.getItem("search");
    const [petPerPage] = useState(9);
    const [currentPet, setCurrentPage] = useState(1);

    //get current products
    const indexOfLastProduct = currentPet * petPerPage;
    const indexOfFirstProduct = indexOfLastProduct - petPerPage;
    const currentPets = searchPet.slice(
        indexOfFirstProduct,
        indexOfLastProduct
    );

    //change page
    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    const handleChange = (event) => {
        setSearch(event.target.value);
    };

    const handleFilter = (event) => {
        setFilter(event.target.value);
    };

    const getFilter = () => {
        const url = `http://localhost:8000/petdetails/?search=${search}`;
        axios
            .get(url)
            .then(function (response) {
                const data = response.data.result.filter(item => item.status === 
                    "Available" && item.idPet !== 
                    null && item.idPet.idBreed !== 
                    null);
                setSearchPet(data);
                setLoading(false);
            })
            .catch(function (error) {
                setError(true);
                setErrorMessage(error.message);
                setLoading(false);
            });
    };

    const getSearch = () => {
        const url = `http://localhost:8000/petdetails/?search=${search}`;
        axios
            .get(url)
            .then(function (response) {
                const data = response.data.result.filter(item => item.status === 
                    "Available" && item.idPet !== 
                    null && item.idPet.idBreed !== 
                    null);
                setSearchPet(data);
                setLoading(false);
            })
            .catch(function (error) {
                setError(true);
                setErrorMessage(error.message);
                setLoading(false);
            });
    };

    useEffect(() => {
        const url =
            searchBar !== null
                ? `${process.env.REACT_APP_API_URL}/petdetails/?search=${searchBar}`
                : `${process.env.REACT_APP_API_URL}/pet`;

        axios
            .get(url)
            .then(function (response) {
                const data = response.data.result.filter(item => item.status === 
                    "Available" && item.idPet !== 
                    null && item.idPet.idBreed !== 
                    null);
                    console.log(data);
                setSearchPet(data);
                setLoading(false);
            })
            .catch(function (error) {
                setError(true);
                setErrorMessage(error.message);
                setLoading(false);
            });
            
            //eslint-disable-next-line
    }, []);
    return (
        <div>
            <div css={wrapperCover}>
                <div css={margin}>
                    <h1 css={whitecolor}>Looking For Something Specific?</h1>
                    <Card css={card}>
                        <FormControl
                            onChange={handleChange}
                            onKeyUp={getSearch}
                            name="search"
                            value={search}
                            type="text"
                            placeholder="e.g Animal Name"
                            className="mr-sm-2"
                        ></FormControl>
                    </Card>
                </div>
            </div>
            <div css={sortby}>
                <Card css={sortby}>
                    <Row>
                        <Col css={sortby}>
                            <div className="nameSearch" css={sortby}>
                                Search Result for: {searchBar}
                            </div>
                        </Col>
                        <Col>
                            <div className="sortBy" css={sortby}>
                                <Form.Group as={Col} controlId="formGridFilter">
                                    Sort By:
                                    <Form.Control
                                        onChange={handleFilter}
                                        onClick={getFilter}
                                        as="select"
                                        defaultValue="Location"
                                    >
                                        <option value="location-asc">
                                            Location
                                        </option>
                                        <option value="gender-asc">
                                            Gender
                                        </option>
                                        <option value="name-asc">
                                            Alphabet
                                        </option>
                                        <option value="age-asc">
                                            Oldest to Newest
                                        </option>
                                    </Form.Control>
                                </Form.Group>
                            </div>
                        </Col>
                    </Row>
                </Card>
            </div>
            <Card css={result}>
                <div css={petsAvailable}>
                    {loading ? (
                        <div className="lds-circle"></div>
                    ) : error ? (
                        <div>{errorMessage}</div>
                    ) : (
                        <Container style={{ maxWidth: "100%" }} css={marginTop}>
                            <Row css={rowmargin}>
                                {currentPets !== undefined &&
                                    currentPets.length > 0 &&
                                    currentPets.map((item) => (
                                        <Col
                                            sm={3}
                                            css={cardCss}
                                            style={{ maxWidth: "22rem" }}
                                        >
                                            <Link
                                                to={`/pets-detail/${item.idPet._id}`}
                                            >
                                                <Card
                                                    style={{ width: "22rem" }}
                                                    css={cardstyle}
                                                >
                                                    <Card.Img
                                                        css={img}
                                                        variant="top"
                                                        src={item.idPet.image[0]}
                                                    />
                                                    <Card.Body>
                                                        <Card.Title css={title}>
                                                            {item.idPet.petName}
                                                        </Card.Title>
                                                        <Card.Text>
                                                            {item.idPet.idBreed.breedName}
                                                            <br/>
                                                            {item.idPet.gender},{" "}
                                                           
                                                            {item.idPet.age} Years Old
                                                            <br/>
                                                            {item.idPet.location}

                                                        </Card.Text>
                                                    </Card.Body>
                                                </Card>
                                            </Link>
                                        </Col>
                                    ))}
                            </Row>
                        </Container>
                    )}
                </div>
            </Card>
            <div>
                <Pagination
                    productsPerPage={petPerPage}
                    totalProducts={searchPet.length}
                    paginate={paginate}
                />
            </div>
        </div>
    );
};

export default SearchPage;
