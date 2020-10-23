/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Container } from "react-bootstrap";
import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import DetailSection from "./DetailSection/DetailSection";
import { container } from "./PetsDetail.styles";

const PetsDetail = () => {
    const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(false);
    const [, setErrorMessage] = useState();
    const [details, setDetails] = useState({});
    const [user, setUser] = useState({});

    let { id } = useParams();
    localStorage.setItem("selectedPet", id);

    const fetchDetails = async () => {
        const url = `http://localhost:8000/pet/${id}`;
        axios
            .get(url)
            .then(function (response) {
                setDetails(response.data.result);
                setLoading(false);
            })
            .catch(function (error) {
                setLoading(false);
            });
    };

    const fetchUser = () => {
        const idUser = details.idUser !== undefined && details.idUser._id;
        const url = `http://localhost:8000/users/${idUser}`;
        axios
            .get(url)
            .then(function (response) {
                setUser(response.data.result);
                setLoading(false);
            })
            .catch(function (error) {
                setErrorMessage(error.message);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchDetails();
        fetchUser();

        //eslint-disable-next-line
    }, []);

    return (
        <div>
            <Container css={container} style={{maxWidth:"70%"}}>
                {
                    loading ? (
                        <p>Loading Content, Please Wait...</p>
                    ) : (
                        <DetailSection petDetails={details} user={user} />
                    )
                }
            </Container>
        </div>
    );
};

export default PetsDetail;
