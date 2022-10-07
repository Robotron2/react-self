import React from "react";

const Footer = () => {
    return (
        <div>
            <FirstFooterChild />
        </div>
    );
};

const FirstFooterChild = () => {
    return (
        <div>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top">
                <div className="container-fluid">
                    <div className="col-md-4 d-flex align-items-center">
                        <a
                            href="/"
                            className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1"
                        >
                            Robotron
                        </a>
                        <span className="mb-3 mb-md-0 text-muted">
                            &copy; 2022
                        </span>
                    </div>

                    <ul className="nav col-md-4 justify-content-end list-unstyled d-flex ms-auto">
                        <li className="ms-3">
                            <a className="text-muted" href="/">
                                Twitter
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="text-muted" href="/">
                                Twitter
                            </a>
                        </li>
                        <li className="ms-3">
                            <a className="text-muted" href="/">
                                Twitter
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    );
};

export default Footer;
