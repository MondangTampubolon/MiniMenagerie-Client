import { css } from '@emotion/core';

export const head = css`
    background-color: #209516;
    padding: 15px 0;
    border-radius: 5px;
    margin-top: 30px;
    margin-bottom: 30px;
    h3 {
        color: white;
        font-weight: bold;
        text-align: center;
    }
`
export const statusInfo = css`
    display: flex;
    justify-content: space-around;
    flex-wrap: wrap;

    div {
        margin: 15px 0px;
        border: 1px solid black;
        padding: 8px
    }
`
export const mainBody = css`
    display: flex;
    justify-content: space-around;
`
export const mainOne = css`
    img {
        width: 100%;
    }
`

export const buttonPayNow = css`
text-align: center;
button {
    font-size: 1em;
    // margin: 1em;
    padding: 0.5em 0.5em;
    border: 2px solid #22891A;
    background-color: #22891A;
    color: #FEFAE0;
    &:hover {
        background-color: #FEFAE0;
        color: #22891A;
        box-shadow: none;
    }
}
`
