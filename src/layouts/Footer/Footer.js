/** @jsx jsx */
import { Container, Row, Col } from "react-bootstrap";
import { jsx } from "@emotion/core";

import PrimaryButton from "../../components/Button/Button";
import logo from "../../assets/logo2.png";
import {
    footer,
    footerTitle,
    subsLogo,
    wrapperStyles2,
    wrapperStyles,
    subWrapper,
    imageLogo,
    subText,
    rowFooter,
    icon2
} from "./Footer.styles";
import subLogo from "../../assets/signUp.png";

const Footer = () => {
    let user = JSON.parse(localStorage.getItem("user"));
    if (user === null) {
        return (
            <Container fluid={true} style={{ padding: "0" }}>
                <div css={wrapperStyles}>
                    <Row style={{ width: "100%" }}>
                        <Col md={2}>
                            <div css={imageLogo}>
                                <img
                                    src={logo}
                                    alt="logo"
                                    style={{ width: "100%" }}
                                />
                            </div>
                        </Col>
                        <Col md={3}>
                            <p css={footerTitle}>ABOUT MINI MENAGERIE</p>
                            <p css={footer}>FAQS</p>
                            <p css={footer}>PartnerShips</p>
                            <p css={footer}>Terms of Service</p>
                            <p css={footer}>Mobile Sites & Apps</p>
                            <p css={footer}>Mini Menagerie Foundation</p>
                            <p css={footer}>For Developers</p>
                            <p css={footer}>Contact Us</p>
                        </Col>
                        <Col md={3}>
                            <p css={footerTitle}>PET ADOPTION</p>
                            <p css={footer}>Dog Adoption</p>
                            <p css={footer}>Cat Adoption</p>
                            <p css={footer}>Other Pets Adoption</p>
                            <p css={footer}>Search Other Adoption Organization</p>
                            <p css={footer}>Read Happy Adoption Story</p>
                            <p css={footer}>Local Adoption Events</p>
                            <p css={footer}>Shelters & Rescues</p>
                        </Col>
                        <Col md={2}>
                            <p css={footerTitle}>PET CARE TOPICS</p>
                            <p css={footer}>Dog Care</p>
                            <p css={footer}>Cat Care</p>
                            <p css={footer}>All Pet Care</p>
                            <p css={footer}>Dog Breeds</p>
                            <p css={footer}>Cat Breeds</p>
                            <p css={footer}>Pet Care Videos</p>
                            <p css={footer}>Helping Pets</p>
                        </Col>
                            <Col md={2}>
                                <div css={subWrapper}>
                                    <div>
                                        <div
                                            style={{
                                                textAlign: "center",
                                            }}
                                        >
                                            <img
                                                src={subLogo}
                                                css={subsLogo}
                                                alt="subLogo"
                                                style={{ width: "50px" }}
                                            />
                                        </div>
                                        <p css={subText}>
                                            Sign up for our newsletter<br></br>
                                            to get the latest update on pet<br></br>
                                            adoption & rescues!
                                        </p>
                                        <PrimaryButton onClick={() => {}}>Sign Up</PrimaryButton>
                                    </div>
                                </div>
                            </Col>
                    </Row>
                </div>
                <div css={wrapperStyles2}>
                    <Row css={rowFooter}>
                        <Col md={4}>
                            <p>@2020 MiniMenagerie.com</p>
                        </Col>
                        <Col md={4}>
                            <p>
                                All trademarks are owned by Société des Produits
                                Nestlé S.A., or used with permission.
                            </p>
                        </Col>
                        <Col md={{ offset: 2 }} xs={{ offset: 3 }} css={icon2}>
                            <i className="fab fa-facebook-square fa-2x"></i>
                            <i className="fab fa-twitter-square fa-2x"></i>
                            <i className="fab fa-instagram-square fa-2x"></i>
                            <i className="fab fa-linkedin fa-2x"></i>
                            <i className="fab fa-pinterest-square fa-2x"></i>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    } else if (user !== null) {
        return (
            <Container fluid={true} style={{ padding: "0" }}>
                <div css={wrapperStyles}>
                    <Row style={{ width: "100%" }}>
                        <Col md={3}>
                            <div css={imageLogo}>
                                <img
                                    src={logo}
                                    alt="logo"
                                    style={{ width: "100%" }}
                                />
                            </div>
                        </Col>
                        <Col md={3}>
                            <p css={footerTitle}>ABOUT MINI MENAGERIE</p>
                            <p css={footer}>FAQS</p>
                            <p css={footer}>PartnerShips</p>
                            <p css={footer}>Terms of Service</p>
                            <p css={footer}>Mobile Sites & Apps</p>
                            <p css={footer}>Mini Menagerie Foundation</p>
                            <p css={footer}>For Developers</p>
                            <p css={footer}>Contact Us</p>
                        </Col>
                        <Col md={3}>
                            <p css={footerTitle}>PET ADOPTION</p>
                            <p css={footer}>Dog Adoption</p>
                            <p css={footer}>Cat Adoption</p>
                            <p css={footer}>Other Pets Adoption</p>
                            <p css={footer}>Search Other Adoption Organization</p>
                            <p css={footer}>Read Happy Adoption Story</p>
                            <p css={footer}>Local Adoption Events</p>
                            <p css={footer}>Shelters & Rescues</p>
                        </Col>
                        <Col md={3}>
                            <p css={footerTitle}>PET CARE TOPICS</p>
                            <p css={footer}>Dog Care</p>
                            <p css={footer}>Cat Care</p>
                            <p css={footer}>All Pet Care</p>
                            <p css={footer}>Dog Breeds</p>
                            <p css={footer}>Cat Breeds</p>
                            <p css={footer}>Pet Care Videos</p>
                            <p css={footer}>Helping Pets</p>
                        </Col>
                    </Row>
                </div>
                <div css={wrapperStyles2}>
                    <Row css={rowFooter}>
                        <Col md={4}>
                            <p>@2020 MiniMenagerie.com</p>
                        </Col>
                        <Col md={4}>
                            <p>
                                All trademarks are owned by Société des Produits
                                Nestlé S.A., or used with permission.
                            </p>
                        </Col>
                        <Col md={{ offset: 2 }} xs={{ offset: 3 }} css={icon2}>
                            <i className="fab fa-facebook-square fa-2x"></i>
                            <i className="fab fa-twitter-square fa-2x"></i>
                            <i className="fab fa-instagram-square fa-2x"></i>
                            <i className="fab fa-linkedin fa-2x"></i>
                            <i className="fab fa-pinterest-square fa-2x"></i>
                        </Col>
                    </Row>
                </div>
            </Container>
        );
    }
};

export default Footer;
