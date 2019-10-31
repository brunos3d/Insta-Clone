import React from 'react';

import { Container } from './styles';

import Post from '../Post';

export default function Feed() {
    const images = [1, 2, 3, 4, 5];

    return (
        <Container>
            {images.map((img, id) => (
                <Post key={id} img={`/images/${img}.jpg`} />
            ))}
        </Container>
    );
}
