import React from 'react';

import { Container } from './styles';

import UserHeader from '../UserHeader';
import LazyImage from '../LazyImage';

export default function Post({ postData }) {

    const large_image = `https://picsum.photos/id/${postData.id}/600`;
    const minified_image = `https://picsum.photos/id/${postData.id}/32`;

    const user_data = {
        url: postData.url,
        name: postData.author,
        avatar: minified_image
    };

    return (
        <Container>
            <UserHeader userData={user_data} />

            <LazyImage minified={minified_image} large={large_image} alt={`${postData.id}`} />
        </Container>
    );
}
