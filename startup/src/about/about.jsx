import React from 'react';

export function About() {
  return (
    <main>
        <div className="container">
            <div className="d-flex justify-content-center">
                <h2>About:</h2>
            </div>
            <div className="d-flex flex-column">
                <div className="d-flex flex-column mb-2">
                    <span><b>What is this site?</b></span>
                    <span>This is a site where I post my various web projects! I only have one so far, but I hope to add more as time goes on.</span>
                </div>
                <div className="d-flex flex-column mb-2">
                    <span><b>What is Budget Center?</b></span>
                    <span>Budget Center is the result of me wanting to make my own budgeting application. This is about the third iteration, and made a good project for my CS 260 class.</span>
                </div>
                <div className="d-flex flex-column mb-2">
                    <span><b>What are my plans for this site?</b></span>
                    <span>I'm planning to continue adding projects to this site. What those projects are remains to be seen. Really it will be anything that I think would be interesting.</span>
                </div>
            </div>
        </div>
    </main>
  );
}