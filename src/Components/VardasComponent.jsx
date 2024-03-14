import React from "react";
import data from "../data/data.js";

const Vardas = () => {
  const sortedData = [...data].sort((a, b) => a.name.localeCompare(b.name));
  return (
    <div>
      <h3>Vardas</h3>
      {sortedData.map((item) => (
        <p key={item.id}>{item.name}</p>
      ))}
    </div>
  );
};
export default Vardas;
