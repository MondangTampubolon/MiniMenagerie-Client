import { css } from "@emotion/core";

export const product_name = css`
    font-weight: 600;
    min-height: 50px;
`;
export const product_price = css`
    color: #22891a;
    font-weight: 600;
`;

export const card_img = css`
    width: 100%;
    height: 200px;
    object-fit: cover;
`;

export const product_list = css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;

    @media (max-width: 768px) {
        justify-content: space-around;
    }
`;
