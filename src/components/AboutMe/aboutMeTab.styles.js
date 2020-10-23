import { css } from '@emotion/core';

export const rowMargin = css `
margin-bottom: 50px;
margin-top: 50px;
border-bottom: 2px solid #CECDCD;
margin-top: 50px;

@media (max-width: 768px) {
    flex-direction: column;
}

`

export const containerWrapper = css `
justify-content: center;
width: auto;
margin-left: 150px;
margin-right: 150px;
margin-top: 30px;

@media (max-width: 768px) {
    max-width: 100%;
    margin-left: 50px;
    margin-right: 50px;
    justify-content: center;
}
`

export const avatar = css `
width: 200px;
height: 200px;
object-fit: cover;
margin-bottom: 50px;
border-radius: 50%;

@media (max-width: 768px) {
    justify-content: center;
}
`

export const rowMargin2 = css `
margin-bottom: 50px;
margin-top: 30px;
`

export const editProfile = css `
margin-top: 30px;
`

export const first = css `
vertical-align: middle;
align-content:  center;`

export const welcomeText = css `
padding-top: 50px;

@media (max-width: 768px) {
    text-align: center;
}
`
export const second = css `
@media (max-width: 768px) {
    flex-direction: column;
}
`
