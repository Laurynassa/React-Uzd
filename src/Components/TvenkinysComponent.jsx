import React from "react";
import Daiktas from "./DaiktasComponent.jsx";

const Tvenkinys = () => {
  return (
    <div>
      <h2>Tvenkinys</h2>
      <div>
        <h3>Proiniai</h3>
        <Daiktas id={2} />
        <Daiktas id={4} />
        <Daiktas id={6} />
        <Daiktas id={8} />
        <Daiktas id={10} />
      </div>
      <div>
        <h3>Neporiniai</h3>
        <Daiktas id={1} />
        <Daiktas id={3} />
        <Daiktas id={5} />
        <Daiktas id={7} />
        <Daiktas id={9} />
      </div>
    </div>
  );
};

export default Tvenkinys;
