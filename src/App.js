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

    // Special Thank's
    // https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array
    function shuffle(array) {
        let currentIndex = array.length, temporaryValue, randomIndex;

        // While there remain elements to shuffle...
        while (0 !== currentIndex) {

            // Pick a remaining element...
            randomIndex = Math.floor(Math.random() * currentIndex);
            currentIndex -= 1;

            // And swap it with the current element.
            temporaryValue = array[currentIndex];
            array[currentIndex] = array[randomIndex];
            array[randomIndex] = temporaryValue;
        }

        return array;
    }

    useEffect(() => {

        async function fetchData() {
            const picsum_response = await fetch(`https://picsum.photos/v2/list?page=${currentPage}&limit=100`);
            const array_data = await picsum_response.json();


            for (let id = 0; id < array_data.length; id++) {
                array_data[id].description = MeowFacts.getRandom();
            }

            setFeedData(shuffle(array_data));
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

