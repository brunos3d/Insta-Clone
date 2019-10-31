import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;

    padding: 16px;

    a>img {
        width: 32px;
        height: 32px;
        border-radius: 50%;
    }
    h2 {
        font-weight: 600;
        font-size: 0.9em;
        margin-left: 10px;
    }
    h2>a {
        color: #262626;
        text-decoration: none; 
    }
`;
