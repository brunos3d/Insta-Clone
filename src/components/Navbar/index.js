import React from 'react';

import { Container } from './styles';

export default function Navbar() {
    return (
        <Container>
            <div className="ruler">
                <img src="./react-logo.svg" alt="react logo" />
                <h1>
                    Insta-Clone
                </h1>
            </div>
        </Container>
    );
}
