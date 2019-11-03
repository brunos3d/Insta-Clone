import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    
    .navbar {
        position: fixed;
        top: 0;
        width: 100%;
        align-items: center;
        background: #fff;
        border-bottom: 1px solid #dbdbdb;
        z-index: 1;

        transition-property: height, border-color;
        transition-duration: 0.2s;
        transition-timing-function: ease-in-out;
    }
    .ruler {
        height: 100%;
        max-width: 1000px;
        
        margin: auto;
        padding: 0 20px 0 20px;

        display: flex;
        flex-direction: row;

        align-items: center;
        justify-content: space-between;
    }
    .ruler>a {
        display: flex;
        flex-direction: row;
        align-items: center;

        color: #000;
        text-decoration: none;
    }
    
    .ruler>a>img {
        height: 2rem;
    }
    .vertical-divider {
        height: 2rem;
        margin: 0 0.8rem 0 0.8rem;
        border-right: 1px solid #000;

        transition: border-color 0.2s ease-in-out;
    }
    .ruler>a>h1 {
        font-size: 2.2rem;
        font-weight: 300;
        font-family: 'Cookie', cursive;

        transition: opacity 0.2s ease-in-out;
    }

    .github-project-buttons {
        display: flex;
        flex-direction: row;

        align-items: center;
        justify-content: space-between;
    }
    .github-project-buttons>span {
        margin: 3px;
    }
    
    .navbar.non-scrolled {
        height: 77px;
    }
    .navbar.scrolled {
        height: 52px;
    }
    .navbar.scrolled>.ruler>a>h1 {
        opacity: 0;
    }
    .navbar.scrolled>.ruler>a>.vertical-divider {
        border-color: #fff;
    }

    @media screen and (max-width: 1000px) {
        .ruler {
            max-width: 800px;
        }
    }

    @media screen and (max-width: 800px) {
        .ruler {
            max-width: 600px;
        }
        .ruler>a>h1 {
            display: none;
        }
        .ruler>a>.vertical-divider {
            display: none;
        }
    }

    @media screen and (max-width: 500px) {
        .ruler {
            max-width: 100%;
        }
        .github-project-buttons {
            display: none;
        }
    }
`;
