import React from 'react';

import { Container } from './styles';

export default function Post(props) {

    return (
        <Container>
            <img src={props.img} alt={props.img} />
        </Container>
    );
}
