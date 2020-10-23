/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Card, Col, Button, Row } from "react-bootstrap";
import axios from "../../../helpers/axios";
import { useState, useEffect } from "react";
import {
    head,
    mainBody,
    buttonPayNow
} from "./StatusRequest.styles";
import Swal from "sweetalert2";
import NumberFormat from 'react-number-format';

import search from '../../../assets/search.png'

const StatusRequest = () => {
    const [statusRequest, setStatusRequest] = useState([]);
    const [state] = useState({
        loading: false,
        error: null,
    });
    // const [, setAdoption] = useState([]); // petUpforAdoption
    const [adopter, setAdopter] = useState([]); // formRequest
    const [, setIdPetF] = useState();
    const [, setIdUse] = useState();
    const [, setPet] = useState();
    const [, setComplete] = useState();

    const getDataForm = async () => {
        const userData = await JSON.parse(localStorage.getItem("user"));
        const url = `formRequest/all/${userData.idUser._id}`;
        let datas = await axios.get(url)
        let filtered = datas.data.filterReq.filter(e => e.status !== "COMPLETED")
        let onlyData = datas.data.filterReq.filter(e => e.status === "Awaiting Approval")
        let completee = datas.data.filterReq.filter(e => e.status === "Payment Fee is Complete")
        let idComplete = completee[0] !== undefined && completee[0].idPet._id
        setComplete(idComplete)
        setStatusRequest(filtered) // array pet status Complete & Awaiting Approval
        let test = onlyData[0] !== undefined && onlyData[0].idPet._id; // id pet dengan status Awaiting Approval
        console.log(test);
        setIdPetF(test); // id pet
        if(test === false){
            return idComplete
        } 
        return test
    };

    const handleCheckout = (item) => {
        localStorage.setItem("adoptform", JSON.stringify(item))
        window.location.replace("/adoptcart")
    }

    const getUserLogin = () => {
        let userLogin = JSON.parse(localStorage.getItem("user")); // 5f6b721abd00722311964574
        let idUser = userLogin.idUser._id;
        return idUser;
    };

    // const getPetUpForAdopt = async () => {
    //     let pets = await axios.get("petUpForAdoption");
    //     console.log(pets);
    //     if (pets.status === 200) {
    //         let filteredPets = await pets.data.result.filter((item) => {
    //             return item.idPet !== null && item.idPet._id === idPetF
    //         });
    //         let test = filteredPets[filteredPets.length - 1]
    //         console.log(test);
    //         setAdoption(filteredPets);
    //     }
    // };

    const getAdopter = async () => {
        const dataPet = await JSON.parse(localStorage.getItem("petsA"));
        let idPet =
            dataPet !== null &&
            dataPet.map((item) => {
                return item.idPet._id;
            });
        if (idPet.length > 0) {
            idPet = idPet[0];
        }
        return idPet; //5f729d64ecc1bc0dd6318de9
    };

    const selectedPet = () => {
        const data = localStorage.getItem('selectedPet')
        return data
    }

    const getDataAdopter = async () => {
        let idPetAdopter = await selectedPet();

        const adopter = await axios.get("formRequest");
        if (adopter.status === 200) {
            let filteredAdopter = adopter.data.result.filter(
                (item) => item.idPet !== null && item.idPet._id === idPetAdopter
            );
           let idPetForAdoption = filteredAdopter[filteredAdopter.length - 1] !== undefined && filteredAdopter[filteredAdopter.length - 1]._id
           setAdopter(filteredAdopter[filteredAdopter.length - 1])
           return idPetForAdoption
        }
    };

    const findOne = async () => {
        let id = await getDataForm()
        console.log(id);
        let result = await axios.get(`petUpForAdoption/pet/${id}`)
        let pet = await result.data.result.filter(item => item.idPet._id === id)
        setPet(pet)
        let idWeUse = await pet[0] !== undefined && pet[0]._id
        setIdUse(idWeUse)
        return idWeUse
    }


    const newAdoptionTransaction = async () => {
        let id = await findOne()
        let result = await axios.post("listAdoptionTransaction/create", {
            idPetUpForAdoption: id,
            idUser: adopter.idUser._id,
            petName: adopter.idPet.petName,
            petCategory: adopter.idPet.idCategoryPet,
            breed: adopter.idPet.idBreed.breedName,
            ownerPetName: adopter.idPet.idUser.fullName,
            adopterPetName: adopter.idUser.fullName,
            status: "Completed",
        }
        );
        console.log(result);
            if(result.status === 200){
                let updateP = await axios.put(`/petUpForAdoption/approve/${id}`, {
                    status: "Completed",
                });
                if(updateP.status === 200){
                    console.log(updateP);
                    let updateX = await axios.put(`formRequest/${adopter._id}`, {status: "Completed"})
                    if(updateX.status === 200){
                        console.log(updateX)   
                    }
                };             
            } else {
                Swal.fire({
                    title: "Something Wrong",
                    icon: "warning",
                });
            }
    };
   
    const handleSubmitTrans = (event) => {
        event.preventDefault();
        newAdoptionTransaction();
        // setTimeout(() => {
        //     window.location.reload()
        // }, 5000)
    };

    // const getIdPetForAdoption = async () => {
    //     let user = await getDataForm()
    //     let result = await axios.get(`petUpForAdoption`);
    //     let data = result.data.result;
    //     let idPetFromUserForm = user[0] !== undefined && user[0].idPet._id
    //     let filterData = data.filter(item => item.idPet._id === idPetFromUserForm)
    //     let resultData = filterData[0] !== undefined && filterData[0]._id
    //     setPetForAdopt(filterData[0] !== undefined && filterData[0]._id)
    //     return resultData
    // }

    useEffect(() => {
        getDataForm();
        getUserLogin();
        // getPetUpForAdopt();
        getAdopter();
        getDataAdopter();
        findOne()

        //eslint-disable-next-line
    }, []);
    console.log(statusRequest);
    if (statusRequest.length > 0) {
        return (
            <div>
                <div css={head}>
                    <h3 style={{paddingTop:"5px"}}>Adoption Status Request</h3>
                </div>
                <br />
                <div>
                    {statusRequest.map((e) => (
                        <div key={statusRequest}>
                            <Card>
                                <Card.Header>
                                    <b>
                                        {e.idPet !== undefined &&
                                            e.idPet.petName}
                                    </b>{" "}
                                    -{" "}
                                    <span>
                                        {e.idPet !== undefined &&
                                            e.idPet.idBreed.breedName}
                                    </span>
                                </Card.Header>
                                <Card.Body css={mainBody}>
                                    <Row>
                                        <Col>
                                            <img
                                                src={e.idPet.image[0]}
                                                alt="brokenimage"
                                                style={{
                                                    height: "200px",
                                                    backgroundSize: "cover",
                                                }}
                                            />
                                        </Col>
                                        <Col>
                                            <p>
                                                Name :{" "}
                                                {e.idPet !== undefined &&
                                                    e.idPet.petName}
                                            </p>
                                            <p>
                                                Breed :{" "}
                                                {e.idPet !== undefined &&
                                                    e.idPet.idBreed.breedName}
                                            </p>
                                            <p>
                                                Age :{" "}
                                                {e.idPet !== undefined &&
                                                    e.idPet.age}
                                            </p>
                                            <p>
                                                Size :{" "}
                                                {e.idPet !== undefined &&
                                                    e.idPet.size}
                                            </p>
                                        </Col>
                                        <Col>
                                            <p>
                                                Weight :{" "}
                                                {e.idPet !== undefined &&
                                                    e.idPet.weight}
                                            </p>
                                            <p>
                                                Gender :{" "}
                                                {e.idPet !== undefined &&
                                                    e.idPet.gender}
                                            </p>
                                            <p>
                                                Fee: {" "}
                                                <NumberFormat value={e.idPet !== undefined && e.idPet.fee} displayType={'text'} thousandSeparator={true} prefix={'Rp. '} />
                                                {/* {e.idPet !== undefined && e.idPet.fee} */}
                                            </p>
                                            <br />
                                            {e.status === "Waiting for Payment" ? (
                                                <div>
                                                    <h5>Status: {e.status}</h5>{" "}
                                                    <br />
                                                    <div css={buttonPayNow}
                                                        onClick={() => handleCheckout(e)}
                                                        disabled={state.loading}>
                                                        <Button>Checkout Now</Button>
                                                    </div>
                                                </div>
                                            ) :
                                                e.status === "Payment Process is Completed" ? (
                                                    <div>
                                                        <h5>Status: {e.status}</h5>{" "}
                                                        <br />
                                                        <div css={buttonPayNow}
                                                            onClick={handleSubmitTrans}
                                                            disabled={state.loading}>
                                                            <Button>Complete Adoption</Button>
                                                        </div>
                                                    </div>
                                                ) :
                                                    (
                                                        <div>
                                                            <h5>Status: {e.status}</h5>
                                                            <br />
                                                            {/* <div css={buttonPayNow}
                                                                // onClick={handlePayment}
                                                                disabled={state.loading}>
                                                                <Button>Complete</Button>
                                                            </div> */}
                                                        </div>
                                                    )}
                                        </Col>
                                    </Row>
                                </Card.Body>
                            </Card>
                            <br />
                        </div>
                    ))}
                </div>
            </div>
        );
    } else if (statusRequest.length === 0) {
        return (
            <div>
                <div css={head}>
                    <h3 style={{paddingTop:"5px"}}>Adoption Status Request</h3>
                </div>
                <div style={{justifyContent:"center", display:"flex", flexDirection:"column", alignItems:"center", marginTop:"0px"}}>
                <img
                    src={search}
                    alt="searchimage"
                    style={{
                    width:"300px",
                    marginTop:"30px"
                }}
                />
                    <h3 style={{ textAlign: "center", color:"#464646" }}>Oops..You Haven't Made Any Requests Yet!</h3>
                </div>
            </div>
        );
    }
};

export default StatusRequest;
