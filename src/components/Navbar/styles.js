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
        height: 100%;
        max-width: 100vh;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    
    h1 {
        font-size: 2.5rem;
        font-weight: 300;
        font-family: 'Cookie', cursive;
    }
`;
