/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Row, Col, Carousel } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import NumberFormat from 'react-number-format';

import {
    detail_section_col,
    detail_section_col_left_second_row,
    row_line,
    detail_section_col_right_button,
    location,
    rowMargin3,
    rowmargin,
    margin2,
    detailUser, text, margintop
} from "./DetailSection.styles";
import ColoredLine from "../../../components/ColoredLine";
import PrimaryButton from "../../../components/Button/Button";
import Swal from "sweetalert2";

const DetailSection = ({ petDetails, user }) => {
    const history = useHistory();
    window.scrollTo(0,0);
    const handleClick = () => {
        history.push(`/adoption-form`);
    };
    // Object.keys(object kita).length untuk cari tau object kita kosong apa ngga
    console.log(Object.keys(petDetails).length)
    // kalau object yg kita punya itu kosyong, kita kasih div loading, sebenernya ga 100 % dia bakal nampilin
    // Loading... tapi dengan cara ini, kita memaksa page untuk dapetin isi Object nya sebelum di render
    if(Object.keys(petDetails).length === 0){
        return <div>Loading....</div>
    } else {
    return (
        <Row css={margintop}>
            <Col xs={12} md={7} css={detail_section_col} style={{borderRadius:"15px"}}>
                <Row css={rowmargin}>
                <h2><b>{petDetails.petName}</b></h2>
                <h2><NumberFormat value={petDetails.fee} displayType={'text'} thousandSeparator={true} prefix={'Rp.'} /></h2>
                </Row>
                <Carousel>
                    <Carousel.Item>
                        <img
                       src={petDetails.image !==undefined && petDetails.image[0]}
                       style={{
                           width: "100%",
                           height: "500px",
                           objectFit: "cover",
                           marginBottom: "30px",
                       }}
                       alt="pet_image"
                        />
                    </Carousel.Item>
                    <Carousel.Item>
                        {
                            petDetails.image !== undefined && petDetails.image[1] && null ? (
                                <img
                                src={petDetails.image !==undefined && petDetails.image[0]}
                                style={{
                                    width: "100%",
                                    height: "500px",
                                    objectFit: "cover",
                                    marginBottom: "30px",
                                }}
                                alt="pet_image"
                                 />
                            ) :( <img
                        src={petDetails.image !==undefined && petDetails.image[1]}
                        style={{
                            width: "100%",
                            height: "500px",
                            objectFit: "cover",
                            marginBottom: "30px",
                        }}
                        alt="pet_image"
                        />)
                        }
                       
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                        src={petDetails.image !==undefined && petDetails.image[2]}
                        style={{
                            width: "100%",
                            height: "500px",
                            objectFit: "cover",
                            marginBottom: "30px",
                        }}
                        alt="pet_image"
                        />
                    </Carousel.Item>
                </Carousel>
                <Row css={detail_section_col_left_second_row}>
                    <p>
                        {petDetails.idBreed !== undefined &&
                            petDetails.idBreed.breedName}
                    </p>
                    <h5>&bull;</h5>
                    <p>{petDetails.location}</p>
                </Row>
                <Row css={row_line}>
                    <ColoredLine color="#000" />
                </Row>
                <Row css={detail_section_col_left_second_row}>
                    <p>{petDetails.gender}</p>
                    <h5>&bull;</h5>
                    <p>{petDetails.age} Years Old</p>
                    <h5>&bull;</h5>
                    <p>{petDetails.size}</p>
                    <h5>&bull;</h5>
                    <p>{petDetails.weight}</p>
                </Row>
                <Row css={row_line}>
                    <ColoredLine color="#000" />
                </Row>
                <Row css={text}>
                    <h2>About</h2>
                </Row>
                <Row css={text}>
                    <p>{petDetails.about}</p>
                </Row>
            </Col>
            <Col xs={12} md={4} css={detail_section_col}>
                <h5>Caregiver:</h5>
                <h2 css={margin2}>
                    {petDetails.idUser !== undefined &&
                        petDetails.idUser.fullName}
                </h2>
                <h5>Pet Location</h5>
                <Row style={{justifyContent:"center"}}>
                    <iframe
                        scrolling="no"
                        title="map"
                        marginheight="0"
                        marginwidth="0"
                        id="gmap_canvas"
                        src="https://maps.google.com/maps?width=400&amp;height=200&amp;hl=en&amp;q=%20marina%20bay+()&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                        width="370"
                        height="200"
                        frameborder="0"
                    ></iframe>{" "}
                    <script
                        type="text/javascript"
                        src="script.js?id=9daa310da0fcf7860fb39c3f74182bf2930d64f3"
                    ></script>
                </Row>
                <Row css={location}>
                    <Col xs={12}>
                        <Row css={rowMargin3}>
                            <i class="fas fa-map-marker-alt fa-2x">
                                &nbsp; &nbsp;
                            </i>
                        </Row>
                        <Row css={detailUser}> 
                            <p>
                                {petDetails.location} /{" "}
                                {petDetails.idUser !== undefined &&
                                    petDetails.idUser.detailAddress}
                            </p>
                        </Row>
                    </Col>
                    <Col xs={12}>
                        <Row css={rowMargin3}>
                            <i class="fas fa-envelope-open-text fa-2x">
                                &nbsp; &nbsp;
                            </i>
                        </Row>
                        <Row css={detailUser}>
                            <p>
                                {petDetails.idUser !== undefined &&
                                    petDetails.idUser.email}
                            </p>
                        </Row>
                    </Col>
                    <Col xs={12} css={detail_section_col_right_button}>
                        {JSON.parse(localStorage.getItem("user") !== null) ? (
                            <PrimaryButton onClick={() => handleClick()} style={{marginTop:"20px"}}>
                                Ask for Adoption
                            </PrimaryButton>

                        ) : ( 
                            <PrimaryButton 
                                onClick={() => Swal.fire({title:"Please Login to Continue", icon:"warning",})}
                                variant="danger"
                            >
                                Ask for Adoption
                            </PrimaryButton>
                        )}
                    </Col>
                </Row>
            </Col>
        </Row>
    );
    }
};

export default DetailSection;
