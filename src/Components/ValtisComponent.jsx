import React from "react";

const Valtis = ({ data }) => {
  const valtiesData = data.filter((item) => item.type === "man");
  const valtiesItems = valtiesData.map((item) => (
    <p key={item.id}>{item.name}</p>
  ));
  return <div>{valtiesItems}</div>;
};
export default Valtis;
