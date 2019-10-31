import React from 'react';

import { Container } from './styles';

export default function UserHeader({ userData }) {
    return (
        <Container>
            <a href={userData.url} target="_blank" rel="noopener noreferrer">
                <img src={userData.avatar} alt={userData.name} />
            </a>
            <h2>
                <a href={userData.url} target="_blank" rel="noopener noreferrer">
                    {userData.name}
                </a>
            </h2>
        </Container>
    );
}
