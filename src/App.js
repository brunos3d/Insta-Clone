import React from 'react';

import { Container } from './styles';

import Navbar from './components/Navbar';
import Feed from './components/Feed';

export default function App() {

    return (
        <Container>
            <Navbar />

            <Feed />
        </Container>
    );
}

