import { css } from "@emotion/core";
import cover2 from '../../assets/cover2.jpg'

export const wrapperCover = css`
    background-image: url(${cover2});
    background-size: cover;
    background-position: right;
    height: 500px;
    width: 100%;
    display: flex;
    align-items: center;
`;

export const search = css`
    background-color: #a885ff;
    width: 100%;
    height: 200px;
    display: flex;
    align-items: space-between;
    justify-content: center;
`;

export const sortby = css`
    background-color: #209516;
    color: #ffffff;
    padding: 5px;
    font-weight: 700;
    font-size: 30px;
    border: none !important;
    padding-left: 20px;
    padding-right: 20px;
`;

export const result = css`
    border: none !important;
`;
export const margin = css`
    margin: 30px;
`;
export const whitecolor = css`
    color: #6c757d;
    margin-left: 50px;

    @media (max-width: 768px) {
        color: #fff;
    }
`;
export const card = css`
    padding: 30px;
    margin-left: 50px;
`;
export const buttoncard = css`
    display: flex;
    justify-content: space-around;
    margin-top: 9px;
`;
export const widthButton = css`
    margin-top: 100px;
    font-weight: 700;
    font-size: 20px;
    border-radius: 15%;
    padding: 10px;
`;
export const title = css`
    font-weight: 600;
`;
export const petsAvailable = css`
    display: flex;
    justify-content: center;
    justify-content: space-between;
`;
export const img = css`
    width: 100%;
    height: 15vw;
    object-fit: cover;
    border-top-left-radius: 20px;
    border-top-right-radius: 20px;
`;
export const marginbutton = css`
    width: 100%;
    margin-right: 5px;
`;
export const displaying = css`
    font-weight: 500;
    margin: 25px 20px;
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

export const cardCss = css `
margin-bottom: 80px;
`
export const marginTop = css `
margin-top: 50px;
display: flex;
margin-left: 50px;
margin-right: 50px;
justify-content: center;
`

export const cardstyle = css `
border-bottom-left-radius: 20px;
border-bottom-right-radius: 20px;
border-top-left-radius: 20px;
border-top-right-radius: 20px;
`

export const rowmargin = css `
justify-content: space-between;

`

export const lineHeight = css `
line-height: normal;
`
