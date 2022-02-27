import React from "react";

import Card from "../../components/card/index.jsx";

import CardsData from "./cards.js";

const Cards = () => {
  return (
    <div className="container d-flex">
      {CardsData.slice(0, 3).map((item) => {
        return <Card item={item} />
      })}
    </div>
  );
};

export default Cards;
