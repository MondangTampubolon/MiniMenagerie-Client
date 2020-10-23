/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Row, Col, Card } from "react-bootstrap";
import { useHistory } from "react-router-dom";

import { margin, petImage } from "./CardPet.styles";

const CardPet = ({ petCards }) => {
    const history = useHistory();

    const handleClick = (id) => {
        history.push(`/pets-detail/${id}`);
        window.scrollTo(0,0);
    };
    return (
        <Row>
            {petCards.map((e) => (
                <Col md={3} css={margin} key={e._id}>
                    <Card css={petImage} onClick={() => handleClick(e.idPet._id)}>
                        <Card.Img variant="top" src={e.idPet.image[0]} />
                        <Card.Body>
                            <Card.Title>
                                <h4>
                                    <b>{e.idPet.petName}</b>
                                </h4>
                            </Card.Title>
                            <Card.Text>
                                {e.idPet.idBreed.breedName}
                                <br />
                                {e.idPet.gender}, {e.idPet.age} Years Old
                                <br />
                                {e.idPet.location}
                            </Card.Text>
                        </Card.Body>
                    </Card>
                </Col>
            ))}
        </Row>
    );
};

export default CardPet;
