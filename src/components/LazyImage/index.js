import React, { useState, useEffect, useRef } from 'react';

import { Container } from './styles';

export default function LazyImage({ favorite, setFavorite, minified, large, alt }) {

    const thisElement = useRef(null);
    const [loaded, setLoaded] = useState(false);
    const [displayImage, setDisplayImage] = useState(minified);

    useEffect(() => {

        function handleScroll() {
            const view_height = document.documentElement.clientHeight;
            const scroll_pos = document.body.scrollTop || document.documentElement.scrollTop

            if (thisElement && thisElement.current && (
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
            )) {
                setDisplayImage(large);
            }
        }

        // only add scroll event listener to unloaded images to skip overhead
        if (!loaded) {
            window.addEventListener('scroll', handleScroll);
        }

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [thisElement, loaded, minified, large]);

    function onImageDoubleClickHandle() {
        setFavorite(true);
    }

    function onLargeImageLoadHandle() {
        if (displayImage === large) {
            setLoaded(true);
        }
    }

    return (
        <Container tabIndex="0" onDoubleClick={() => onImageDoubleClickHandle()} ref={thisElement}>
            <img src={displayImage} onLoad={() => onLargeImageLoadHandle()} className={loaded ? "loaded" : "unloaded"} alt={alt} />
            <div className="favorite-heart">
                <img className={favorite ? "popup-animation" : "none"} src="./favorite-heart.svg" alt="heart" />
            </div>
        </Container>
    );
}
