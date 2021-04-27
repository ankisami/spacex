import React from "react";

const Cards = ({ img, rocket, mission }) => {
    console.log("ROCKET", rocket)
    return (
        <div className="card">
            <img src={img} alt="logo" />
            <div className="cardText">
                <h3>{mission}</h3>
                <p>{rocket}</p>
            </div>
        </div>
    );
};

export default Cards;
