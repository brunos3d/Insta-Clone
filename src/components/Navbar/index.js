import React, { useState, useEffect } from 'react';

import { Container } from './styles';

import GitHubButton from 'react-github-btn';

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
                    <a href="/">
                        <img src="./react-logo.svg" alt="react logo" />
                        <div className="vertical-divider"></div>
                        <h1>
                            Insta-Clone
                        </h1>
                    </a>

                    <div className="github-profile-button">
                        <GitHubButton href="https://github.com/BrunoS3D" data-size="large" aria-label="Follow @BrunoS3D on GitHub">Follow @BrunoS3D</GitHubButton>
                    </div>

                    <div className="github-project-buttons">
                        <GitHubButton href="https://github.com/BrunoS3D/Insta-Clone/subscription" data-icon="octicon-eye" data-size="large" aria-label="Watch BrunoS3D/Insta-Clone on GitHub">Watch</GitHubButton>
                        <GitHubButton href="https://github.com/BrunoS3D/Insta-Clone" data-icon="octicon-star" data-size="large" aria-label="Star BrunoS3D/Insta-Clone on GitHub">Star</GitHubButton>
                        <GitHubButton href="https://github.com/BrunoS3D/Insta-Clone/fork" data-icon="octicon-repo-forked" data-size="large" aria-label="Fork BrunoS3D/Insta-Clone on GitHub">Fork</GitHubButton>
                    </div>
                </div>
            </div>
        </Container>
    );
}
