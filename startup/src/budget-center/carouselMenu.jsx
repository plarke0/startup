import React, { useState } from "react";
import { Button, Carousel } from 'react-bootstrap';

export default function CarouselMenu({ carouselName, numberOfPages, children }) {
    const [index, setIndex] = useState(0);

    function onPreviousClick() {
        console.log("Prev");
        ref.current.prev();
    }

    function onNextClick() {
        ref.current.next();
    }

    return (
        <div className="card w-100 mb-2">
            {/* Carousel Controls */}
            <div className="card-header text-center">
                <Button variant="outline-dark" className="me-1" onClick={() => onPreviousClick()}>&lt;</Button>
                <label>Control Type</label>
                <Button variant="outline-dark" className="ms-1" data-bs-target={`#${carouselName}-carousel`} data-bs-slide="next">&gt;</Button>
            </div>
            {/* Carousel Body */}
            <Carousel id={`${carouselName}-carousel`} className="carousel-dark-slide" data-bs-ride="false">
                <div className="carousel-inner">
                    {children}
                </div>
            </Carousel>
        </div>
    );
}