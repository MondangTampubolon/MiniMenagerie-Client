import { css } from "@emotion/core";

export const container = css`
    display: flex;
    justify-content: space-between;

    @media (max-width: 768px) {
        max-width: 100%;
    }
`;

export const head_bg = css`
    width: 100%;
    background-repeat: no-repeat;
    object-fit: cover;
    height: 300px;
    margin-bottom: 50px;
    
    @media (max-width: 768px) {
        max-width: 100%;
        height: 90%;
    }
`
export const sortFilter = css`
    display: flex;
    align-items: center;
`

export const shopText = css `
position: absolute;
top: 30%;
left: 50%;
color: #22891a;
font-size: 20px;
font-weight: bold;
transform: translate(-50%, -50%);
text-align: center;
`
export const length = css `
@media (max-width: 768px) {
    margin-right: none;
}
`