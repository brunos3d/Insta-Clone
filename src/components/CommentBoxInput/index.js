import React, { useState } from 'react';

import { Container } from './styles';

export default function CommentBoxInput({ commentList, setCommentList }) {

    const [commentValue, setCommentValue] = useState();

    function handleCommentValue(event) {
        setCommentValue(event.target.value);
    }

    function handlePostComment(event) {
        // check if string is empty
        if (isValidComment()) {
            setCommentList([...commentList, commentValue]);
            setCommentValue("");
        }
        event.preventDefault();
    }

    function isValidComment() {
        return commentValue && commentValue.trim();
    }

    return (
        <Container>
            <form onSubmit={handlePostComment}>
                <input
                    type="text"
                    autocorrect="off"
                    autocomplete="off"
                    value={commentValue}
                    onChange={handleCommentValue}
                    placeholder="Adicione um comentário..."
                />
                <button disabled={!isValidComment()} type="submit">Publicar</button>
            </form>
        </Container>
    );
}
