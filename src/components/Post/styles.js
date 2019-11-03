import styled from 'styled-components';

export const Container = styled.article`
    margin-top: 60px;
    width: 600px;

    display: flex;
    flex-direction: column;

    background-color: #fff;
    border-radius: 3px;
    border: 1px solid #E6E6E6;

    
    &>footer {
        padding: 8px 16px;
    }
    &>footer .post-description {
        color: #262626;
        font-size: 0.9rem;
    }
    &>footer .moment-timestamp {
        color: #999;
        font-size: 0.7rem;
        text-transform: uppercase;
    }
    &>footer>p>.author {
        color: #262626;
        margin-right: 0.25rem;
        
        font-size: 0.9rem;
        font-weight: bold;
        text-decoration: none;
    }
    &>footer .read-more {
        color: #999;

        margin: 0;
        border: 0;
        padding: 0;
        background: 0 0;

        margin-left: 0.25rem;
        
        font-size: 0.9rem;
        text-decoration: none;

        cursor: pointer;
        outline: none;
        user-select: none;
        touch-action: manipulation;
    }
    &>footer svg {
        width: 32px;
        height: 32px;
    }

    &>footer .favorite-button {
        border: none;
        background: none;
        
        cursor: pointer;
        outline: none;
        user-select: none;
        touch-action: manipulation;
    }
    &>footer .favorite-button>.downvote path {
        fill: #000;
    }
    &>footer .favorite-button>.upvote path {
        fill: #ED4956ff;
    }

    @media screen and (max-width: 800px) {
        width: 100%;
        margin-top: 30px;

        border-left: none;
        border-right: none;

        &>footer {
            padding: 16px;
        }
    }

    @media screen and (max-width: 500px) {
        margin-top: 20px;
    }
`;
