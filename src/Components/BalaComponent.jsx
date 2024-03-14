import React from "react";
import data from "../data/data.js";

const Bala = () => {
  console.log(data);
  return (
    <div>
      <h2>Data Table</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Type</th>
            <th>Name</th>
            <th>Color</th>
          </tr>
        </thead>
        <tbody>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.type}</td>
              <td>{item.name}</td>
              <td>{item.color}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Bala;
