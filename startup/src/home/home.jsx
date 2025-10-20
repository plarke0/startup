import React from 'react';
import { Link } from 'react-router-dom';

function ImageLink({ src, alt, destination }) {
    return(
        <Link to={destination}>
            <img src={src} alt={alt} className="img-fluid shadow"/>
        </Link>
    );
}

export function Home() {
    return (
        <main>
            <div className="container d-flex flex-column align-content-normal">
                <div className="d-flex row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-start g-2">
                    <ImageLink src="./temp.jpg" alt="Budget Central" destination="login"/>
                    <ImageLink src="./temp.jpg" alt="Temp" destination="temp"/>
                    <ImageLink src="./temp.jpg" alt="Temp" destination="temp"/>
                    <ImageLink src="./temp.jpg" alt="Temp" destination="temp"/>
                    <ImageLink src="./temp.jpg" alt="Temp" destination="temp"/>
                </div>
            </div>
        </main>
    );
}