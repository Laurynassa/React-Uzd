import React from "react";

const Gyventojai = ({ data, spalva }) => {
  const filteredData = data.filter((item) => item.color === spalva);

  if (filteredData.length > 0) {
    return (
      <div>
        <h3>{spalva} gyventojai:</h3>
        {filteredData.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
    );
  } else {
    return (
      <div>
        <h3>Visi gyventojai:</h3>
        {data.map((item) => (
          <p key={item.id}>{item.name}</p>
        ))}
      </div>
    );
  }
};
export default Gyventojai;
