import { css } from "@emotion/core";

export const wrapperStyles = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 50px;
`;

export const imageStyles = css`
    width: 120px;
    margin-right: 30px;
    margin-top: 10px;
    margin-bottom: 10px;
`;

export const breedsShop = css`
    display: flex;
`;

export const shopButton = css`
    margin-left: 30px;
    margin-top: 5px;

    @media (max-width: 768px) {
        margin: 5px 0;
        padding-left: 12px;
    }
`;

export const navbar1 = css`
    display: flex;
    align-items: center;
`;

export const breedsButton = css`
    border: none;
    color: #272626;
    background-color: Transparent;
`;

export const modalBodyStyles = css`
    text-align: center;
`;

export const bodyTitleStyles = css`
    font-weight: 700;
    border: none;
    color: #272626;
    background-color: Transparent;
`;

export const formSearch = css`
    @media (max-width: 768px) {
        margin: 0;
    }
`;

export const searchText = css`
    border: none;
    width: 560px;
    padding-left: 15px;
    line-height: 35px;
    margin-right: 10px;
    border-radius: 10px;

    @media (max-width: 768px) {
        margin: 5px 0;
        width: 100%;
    }
`;

export const searchButton = css`
    background: none;
    border: none;
    border-right: 1px solid #878787;
    padding-right: 20px;
    color: #878787;
`;

export const cart = css`
    color: #878787;
    background: none;
    border: none;
    padding-left: 20px;
`;

export const wrapperButtonStyles = css`
    display: flex;
    flex-direction: column;
`;

export const buttonLoginStyles = css`
    margin-top: 20px;
`;

export const rowFormSignUp = css`
    margin: 15px 0px;
`;

export const navSearch = css`
    margin-right: 10px !important;
`;

export const cssAbout = css`
    display: flex;
    align-items: center;
`;

export const navbarspace = css `
justify-content: space-between;
`