import React from 'react';
import { Link } from 'react-router-dom';

export default function ImageLink({ src, alt, destination }) {
    return(
        <div className='col text-center'>
            <Link to={destination}>
                <img src={src} alt={alt} className="rounded-3 img-fluid shadow"/>
            </Link>
        </div>
    );
}