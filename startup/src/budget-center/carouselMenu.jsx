import React, { useState } from "react";
import { Button, Carousel } from 'react-bootstrap';

export default function CarouselMenu({ numberOfPages, children }) {
    const [index, setIndex] = useState(0);

    function onPreviousClick() {
        setIndex((currentIndex) => {
            if (currentIndex === 0) {
                return numberOfPages - 1;
            } else {
                return currentIndex - 1;
            }
        });
    }

    function onNextClick() {
        setIndex((currentIndex) => {
            if (currentIndex === numberOfPages - 1) {
                return 0;
            } else {
                return currentIndex + 1;
            }
        });
    }

    return (
        <div className="card w-100 mb-2">
            {/* Carousel Controls */}
            <div className="card-header text-center">
                <Button variant="outline-dark" className="me-1" onClick={() => onPreviousClick()}>&lt;</Button>
                <label>Control Type</label>
                <Button variant="outline-dark" className="ms-1" onClick={() => onNextClick()}>&gt;</Button>
            </div>
            {/* Carousel Body */}
            <Carousel slide={false} activeIndex={index} controls={false} indicators={false} interval={null}>
                {children}
            </Carousel>
        </div>
    );
}