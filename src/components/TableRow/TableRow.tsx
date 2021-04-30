import React from "react";
import Flag from "../Flag/Flag";
import {Country} from "../../types";

function TableRow({
  flag, 
  name, 
  population, 
  languages, 
  region
}: Country) {
  return (
    <tr>
      <td><Flag flagUrl={flag}/></td>
      <td>{name}</td>
      <td>{population}</td>
      <td>{languages.map(
        lang => lang.name).join(", ")}</td>
      <td>{region}</td>
    </tr>
  );
}

export default TableRow;
