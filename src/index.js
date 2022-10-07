import React from "react";
import ReactDOM from "react-dom/client";
import Heading from "./components/header";
import Hero from "./components/hero";
import Footer from "./components/footer";
import Skills from "./components/Skills";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
    <div>
        <Heading />
        <div className="container">
            <Hero />

            <Skills
                title="React Component Title"
                img="./images/PlusMinus.png"
                alt="plus/minus"
            />
        </div>
        <Footer />
    </div>
);
