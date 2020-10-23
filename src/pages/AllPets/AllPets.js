/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Dropdown, Form } from "react-bootstrap";

import {
    wrapperCover,
    centertext,
    optionPet,
    dropdownMenu,
    otherPets,
    dropdownItem,
    textOption,
    filterPet,
    dataPet,
    more,
} from "./AllPets.styles";

import CardPet from "../../components/CardPet/CardPet";

const AllPets = () => {
    return (
        <div>
            <div css={wrapperCover}>
                <h1 css={centertext}>ARE YOU LOOKING FOR ME?</h1>
            </div>
            <div css={optionPet}>
                <Dropdown>
                    <Dropdown.Toggle css={otherPets}>
                        Find Other Pets
                    </Dropdown.Toggle>
                    <Dropdown.Menu css={dropdownMenu}>
                        <Dropdown.Item href="#Cat" css={dropdownItem}>
                            <i className="fas fa-paw"></i>
                            <span>Cat</span>
                        </Dropdown.Item>
                        <Dropdown.Item href="#Dog" css={dropdownItem}>
                            <i className="fas fa-bone"></i>
                            <span>Dog</span>
                        </Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
                <span css={textOption}>You're Looking For :</span>
            </div>
            <div css={filterPet}>
                <div>
                    <span>Breeds</span>
                    <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </div>
                <div>
                    <span>Gender</span>
                    <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </div>
                <div>
                    <span>Species</span>
                    <Form.Control as="select">
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                        <option>4</option>
                        <option>5</option>
                    </Form.Control>
                </div>
            </div>
            <div css={dataPet}>
                <CardPet />
                <div css={more}>
                    <a href="/#">See More Result</a>
                </div>
            </div>
        </div>
    );
};

export default AllPets;
