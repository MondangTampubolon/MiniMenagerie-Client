import { css } from "@emotion/core";
import cover2 from '../../assets/dogCover3.jpg'
import dogpaw from '../../assets/dogpaw.jpg'
import catcover from '../../assets/catCover.jpg'

export const wrapperCover = css`
    background-image: url(${cover2});
    background-size: cover;
    background-position: center;
    height: 500px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const wrapperCover1 = css`
    background-image: url(${catcover});
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
    margin: 10px 0;

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
    margin-bottom: 50px;
`;
export const marginbutton = css`
    width: 100%;
    margin-right: 5px;
`;
export const collections = css`
    padding: 80px 25px;
    justify-content: center;
    margin-right: 100px;
    margin-left: 100px;
`;
export const centertext = css`
    text-align: center;
    font-weight: 500;
    font-size: 30px;
    padding: 10px 5px;
`;
export const filter = css`
    padding: 80px 25px;
    background-image: url(${dogpaw});
    background-size: cover;
    background-position: bottom;
    margin-top: 100px;
`;
export const buttonGroup = css`
    justify-content: center;
    margin-right: 200px;
    margin-left: 200px;
`

export const cover = css `
margin-left: 100px;
`

export const textTitle = css `
font-size: 50px;
font-weight: 600;
text-align: center;
color: #494949;
padding-bottom: 20px;
`
export const toggle = css `
padding-top: 15px;
padding-bottom: 15px;
border-right: 2px solid white;
border-left: 2px solid white;
font-size: 20px;
`

export const cardcss = css `
padding-left: 20px;
padding-bottom: 20px;
`

export const cardcss1 = css `
padding-left: 20px;
padding-top: 15px;
`

export const letUs = css `
font-weight: 600;
font-size: 50px;
color: white;

@media (max-width: 768px) {
    font-size: 30px;
    margin-left: -50px;
}
`

export const buttonSearch = css `
border: none;
background-color: #FFF;
color: #8E8B8B;
outline: none;
vertical-align: middle;

@media (max-width: 768px) {
    margin-right: 30px;
    max-width: 70%
}
`

export const cards = css`
    padding: 10px 30px;
    border-radius: 15px;
    max-width: 87%;

    @media (max-width: 768px) {
        padding-left: 65px;
        padding-right: 0px;
        margin-left: -50px;
    }
`