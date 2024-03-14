import React from "react";
import data from "../data/data.js";

const Tipas = () => {
  const sortedData = [...data].sort((a, b) => a.type.localeCompare(b.type));
  return (
    <div>
      <h3>Tipas</h3>
      {sortedData.map((item) => (
        <p key={item.id}>{item.type}</p>
      ))}
    </div>
  );
};
export default Tipas;
