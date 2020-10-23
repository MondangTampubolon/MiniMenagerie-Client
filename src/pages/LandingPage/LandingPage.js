/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useEffect, useState } from "react";
import { Container, Row, Col, Dropdown, Jumbotron } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import Skeleton from 'react-loading-skeleton';

import PrimaryButton from "../../components/Button/Button";
import {
    wrapperCover,
    h2,
    p,
    linkTo,
    enterLocation,
    underCoverSearch,
    dogCatButton,
    otherPets,
    dropdownMenu,
    breedsLogo,
    petsAvailableText,
    petsAvailable,
    howToAdopt,
    letterIcon,
    informationIcons,
    jumbotron,
    iconText,
    iconContainer,
    arrowIcon,
    shop,
    shopText,
    dogfood1,
    dogfood2,
    buyNecessities,
    profits,
    goToShop,
    colStyles,
    centerMenu,
    searchLoc,
    breedsLogos,
    petsAvailableh2
} from "./LandingPage.styles";

import fish from "../../assets/fish.png";
import hamster from "../../assets/hamster.png";
import horse from "../../assets/horse.png";
import rabbit from "../../assets/rabbit.png";
import sheep from "../../assets/sheep.png";
import bird from "../../assets/bird.png";
import searchpets from "../../assets/searchpets.png";
import form from "../../assets/form.png";
import wait from "../../assets/wait.png";
import letter from "../../assets/letter.png";
import arrow from "../../assets/arrow.png";
import dogfood from "../../assets/dogfood.png";

import CardPet from "../../components/CardPet/CardPet";
import RecommendedProducts from "../../components/RecommendedProducts/RecommendedProducts";

const LandingPage = () => {
    const [, setCategoryPet] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState();
    const [petCards, setPetCards] = useState([]);
    const [search, setSearch] = useState("");
    const [, setProducts] = useState([]);

    const getProducts = async () => {
        setLoading(true);
        const response = await axios.get("/product");
        localStorage.setItem(
            "products",
            JSON.stringify(response.data.result)
        );
        setProducts(response.data.result);
        setTimeout(() => setLoading(false), 3000);
    };

    const fetchPet = () => {
        const url = "http://localhost:8000/pet";
        axios
            .get(url)
            .then(function (response) {
                const limit = response.data.result.slice(0, 4); //limit item display
                setCategoryPet(limit);
                setLoading(false);
            })
            .catch(function (error) {
                setError(true);
                setErrorMessage(error.message);
                setLoading(false);
            });
    };

    const url = () => {
        const url = "http://localhost:8000/petupforadoption";
        axios
            .get(url)
            .then(function (response) {
                const data = response.data.result.filter(item => item.status === 
                    "Available" && item.idPet !== 
                    null && item.idPet.idBreed !== 
                    null);
                const limit = data.slice(0, 4);
                setPetCards(limit);
                setLoading(false);
            })
            .catch(function (error) {
                setError(true);
                setErrorMessage(error.message);
                setLoading(false);
            });
    };

    useEffect(() => {
        getProducts();
        fetchPet();
        url();

        // eslint-disable-next-line
    }, []);


    const handleSearch = (event) => {
        setSearch(event.target.value);
    };

    const searchBar = (event) => {
        event.preventDefault();

        localStorage.setItem("search", search);
        window.location.href = "/search-page";
    };

    const categoryPet = (event) => {
        event.preventDefault();

        window.location.href = "/all-breeds/category/dog";
    }

    const categoryCat = (event) => {
        event.preventDefault();
        
        window.location.href = "/all-breeds/category/cat";
    }

    let dataPetNearby;
    if (petCards.length === 0) {
        dataPetNearby =  <p><Skeleton count={5} duration={2} /></p>
    } else {
        dataPetNearby = <CardPet petCards={petCards} />
    }

    return (
        <div>
            <div css={wrapperCover}>
                <h2 css={h2}>Provide For Those Who Needs It.</h2>
                <p css={p}>Save A Live Today</p>
                <Link to="/category-pet" css={linkTo}>
                    <PrimaryButton type="submit" onClick={() => {}}>Start Searching</PrimaryButton>
                </Link>
            </div>
            <div css={underCoverSearch}>
                <form>
                    <div css={centerMenu}>
                        <div css={colStyles}>
                            <button
                                type="submit"
                                css={searchLoc}
                                onClick={searchBar}
                            >
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                        <div css={colStyles}>
                            <input
                                type="text"
                                css={enterLocation}
                                placeholder="Enter Province or State"
                                value={search}
                                onChange={handleSearch}
                            ></input>
                        </div>
                        <div css={colStyles}>
                            <button onClick={categoryPet} css={dogCatButton}>
                                <i className="fas fa-bone"></i>
                                &nbsp;&nbsp;&nbsp;Find Dog Breed
                            </button>
                        </div>
                        <div css={colStyles}>
                            <button onClick={categoryCat} css={dogCatButton}>
                                <i className="fas fa-paw"></i>&nbsp;&nbsp;&nbsp;Find
                                Cat Breed
                            </button>
                        </div>
                        <div css={colStyles}>
                            <Dropdown>
                                <Dropdown.Toggle css={otherPets}>
                                    Find Other Pet
                                </Dropdown.Toggle>
                                <Dropdown.Menu css={dropdownMenu}>
                                    <Dropdown.Item
                                        href="#/action-1"
                                        css={breedsLogos}
                                    >
                                        <img
                                            src={rabbit}
                                            css={breedsLogo}
                                            alt="Pet"
                                        />
                                        &nbsp; Rabbit
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        href="#/action-2"
                                        css={breedsLogos}
                                    >
                                        <img
                                            src={hamster}
                                            css={breedsLogo}
                                            alt="pet_image"
                                        />
                                        &nbsp; Small & Furry
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        href="#/action-2"
                                        css={breedsLogos}
                                    >
                                        <img
                                            src={bird}
                                            css={breedsLogo}
                                            alt="pet"
                                        ></img>
                                        &nbsp; Birds
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        href="#/action-2"
                                        css={breedsLogos}
                                    >
                                        <img
                                            src={fish}
                                            css={breedsLogo}
                                            alt="pet"
                                        ></img>
                                        &nbsp; Scales & Fins
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        href="#/action-2"
                                        css={breedsLogos}
                                    >
                                        <img
                                            src={horse}
                                            css={breedsLogo}
                                            alt="pet"
                                        ></img>
                                        &nbsp; Horse
                                    </Dropdown.Item>
                                    <Dropdown.Item
                                        href="#/action-2"
                                        css={breedsLogos}
                                    >
                                        <img
                                            src={sheep}
                                            css={breedsLogo}
                                            alt="pet"
                                        ></img>
                                        &nbsp; Barnyard
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown>
                        </div>
                    </div>
                </form>
            </div>
            <div css={petsAvailableText}>
                <h2 css={petsAvailableh2}>Pets Available for Adoption Near You</h2>
            </div>
            <div css={petsAvailable}>
                {dataPetNearby}
            </div>
            <div>
                <div className="HowToAdopt">
                    <h2 css={howToAdopt}>
                        How To Adopt &nbsp;
                        <img src={letter} css={letterIcon} alt="cover"></img>
                    </h2>
                </div>
                <Container fluid>
                    <Row className="justify-content-md-center">
                        <div className="icons" css={iconContainer}>
                            <Col md={3} xs={12}>
                                <Jumbotron css={jumbotron}>
                                    <img
                                        src={searchpets}
                                        css={informationIcons}
                                        alt="icon"
                                    />
                                    <h4 css={iconText}>
                                        Search For Your <br></br>Future Best
                                        Friend
                                    </h4>
                                </Jumbotron>
                            </Col>

                            <img src={arrow} css={arrowIcon} alt="icon" />

                            <Col md={3} xs={12}>
                                <Jumbotron css={jumbotron}>
                                    <img
                                        src={form}
                                        css={informationIcons}
                                        alt="icon"
                                    />
                                    <h4 css={iconText}>
                                        Fill Out Adoption Form
                                    </h4>
                                </Jumbotron>
                            </Col>

                            <img src={arrow} css={arrowIcon} alt="icon" />
                            <Col md={3} xs={12}>
                                <Jumbotron css={jumbotron}>
                                    <img
                                        src={wait}
                                        css={informationIcons}
                                        alt="icon"
                                    />
                                    <h4 css={iconText}>Wait For Approval</h4>
                                </Jumbotron>
                            </Col>
                        </div>
                    </Row>
                </Container>
            </div>
            <div css={shopText}>
                <h1 css={buyNecessities}>
                    <img src={dogfood} css={dogfood1} alt="icon" />
                    &nbsp;&nbsp;&nbsp; Buy Necessities For Your New Friend
                    &nbsp;&nbsp;&nbsp;
                    <img src={dogfood} css={dogfood2} alt="icon" />
                </h1>
                <p css={profits}>
                    100% of profits goes to selected animal shelter,<br></br>
                    help out a friend.
                </p>
            </div>
            <div css={goToShop}>
                <h5><Link to="/shop" >Go To Shop &#62;</Link></h5>
            </div>
            <div css={shop} className="shop">
                {loading ? (
                    <p><Skeleton count={5} duration={2} /></p>
                ) : error ? (
                    <div>{errorMessage}</div>
                ) : (
                    <RecommendedProducts />
                )}
            </div>
        </div>
    );
};

export default LandingPage;
