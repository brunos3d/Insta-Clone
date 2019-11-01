import styled from 'styled-components';

export const Container = styled.div`
    position: fixed;
    top: 0;
    width: 100%;
    height: 77px;
    align-items: center;
    background-color: #fff;
    border-bottom: 1px solid #dbdbdb;
    z-index: 1;
    
    .ruler {
        margin: auto;
        padding: 0 20px 0 20px;
        height: 100%;
        max-width: 1000px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    h1 {
        font-size: 2.5rem;
        font-weight: 300;
        font-family: 'Cookie', cursive;
    }

    @media screen and (max-width: 1000px) {
        .ruler {
            max-width: 800px;
        }
    }

    @media screen and (max-width: 800px) {
        height: 64px;

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
