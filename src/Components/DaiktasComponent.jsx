import React from "react";
import data from "../data/data";

const Daiktas = ({ id }) => {
  const item = data.find((item) => item.id === id);

  return (
    <div>
      <p>Name: {item.name}</p>
    </div>
  );
};

export default Daiktas;
