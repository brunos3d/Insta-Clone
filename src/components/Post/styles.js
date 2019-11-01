import styled from 'styled-components';

export const Container = styled.article`
    margin-top: 60px;
    width: 600px;

    display: flex;
    flex-direction: column;

    background-color: #fff;
    border-radius: 3px;
    border: 1px solid #E6E6E6;

    
    &>footer>p {
        font-size: 0.9rem;
        color: #262626;
    }
    &>footer {
        padding: 20px;
    }
    &>footer svg {
        width: 32px;
    }

    &>footer>button {
        border: none;
        background: none;
        
        cursor: pointer;
        outline: none;
        user-select: none;
        touch-action: manipulation;
    }
    &>footer>button>.downvote path {
        fill: #000;
    }
    &>footer>button>.upvote path {
        fill: #ED4956ff;
    }

    @media screen and (max-width: 800px) {
        margin-top: 30px;
        width: 400px;

        &>footer {
            padding: 16px;
        }
    }

    @media screen and (max-width: 500px) {
        margin-top: 20px;
        width: 300px;
    }
`;
