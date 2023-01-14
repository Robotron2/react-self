import React from "react";

const Hero = () => {
    return (
        <div>
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold">Welcome To Roboweb</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">
                        <span>Lorem ipsum</span> <span>dolor</span>
                        <span>sit</span> <span>amet</span>{" "}
                        <span>consectetur</span> <span>adipisicing</span>
                        <span> elit. </span>
                        <span>Reiciendis</span> <span>iste</span>{" "}
                        <span>officia</span> <span>aperiam amet</span>{" "}
                        <span>placeat labore</span>
                        <span> maxime sint porro</span>{" "}
                        <span>excepturi quasi animi vitae</span>{" "}
                        <span>vero,</span>
                        <span>
                            mollitia in pariatur aut repudiandae exercitationem
                            at
                        </span>
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button
                            type="button"
                            className="btn btn-dark btn-lg px-4 gap-3"
                        >
                            Enroll
                        </button>
                        <button
                            type="button"
                            className="btn btn-primary btn-lg px-4"
                        >
                            Support
                        </button>
                    </div>
                </div>
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                <path
                    fill="#c0bfba"
                    fillOpacity="1"
                    d="M0,320L48,309.3C96,299,192,277,288,240C384,203,480,149,576,154.7C672,160,768,224,864,213.3C960,203,1056,117,1152,80C1248,43,1344,53,1392,58.7L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
                ></path>
            </svg>
        </div>
    );
};

export default Hero;
