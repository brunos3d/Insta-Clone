import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    overflow: hidden;
    margin-bottom: 60px;

    &>img {
        width: 100%;
        height: 100%;
    }
    .unloaded {
        filter: blur(10px);
    }
    .loaded {
        animation: defog 0.5s normal;
    }
    @keyframes defog {
        from {
            filter: blur(10px);
        }
        to {
            filter: blur(0px);
        }
    }
`;
