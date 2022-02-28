import React from "react";

import "./index.css";

const Card = ({ item }) => {
  return (
    <div className="cardsBox mt-5">
      <div className="cards">
        <div className="d-flex justify-content-start pt-4 ps-5 pb-5">
          <span>{item.id}</span>
        </div>
        <div className="cardTitle d-flex justify-content-center align-items-center text-center">
          {item.title.length > 6 ? (
            <h1>
              {item.title.substr(0, 4)} <br /> {item.title.substr(4, 20)}
            </h1>
          ) : (
            <h1>{item.title}</h1>
          )}
        </div>
      </div>
      <p className="text">{item.text}</p>
    </div>
  );
};

export default Card;
