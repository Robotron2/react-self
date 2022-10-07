import React from "react";

const Hero = () => {
    return (
        <div>
            <div className="px-4 py-5 my-5 text-center">
                <h1 className="display-5 fw-bold">Centered hero</h1>
                <div className="col-lg-6 mx-auto">
                    <p className="lead mb-4">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Reiciendis iste officia aperiam amet placeat labore
                        maxime sint porro excepturi quasi animi vitae vero,
                        mollitia in pariatur aut repudiandae exercitationem at
                        mollitia in pariatur aut repudiandae exercitationem at
                        mollitia in pariatur aut repudiandae exercitationem at.
                    </p>
                    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
                        <button
                            type="button"
                            className="btn btn-primary btn-lg px-4 gap-3"
                        >
                            Primary button
                        </button>
                        <button
                            type="button"
                            className="btn btn-outline-secondary btn-lg px-4"
                        >
                            Secondary
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
