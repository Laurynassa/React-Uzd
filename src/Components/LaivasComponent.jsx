import React from "react";
const Laivas = ({ data }) => {
  const laivoData = data.filter((item) => item.type === "car");
  const laivoItems = laivoData.map((item) => <p key={item.id}>{item.name}</p>);
  return <div>{laivoItems}</div>;
};
export default Laivas;
