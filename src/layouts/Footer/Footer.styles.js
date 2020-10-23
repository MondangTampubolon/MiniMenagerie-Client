import { css } from "@emotion/core";

export const wrapperStyles = css`
    padding: 50px 50px;
    margin-top: 200px;
    display: flex;
    flex-wrap: wrap;
    background-color: #209516;
    justify-content: space-between;
`;

export const imageLogo = css`
    width: 150px;
    filter: brightness(0) invert(1);
    margin-right: 160px;
    margin-left: 20px;

    @media (max-width: 768px) {
        margin-left: 0px;
        margin-bottom: 20px;
    }
`;

export const footer = css`
    color: #fff;
    font-size: 14px;
    line-height: 1;
`;

export const footerTitle = css`
    color: #fff;
    font-weight: 600;
`;

export const subsLogo = css`
    width: 70px;
    filter: brightness(0) invert(1);
    margin-bottom: 30px;
`;

export const subscription = css`
    margin-left: 100px;
    text-align: center;
    color: #fff;
`;

export const wrapperStyles2 = css`
    background-color: #12520c;
    padding-top: 15px;
    font-size: 13px;

    & i {
        margin-right: 10px;
    }

    & * {
        color: #fff;
    }
`;

export const mini = css`
    padding-left: 50px;
`;

export const icons = css`
    margin-right: 50px;
`;

export const icon = css`
    margin-left: 15px;
`;

export const subWrapper = css`
    display: flex;
    justify-content: center;
    text-align: center;
    align-content: center;
`;

export const subText = css `
color: #fff;
`

export const rowFooter = css `
    width: 100%;
    padding: 20px 20px;
`

export const icon2 = css `
@media(max-width: 768px) {
    margin-left: 0px;
}
`