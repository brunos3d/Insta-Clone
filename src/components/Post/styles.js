import styled from 'styled-components';

export const Container = styled.article`
    margin-top: 60px;
    width: 600px;

    display: flex;
    flex-direction: column;

    background-color: #fff;
    border-radius: 3px;
    border: 1px solid #E6E6E6;

    @media screen and (max-width: 800px) {
        margin-top: 30px;
        width: 400px;
    }

    @media screen and (max-width: 500px) {
        margin-top: 20px;
        width: 300px;
    }
`;
