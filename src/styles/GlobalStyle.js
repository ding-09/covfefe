import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, 
    *::before, 
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }
    html {
        font-size: 62.5%;
        height: 100%;
    }
    body {
        height: 100%;
        padding: 1.5rem 8rem;
        background: ${(props) => props.theme.primaryColors.lightCream}
    }
    h1, 
    h2,
    h3, 
    h4, 
    .alternate-title{
        font-family: 'Crimson Text', serif;
        font-weight: 900;
    }
    h1 {
        font-size: 7.2rem;
        line-height: 7.2rem;
    }
    .alternate-title {
        font-size: 17rem;
        line-height: 7.2rem;
        color: ${(props) => props.theme.primaryColors.grey}
    }
    h2 {
        font-size: 4rem;
        line-height: 4.8rem;
    }
    h3 {
        font-size: 3.2rem;
        line-height: 3.6rem;
    }
    h4 {
        font-size: 2.4rem;
        line-height: 3.2rem;
    }
    ul {
        list-style-type: none;
    }
    p {
        font-family: 'Barlow', sans-serif;
        font-size: 1.6rem;
        line-height: 2.6rem;
        font-weight: 300;
    }
    a {
        font-family: 'Barlow', sans-serif;
        font-size: 1.2rem;
        line-height: 1.5rem;
        letter-spacing: 1px;
        color: ${(props) => props.theme.primaryColors.grey};
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 600;
        &:hover {
            color: ${(props) => props.theme.primaryColors.darkGreyBlue};
        }
    }
    img {
        display: block;
        max-width: 100%;
    }
    .main-button {
        background: ${(props) => props.theme.primaryColors.darkCyan};
        color: ${(props) => props.theme.primaryColors.lightCream};
        font-size: 1.8rem;
        font-family: 'Crimson Text', serif;
        line-height: 2.5rem;
        font-weight: 900;
        width: 21rem;
        height: 5rem;
        border: none;
        border-radius: 0.6rem;
        &:hover {
            background: #66d2cf;
        }
        &:focus {
            outline: none;
        }
    }
`;

export default GlobalStyle;
