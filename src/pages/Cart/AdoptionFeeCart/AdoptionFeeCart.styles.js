import { css } from '@emotion/core';

export const itemDetails = css`
border: 1px solid rgba(0,0,0,.125);
border-radius: .25rem;
padding: 1.25rem;
margin-bottom: 2.25rem;
-webkit-box-shadow: 0px 2px 5px 2px rgba(219,202,219,1);
-moz-box-shadow: 0px 2px 5px 2px rgba(219,202,219,1);
box-shadow: 0px 2px 5px 2px rgba(219,202,219,1);
`

export const userDetails = css`
border: 1px solid rgba(0,0,0,.125);
border-radius: .25rem;
padding: 1.25rem;
margin-bottom: 2.25rem;
-webkit-box-shadow: 0px 2px 5px 2px rgba(219,202,219,1);
-moz-box-shadow: 0px 2px 5px 2px rgba(219,202,219,1);
box-shadow: 0px 2px 5px 2px rgba(219,202,219,1);
`

export const paymentDetails = css`
height: 250px;
display: flex;
flex-direction: column;
justify-content: space-between;
border: 1px solid rgba(0,0,0,.125);
border-radius: .25rem;
padding: 1.25rem;
margin-bottom: 2.25rem;
-webkit-box-shadow: 0px 2px 5px 2px rgba(219,202,219,1);
-moz-box-shadow: 0px 2px 5px 2px rgba(219,202,219,1);
box-shadow: 0px 2px 5px 2px rgba(219,202,219,1);
`

export const container = css`
margin-bottom: 50px;
`

export const containerDetails = css`
display: flex;
justify-content: space-between;
`

export const quantity = css`
input {
    width: 100%;
    text-align: center;
}
`

export const buttonCheckoutNow = css`
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

export const buttonCheckoutLater = css`
button {
    font-size: 1em;
    // margin: 1em;
    padding: 0.5em 0.5em;
    border: 2px solid #22891A;
    background-color: #FEFAE0;
    color: #22891A;
    &:hover {
        background-color: #22891A;
        color: #FEFAE0;
        box-shadow: none;
    }
}
`

export const buttonRemove = css`
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