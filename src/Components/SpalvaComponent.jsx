import React from "react";
import data from "../data/data";

const Spalva = () => {
  const sortedData = [...data].sort((a, b) => a.color.localeCompare(b.color));
  return (
    <div>
      <h3>Spalva</h3>
      {sortedData.map((item) => (
        <p key={item.id}>{item.color}</p>
      ))}
    </div>
  );
};
export default Spalva;
