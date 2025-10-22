import React from 'react';


export default function Footer() {
    return (
        <div className="container">
            <footer className="row justify-content-between border-top mt-3">
                <span className="col text-start mt-2"><p>Preston Clarke</p></span>
                <span className="col text-end mt-2"><a href="https://github.com/plarke0/startup" className="text-decoration-none link-dark">GitHub</a></span>
                <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-kenU1KFdBIe4zVF0s0G1M5b4hcpxyD9F7jL+jjXkk+Q2h455rYXK/7HAuoJl+0I4" crossOrigin="anonymous"></script>
            </footer>
        </div>
    );
}