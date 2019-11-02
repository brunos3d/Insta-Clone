import styled from 'styled-components';

export const Container = styled.section`
    min-height: 56px;
    padding-left: 16px;
    padding-right: 16px;

    border-top: 1px solid #efefef;

    display: flex;
    align-items: center;

    form {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
    }
    form>input {
        color: #262626;

        font-size: 0.9rem;

        width: 100%;
        height: 100%;

        border: none;
        outline: none;
    }

`;
