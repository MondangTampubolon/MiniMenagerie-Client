import { css } from "@emotion/core";


export const margin = css`
    margin-bottom: 25px;
    &: hover {
        cursor: pointer;
    }
`;
export const container = css`
    margin-top: 30ox;
`;
export const row = css`
    display: flex;
    justify-content: space-around;
    align-items: center;
`;
export const button = css`
    display: flex;
    justify-content: center;
    width: 1100px;
    margin-bottom: 50px;
    font-size: 25px;
    margin-top: 30px;
`;
export const petImage = css`
    & > img {
        width: 100%;
        height: 300px;
        object-fit: cover;
        border-top-right-radius: 20px;
        border-top-left-radius: 20px;
    }
    border-radius: 20px;
    h4{
        font-weight: 700;
    }
`;
