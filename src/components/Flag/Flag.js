import React from "react";
import "./flag.css";

function Flag({flagUrl}) {
  return (
    <img className="countryFlag" src={flagUrl} alt="flag" />
  );
}

export default Flag;
