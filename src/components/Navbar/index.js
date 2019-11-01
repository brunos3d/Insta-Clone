import React, { useState, useEffect } from 'react';

import { Container } from './styles';

export default function Navbar() {

    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {

        function handleScroll() {
            const scroll_pos = document.body.scrollTop || document.documentElement.scrollTop

            if (scrolled && scroll_pos < 100) {
                setScrolled(false);
            }
            if (!scrolled && scroll_pos > 100) {
                setScrolled(true);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [scrolled]);

    return (
        <Container>
            <div className={`navbar ${scrolled ? "scrolled" : "non-scrolled"}`}>
                <div className="ruler">
                    <img src="./react-logo.svg" alt="react logo" />
                    <h1>
                        Insta-Clone
                    </h1>
                </div>
            </div>
        </Container>
    );
}
