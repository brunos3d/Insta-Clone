import React from 'react';

import { Container } from './styles';

import UserHeader from '../UserHeader';

export default function Post({ postData }) {

    const user_data = {
        url: postData.url,
        name: postData.author,
        avatar: `https://picsum.photos/id/${postData.id}/32`
    };

    return (
        <Container>
            <UserHeader userData={user_data} />
            <img src={postData.download_url} alt={`${postData.id}`} />
        </Container>
    );
}
