/** @jsx jsx */
import { jsx } from "@emotion/core";
import axios from "axios";
import { useState, useEffect } from "react";
import { Tabs, Tab, Container } from "react-bootstrap";
// import { useParams } from "react-router-dom";

import AboutMeTab from "../../components/AboutMe/aboutMeTab";
import ListPetUp from "../../components/AboutMe/petUpList"
import AccountSettings from "../../components/AboutMe/accountSettings";
import Swal from "sweetalert2";
import StatusRequest from "./StatusRequest/StatusRequest";
import AdoptedHistory from "./AdoptedHistory/AdoptedHistory";
import ApproveRequest from "./ApproveRequest/ApproveRequest";
import PurchaseHistory from "./PurchaseHistory/PurchaseHistory"
import { containerWrapper } from "./AboutMe.styles";

const AllProfile = () => {
    const [, setLoading] = useState(true);
    const [aboutMe, setAboutMe] = useState([]);
    const [key, setKey] = useState("home");

    let userLogin = JSON.parse(localStorage.getItem("user"));
    let token = localStorage.getItem("menagerie");

    const profile = async () => {
        const url = `http://localhost:8000/userAccount/${userLogin.id}`;
        await axios
            .get(url)
            .then(function (response) {
                setAboutMe(response.data.result);
                setLoading(false);
            })
            .catch(function (error) {
                setLoading(false);
            });
    };

    useEffect(() => {
        if (userLogin == null || token == null) {
            Swal.fire({
                title: "Gagal!",
                text: "Silahkan login dahulu!",
                icon: "warning",
            });
            window.location.replace("/");
        }
        profile();

        //eslint-disable-next-line
    }, []);

    return (
        <Container>
                <Tabs
                    id="controlled-tab-example"
                    activeKey={key}
                    onSelect={(k) => setKey(k)}
                    css={containerWrapper}
                >
                    <Tab eventKey="home" title="About Me" >
                        <AboutMeTab profile={aboutMe} />
                    </Tab>
                    <Tab eventKey="profile" title="Account Settings">
                        <AccountSettings />
                    </Tab>
                   
                    <Tab eventKey="adopReq" title="Adoption Request">
                        <StatusRequest />
                    </Tab>
                    <Tab eventKey="adopHistory" title="Adoption History">
                        <AdoptedHistory />
                    </Tab>
                    <Tab eventKey="approveReq" title="Approve Request">
                        <ApproveRequest />
                    </Tab>
                    <Tab eventKey="contact" title="Pets Up For Adoption">
                       <ListPetUp/>
                    </Tab>
                    <Tab eventKey="purchasedProduct" title="Purchased Product">
                        <PurchaseHistory />
                    </Tab>
                </Tabs>
        </Container>
    );
};

export default AllProfile;
