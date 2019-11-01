import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import Post from '../Post';

export default function Feed({ feedData, increaseCurrentPage }) {

    const [lazyFeed, setLazyFeed] = useState([]);
    const [feedCount, setFeedCount] = useState(5);

    useEffect(() => {
        setLazyFeed(feedData ? feedData.slice(0, feedCount) : []);

        function handleScroll() {
            const scroll_pos = document.body.scrollTop || document.documentElement.scrollTop
            const scroll_height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

            if (scroll_height > 0 && scroll_pos > 0 && Math.abs(scroll_pos - scroll_height) <= 100) {
                setFeedCount(feedCount + 5);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [feedData, feedCount]);

    return (
        <Container>
            {lazyFeed && lazyFeed.map((post_data, id) => (
                <Post postData={post_data} key={id} />
            ))}
        </Container>
    );
}
