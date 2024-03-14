import React from "react";
import Gyventojai from "./GyventojaiComponent";
import data from "../data/data";

const Pasaulis = () => {
  return (
    <div>
      <h2>Pasaulis</h2>
      <Gyventojai data={data} spalva="blue" />
      <Gyventojai data={data} spalva="red" />
      <Gyventojai data={data} spalva="green" />
      <Gyventojai data={data} spalva="yellow" />
    </div>
  );
};
export default Pasaulis;
