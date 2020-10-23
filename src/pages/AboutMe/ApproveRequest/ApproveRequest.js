/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Card, Col, Row } from "react-bootstrap";
import { useState, useEffect } from "react";
import axios from "../../../helpers/axios";

import { head, mainBody, border } from "./Approve.styles";
import FormPopUp from "../../../components/AdoptionFormPopUp/adoptionFormPopUp";
// import PrimaryButton from "../../../components/Button/Button";

const ApproveRequest = () => {
    //eslint-disable-next-line
    const [adoption, setAdoption] = useState([]); // petUpforAdoption
    const [adopter, setAdopter] = useState([]); // formRequest

    const getUserLogin = () => {
        let userLogin = JSON.parse(localStorage.getItem("user")); // 5f6b721abd00722311964574
        let idUser = userLogin.idUser._id;
        return idUser;
    };

    const getPetUpForAdopt = async () => {
        let idUser = await getUserLogin();
        let pets = await axios.get("petUpForAdoption");
        if (pets.status === 200) {
            let filteredPets = await pets.data.result.filter((item) => {
                return item.idPet !== null && item.idPet.idUser === idUser
            });
            localStorage.setItem("petsB", JSON.stringify(filteredPets));
            setAdoption(filteredPets);
        } 
    };

    const getAdopter = async () => {
        const dataPet = await JSON.parse(localStorage.getItem("petsA"));
        let idPet =
            dataPet !== null &&
            dataPet.map((item) => {
                return item.idPet._id;
            });
        if (idPet.length > 0) {
            idPet = idPet[idPet.length - 1];
        }
        return idPet; //5f729d64ecc1bc0dd6318de9
    };

    const getDataAdopter = async () => {
        let idPetAdopter = await getUserLogin();

        const adopter = await axios.get("formRequest");
        if (adopter.status === 200) {
            let filteredAdopter = adopter.data.result.filter(
                // item => console.log(item)
                (item) => item.idPet.idUser !== null && item.idPet.idUser._id === idPetAdopter
            );
            let filtered = filteredAdopter.filter(item => item.status !== "Completed")
            console.log(filtered);
           setAdopter(filtered)
        }
    };

    // const newAdoptionTransaction = () => {
    //     axios.post("listAdoptionTransaction/create", {
    //         idPetUpForAdoption: adoption[0]._id,
    //         idUser: adoption[0].idUser._id,
    //         petName: adoption[0].idPet.petName,
    //         petCategory: adoption[0].idPet.idCategoryPet,
    //         breed: adopter[0].idPet.idBreed.breedName,
    //         ownerPetName: adoption[0].idUser.fullName,
    //         adopterPetName: adopter[0].idUser.fullName,
    //         status: "COMPLETED",
    //     }
    //     );
    //     axios.post("listAdoptionTransaction/create", {
    //         idPetUpForAdoption: adoption[0]._id,
    //         idUser: adopter[0].idUser._id,
    //         petName: adoption[0].idPet.petName,
    //         petCategory: adoption[0].idPet.idCategoryPet,
    //         breed: adopter[0].idPet.idBreed.breedName,
    //         ownerPetName: adoption[0].idUser.fullName,
    //         adopterPetName: adopter[0].idUser.fullName,
    //         status: "COMPLETED",
    //     }
    //     );
    // };

    // const multipleUpdate = () => {
    //     axios.put(`petUpForAdoption/${adoption[0]._id}`, {
    //         status: "COMPLETED",
    //     });
    //     axios.put(`formRequest/${adopter[0]._id}`, {
    //         status: "COMPLETED",
    //     });
    // }

    useEffect(() => {
        getPetUpForAdopt();
        getAdopter();
        getUserLogin();
        getDataAdopter();
        
        //eslint-disable-next-line
    }, []);
    console.log(adopter);
    return (
        <div>
            <div>
                <div css={head}>
                    <h3 style={{paddingTop:"5px"}}>Approve Request</h3>
                </div>
                {adopter.map((e) => (
                    <div key={adopter}>
                        <Card>
                            <Card.Header>
                                <b>Adopter Data</b>
                            </Card.Header>
                            <Card.Body css={mainBody}>
                                <Row>
                                    <Col>
                                        <img
                                            src={e.idUser.avatar}
                                            alt="brokenImage"
                                            style={{
                                                objectFit: "cover",
                                                height: "200px",
                                            }}
                                        />
                                    </Col>
                                    <Col>
                                        <p>Full Name : {e.idUser.fullName}</p>
                                        <p>Country : Indonesia </p>
                                        <p>Province : {e.idUser.province}</p>
                                        <p>City : {e.idUser.state}</p>
                                    </Col>
                                    <Col>
                                        <p>Zip Code : {e.idUser.zip_code}</p>
                                        <p>
                                            Address : {e.idUser.detailAddress}
                                        </p>
                                        <br />
                                        {e.status === "Waiting for Payment" ? <div></div> : e.status === "Payment Process is Completed" ? <div></div> : <FormPopUp data={e} />}
                                    </Col>
                                </Row>
                            </Card.Body>
                            <Card.Body>
                                <Card.Body css={border}>
                                    <b>{e.idPet.petName}</b> -{" "}
                                    <span>{e.idPet.idBreed.breedName}</span>
                                </Card.Body>
                                <Card.Body css={mainBody}>
                                    <Row>
                                        <Col>
                                            <img
                                                src={e.idPet.image[0]}
                                                alt="brokenImage"
                                                style={{
                                                    objectFit: "cover",
                                                    height: "200px",
                                                }}
                                            />
                                        </Col>
                                        <Col>
                                            <p>Name : {e.idPet.petName}</p>
                                            <p>
                                                Breed :{" "}
                                                {e.idPet.idBreed.breedName}
                                            </p>
                                            <p>Age : {e.idPet.age} Years Old</p>
                                            <p>Size : {e.idPet.size}</p>
                                        </Col>
                                        <Col>
                                            <p>Weight : {e.idPet.weight}</p>
                                            <p>Gender : {e.idPet.gender}</p>
                                            <br />
                                            {e.status === "Payment Process is Completed" ? (
                                                <div>
                                                    <h5>Status: {e.status}</h5>{" "}
                                                    <br />
                                                    <h5>Waiting To Complete Adoption</h5>
                                                </div>
                                            ) : (
                                                    <div>
                                                        <h5>Status: {e.status}</h5>{" "}
                                                        <br />
                                                    </div>
                                                )}
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card.Body>
                        </Card>
                        <br />
                    </div>
                ))}
            </div>

            <div>
                {adopter.map((e) => (
                    <div key={adopter}>
                        <br />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ApproveRequest;
