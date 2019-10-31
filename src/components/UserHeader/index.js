import React from 'react';

import { Container } from './styles';

export default function UserHeader({ userData }) {
    return (
        <Container>
            <img src={userData.avatar} alt={userData.name} />
            <a href={userData.url}>{userData.name}</a>
        </Container>
    );
}
