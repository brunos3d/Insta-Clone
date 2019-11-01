import styled from 'styled-components';

export const Container = styled.div`
    outline: none;
    user-select: none;
    touch-action: manipulation;
    
    position: relative;
    display: flex;
    flex-direction: column;
    
    overflow: hidden;

    &>img {
        width: 100%;
        height: 100%;
    }
    .favorite-heart {
        position: absolute;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .favorite-heart>img {
        width: 20%;
        opacity: 0;
        transform: scale(0);
        filter: drop-shadow(0 5px 5px #222);
    }
    .popup-animation {
        animation: popup 1s normal;
    }
    .unloaded {
        filter: blur(10px);
    }
    .loaded {
        animation: defog 0.25s normal;
    }
    @keyframes defog {
        from {
            filter: blur(10px);
        }
        to {
            filter: blur(0px);
        }
    }
    @keyframes popup {
        0% {
            opacity: 0;
            transform: scale(0);
        }
        35% {
            opacity: 1;
            transform: scale(1.1);
        }
        40% {
            opacity: 0.8;
            transform: scale(1);
        }
        70% {
            transform: scale(1);
        }
        75% {
            opacity: 0.9;
            transform: scale(1.1);
        }
        100% {
            opacity: 0;
            transform: scale(0);
        }
    }
`;
