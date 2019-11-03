import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import MeowFacts from './meowfacts';

import Navbar from './components/Navbar';
import Feed from './components/Feed';

export default function App() {

    const [feed_data, setFeedData] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    function IncreaseCurrentPage() {
        setCurrentPage(currentPage + 1);
    }

    useEffect(() => {

        async function fetchData() {
            const picsum_response = await fetch(`https://picsum.photos/v2/list?page=${currentPage}&limit=100`);
            const array_data = await picsum_response.json();

            function randomDate(start, end) {
                return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
            }

            for (let id = 0; id < array_data.length; id++) {
                array_data[id].description = MeowFacts.getRandom();
                array_data[id].timestamp = randomDate(new Date(2019, 9, 1), new Date());
            }

            const sort_by_date = array_data.sort((a, b) => b.timestamp.getTime() - a.timestamp.getTime());
            setFeedData(sort_by_date);
        }

        fetchData();

    }, [currentPage]);

    return (
        <Container>
            <Navbar />

            <Feed feedData={feed_data} increaseCurrentPage={IncreaseCurrentPage} />
        </Container>
    );
}

