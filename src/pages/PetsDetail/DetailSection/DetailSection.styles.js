import { css } from "@emotion/core";

export const h1 = css`
    text-align: center;
`;

export const h5 = css`
    text-align: center;
`;

export const detail_section_col = css`
    border-style: dashed;
    padding: 30px;
    border: solid 2px #e3e3e3;
    border-radius: 0.35rem;
    margin: 10px 20px;

    h1,
    h5 {
        text-align: center;
    }

    @media (max-width: 768px) {
        margin: 10px 0;
    }
`;
export const detail_section_col_left_first_row = css`
    display: flex;
    justify-content: space-between;
`;

export const detail_section_col_left_second_row = css`
    display: flex;
    // align-items: center;
    p,
    h5 {
        padding-right: 10px;
    }
    margin-right: 20px;
    margin-left: 20px;

    @media (max-width: 768px) {
        font-size: 15px;
    }
`;

export const row_line = css`
    margin-top: -20px;
    margin-left: 20px;
    margin-right: 20px;
`;

export const detail_section_col_right = css`
    display: flex;
    align-items: center;
    justify-content: space-around;
    margin-top: 1.25rem;
    input {
        width: 100%;
        background: transparent;
        border: none;
        border-bottom: 1px solid #000000;
        -webkit-box-shadow: none;
        box-shadow: none;
        border-radius: 0;
    }
`;
export const detail_section_col_right_button = css`
    margin-top: 1.25rem;
    text-align: center;
`;

export const location = css`
    margin-top: 30px;
`;

export const rowMargin3 = css`
    padding-bottom: 20px;
    align-content: center;
    margin-right: 30px;
    margin-left: 30px;
    justify-content: center;
`;

export const rowmargin = css `
justify-content: space-between;
margin-left: 10px;
margin-right: 10px;
`
export const margin2 = css `
margin-bottom: 20px;
text-align: center;
`

export const detailUser = css `
text-align: center;
justify-content: center;

@media (max-width: 768px) {
    font-size: 15px;
}
`

export const text = css `
margin-right: 20px;
margin-left: 20px;

@media (max-width: 768px) {
    font-size: 15px;
}
`

export const margintop = css `
margin-top: -50px;
@media (max-width: 768px) {
    margin-top: -80px;
}
`