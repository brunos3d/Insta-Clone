import React from 'react';

import { Container } from './styles';

export default function CommentList({ commentList }) {
    return (
        <Container>
            {commentList.map((comment, index) => (
                <li key={index}>
                    <span>
                        {comment}
                    </span>
                </li>
            ))}
        </Container>
    );
}
