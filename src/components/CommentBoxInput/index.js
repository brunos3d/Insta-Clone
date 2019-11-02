import React, { useState } from 'react';

import { Container } from './styles';

export default function CommentBoxInput({ commentList, setCommentList }) {

    const [commentValue, setCommentValue] = useState();

    function handleCommentValue(event) {
        setCommentValue(event.target.value);
    }

    function handlePostComment(event) {
        // check if string is empty
        if (commentValue && commentValue.trim()) {
            setCommentList([...commentList, commentValue]);
            setCommentValue("");
        }
        event.preventDefault();
    }

    return (
        <Container>
            <form onSubmit={handlePostComment}>
                <input type="text" placeholder="Adicione um comentário..." value={commentValue} onChange={handleCommentValue} />
            </form>
        </Container>
    );
}
