import React from 'react';
import { NavLink } from 'react-router-dom';

export function Home() {
  return (
    <main>
        <div class="container d-flex flex-column align-content-normal">
            <div class="d-flex row row-cols-1 row-cols-md-2 row-cols-lg-3 justify-content-start g-2">
                <NavLink to="login">
                    <img src="./temp.jpg" alt="Budget Central" class="img-fluid shadow"/>
                </NavLink>
                <NavLink to="login">
                    <img src="./temp.jpg" alt="Budget Central" class="img-fluid shadow"/>
                </NavLink>
                <NavLink to="login">
                    <img src="./temp.jpg" alt="Budget Central" class="img-fluid shadow"/>
                </NavLink>
                <NavLink to="login">
                    <img src="./temp.jpg" alt="Budget Central" class="img-fluid shadow"/>
                </NavLink>
                <NavLink to="login">
                    <img src="./temp.jpg" alt="Budget Central" class="img-fluid shadow"/>
                </NavLink>
            </div>
        </div>
    </main>
  );
}