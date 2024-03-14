import React from "react";

const Sala = ({ data }) => {
  const salosData = data.filter((item) => item.type === "animal");
  const salosItems = salosData.map((item) => <p key={item.id}>{item.name}</p>);
  return <div>{salosItems}</div>;
};
export default Sala;
