import { css } from "@emotion/core";
import cover from '../../assets/dogCover.jpg'

export const wrapperCover = css`
    background-image: url(${cover});
    background-size: cover;
    background-position: center;
    height: 500px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;
export const margin = css`
    margin: 30px;
`;
export const whitecolor = css`
    color: #ffffff;
`;
export const card = css`
    margin-bottom: 25px;
    &: hover {
        cursor: pointer;
    }

    @media (max-width: 768px) {
        margin: 10px;
    }
`;
export const buttoncard = css`
    display: flex;
    justify-content: space-around;
    margin-top: 9px;
`;
export const widthButton = css`
    width: 100%;
`;
export const marginbutton = css`
    width: 100%;
    margin-right: 5px;
`;
export const collections = css`
    padding: 80px 25px;
    justify-content: center;
    margin: 20px 80px;
`;
export const centertext = css`
    text-align: center;
`;
export const filter = css`
    padding: 80px 25px;
    background: rgb(2, 0, 36);
    background: linear-gradient(
        180deg,
        rgba(2, 0, 36, 1) 0%,
        rgba(9, 9, 121, 1) 0%,
        rgba(215, 212, 212, 1) 0%,
        rgba(250, 250, 250, 1) 0%,
        rgba(255, 255, 255, 1) 0%,
        rgba(62, 231, 133, 1) 63%,
        rgba(0, 255, 182, 1) 100%
    );
`;
export const buttonGroup = css`
    justify-content: center;
    margin: 30px 0px;
`;
 
export const image = css `
    width: 100%;
    height: 300px;
    object-fit: cover;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
`

export const cards = css `
width: 380px;
padding-bottom: 20px;
border-radius: 20px;
`
export const marginText = css `
padding-left: 15px;
padding-top: 20px;
`

export const marginText2 = css `
padding-left: 15px;
`

export const letUs = css `
color: white;
padding-left: 50px;
`