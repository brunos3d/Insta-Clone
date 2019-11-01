import React, { useState, useEffect, useRef } from 'react';

import { Container } from './styles';

export default function LazyImage({ minified, large, alt }) {

    const thisElement = useRef(null);
    const [displayImage, setDisplayImage] = useState(minified);
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {

        function handleScroll() {
            const view_height = document.documentElement.clientHeight;
            const scroll_pos = document.body.scrollTop || document.documentElement.scrollTop

            if (
                // if top of the element is inside of view area
                (
                    thisElement.current.offsetTop >= scroll_pos + 100
                    && thisElement.current.offsetTop <= scroll_pos + view_height - 100
                )
                // or if bottom of the element is inside of view area
                || (
                    (thisElement.current.offsetTop + thisElement.current.offsetHeight) >= scroll_pos + 100
                    && (thisElement.current.offsetTop + thisElement.current.offsetHeight) <= scroll_pos + view_height - 100
                )
            ) {
                setDisplayImage(large);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [thisElement, loaded, minified, large]);

    function onLargeImageLoadHandle() {
        if (displayImage === large) {
            setLoaded(true);
        }
    }

    return (
        <Container ref={thisElement}>
            <img src={displayImage} onLoad={() => onLargeImageLoadHandle()} className={loaded ? "loaded" : "unloaded"} alt={alt} />
        </Container>
    );
}
