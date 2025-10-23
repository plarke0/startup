import React from "react";
import { Button } from 'react-bootstrap';

export default function CarouselMenu({ carouselName, children }) {
    return (
        <div>
            {/* Carousel Controls */}
            <div className="card-header text-center">
                <Button variant="outline-dark" className="me-1" data-bs-target={`#${carouselName}-carousel`} data-bs-slide="previous">&lt;</Button>
                <label>Control Type</label>
                <Button variant="outline-dark" className="ms-1" data-bs-target={`#${carouselName}-carousel`} data-bs-slide="next">&gt;</Button>
            </div>
            {/* Carousel Body */}
            <div id={`${carouselName}-carousel`} className="carousel carousel-dark-slide" data-bs-ride="false">
                <div className="carousel-inner">
                    {children}
                </div>
            </div>
        </div>
    );
}