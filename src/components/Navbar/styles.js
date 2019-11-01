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
        margin: auto;
        padding: 0 20px 0 20px;
        height: 100%;
        max-width: 1000px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    img {
        border-right: 1px solid #000;
        height: 2.25rem;
        padding-right: 0.8rem;
        /* transform: scale(0.25); */
    }
    h1 {
        margin-left: 0.8rem;
        font-size: 2.5rem;
        font-weight: 300;
        font-family: 'Cookie', cursive;

        transition: opacity 0.2s ease-in-out;
    }
    
    .navbar.non-scrolled {
        height: 77px;
    }
    .navbar.scrolled {
        height: 52px;
    }
    .navbar.scrolled>.ruler>h1 {
        opacity: 0;
    }
    .navbar.scrolled>.ruler>img {
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
        h1 {
            font-size: 2rem;
        }
    }

    @media screen and (max-width: 500px) {
        .ruler {
            max-width: 100%;
        }
    }
`;
