import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 16px;

    img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }

    a {
        margin-left: 10px;
        color: #262626;
        text-decoration: none; 
    }
`;
