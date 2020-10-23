/** @jsx jsx */
import { jsx } from "@emotion/core";
import PropTypes from "prop-types";
import { Button } from "react-bootstrap";

import { searchButton } from "./Button.styles";

const PrimaryButton = ({ type, onClick, children, ...props }) => {
    return (
        <Button css={searchButton} type={type} onClick={onClick} {...props}>
            {children}
        </Button>
    );
};

// Declare Proptypes
Button.propTypes = {
    type: PropTypes.oneOf(["button", "submit", "reset"]),
    onClick: PropTypes.func.isRequired,
    children: PropTypes.string.isRequired,
};

// Declare Default
Button.defaultProps = {
    type: "button",
};

export default PrimaryButton;
