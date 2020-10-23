/** @jsx jsx */
import { jsx } from "@emotion/core";
import { Button } from "react-bootstrap";

import { button } from "./ActionButton.styles";

const ActionButton = (props) => {
    return (
        <div css={button}>
            <Button onClick={props.onClick}>Add to Cart</Button>
        </div>
    );
};

export default ActionButton;
