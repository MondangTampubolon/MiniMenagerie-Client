/** @jsx jsx */
import { jsx } from "@emotion/core";
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";

import {
    Card,
    Row,
    Col
} from "react-bootstrap";

import {
    wrapperCover,
    collections,
    card,
    image,
    cards,
    marginText,
    marginText2,
    letUs
} from "./PetCollection.styles";


const PetCollection = () => {
    const [collection, setCollection] = useState([]);
    const { idCollection } = useParams();

    // const size = [
    //     { name: "Small", value: "Small" },
    //     { name: "Medium", value: "Medium" },
    //     { name: "Large", value: "Large" },
    //     { name: "Extra Large", value: "ExtraLarge" },
    // ];
    // const gender = [
    //     { name: "Female", value: "Female" },
    //     { name: "Male", value: "Male" },
    // ];
    // const alphabet = [
    //     { name: "Ascending Order", value: "asc" },
    //     { name: "Descending Order", value: "desc" },
    // ];

    const fetchCollection = async () => {
        const url = `${process.env.REACT_APP_API_URL}/petdata/collection/${idCollection}`;
        const response = await fetch(url);
        const result = await response.json();

        setCollection(result.result);
    };

    useEffect(() => {
        fetchCollection();

        //eslint-disable-next-line
    }, []);

    return (
        <div>
            <div css={wrapperCover}>
                <div css={letUs}>
                    <p style={{fontWeight:"700",fontSize:"50px"}}>You're Looking For: 
                    <br>
                    {/* siberian (searchbyKeyword) */}
                    </br></p>
                </div>
            </div>
         
            <div css={collections}>
                <Row>
                    {collection.length > 0 &&
                        collection.map((item) => {
                            return (
                                <Col md={3} key={item._id} css={card}>
                                    <Link
                                        to={`/pets-detail/${
                                            item.id !== undefined
                                                ? item.id
                                                : item._id
                                        }`}
                                    >
                                        <Card css={cards}>
                                            <Card.Img
                                            css={image}
                                                variant="top"
                                                src={item.image[0]}
                                              
                                            />
                                            <Card.Title style={{fontWeight:"bold", fontSize:"1.5rem"}} css={marginText}>
                                                {item.petName}
                                            </Card.Title>
                                            <Card.Text css={marginText2}>
                                                {item.idBreed.breedName}
                                                <br/>
                                                {item.gender}, {item.age} Years
                                                Old
                                                <br />
                                                {item.location}
                                            </Card.Text>
                                        </Card>
                                    </Link>
                                </Col>
                            );
                        })}
                </Row>
            </div>
        </div>
    );
};

export default PetCollection;
