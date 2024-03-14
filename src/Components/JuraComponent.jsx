import React from "react";

const Jura = ({ data }) => {
  const jurosData = data.filter((item) => item.type === "fish");
  const jurosItems = jurosData.map((item) => <p key={item.id}>{item.name}</p>);
  return <div>{jurosItems}</div>;
};
export default Jura;
