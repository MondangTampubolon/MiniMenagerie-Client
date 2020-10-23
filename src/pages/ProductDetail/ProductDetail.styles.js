import { css } from '@emotion/core';

export const container = css`
margin-bottom: 50px;
margin-top: 50px;

h4 {
    font-weight: 600;
}
`

export const row_quantity = css`
display: flex;
justify-content: space-around;
align-items: center;
`

export const info_col = css`
display: flex;
flex-direction: column;
justify-content: space-between;
margin-left: 50px;
`
export const description_col = css`
padding-left: 0;
`

export const info_row =css`
margin-bottom: 50px;
`
export const info_name = css`
display: flex;
flex-direction: column;

p {
    font-size: 12px;
}
`

export const info_quantity = css`
padding: 0;

input {
    width: 100%;
    height: 100%;
    padding: 0.5em 0;
}
`
export const priceAndStock = css`
color: #22891A;
font-weight: 600;
`
