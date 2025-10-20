import React from 'react';

function AboutSection({ title, content }) {
    return (
        <div className="d-flex flex-column mb-2">
            <span><b>{title}</b></span>
            <span>{content}</span>
        </div>
    );
}

export function About() {
    return (
        <main>
            <link rel="icon" href="/public/plarke-icon.ico"/>
            <div className="container">
                <div className="d-flex justify-content-center">
                    <h2>About:</h2>
                </div>
                <div className="d-flex flex-column">
                    <AboutSection
                        title="What is this site?"
                        content="This is a site where I post my various web projects! I only have one so far, but I hope to add more as time goes on."
                    />
                    <AboutSection
                        title="What is Budget Center?"
                        content="Budget Center is the result of me wanting to make my own budgeting application. This is about the third iteration, and made a good project for my CS 260 class."
                    />
                    <AboutSection
                        title="What are my plans for this site?"
                        content="I'm planning to continue adding projects to this site. What those projects are remains to be seen. Really it will be anything that I think would be interesting."
                    />
                    <AboutSection
                        title="Do you have any projects in mind?"
                        content="I do actually! I recently had the idea to make an online version of scripture baseball, if you've ever heard of that. Then you can play and practice by yourself. Then you can whip out your skills when the Elders come over! I also want to make an online grade/GPA calculator and a clean music filter, but no promises on any of these, especially with my current workload from school."
                    />
                </div>
            </div>
        </main>
    );
}