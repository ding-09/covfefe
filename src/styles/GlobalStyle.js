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
        padding: 4rem 8rem;
    }
    h1, 
    h2,
    h3, 
    h4 {
        font-family: 'Crimson Text', serif;
    }
    h1 {
        font-size: 7.2rem;
        line-height: 7.2rem;
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
    }
    a {
        font-family: 'Barlow', sans-serif;
        font-size: 1.2rem;
        line-height: 1.5rem;
        letter-spacing: 1px;
        color: ${props => props.theme.primaryColors.grey};
        text-decoration: none;
        text-transform: uppercase;
        font-weight: 600;
        &:hover {
            color: ${props => props.theme.primaryColors.darkGreyBlue};
        }
    }
    img {
        display: block;
        max-width: 100%;
    }
`;

export default GlobalStyle;
