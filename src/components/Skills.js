import React from "react";
import pic from "../images/PlusMinus.png";
import moonBg from "../images/moonBg.jpg";
import flowerBg from "../images/flowerBg.jpg";
import jellyBg from "../images/jellyBg.jpg";

const Skills = (props) => {
    return (
        <div>
            <div className="container px-4 py-5" id="custom-cards">
                <h2 className="pb-2 border-bottom">Skills Card</h2>

                <div className="row row-cols-1 row-cols-lg-4 row-cols-md-2 align-items-stretch g-4 py-5">
                    <SkillCard pic={pic} />
                    <SkillCard
                        pic={moonBg}
                        tel="09034392134"
                        email="myemail@example.com"
                    />
                    <SkillCard
                        pic={jellyBg}
                        tel="09034392134"
                        email="myemail@example.com"
                    />
                    <SkillCard
                        pic={flowerBg}
                        tel="09034392134"
                        email="myemail@example.com"
                    />
                    <SkillCard
                        pic={jellyBg}
                        tel="09034392134"
                        email="myemail@example.com"
                    />
                    <SkillCard
                        pic={moonBg}
                        tel="09034392134"
                        email="myemail@example.com"
                    />
                </div>
            </div>
        </div>
    );
};

const bgColor = {
    color: "#04376A",
    background: "#ecf0f3",
    boxShadow: "13px 13px 20px #5555, -13px 13px 20px #cbced8",
    border: "none",
};

const SkillCard = (props) => {
    return (
        <div>
            <div className="col">
                <div
                    className="card card-cover h-100 overflow-hidden  rounded-4 shadow-lg skill-card"
                    style={bgColor}
                >
                    <div className="d-flex flex-column h-100 p-5 pb-3 text-shadow-1">
                        <h3 className="pt-5 mt-5 mb-4 display-6 lh-1 fw-bold">
                            Robotron
                        </h3>
                        <ul className="d-block list-unstyled mt-auto">
                            <li className="me-auto mb-1">
                                <img
                                    src={props.pic}
                                    alt="avatar"
                                    width="32"
                                    height="32"
                                    className="rounded-circle border border-white"
                                />
                            </li>
                            <div>
                                <li className="me-auto">📞 {props.tel}</li>
                            </div>
                            <div>
                                <li className="me-auto">✉️ {props.email}</li>
                            </div>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
