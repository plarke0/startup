import React from 'react';
import ImageLink from './imageLink';

export default function Home() {
    return (
        <main>
            <div className="container d-flex flex-column align-content-normal">
                <div className="d-flex row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-start g-2">
                    <ImageLink src="./budget-center-banner.png" alt="Budget Central" destination="login"/>
                    <ImageLink src="./temp.png" alt="Temp" destination="temp"/>
                </div>
            </div>
        </main>
    );
}