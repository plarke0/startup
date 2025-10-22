import React from 'react';
import { Link } from 'react-router-dom';

export default function ImageLink({ src, alt, destination }) {
    return(
        <Link to={destination}>
            <img src={src} alt={alt} className="img-fluid shadow"/>
        </Link>
    );
}