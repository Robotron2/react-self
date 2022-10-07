import React from "react";

const Heading = () => {
    return (
        <div>
            <NavbarComponent />
        </div>
    );
};

const NavbarComponent = () => {
    return (
        <div>
            <header>
                <nav className="navbar navbar-expand-lg text-primary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/">
                            Navbar
                        </a>
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#navbarNav"
                            aria-controls="navbarNav"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div
                            className="collapse navbar-collapse"
                            id="navbarNav"
                        >
                            <ul className="navbar-nav ms-auto">
                                <li className="nav-item">
                                    <a
                                        className="nav-link active"
                                        aria-current="page"
                                        href="/"
                                    >
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">
                                        About
                                    </a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/">
                                        Join Us
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
        </div>
    );
};

export default Heading;
